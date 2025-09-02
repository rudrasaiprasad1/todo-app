"use client";
import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import { HeadLinks } from "@/components/HeadLinks";
import "./globals.css";

// export const metadata = {
//   title: "Todo App",
//   description: `Created with 💖 by rsp `,
// };

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => unsub();
  }, []);

  return (
    <html lang="en">
      {/* <HeadLinks /> */}
      <body>
        <AuthContext.Provider value={{ user, logout: () => signOut(auth) }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <HeadLinks />
//       <body className="flex flex-col min-h-screen relative dark:bg-slate-500 bg-amber-50">
//         <main>
//           <div className="flex-1">{children}</div>
//         </main>
//       </body>
//     </html>
//   );
// }
