import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 md:py-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Dhruv Verma. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/dvermagit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-portfolio-lavender transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://twitter.com/Dhruvvermax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-portfolio-lavender transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-verma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-portfolio-lavender transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
