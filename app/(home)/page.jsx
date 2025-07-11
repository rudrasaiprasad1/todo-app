import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex-1 bg-amber-300">{children}</div>
    </>
  );
}
