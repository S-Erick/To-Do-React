import AddTask from './components/AddTask'
import Counter from './components/Counter'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import './App.css'
import { useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all')

  function handleAddTask(name) {
    const newTask = {
      id: crypto.randomUUID(),
      name,
      completed: false
    }
    setTasks([...tasks, newTask])
  }
  
  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleToggleTask(id){
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function getFilteredTasks(){
    if(filter === 'active'){
      return tasks.filter(task => !task.completed)
    }else if(filter === 'completed'){
      return tasks.filter(task => task.completed)
    }else{
      return tasks
    }
  }

  return (
    <div className='container'>
      <h1>To-Do</h1>
      <AddTask onAddTask={handleAddTask} />
      <Counter count={getFilteredTasks().length}/> 
      <FilterButtons 
        filter={filter} 
        onChangeFilter={setFilter} 
      />
      <TaskList 
        list={getFilteredTasks()} 
        onDeleteTask={handleDeleteTask} 
        onToggleTask={handleToggleTask} 
      />
    </div>
  )
}