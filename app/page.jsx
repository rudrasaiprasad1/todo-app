import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { useAuth } from "@/components/AuthProvider";

export default function HomePage() {
  const { user } = useAuth();

  if (!user) {
    return <p className="text-center mt-10">Please log in to see your todos.</p>;
  }

  return (
    <main className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      <AddTodo />
      <TodoList />
    </main>
  );
}

// import { useEffect, useState } from "react";
// import { db } from "@/firebase";
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/components/AuthProvider";

// export default function Home() {
//   const { user, logout } = useAuth();
//   // const router = useRouter();
//   // const [todos, setTodos] = useState([]);
//   // const [input, setInput] = useState("");

//   if (!user) {
//     return (
//       <p className="text-center mt-10">Please log in to see your todos.</p>
//     );
//   }

//   // useEffect(() => {
//   //   if (!user) {
//   //     router.push("/login");
//   //     return;
//   //   }

//   //   const q = collection(db, "todos");
//   //   const unsubscribe = onSnapshot(q, (snapshot) => {
//   //     setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//   //   });

//   //   return () => unsubscribe();
//   // }, [user]);

//   // const addTodo = async () => {
//   //   if (!input) return;
//   //   await addDoc(collection(db, "todos"), {
//   //     text: input,
//   //     completed: false,
//   //     userId: user.uid,
//   //   });
//   //   setInput("");
//   // };

//   // const toggleComplete = async (id, completed) => {
//   //   await updateDoc(doc(db, "todos", id), { completed: !completed });
//   // };

//   // const deleteTodo = async (id) => {
//   //   await deleteDoc(doc(db, "todos", id));
//   // };

//   // if (!user) return null;

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <div className="flex justify-between mb-4">
//         <h1 className="text-xl font-bold">Todo App</h1>
//         <button
//           onClick={logout}
//           className="bg-red-500 px-3 py-1 text-white rounded"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="flex gap-2 mb-4">
//         <input
//           className="border p-2 flex-1"
//           placeholder="New todo..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           onClick={addTodo}
//           className="bg-blue-600 px-3 py-2 text-white rounded"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="space-y-2">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex justify-between items-center p-2 border rounded"
//           >
//             <span
//               onClick={() => toggleComplete(todo.id, todo.completed)}
//               className={`cursor-pointer ${
//                 todo.completed ? "line-through text-gray-400" : ""
//               }`}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               className="text-red-500"
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default function HomePage({ Component, pageProps }) {
// //   return (
// //     <>
// //       <Component {...pageProps} />
// //     </>
// //   );
// // }

// /* <Header />
//   <div className="flex min-h-screen items-center justify-center ">
//     <h1 className="text-4xl font-bold text-indigo-600">
//       Welcome to Todo App 🚀
//     </h1>
//   </div>
//   <div className="flex-1 bg-amber-300">{children}</div>
//   <Footer /> */
