"use client";

import { Cpu, Lightbulb, Layers, Utensils } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative large text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground opacity-[0.02] select-none pointer-events-none">
        LOGIC
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: The Narrative */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-chart-2 font-mono text-xs uppercase tracking-[0.2em]">
              // My Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
              PRINCIPLES & <br /> PATTERNS
              <span className="text-chart-2">.</span>
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              I am an{" "}
              <span className="text-foreground font-semibold">
                Informatics Engineering student
              </span>{" "}
              who refuses to be boxed into a single niche.
            </p>
            <p>
              I thrive on{" "}
              <span className="text-foreground font-semibold">
                learning diverse fields
              </span>
              —from CI/CD pipelines to Computer Vision. I am fascinated by the
              unique logic, flow, and first principles that govern each domain.
              I find that once you strip away the syntax, the underlying systems
              are often elegant and surprisingly simple.
            </p>
            <p>
              Currently, I am applying this multidisciplinary mindset to my
              thesis, bridging{" "}
              <span className="text-foreground font-semibold">
                Database Systems and Machine Learning
              </span>{" "}
              to create smarter, faster data solutions.
            </p>
          </div>
        </div>

        {/* Right: The "Stats" / Interest Grid */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard
            icon={<Cpu className="w-6 h-6 text-chart-2 bg-card/50" />}
            title="Engineering"
            desc="Building robust full-stack applications."
          />
          <InfoCard
            icon={<Lightbulb className="w-6 h-6 text-chart-2 bg-card/50" />}
            title="Curiosity"
            desc="Deconstructing the logic behind every tool."
          />
          <InfoCard
            icon={<Layers className="w-6 h-6 text-chart-2 bg-card/50" />}
            title="Versatility"
            desc="Adapting to Web, Mobile, AI, and Systems."
          />
          <InfoCard
            icon={<Utensils className="w-6 h-6 text-chart-2 bg-card/50" />}
            title="Foodie"
            desc="Fueled by Indomie and debugging sessions."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-card border border-border rounded-xl hover:border-chart-2/50 transition-colors group">
      <div className="mb-4 p-3 bg-secondary/30 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-foreground font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </div>
  );
}
