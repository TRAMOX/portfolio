import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  number: string;
  label: string;
  description: string;
  delay?: number;
}

function StatItem({ number, label, description, delay = 0 }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setDisplayNumber(number);
      }, delay * 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView, number, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay * 0.2 }}
      className="text-center group cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="space-y-4 p-6 rounded-2xl hover:bg-academic-blue/5 hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <span className="text-6xl lg:text-8xl font-bold gradient-text block transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
            {displayNumber}
          </span>
          <div className="absolute -inset-4 bg-academic-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-academic-blue transition-colors duration-300">
            {label}
          </h3>
          <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      number: "35+",
      label: "Research Publications",
      description: "Peer-reviewed articles in leading international journals"
    },
    {
      number: "20+",
      label: "Years of Experience",
      description: "In advanced materials and nanoelectronics research"
    },
    {
      number: "5+",
      label: "Patents Filed",
      description: "Innovative solutions in additive manufacturing"
    },
    {
      number: "500+",
      label: "Citations",
      description: "Impact in the scientific community"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-academic-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Research Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving innovation through cutting-edge research in advanced manufacturing 
            and next-generation electronic systems
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              delay={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaboration or learning more about my research?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-academic-blue text-white rounded-full hover:bg-academic-blue/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
