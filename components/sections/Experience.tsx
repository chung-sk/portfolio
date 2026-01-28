"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Deloitte",
    role: "Global Technology Senior Cloud Engineer",
    duration: "Jun 2024 - Present",
    description: [
      "Lead cloud platform operations for enterprise-scale infrastructure",
      "Implement AIOps practices and AI-driven IT operations solutions",
      "Design and maintain multi-cloud environments across AWS, Azure, and Oracle Cloud",
      "Drive automation initiatives to improve operational efficiency and reliability",
    ],
    technologies: ["AWS", "Azure", "Oracle Cloud", "AIOps", "ITIL 4", "Automation"],
  },
  {
    company: "Maxis Business",
    role: "AWS Cloud Support Specialist",
    duration: "Dec 2021 - Jun 2024",
    description: [
      "Provided expert AWS cloud support for enterprise customers",
      "Managed and optimized cloud infrastructure for high-availability services",
      "Implemented monitoring and alerting solutions for proactive incident management",
      "Collaborated with cross-functional teams on cloud migration projects",
    ],
    technologies: ["AWS", "EC2", "S3", "RDS", "CloudWatch", "Lambda"],
  },
  {
    company: "SKIDATA",
    role: "System Engineer | Project Engineer",
    duration: "Mar 2019 - Dec 2021",
    description: [
      "Engineered and deployed access control and parking management systems",
      "Led technical implementation for client projects across Malaysia",
      "Provided system integration and troubleshooting for enterprise installations",
      "Managed project lifecycle from design to deployment and support",
    ],
    technologies: ["System Integration", "Network Engineering", "Project Management", "SQL"],
  },
  {
    company: "Canaan Communication",
    role: "Network Operations Center Engineer",
    duration: "Oct 2017 - Mar 2019",
    description: [
      "Monitored and maintained network infrastructure for enterprise clients",
      "Performed incident response and root cause analysis for network issues",
      "Implemented network monitoring solutions and automated alerting systems",
      "Documented operational procedures and maintained network documentation",
    ],
    technologies: ["Network Monitoring", "Incident Management", "Cisco", "Network Protocols"],
  },
];

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experiences[selectedIndex];

  return (
    <section id="experience" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-xl">03.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              Experience <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Company List */}
          <FadeIn delay={0.2} direction="right">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    px-4 py-3 text-left font-mono text-sm whitespace-nowrap
                    border-l-2 transition-all duration-300
                    ${
                      selectedIndex === index
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-dark/30 text-muted hover:bg-primary/5 hover:text-foreground"
                    }
                  `}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Experience Details */}
          <FadeIn delay={0.3} direction="left">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Role & Duration */}
              <div>
                <h3 className="text-xl md:text-2xl font-mono text-foreground mb-1">
                  {selectedExperience.role}
                  <span className="text-primary"> @ {selectedExperience.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted-dark">
                  {selectedExperience.duration}
                </p>
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {selectedExperience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex gap-3 text-muted"
                  >
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Technologies */}
              <div>
                <p className="font-mono text-sm text-muted-dark mb-3">
                  // Technologies used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      className="px-3 py-1 font-mono text-xs terminal-border bg-background hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
