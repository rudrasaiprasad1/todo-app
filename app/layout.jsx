import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <HeadLinks /> */}
      <body>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}

// import { HeadLinks } from "@/components/HeadLinks";

// export const metadata = {
//   title: "Todo App",
//   description: `Created with 💖 by rsp `,
// };
