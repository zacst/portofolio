"use client";

import { Calendar, Briefcase, GraduationCap, Users } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "June 2025 - Present",
      title: "DevOps Intern",
      company: "PT. Fata Organa Solusi",
      description:
        "Executed a comprehensive migration of CI/CD infrastructure from Azure DevOps to Jenkins. Authored declarative pipelines for .NET, Python, and TypeScript services and developed custom Jenkins Shared Libraries in Groovy to standardize deployment stages.",
      type: "work", 
    },
    {
      year: "Oct 2024 - Dec 2024",
      title: "Computational Thinking Assistant",
      company: "Comlabs-USDI ITB",
      description:
        "Supervised undergraduate lab sessions focused on algorithmic thinking and structured problem solving. Evaluated coding assignments and provided technical feedback to improve students' logical reasoning.",
      type: "work",
    },
    {
      year: "Aug 2023 - Present",
      title: "Youth Division & Empowerment Leader",
      company: "Local Church (JKIS)",
      description:
        "Leading youth empowerment initiatives and community-building activities. Established and mentored a study group to assist high school students in preparing for the SNBT national university entrance exam.",
      type: "vol",
    },
    {
      year: "Aug 2022 - Present",
      title: "Informatics Engineering Student",
      company: "Institut Teknologi Bandung",
      description:
        "Focusing on Software Engineering, AI, and DBMS. Active member of Google Developer Student Club (GDSC). Coursework includes Data Structures, Algorithms, and Web/Mobile Development.",
      type: "edu",
    },
  ];

  return (
    <section id="experience" className="relative w-full py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-2">
          <p className="text-chart-2 font-mono text-xs uppercase tracking-[0.2em]">
            // My Path
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
            TRAJECTORY<span className="text-chart-2">.</span>
          </h2>
        </div>

        {/* The Timeline */}
        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* The Dot on the Line */}
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-border group-hover:bg-chart-2 group-hover:scale-150 transition-all duration-300 ring-4 ring-background" />

              {/* The Content Card */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-chart-2/30 transition-all duration-300">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-chart-2 px-2 py-1 bg-chart-2/10 rounded">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    {/* Icon Logic based on type */}
                    {item.type === "edu" && <GraduationCap className="w-4 h-4" />}
                    {item.type === "work" && <Briefcase className="w-4 h-4" />}
                    {item.type === "vol" && <Users className="w-4 h-4" />}
                    
                    {item.company}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}