import React from "react";
import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";


type TodoListProps = {
todos: Todo[];
onToggle: (id: number) => void;
onDelete: (id: number) => void;
};


export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
if (todos.length === 0) {

return (
    <p style={{marginTop: 20, fontStyle: "italic", color:"gray"}}>
        No tasks yet — add your first task!
    </p>
);
}


return (
<ul>
{todos.map((t) => (
<TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
))}
</ul>
);
}