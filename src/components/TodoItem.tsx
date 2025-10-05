import React from "react";
import type { Todo } from "../types/Todo";

type TodoItemProps = {
    todo: Todo;
    onToggle:(id: number) => void;
    onDelete: (id: number) => void;
};

export default function TodoItem ({todo, onToggle, onDelete} : TodoItemProps) {

    return (
        <li style={{display: "flex", gap: 8, alignItems:"center", textAlign: "center", marginLeft: 180}}>
            <input type="checkbox" 
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            aria-label={`Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`}
            />

            <span style={{textDecoration: todo.completed ? "line-through": "none"}}>
                {todo.text}
            </span>

            <button style={{marginBottom: 2}} onClick={() => onDelete(todo.id)} aria-label={`Delete ${todo.text}`}>
            Delete    
            </button>
        </li>
    );
}
