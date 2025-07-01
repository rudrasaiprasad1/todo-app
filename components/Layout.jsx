import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const { children } = props;
  return (
    <div className="flex flex-col  min-h-screen relative bg-slate-900 ">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
