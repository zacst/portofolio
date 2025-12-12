"use client"

import Link from "next/link"
import Image from "next/image"
import { FileDown } from "lucide-react"

export default function Navigation() {
  const linkStyle = "text-gray-500 hover:text-white transition-all duration-300 hover:scale-110 text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"

  // This function handles the smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault() // Stop the immediate jump
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-slate-900/80 backdrop-blur-sm">
      
      {/* Logo Section */}
      <Link href="/" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 group-hover:-translate-y-1 transition-transform duration-300">
          <Image 
            src="/logo/logo.png" 
            alt="ZS"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" 
          />
        </div>
        <span className="text-white font-bold text-lg tracking-widest group-hover:text-sky-400 transition-colors">
          zacst
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        
        <a href="#about" onClick={(e) => handleScroll(e, "#about")} className={linkStyle}>
          About
        </a>

        <a href="#experience" onClick={(e) => handleScroll(e, "#experience")} className={linkStyle}>
          Experience
        </a>

        <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className={linkStyle}>
          Projects
        </a>

        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className={linkStyle}>
          Contact
        </a>

        {/* Resume is an external file, so it stays a standard link */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${linkStyle} border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 hover:border-sky-400/50`}
        >
          <span>Resume</span>
          <FileDown className="w-4 h-4 text-sky-400" />
        </a>

      </div>
    </nav>
  )
}