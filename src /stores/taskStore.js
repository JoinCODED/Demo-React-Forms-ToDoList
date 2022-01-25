import { makeAutoObservable } from "mobx";

import taskData from "../tasksData";
class TaskStore {
  tasks = taskData;
  constructor() {
    makeAutoObservable(this);
  }

  addTask = (task) => {
    task.id = this.tasks[this.tasks.length - 1].id + 1;
    this.tasks.push(task);
  };
}

const taskStore = new TaskStore();
export default taskStore;
