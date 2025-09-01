import { HeadLinks } from "@/components/HeadLinks";
import "../globals.css";

export const metadata = {
  title: "Todo App",
  description: `Created with 💖 by rsp `,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadLinks />
      <body className="flex flex-col min-h-screen relative dark:bg-slate-500 bg-amber-50">
        <main>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
