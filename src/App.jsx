import AddTask from './components/AddTask'
import Counter from './components/Counter'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import './App.css'

export default function App() {
  return (
    <div>
      <h1>To-Do</h1>
      <AddTask />
      <Counter /> 
      <FilterButtons />
      <TaskList />
    </div>
  )
}

