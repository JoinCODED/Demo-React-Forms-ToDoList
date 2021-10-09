import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AddTaskForm from './Components/AddTaskForm';
import TasksList from './Components/TasksList';
import tasksData from './tasksData';

function App() {
  const [tasks, setTasks] = useState(tasksData);


  return (
    <>
      <div class="row">
        {/* To do: add a form */}
        <AddTaskForm />
      </div>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
