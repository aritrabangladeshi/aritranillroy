import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

import certAiAgents from "@/assets/cert-ai-agents-google.png";
import certDigitalLiteracy from "@/assets/cert-digital-literacy.jpg";
import certDcb100km from "@/assets/cert-dcb-100km.jpg";
import certGccMtb from "@/assets/cert-gcc-mtb-race.jpg";
import certWorldBicycleDay from "@/assets/cert-world-bicycle-day.jpg";

const certificates = [
  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Kaggle & Google",
    date: "December 18, 2025",
    image: certAiAgents,
    category: "AI & Technology",
  },
  {
    title: "Digital Literacy Course",
    issuer: "Digital Literacy Center, BCC",
    date: "April 28, 2024",
    image: certDigitalLiteracy,
    category: "Technology",
  },
  {
    title: "DCB 100 KM Challenge VR",
    issuer: "Dui Chakay Bangladesh",
    date: "July 31, 2024",
    image: certDcb100km,
    category: "Cycling",
  },
  {
    title: "GCC Mass Start MTB Race 01-2024",
    issuer: "Gopalganj Cycling Community",
    date: "October 25, 2024",
    image: certGccMtb,
    category: "Cycling",
  },
  {
    title: "World Bicycle Day Cycling Challenge 2025",
    issuer: "Dui Chakay Bangladesh",
    date: "June 2025",
    image: certWorldBicycleDay,
    category: "Cycling",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award size={16} />
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of certifications showcasing my continuous learning journey in technology and passion for cycling.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground/70">{cert.date}</p>
              </div>

              {/* Hover Overlay for View */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                  <ExternalLink size={16} />
                  View Certificate
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
