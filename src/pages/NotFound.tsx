
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-gradient mb-6">404</h1>
        <p className="text-xl mb-8">Oops! The page you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="py-2.5 px-6 bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-black font-medium rounded-lg transition-colors duration-200"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
