"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={login}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
}

// "use client"; // Needed if you want to use state/hooks

// import { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login attempt:", { email, password });
//     // Here you would call your API or authentication logic
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center ">
//       <div className="w-full max-w-md rounded-2xl  p-8 ">
//         <h2 className="mb-6 text-center text-2xl font-bold uppercase ">
//           LOGIN
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium ">Email</label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium ">Password</label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700"
//           >
//             <i className="fa-solid fa-lock mr-2"></i> Sign In
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="/register" className="text-indigo-600 hover:underline">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
