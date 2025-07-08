import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <Header />
          <div className="flex-1 bg-amber-300">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
