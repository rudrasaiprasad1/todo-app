import "../globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex-1 bg-amber-300">{children}</div>
      <Footer />
    </>
  );
}
