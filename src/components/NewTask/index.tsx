import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./styles.module.css";

type NewTaskProps = {
  onHandleAddNewTask: (title: string) => void;
};
export function NewTask({ onHandleAddNewTask }: NewTaskProps) {
  const [taskContent, setTaskContent] = useState<string>("");

  function handleAddNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onHandleAddNewTask(taskContent);
    setTaskContent("");
  }

  function handleNewTitleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");

    setTaskContent(e.target.value);
  }

  function handleNewTaskInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Por favor, preencha o campo");
  }

  const inputIsEmpty = taskContent.length === 0;
  return (
    <form onSubmit={handleAddNewTask} className={styles.container}>
      <input
        name="title"
        type="text"
        onChange={handleNewTitleChange}
        value={taskContent}
        placeholder="Add a new task"
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button disabled={inputIsEmpty} type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
