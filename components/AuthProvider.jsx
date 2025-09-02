"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
