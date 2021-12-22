import React, { useState } from "react";

function AddTaskForm({ createTask }) {
  const [task, setTask] = useState();

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(task);
    setTask({ title: "", priority: "" });
  };
  return (
    <div class="col-md-12">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter a task"
          name="title"
          onChange={handleChange}
        />
        <select name="priority" onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
