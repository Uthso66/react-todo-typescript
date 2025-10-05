import type { Todo } from "../types/Todo";

type TodoItemProps = {
    todo: Todo;
    onToggle:(id: number) => void;
    onDelete: (id: number) => void;
};

export default function TodoItem ({todo, onToggle, onDelete} : TodoItemProps) {

    return (
        <li className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow-sm">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="h-5 w-5 accent-blue-600"
    />
    <span className={`${todo.completed ? "line-through text-red-500" : ""}`}>
      {todo.text}
    </span>
  </div>

  <button
    onClick={() => onDelete(todo.id)}
    className="text-red-500 hover:text-red-700 font-semibold"
  >
    Delete
  </button>
</li>

    );
}
