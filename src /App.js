import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

//components
import TasksList from "./Components/TasksList";
import Modal from "./Components/modals/TaskModal";

//bootstrap
import { Button } from "react-bootstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal isOpen={isOpen} handleClose={handleClose} />
      <TasksList />
    </>
  );
}

export default App;
