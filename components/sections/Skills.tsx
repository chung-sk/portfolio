"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

const skills: Skill[] = [
  // Cloud Platforms
  { name: "AWS", level: 5, category: "Cloud" },
  { name: "Azure", level: 5, category: "Cloud" },
  { name: "Oracle Cloud", level: 4, category: "Cloud" },
  { name: "GCP", level: 4, category: "Cloud" },
  { name: "Multi-Cloud", level: 4, category: "Cloud" },

  // DevOps & Automation
  { name: "AIOps", level: 5, category: "DevOps" },
  { name: "ITIL 4", level: 5, category: "DevOps" },
  { name: "Infrastructure as Code", level: 4, category: "DevOps" },
  { name: "CI/CD", level: 4, category: "DevOps" },
  { name: "Terraform", level: 4, category: "DevOps" },
  { name: "Docker", level: 4, category: "DevOps" },
  { name: "Kubernetes", level: 3, category: "DevOps" },

  // Monitoring & Operations
  { name: "CloudWatch", level: 5, category: "Monitoring" },
  { name: "Azure Monitor", level: 4, category: "Monitoring" },
  { name: "Prometheus", level: 3, category: "Monitoring" },
  { name: "Grafana", level: 3, category: "Monitoring" },
  { name: "Zabbix", level: 4, category: "Monitoring" },

  // Networking & Systems
  { name: "Network Engineering", level: 5, category: "Systems" },
  { name: "Linux", level: 4, category: "Systems" },
  { name: "Windows Server", level: 4, category: "Systems" },
  { name: "System Integration", level: 5, category: "Systems" },

  // Scripting & Languages
  { name: "Python", level: 4, category: "Languages" },
  { name: "Bash", level: 4, category: "Languages" },
  { name: "PowerShell", level: 4, category: "Languages" },
  { name: "SQL", level: 4, category: "Languages" },
  { name: "Node.js", level: 4, category: "Languages" },
  { name: "Flutter", level: 3, category: "Languages" },

  // Vibe Coding
  { name: "Supabase", level: 4, category: "Vibe Coding" },
  { name: "Vercel", level: 5, category: "Vibe Coding" },
  { name: "PostgreSQL", level: 4, category: "Vibe Coding" },
  { name: "Stripe", level: 3, category: "Vibe Coding" },
  { name: "Cursor", level: 5, category: "Vibe Coding" },
  { name: "Claude Code Copilot", level: 5, category: "Vibe Coding" },
  { name: "Figma", level: 4, category: "Vibe Coding" },
  { name: "MCP", level: 4, category: "Vibe Coding" },
  { name: "Skills", level: 4, category: "Vibe Coding" },
];

const categories = ["All", "Cloud", "DevOps", "Monitoring", "Systems", "Languages", "Vibe Coding"];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-xl">02.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              Skills <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "terminal-border bg-primary/10 text-primary"
                    : "border border-muted-dark/30 text-muted hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer
          key={selectedCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <StaggerItem key={`${skill.name}-${index}`}>
              <SkillCard skill={skill} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Card */}
      <div className="terminal-border bg-background p-4 h-full flex flex-col justify-between hover:bg-primary/5 transition-all duration-300 relative overflow-hidden">
        {/* Skill Name */}
        <div className="relative z-10">
          <p className="font-mono text-sm md:text-base text-foreground mb-3">
            {skill.name}
          </p>

          {/* Level Indicator */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: isHovered ? 1 : i < skill.level ? 1 : 0.3,
                }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className={`h-1 flex-1 origin-left ${
                  i < skill.level ? "bg-primary" : "bg-muted-dark/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Tag */}
        <div className="relative z-10 mt-3">
          <span className="font-mono text-xs text-muted-dark">
            // {skill.category.toLowerCase()}
          </span>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-0 h-0"
          animate={{
            borderLeft: isHovered ? "20px solid transparent" : "0px solid transparent",
            borderTop: isHovered
              ? "20px solid rgba(62, 207, 142, 0.2)"
              : "0px solid transparent",
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
