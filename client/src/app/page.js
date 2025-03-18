"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar"; // Using absolute imports
import Editor from "../components/Editor"; // Using absolute imports

export default function Home() {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const updateTodo = (updatedTodo) => {
    console.log("Updated Todo:", updatedTodo);
  };

  const deleteTodo = (id) => {
    console.log("Delete Todo:", id);
  };

  return (
    <main className="flex h-screen">
      <Sidebar selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
      {selectedTodo && (
        <Editor
          selectedTodo={selectedTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </main>
  );
}
