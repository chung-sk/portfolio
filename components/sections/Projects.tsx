"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    technologies: ["React", "Tailwind", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for managing portfolio content with MDX support and image optimization.",
    technologies: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging app with group chats, file sharing, and end-to-end encryption.",
    technologies: ["React", "Firebase", "WebRTC"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Code Snippet Manager",
    description:
      "Developer tool for organizing and sharing code snippets with syntax highlighting and tagging.",
    technologies: ["TypeScript", "Prisma", "Next.js"],
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-xl">05.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              Projects <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <div className="terminal-border bg-background p-6 h-full flex flex-col hover:bg-primary/5 transition-all duration-300 relative overflow-hidden">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2 py-1 font-mono text-xs bg-primary/20 text-primary border border-primary/30">
              FEATURED
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-mono text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-sm text-muted hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-sm text-muted hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </a>
          )}
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
