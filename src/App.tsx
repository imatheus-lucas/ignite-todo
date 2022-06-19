import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { NewTask } from "./components/NewTask";

export type TaskProps = {
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const addNewTask = (title: string) => {
    setTasks((prev) => {
      if (prev.find((task) => task.title === title)) {
        alert("Tarefa já existe");
        return prev;
      }
      return [...prev, { title, completed: false }];
    });
  };

  const toggleTask = (title: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.title === title ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (title: string) => {
    setTasks((prev) => prev.filter((task) => task.title !== title));
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask onHandleAddNewTask={addNewTask} />
        <ListTasks
          onDeleteTask={deleteTask}
          tasks={tasks}
          onToggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
