import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gradient">
          Dhruv Verma
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-portfolio-lavender",
                pathname === item.path
                  ? "text-portfolio-lavender"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col pt-20 pb-6 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-lg font-medium py-2 transition-colors hover:text-portfolio-lavender",
                  pathname === item.path
                    ? "text-portfolio-lavender"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <p className="text-xs text-foreground/40 text-center">
              &copy; {new Date().getFullYear()} Dhruv Verma
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
console.log("hello");
export default Navbar;
