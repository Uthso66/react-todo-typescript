import { useState } from "react";
import type { Todo } from "./types/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

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

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-900 rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Simple To-Do App</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <TodoInput onAdd={addTodo} />
        <hr className="my-4 border-gray-300" />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <TodoFooter todos={todos} onClearCompleted={clearCompleted}/>
      </div>
    </div>
  );
}
