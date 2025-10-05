import type { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 mb-2 hover:bg-gray-200 transition">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="cursor-pointer"
        />
        <span
          className={`${
            todo.completed
              ? "line-through text-gray-500"
              : "text-gray-800 font-medium"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        ✕
      </button>
    </li>
  );
}
