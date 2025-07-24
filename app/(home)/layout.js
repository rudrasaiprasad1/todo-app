import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col  min-h-screen relative bg-slate-900">
        <main>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
