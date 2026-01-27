"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-8"
        >
          {/* Terminal Prompt */}
          <div className="inline-block font-mono text-sm md:text-base text-muted mb-4">
            <span className="text-primary">➜</span>{" "}
            <span className="text-muted-dark">~/portfolio</span>{" "}
            <span className="text-foreground">cat introduction.txt</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground">{"<"}</span>
            <span className="glow-text text-primary">Your Name</span>
            <span className="text-foreground">{" />"}</span>
          </h1>

          {/* Typing Animation */}
          <div className="font-mono text-xl md:text-3xl lg:text-4xl text-muted h-12 md:h-16 flex items-center justify-center">
            <span className="text-muted-dark">//</span>
            <span className="ml-2">{text}</span>
            <span
              className={`ml-1 text-primary transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-muted leading-relaxed"
          >
            Building elegant solutions to complex problems.
            <br />
            Specializing in modern web technologies and scalable architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 font-mono text-sm md:text-base terminal-border bg-background hover:bg-primary/10 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-primary group-hover:text-foreground transition-colors duration-300">
                View Projects
              </span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 0 }}
              />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 font-mono text-sm md:text-base text-muted hover:text-foreground transition-colors duration-300 relative"
            >
              Get In Touch
              <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xs text-muted">scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 font-mono text-xs text-primary opacity-50">
        [ONLINE]
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-muted-dark opacity-50">
        v1.0.0
      </div>
    </section>
  );
}
