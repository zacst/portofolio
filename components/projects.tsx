"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "SECURE CHAT",
      category: "Cybersecurity",
      description:
        "E2E encrypted messaging app with self-destructing messages.",
      tech: ["React", "Socket.io", "WebCrypto"],
      image: "/projects/secure-chat.png",
      links: { demo: "#", github: "https://github.com/zacst/if4020-tubes-1" },
    },
    {
      id: "02",
      title: "PURRYTIFY",
      category: "Mobile Development",
      description:
        "A native Android music streaming application inspired by Spotify. Features secure JWT authentication with background token rotation (WorkManager), a persistent global media player, and real-time network sensing. Built with modern Android architecture.",
      tech: ["Kotlin", "Jetpack Compose", "Retrofit", "WorkManager"],
      image: "/projects/purrytify.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/IF3210-Purrytify",
      },
    },
    {
      id: "03",
      title: "UNIFIED VISION AI SYSTEM",
      category: "Computer Vision & AI",
      description:
        "A multi-functional MATLAB GUI integrating Machine Learning (SVM) and Deep Learning (CNN) for fruit classification, robust License Plate Recognition (OCR) capable of handling skewed/noisy inputs, and real-time Human Tracking using YOLO.",
      tech: [
        "MATLAB",
        "Image Processing Toolbox",
        "Deep Learning Toolbox",
        "SVM",
        "YOLO",
        "OCR",
      ],
      image: "/projects/vision-system.png",
      links: { demo: "#", github: "https://github.com/zacst/if4073-tugas-4" },
    },
    {
      id: "04",
      title: "LINKINPURRY",
      category: "Full Stack Web",
      description:
        "A professional networking platform inspired by LinkedIn. Features real-time WebSocket messaging with typing indicators, graph-based connection recommendations (2nd & 3rd degree), and push notifications. Built on a high-performance Hono backend with Prisma & PostgreSQL, fully containerized via Docker.",
      tech: ["React", "Hono.js", "PostgreSQL", "Docker", "WebSocket", "Redis"],
      image: "/projects/linkinpurry.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/if-3310-linkinpurry",
      },
    },
    {
      id: "05",
      title: "DEEP LEARNING FROM SCRATCH",
      category: "Machine Learning",
      description:
        "A comparative analysis of CNN, RNN, and LSTM architectures implemented from first principles (using NumPy) to study performance impact. Specifically focused on the mathematical modeling, forward/backward propagation, and optimization of Convolutional Neural Networks (CNN) for image classification.",
      tech: ["Python", "NumPy", "TensorFlow", "Pandas", "Matplotlib"],
      image: "/projects/cnn.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/if3270-tubes-2",
      },
    },
    {
      id: "06",
      title: "WIKIRACE SOLVER",
      category: "Algorithmic Search",
      description: "A high-performance pathfinding engine designed to traverse the massive Wikipedia graph. Implements Breadth-First Search (BFS) and Iterative Deepening Search (IDS) in Go to find the shortest path between two articles. Features a React frontend and Docker containerization, optimizing for sub-minute search execution.",
      tech: ["Go (Golang)", "React", "Docker", "Graph Theory", "BFS/IDS"],
      image: "/projects/wikirace.png", 
      links: { 
        demo: "#", 
        github: "https://github.com/zacst/Tubes2_GasTubes" 
      },
    },
    {
      id: "07",
      title: "NEURAL SEGMENTATION",
      category: "Computer Vision & AI",
      description:
        "A dual-approach image analysis suite. Includes a Python/PyQt5 Deep Learning application utilizing DeepLabV3+ (ResNet50) for 183-class semantic segmentation, and a MATLAB GUI for comparing classical edge detection algorithms (Canny, Sobel, LoG).",
      tech: ["PyTorch", "PyQt5", "MATLAB", "ResNet50"],
      image: "/projects/segmentation.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/if4073-tugas-3",
      },
    },
    {
      id: "08",
      title: "CAFETERIA SIMULATION",
      category: "Systems Modeling",
      description:
        "A Discrete Event Simulation (DES) engine built in C using Simlib. Models complex queuing networks with dynamic routing, batch arrivals, and resource contention to analyze cafeteria throughput. Features statistical data collection for wait times, queue lengths, and server utilization to optimize staffing strategies.",
      tech: ["C Language", "Simlib", "Queuing Theory", "Statistical Analysis"],
      image: "/projects/simulation.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/if4021-tubes1",
      },
    },
    {
      id: "09",
      title: "AUDIO STEGANOGRAPHY",
      category: "Cryptography",
      description:
        "A secure communication tool that conceals encrypted messages within audio carrier files (MP3/WAV). Implements Multiple-LSB substitution (1-4 bits) combined with an Extended Vigenère cipher for dual-layer security. Includes PSNR analysis to quantify signal degradation and ensure undetectability.",
      tech: ["Python", "FFmpeg", "Tkinter", "Bit Manipulation"],
      image: "/projects/stego.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/multiple-lsb-audio-steganography",
      },
    },
    {
      id: "10",
      title: "TIME SERIES FORECASTING",
      category: "Deep Learning",
      description:
        "A comparative study of Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) architectures for long-term temporal prediction. Features a robust preprocessing pipeline including sliding window sequencing, MinMax normalization, and linear interpolation, culminating in a comprehensive error analysis (MSE/RMSE) of model performance.",
      tech: ["TensorFlow", "Keras", "Python", "Scikit-Learn", "Pandas"],
      image: "/projects/timeseries.png",
      links: {
        demo: "#",
        github: "https://github.com/zacst/if3270-praktikum-3",
      },
    },
  ];

  return (
    <section id="projects" className="relative w-full py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <p className="text-chart-2 font-mono text-xs uppercase tracking-[0.2em]">
              // Archive
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
              SELECTED WORKS
            </h2>
          </div>
          {/* Optional: GitHub Link for all repos */}
          <Link
            href="https://github.com/zacst"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-mono"
          >
            View all repositories <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-chart-2/50 transition-colors duration-300"
            >
              {/* Image Section (Top Half) */}
              <div className="relative h-64 overflow-hidden bg-secondary/20">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="backdrop-blur-md text-foreground text-[10px] font-mono uppercase px-3 py-1 rounded-full border border-border">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section (Bottom Half) */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-chart-2 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack (Pushed to bottom) */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-chart-2 px-2 py-1 bg-chart-2/10 rounded border border-chart-2/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
