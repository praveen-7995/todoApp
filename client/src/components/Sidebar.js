'use client';

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const todos = [
  { id: 1, title: "New Additions", description: "To stay representative...", date: "July 7, 2023" },
  { id: 2, title: "Refactor Code", description: "Improve modularity...", date: "July 8, 2023" },
];

export default function Sidebar({ selectedTodo, setSelectedTodo }) {
  return (
    <aside className="w-1/3 bg-gray-100 p-4 border-r">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">TODO</h1>
        <button className="bg-black text-white px-4 py-2 rounded">TODO</button>
      </div>
      <div className="relative mb-4">
        <MagnifyingGlassIcon className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
        <input type="text" placeholder="Search" className="pl-8 w-full border rounded py-2" />
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 cursor-pointer rounded ${selectedTodo?.id === todo.id ? "border border-black" : "hover:bg-gray-200"}`}
            onClick={() => setSelectedTodo(todo)}
          >
            <h2 className="font-semibold">{todo.title}</h2>
            <p className="text-sm text-gray-500">{todo.description}</p>
            <p className="text-xs text-gray-400">{todo.date}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}