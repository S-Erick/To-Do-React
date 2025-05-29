export default function Task({ name, id, onDelete }) {
  return (
    <div className="task">
      <input type="checkbox" />
      <span>{name}</span>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  );
}