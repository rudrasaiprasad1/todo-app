import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center align-middle">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
