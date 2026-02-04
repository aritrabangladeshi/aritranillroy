import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Shield, Terminal, Database, Lock } from "lucide-react";

const skills = [
  {
    name: "Python",
    level: 95,
    icon: Terminal,
    description: "Expert in automation, scripting & data processing",
  },
  {
    name: "Web Development",
    level: 85,
    icon: Globe,
    description: "Full-stack development with modern frameworks",
  },
  {
    name: "Cyber Security",
    level: 80,
    icon: Shield,
    description: "Security audits, penetration testing & vulnerability assessment",
  },
  {
    name: "Programming",
    level: 90,
    icon: Code2,
    description: "Clean code, algorithms & problem solving",
  },
  {
    name: "Databases",
    level: 75,
    icon: Database,
    description: "SQL, NoSQL & data management",
  },
  {
    name: "Network Security",
    level: 78,
    icon: Lock,
    description: "Firewall configuration & network protection",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Specialized in Python development, web technologies, and cybersecurity solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>

                {/* Skill Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full skill-bar rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
