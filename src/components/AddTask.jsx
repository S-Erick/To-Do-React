import { useState } from "react"

export default function AddTask({onAddTask}){
    const [task, setTask] = useState('')

   return (
    <div>
        <input 
            type="text" 
            placeholder="Add a new Task..." 
            value={task}
            onChange={(e) => setTask(e.target.value)} 
        />
        <button 
            onClick={() => {
                onAddTask(task)
                setTask('')
            }}
        >Add Task</button>
    </div>
   ) 
}