import React, { useState } from "react";
import type { Todo } from "./types/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App () {
  const [todos, setTodos] = useState<Todo[]> ([]);

  const addTodo = (text : string) => {
    const newTodo : Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id : number) => {
    setTodos((prev) => 
    prev.map((t) => (t.id === id ? {...t, completed: !t.completed}: t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{padding:20, textAlign: "center"}}>
      <h1 style={{marginBottom: 20}}>Simple To-Do App</h1>
      <TodoInput onAdd={addTodo}/>
      <hr style={{margin:"20px 0"}} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
