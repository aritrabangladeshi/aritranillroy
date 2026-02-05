import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Facebook, Twitter } from "lucide-react";
import profileImage from "@/assets/profile-aritra.jpg";

// Custom Threads icon
const ThreadsIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 16c-2.5 0-4-1.5-4-4s1.5-4 4-4c3 0 4.5 2 4.5 4.5c0 1.93-1 3.5-2.5 3.5s-2-.93-2-2c0-.75.25-1.5.75-2" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

// Custom Strava icon
const StravaIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
  </svg>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Programmer • Duathlete
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Hello, This is{" "}
              <span className="gradient-text">Aritra Nill Roy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Turning ideas into code and performance into victories. Python Expert, Web Developer & Cyber Security Enthusiast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all duration-200 hover-glow text-center"
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-200 text-center"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/aritranillroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/aritranillroy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://x.com/aritraoffical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.threads.com/@aritranillroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <ThreadsIcon size={20} />
                </a>
                <a
                  href="https://github.com/aritrabangladeshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.strava.com/athletes/141791699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <StravaIcon size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" />
              
              {/* Rotating border */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 animate-glow-pulse">
                <img
                  src={profileImage}
                  alt="Aritra Nill Roy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-primary" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
