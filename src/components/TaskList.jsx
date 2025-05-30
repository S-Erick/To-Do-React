import Task from "./Task"

export default function TaskList({ list, onDeleteTask, onToggleTask }){
    return (
        <div>
            {list.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    onDelete={onDeleteTask}
                    onToggle={onToggleTask}
                />
            ))}
        </div>
    )
}   