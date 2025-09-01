import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginPage from "../Login/page";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center ">
        <h1 className="text-4xl font-bold text-indigo-600">
          Welcome to Todo App 🚀
        </h1>
      </div>
      <div className="flex-1 bg-amber-300">{children}</div>
      <Footer />
    </>
  );
}
