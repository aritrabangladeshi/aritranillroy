import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies. From landing pages to complex web applications, I create responsive, fast, and user-friendly solutions tailored to your needs.",
    features: ["Responsive Design", "SEO Optimized", "Modern UI/UX"],
  },
  {
    icon: Bot,
    title: "Python Automation",
    description: "Streamline your workflows with custom Python scripts and automation tools. Save time and reduce errors with intelligent automation solutions.",
    features: ["Task Automation", "Data Processing", "API Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your digital assets with comprehensive security assessments. I identify vulnerabilities and implement robust security measures to keep your data safe.",
    features: ["Security Audits", "Vulnerability Testing", "Risk Assessment"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 relative">
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
              What I Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Professional services to help you achieve your digital goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card h-full p-8 rounded-2xl hover-glow transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
