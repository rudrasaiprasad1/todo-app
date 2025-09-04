"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "./AuthProvider";
import { db } from "@/firebase";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const q = collection(db, "users", user.uid, "todos");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  const toggleTodo = async (id, completed) => {
    await updateDoc(doc(db, "users", user.uid, "todos", id), {
      completed: !completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "users", user.uid, "todos", id));
  };

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span
            onClick={() => toggleTodo(todo.id, todo.completed)}
            className={
              todo.completed ? "line-through cursor-pointer" : "cursor-pointer"
            }
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
