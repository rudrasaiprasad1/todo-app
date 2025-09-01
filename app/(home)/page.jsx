import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex-1 bg-amber-300">{children}</div>
      <Footer />
    </>
  );
}
