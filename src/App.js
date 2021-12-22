import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import TasksList from "./Components/TasksList";
import tasksData from "./tasksData";
import AddTaskForm from "./Components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // to do : delete a task

  return (
    <>
      <div class="row">
        <AddTaskForm createTask={createTask} />
      </div>
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
