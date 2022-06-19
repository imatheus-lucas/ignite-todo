import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css";

type TaskProps = {
  onToggleTask: (title: string) => void;
  onDeleteTask: (title: string) => void;
  data: {
    title: string;
    completed: boolean;
  };
};

export function Task({
  data: { title, completed },
  onDeleteTask,
  onToggleTask,
}: TaskProps) {
  const [checked, setChecked] = useState<boolean>(completed);

  function handleCheckedChange(e: ChangeEvent<HTMLInputElement>) {
    onToggleTask(title);
    setChecked(e.target.checked);
  }

  function handleDeleteTask() {
    onDeleteTask(title);
  }
  return (
    <div className={styles.container}>
      <input checked={checked} onChange={handleCheckedChange} type="checkbox" />
      <span className={completed ? styles.task_completed : ""}>{title}</span>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
