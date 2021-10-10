# ToDo List


## What is this demo?

A todo list app that let you create/delete tasks and set a priority.

## What are the objectives?

object destructing  ,array destructing, dynamic keys 


## Steps

### Create:
1. create a component called AddTaskForm, and a state called task
2. div with `class="col-md-12"` and from with `className="task-form"`
3. add input for task , with name = title 
4. select with options, with name = priority 
5. button 
7. add handle change for each input
8. add handle submit for submit 
9. in hangle change add `setTask({ ...task, [event.target.name]: event.target.value });`
10. in handle submit `event.preventDefault();` 
11. go to app to create a function to add task 
12. push new task to the array `setTasks([...tasks, newTask])`


### Delete :
1. in task Item pass id to the function u pass as a prope
2. create a temp array to filter out the deleted task
3. `let tempTasks = tasks.filter(task => task.id !== id) setTasks(tempTasks)`

### Update :
1. in task Item pass task to the function u pass as a prope
2. in app,set tasks  `tasks.map((task) => task.id === updatedtask.id ? updatedtask : task`

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
