import tasksData from "../tasksData";

class TaskStore {
  tasks = tasksData;
}

const taskStore = new TaskStore();
export default taskStore;
