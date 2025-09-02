import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-4 md:px-6 pt-20 pb-10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-portfolio-lavender/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-portfolio-mint/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div
              className={`w-full md:w-1/2 space-y-6 text-center md:text-left transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block py-1 px-3 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-portfolio-lavender">
                Full Stack Developer
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Dhruv Verma</span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/80">
                Building scalable, reliable, and secure software with great user
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link
                  to="/portfolio"
                  className="py-3 px-6 bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-lavender/25 transform hover:-translate-y-1"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="py-3 px-6 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-all duration-300 border border-white/5 backdrop-blur-sm hover:border-white/20"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div
              className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-lavender to-portfolio-mint opacity-30 rounded-full blur-3xl"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-lavender/20 shadow-xl relative z-10">
                  <img
                    src="https://i.postimg.cc/MH4Gbj8v/1753699502062.jpg"
                    alt="Dhruv Verma"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-portfolio-mint/30 backdrop-blur-md z-0"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-16 h-16 rounded-full bg-portfolio-lavender/30 backdrop-blur-md z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Scroll Down Indicator */}
      <div
        className={`flex justify-center pb-8 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#featured-projects"
          className="flex flex-col items-center text-foreground/60 hover:text-portfolio-lavender transition-colors group"
        >
          <span className="text-sm mb-2 transition-transform group-hover:-translate-y-1 duration-300">
            Scroll Down
          </span>
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-portfolio-lavender/30 transition-all duration-300">
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </a>
      </div>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 px-4 md:px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="Here are some of my recent projects that showcase my skills and expertise."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.postimg.cc/pLPrSSNC/Screenshot-2025-08-29-at-12-09-00-AM.png"
                  alt="Dropify Project"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agentive</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  An AI agent powered tool that analyzes YouTube videos,
                  generates transcripts, and suggests titles and thumbnails.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors"
                  >
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
                  Modern portfolio website built with React, Tailwind CSS, and
                  Framer Motion.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors"
                  >
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
