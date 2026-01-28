import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-xl">01.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              About <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-4 text-muted">
              <p className="leading-relaxed">
                Hello! I'm <span className="text-primary font-mono">Chung Seong Kah</span>, a
                Global Technology Senior Cloud Engineer at Deloitte. My journey in technology
                started in network operations and evolved into cloud infrastructure and AIOps,
                driven by a passion for building resilient, scalable systems.
              </p>

              <p className="leading-relaxed">
                With over 7 years of experience across network operations, system engineering,
                and cloud platforms, I specialize in AWS and Azure cloud solutions, infrastructure
                automation, and implementing AIOps practices. Currently based in Kuala Lumpur, I work
                on enterprise-scale cloud operations at Deloitte.
              </p>

              <p className="leading-relaxed">
                My career journey took me from Network Operations at Canaan Communication & Technologies,
                through system engineering at SKIDATA, to AWS Cloud Support at Maxis Business, and now
                to my current role at Deloitte. Along the way, I've earned certifications in AWS, Azure,
                Oracle Cloud, AIOps, and ITIL 4.
              </p>

              <div className="pt-6">
                <p className="font-mono text-sm text-muted-dark mb-3">
                  // Current focus:
                </p>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Cloud platform operations & automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>AIOps implementation & AI in IT operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Multi-cloud infrastructure (AWS, Azure, Oracle)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>ITIL 4 best practices & service management</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative group">
              {/* Terminal Window Frame */}
              <div className="terminal-border bg-background-secondary p-4 rounded-lg">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-primary/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-primary/70" />
                  </div>
                  <span className="font-mono text-xs text-muted-dark ml-4">
                    profile.jpg
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden rounded border border-primary/20 bg-background">
                  {/* Placeholder - Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-dark/10">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👤</div>
                      <p className="font-mono text-sm text-muted">
                        Add your photo here
                      </p>
                      <p className="font-mono text-xs text-muted-dark mt-2">
                        public/images/profile.jpg
                      </p>
                    </div>
                  </div>

                  {/* Uncomment when you have an image */}
                  {/* <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  /> */}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-lg -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
