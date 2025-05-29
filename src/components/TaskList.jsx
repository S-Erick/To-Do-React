import Task from "./Task"

export default function TaskList({ list, onDeleteTask }){
    return (
        <div>
            {list.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    onDelete={onDeleteTask}
                />
            ))}
        </div>
    )
}