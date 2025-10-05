import { useEffect, useState, useRef } from "react";
import type { Todo } from "./types/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        const parsed = JSON.parse(savedTodos);
        setTodos(parsed);
      } catch {
        localStorage.removeItem("todos");
        setTodos([]);
      }
    }
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          🧠 Simple To-Do App
        </h1>

        <TodoInput onAdd={addTodo} />

        <hr className="my-4 border-gray-300" />

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <p className="text-sm text-gray-500 mt-4 text-center">
          {todos.filter((t) => t.completed).length} / {todos.length} completed
        </p>

        <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
      </div>
    </div>
  );
}
