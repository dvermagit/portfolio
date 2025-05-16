
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-portfolio-peach/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-portfolio-beige/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's discuss how we can work together"
          align="center" 
          className={`mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-8 h-full hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-foreground/80 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-6">
                <div className={`flex items-start transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="mr-4 p-3 bg-portfolio-lavender/10 rounded-lg">
                    <Mail size={20} className="text-portfolio-lavender" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:dhruvv3401@gmail.com" 
                      className="text-sm text-foreground/80 hover:text-portfolio-lavender transition-colors"
                    >
                      dhruvv3401@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="mr-4 p-3 bg-portfolio-mint/10 rounded-lg">
                    <Twitter size={20} className="text-portfolio-mint" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Twitter (X)</h4>
                    <a 
                      href="https://twitter.com/Dhruvvermax" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-foreground/80 hover:text-portfolio-mint transition-colors"
                    >
                      @Dhruvvermax
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="mr-4 p-3 bg-portfolio-beige/10 rounded-lg">
                    <Github size={20} className="text-portfolio-beige" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/dvermagit" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-foreground/80 hover:text-portfolio-beige transition-colors"
                    >
                      @dvermagit
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="mr-4 p-3 bg-portfolio-peach/10 rounded-lg">
                    <Linkedin size={20} className="text-portfolio-peach" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/dhruv-verma" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-foreground/80 hover:text-portfolio-peach transition-colors"
                    >
                      Dhruv Verma
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-8 h-full hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
