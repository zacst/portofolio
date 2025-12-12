"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("INITIALIZING...");

  // 1. Configuration
  const roles = [
    "INFORMATICS ENGINEERING",
    "APPLICATION DEVELOPER",
    "CYBERSECURITY ENTHUSIAST",
    "MACHINE LEARNING ASPIRANT",
  ];

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const roleIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scramble = () => {
      let pos = 0;
      const targetText = roles[roleIndexRef.current];

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        const scrambled = targetText
          .split("")
          .map((char, index) => {
            if (index < pos) {
              return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayText(scrambled);

        pos += 1 / 2;

        if (pos >= targetText.length) {
          clearInterval(intervalRef.current!);
          setTimeout(() => {
            roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
            scramble();
          }, 2000);
        }
      }, 50);
    };

    scramble();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        
        {/* 1. The Command Prompt Style */}
        <p className="text-zinc-500 text-xs md:text-sm font-mono tracking-widest uppercase mb-2">
          <span className="text-sky-500">root@zacst:~$</span> whoami
        </p>

        {/* 2. Name */}
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mix-blend-difference select-none">
          ZACHARY SAMUEL
        </h1>

        {/* The Scramble Container */}
        <div className="h-12 flex items-center justify-center">
          <p
            className="
            font-mono text-lg md:text-xl uppercase tracking-widest
            text-zinc-400 bg-zinc-900/50 px-4 py-1 rounded border border-zinc-800
          "
          >
            {/* 3. Updated Colors to Sky/Cyan */}
            <span className="text-sky-500 mr-2">{">"}</span>
            {displayText}
            <span className="animate-pulse ml-1 text-sky-500">_</span>
          </p>
        </div>

        {/* Command Hint */}
        <div className="hidden md:flex items-center justify-center gap-2 w-fit mx-auto mt-8 text-xs text-zinc-500 border border-zinc-800 px-3 py-1.5 rounded-full bg-zinc-900/30">
          <span className="text-[10px] tracking-wide">PRESS</span>
          <kbd className="bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded font-mono text-[10px] text-zinc-300 shadow-sm">
            Ctrl
          </kbd>
          <span className="text-[10px]">+</span>
          <kbd className="bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded font-mono text-[10px] text-zinc-300 shadow-sm">
            K
          </kbd>
        </div>
      </div>
    </section>
  );
}