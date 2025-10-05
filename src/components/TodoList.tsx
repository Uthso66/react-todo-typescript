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
    <p className="text-gray-500 italic text-center mt-3">
      No tasks yet — add your first task!
    </p>
  );
}

return (
  <ul className="space-y-3">
    {todos.map((t) => (
      <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);

}