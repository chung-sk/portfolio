"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
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

  // Group skills by category for display
  const groupedSkills = categories
    .filter((cat) => cat !== "All")
    .map((category) => ({
      category,
      skills: filteredSkills.filter((s) => s.category === category),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <section id="skills" className="py-8 md:py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-primary text-xl">02.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              Skills <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 font-mono text-xs transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary/20 text-primary border border-primary/50"
                    : "border border-muted-dark/30 text-muted hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Terminal-style Skills List */}
        <FadeIn delay={0.3}>
          <div className="font-mono">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 sm:gap-4 pb-2 mb-4 border-b border-primary/20 text-xs text-muted-dark">
              <span className="flex-1 min-w-0">PROCESS</span>
              <span className="w-24 text-right hidden sm:block">CATEGORY</span>
              <span className="w-14 sm:w-20 text-right shrink-0">LEVEL</span>
            </div>

            {/* Skills List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {selectedCategory === "All" ? (
                  // Grouped view
                  groupedSkills.map((group, groupIndex) => (
                    <div key={group.category}>
                      {/* Category Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-xs">
                          [{group.category.toUpperCase()}]
                        </span>
                        <div className="flex-1 h-[1px] bg-primary/10" />
                      </div>

                      {/* Skills in Category */}
                      <div className="space-y-1">
                        {group.skills.map((skill, index) => (
                          <SkillRow
                            key={skill.name}
                            skill={skill}
                            index={groupIndex * 10 + index}
                            showCategory={false}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  // Single category view
                  <div className="space-y-1">
                    {filteredSkills.map((skill, index) => (
                      <SkillRow
                        key={skill.name}
                        skill={skill}
                        index={index}
                        showCategory={true}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Terminal Footer */}
            <div className="mt-6 pt-4 border-t border-primary/20 text-xs text-muted-dark">
              <span className="text-primary">{filteredSkills.length}</span> skills loaded
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SkillRow({
  skill,
  index,
  showCategory,
}: {
  skill: Skill;
  index: number;
  showCategory: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate level indicator: ■■■■□
  const levelIndicator = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`${
        i < skill.level
          ? "text-primary"
          : "text-muted-dark/30"
      }`}
    >
      ■
    </span>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group flex items-center gap-2 sm:gap-4 py-2 px-3 -mx-3 rounded
        transition-all duration-200
        ${isHovered ? "bg-primary/5" : ""}
      `}
    >
      {/* Process Indicator */}
      <span
        className={`
          text-xs transition-colors duration-200 shrink-0
          ${isHovered ? "text-primary" : "text-muted-dark"}
        `}
      >
        ▸
      </span>

      {/* Skill Name */}
      <span
        className={`
          flex-1 min-w-0 text-sm transition-colors duration-200 truncate
          ${isHovered ? "text-primary" : "text-foreground"}
        `}
      >
        {skill.name}
      </span>

      {/* Category Badge (conditional) */}
      {showCategory && (
        <span className="w-24 text-right text-xs text-muted-dark hidden sm:block shrink-0">
          {skill.category}
        </span>
      )}

      {/* Level Indicator */}
      <div className="w-14 sm:w-20 text-right text-xs flex justify-end gap-[1px] shrink-0">
        {levelIndicator}
      </div>
    </motion.div>
  );
}
