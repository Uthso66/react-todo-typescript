import React, { useState, useRef, useEffect } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  
  const [text, setText] = useState("");

  
  const inputRef = useRef<HTMLInputElement>(null);

  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();

    if (!trimmed) return;

    
    onAdd(trimmed);

    
    setText("");

    
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center p-4 bg-gray-900 rounded-xl shadow-md">
      <input
        ref={inputRef} 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;