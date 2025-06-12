import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
