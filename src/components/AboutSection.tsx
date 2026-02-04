import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, BadgeCheck, Briefcase, Bike, PersonStanding } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Prize - National Programming Contest 2024",
    description: "ICT Division & Bangladesh Computer Council",
  },
  {
    icon: BadgeCheck,
    title: "Digital Verified Badge",
    description: "Certified by Google",
  },
  {
    icon: Briefcase,
    title: "6 Months Experience",
    description: "Programmer at Bangladesh Computer Council",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative">
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
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Know Me <span className="gradient-text">Better</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Bio Section */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Aritra Nill Roy</span>, a passionate programmer with deep expertise in Python, Web Development, and Cyber Security. Currently studying at <span className="text-primary">Faridpur Zilla School</span>, I've been on an exciting journey of learning and creating.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm a dedicated <span className="text-primary">Duathlete</span> specializing in cycling and running. This dual passion for technology and athletics has taught me discipline, persistence, and the importance of continuous improvement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is to leverage technology to solve real-world problems while maintaining peak physical performance. Whether it's building automation tools or crossing finish lines, I approach every challenge with the same determination.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                  <GraduationCap className="text-primary" size={20} />
                  <span className="text-sm">Faridpur Zilla School</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                  <Bike className="text-primary" size={20} />
                  <span className="text-sm">Cyclist</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                  <PersonStanding className="text-primary" size={20} />
                  <span className="text-sm">Runner</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Key <span className="gradient-text">Achievements</span>
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-5 rounded-xl hover-glow transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <achievement.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
