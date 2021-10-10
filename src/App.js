import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import TasksList from "./Components/TasksList";
import tasksData from "./tasksData";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  // to do : create a task
  // to do : delete a task

  return (
    <>
      <div class="row">{/* To do: add a form */}</div>
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
