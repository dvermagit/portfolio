
import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-portfolio-mint/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-portfolio-lavender/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me a little better"
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className={`w-full md:w-1/3 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="sticky top-32">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 border-2 border-portfolio-lavender/20 shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-lavender/20 to-portfolio-mint/20 opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80"
                  alt="Dhruv Verma"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4 glass-card p-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground/60">Email</h3>
                  <p className="text-sm">dhruvv3401@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/60">GitHub</h3>
                  <a 
                    href="https://github.com/dvermagit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-portfolio-lavender transition-colors"
                  >
                    @dvermagit
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/60">X (Twitter)</h3>
                  <a 
                    href="https://twitter.com/Dhruvvermax" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-portfolio-lavender transition-colors"
                  >
                    @Dhruvvermax
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-semibold mb-4">Biography</h2>
              <div className="space-y-4 text-foreground/80 glass-card p-6">
                <p>
                  I'm a passionate software developer specializing in building scalable, reliable,
                  and secure applications with a strong emphasis on delivering exceptional user experiences.
                </p>
                <p>
                  My journey in software development began in 2023, and since then, I've been constantly
                  learning and improving my skills. I'm particularly excited about software scalability,
                  reliability, and security, always dedicated to delivering great user experiences.
                </p>
                <p>
                  As a developer, I enjoy working on challenging problems and finding elegant solutions.
                  I believe in writing clean, maintainable code and using the right tools for the job.
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="glass-card p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">B.Tech in Artificial Intelligence and Machine Learning</h3>
                    <p className="text-sm text-foreground/70">Dr. Akhilesh Das Gupta Institute of Professional Studies</p>
                  </div>
                  <p className="text-sm font-medium bg-portfolio-mint/20 text-portfolio-mint px-2 py-0.5 rounded">2021-2025</p>
                </div>
                <p className="text-sm text-foreground/80">
                  Studying the fundamentals of AI and ML while exploring software development on the side.
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-semibold mb-4">Journey</h2>
              <div className="glass-card p-6 space-y-4">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-portfolio-lavender flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                    <div className="h-full w-0.5 bg-portfolio-lavender/20 ml-2 my-1"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Started Software Development Journey</h3>
                    <p className="text-sm text-foreground/70">2023</p>
                    <p className="text-sm text-foreground/80 mt-1">
                      Began learning web development fundamentals and built my first projects.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-portfolio-mint flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                    <div className="h-full w-0.5 bg-portfolio-mint/20 ml-2 my-1"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Mastered the MERN Stack</h3>
                    <p className="text-sm text-foreground/70">2024</p>
                    <p className="text-sm text-foreground/80 mt-1">
                      Developed expertise in MongoDB, Express, React, and Node.js.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-portfolio-peach flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Building Full-Stack Applications</h3>
                    <p className="text-sm text-foreground/70">Present</p>
                    <p className="text-sm text-foreground/80 mt-1">
                      Currently focused on building scalable and reliable full-stack applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
