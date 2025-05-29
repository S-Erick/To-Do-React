import AddTask from './components/AddTask'
import Counter from './components/Counter'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import './App.css'
import { useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState([]);

  function handleAddTask(name) {
  const newTask = {
    id: crypto.randomUUID(),
    name,
    completed: false
  };
  setTasks([...tasks, newTask]);
}

function handleDeleteTask(id) {
  setTasks(tasks.filter(task => task.id !== id));
}

  return (
    <div className='container'>
      <h1>To-Do</h1>
      <AddTask onAddTask={handleAddTask} />
      <Counter /> 
      <FilterButtons />
      <TaskList list={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  )
}