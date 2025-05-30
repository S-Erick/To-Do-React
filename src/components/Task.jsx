export default function Task({ name, id, onDelete, completed, onToggle }) {
  return (
    <div className="task">
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? 'completed' : ''} >{name}</span>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  );
}