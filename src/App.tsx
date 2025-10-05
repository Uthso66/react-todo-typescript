import { useState } from "react";
import type { Todo } from "./types/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Simple To-Do App</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <TodoInput onAdd={addTodo} />
        <hr className="my-4 border-gray-300" />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
