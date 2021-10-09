import React from 'react';


export default function TaskItem(props) {
  const task = props.task;
  return (
    <li>
      <p className="todo-text">
        {task.title}
        <span class="chip info">{task.priority}</span>
        <p
          className="remove"
          onClick={() => {
            //to do : delete task
          }}
        >
          Delete
        </p>

      </p>
    </li>
  );
}
