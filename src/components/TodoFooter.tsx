// src/components/TodoFooter.tsx

import React from "react";
import type { Todo } from "../types/Todo";

interface TodoFooterProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ todos, onClearCompleted }) => {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  if (total === 0) return null; // hide footer if no todos

  return (
    <div className="flex justify-between items-center mt-4 p-2 bg-gray-800 rounded-md text-white">
      <span>
        {completed} / {total} completed
      </span>
      {completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md transition"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;