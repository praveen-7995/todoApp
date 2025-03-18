'use client';

import { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Editor({ selectedTodo, updateTodo, deleteTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title || "");
      setDescription(selectedTodo.description || "");
    }
  }, [selectedTodo]);

  return (
    <section className="w-2/3 p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => updateTodo({ ...selectedTodo, title })}
          className="text-xl font-bold border-b w-full focus:outline-none"
        />
        <TrashIcon 
          onClick={() => deleteTodo(selectedTodo?.id)} 
          className="h-6 w-6 cursor-pointer text-red-500" 
        />
      </div>
      <div 
        className="border p-3 min-h-[200px]" 
        contentEditable 
        onBlur={(e) => updateTodo({ ...selectedTodo, description: e.target.innerText })}
        suppressContentEditableWarning={true}
      >
        {description}
      </div>
    </section>
  );
}
