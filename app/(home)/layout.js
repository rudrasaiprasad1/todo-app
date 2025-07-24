import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Todo App",
  description: `Created with 💖 by rsp `,
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body className="flex flex-col min-h-screen relative bg-slate-900">
        <main>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
