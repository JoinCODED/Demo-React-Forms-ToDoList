import React from 'react';

export default function AddTaskForm(props) {



  return (
    <div class="col-md-12">
      <form className="task-form" >
        <input
          type="text"
          placeholder="What will you do today?"
          name="title"
          required
        />

        <select
          className="form-select select"
          name="priority"

        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
        <button  >
          ADD
        </button>


      </form>
    </div>
  );
}
