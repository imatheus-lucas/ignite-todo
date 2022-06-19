import { Clipboard } from "phosphor-react";
import { TaskProps } from "../../App";
import { Task } from "../Task";
import styles from "./styles.module.css";

type ListTasksProps = {
  tasks: TaskProps[];
  onToggleTask: (title: string) => void;
  onDeleteTask: (title: string) => void;
};

export function ListTasks({
  tasks,
  onDeleteTask,
  onToggleTask,
}: ListTasksProps) {
  const countTasks = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.completed).length;
  return (
    <div className={styles.container}>
      <header className={styles.info}>
        <strong>
          Tarefas criadas
          <span>{countTasks}</span>
        </strong>
        <strong>
          Concluídas
          <span>
            {tasks.length === 0 ? 0 : `${tasksCompleted} de ${countTasks}`}
          </span>
        </strong>
      </header>

      {tasks.length ? (
        tasks.map((task) => (
          <Task
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            key={task.title}
            data={task}
          />
        ))
      ) : (
        <div className={styles.list_not_found}>
          <Clipboard weight="thin" size={65} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
