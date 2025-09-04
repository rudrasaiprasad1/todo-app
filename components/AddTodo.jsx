"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "./AuthProvider";
import { db } from "@/firebase";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addDoc(collection(db, "users", user.uid, "todos"), {
      text,
      completed: false,
      createdAt: Date.now(),
    });

    setText("");
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
