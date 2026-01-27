"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 grid-background">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="terminal-border bg-background p-8 md:p-12"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
            </div>
            <span className="font-mono text-xs text-muted-dark ml-4">
              error.log
            </span>
          </div>

          {/* Error Content */}
          <div className="space-y-6">
            {/* Error Code */}
            <div className="font-mono">
              <span className="text-red-500">Error</span>
              <span className="text-muted-dark">:</span>
              <span className="text-primary ml-2">404</span>
            </div>

            {/* Main Message */}
            <div className="space-y-2">
              <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
                Page Not Found
              </h1>
              <p className="font-mono text-lg text-muted">
                {"// The requested resource could not be located"}
              </p>
            </div>

            {/* Stack Trace Style Info */}
            <div className="bg-background-secondary p-4 rounded border border-primary/10 font-mono text-sm space-y-1">
              <div className="text-muted-dark">
                <span className="text-red-500">at</span> Navigator.
                <span className="text-primary">findPage</span>
                <span className="text-muted">{"("}</span>
                <span className="text-foreground">
                  {typeof window !== "undefined" ? window.location.pathname : "/unknown"}
                </span>
                <span className="text-muted">{")"}</span>
              </div>
              <div className="text-muted-dark">
                <span className="text-red-500">at</span> Router.
                <span className="text-primary">resolve</span>
                <span className="text-muted">{"(routes.ts:42:10)"}</span>
              </div>
              <div className="text-muted-dark">
                <span className="text-red-500">at</span> Server.
                <span className="text-primary">handleRequest</span>
                <span className="text-muted">{"(server.ts:128:5)"}</span>
              </div>
            </div>

            {/* Suggestions */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-muted-dark">
                {"// Possible solutions:"}
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>Check the URL for typos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>Return to the homepage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>Contact support if the issue persists</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/"
                className="group relative px-6 py-3 font-mono text-sm terminal-border bg-background hover:bg-primary/10 transition-all duration-300 overflow-hidden text-center"
              >
                <span className="relative z-10 text-primary group-hover:text-foreground transition-colors duration-300">
                  Go Home
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
              </Link>

              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 font-mono text-sm text-muted hover:text-foreground transition-colors duration-300 relative text-center"
              >
                Go Back
                <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Terminal Cursor */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <div className="font-mono text-sm text-muted-dark flex items-center gap-2">
              <span className="text-primary">➜</span>
              <span>~/portfolio</span>
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
