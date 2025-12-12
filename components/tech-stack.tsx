"use client";

import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Globe,
  Shield,
  Container,
  GitBranch,
  Smartphone,
  Layers,
  Server,
} from "lucide-react";

export default function TechStack() {
  const stack = [
    // Web & Backend
    { name: "React / Next.js", icon: Globe },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "PHP", icon: Code2 },

    // Mobile
    { name: "Kotlin", icon: Smartphone },

    // Systems & AI
    { name: "C++", icon: Terminal },
    { name: "Python / TensorFlow", icon: Cpu },
    { name: "MATLAB", icon: Layers },

    // DevOps & Database
    { name: "Docker", icon: Container },
    { name: "Jenkins", icon: GitBranch },
    { name: "PostgreSQL / MySQL", icon: Database },
    { name: "Cybersecurity", icon: Shield },
  ];

  // We duplicate the array to create a seamless loop
  const loop = [...stack, ...stack];

  return (
    <section className="w-full py-12 overflow-hidden relative">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l z-10" />

      <div className="flex w-full">
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap">
          {loop.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground group"
            >
              <tech.icon className="w-6 h-6 group-hover:text-chart-2 transition-colors" />
              <span className="text-lg font-mono font-medium uppercase tracking-widest group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite; /* Slowed down slightly for readability */
        }
      `}</style>
    </section>
  );
}
