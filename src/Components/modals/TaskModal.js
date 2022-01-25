import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import taskStore from "../../stores/taskStore";

export default function TaskModal({ isOpen, handleClose }) {
  const [task, setTask] = useState({
    title: "",
    priority: "",
  });
  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.addTask(task);
    handleClose();
  };
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your task"
              onChange={handleChange}
              name="title"
            />
          </Form.Group>

          <Form.Label>priority</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="priority"
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
