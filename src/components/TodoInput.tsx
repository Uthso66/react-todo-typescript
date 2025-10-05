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
        <form onSubmit={handleSubmit} aria-label="Add todo form">
            <label htmlFor="new-todo" style={{marginRight: 10}}> Add task</label>
            <input 
            id="new-todo"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g Buy Milk"
            autoComplete="off"
            />
            <button type="submit" style={{marginLeft: 10}}>Add</button>
        </form>
    );
}
