import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <HeadLinks /> */}
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

// import { HeadLinks } from "@/components/HeadLinks";

// export const metadata = {
//   title: "Todo App",
//   description: `Created with 💖 by rsp `,
// };
