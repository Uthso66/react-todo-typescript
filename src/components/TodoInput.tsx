import React, { useState } from "react";

type TodoInputProps = {
    onAdd: (text : string) => void;
};

export default function TodoInput({ onAdd } : TodoInputProps) {
    const [value, setValue] = useState<string> ("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = value.trim();
        if (trimmed === "") return;

        onAdd(trimmed);

        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
  <label htmlFor="new-todo" className="text-gray-700 font-medium">
    Add task
  </label>
  <input
    id="new-todo"
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="e.g. Buy Milk"
    autoComplete="off"
    className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Add
  </button>
</form>

    );
}
