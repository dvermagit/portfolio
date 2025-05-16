
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-4 md:px-6 pt-20 pb-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Dhruv Verma</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80">
                Building scalable, reliable, and secure software with great user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link
                  to="/portfolio"
                  className="py-3 px-6 bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-black font-medium rounded-lg transition-colors duration-200"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="py-3 px-6 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-lavender/20 animate-scale-in shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80"
                  alt="Dhruv Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center pb-8">
        <a
          href="#featured-projects"
          className="flex flex-col items-center text-foreground/60 hover:text-portfolio-lavender transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 px-4 md:px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="Dropify Project"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dropify</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  A file storage application built with Next.js, Clerk, Neon, Drizzle, and HeroUI.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Project"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Modern portfolio website built with React, Tailwind CSS, and Framer Motion.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="py-2.5 px-5 border border-white/20 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
