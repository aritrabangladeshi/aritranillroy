import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FileCode, Banknote } from "lucide-react";

const projects = [
  {
    title: "Prize Bond Checker Automation",
    description: "Automated system for Bangladesh Bank to verify and check prize bonds efficiently. This Python-based solution streamlines the verification process, saving time and reducing manual errors.",
    tags: ["Python", "Automation", "Banking"],
    icon: Banknote,
    highlights: [
      "Automated prize bond verification",
      "Batch processing capability",
      "Error-free result generation",
      "Time-saving solution",
    ],
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions that make a difference.
            </p>
          </div>

          {/* Featured Project */}
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 sm:p-8 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <project.icon className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      <FileCode size={18} />
                      Request Demo
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                    >
                      <ExternalLink size={18} />
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Coming */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              More projects coming soon. <a href="#contact" className="text-primary hover:underline">Get in touch</a> to discuss your project!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
