export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-primary/20 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side */}
          <div className="font-mono text-sm text-muted-dark">
            <span className="text-primary">const</span> year ={" "}
            <span className="text-foreground">{currentYear}</span>;
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted">
            <span>Built with</span>
            <svg
              className="w-4 h-4 text-primary animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>using</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors duration-300"
            >
              Next.js
            </a>
          </div>

          {/* Right Side */}
          <div className="font-mono text-sm text-muted-dark">
            <span className="text-muted">// v1.0.0</span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="font-mono text-xs text-muted-dark">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
