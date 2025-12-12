"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"
import Footer from "@/components/footer"
import TechStack from "@/components/tech-stack"
import About from "@/components/about"
import Experience from "@/components/experience"
import CommandMenu from "@/components/command-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      
      {/* --- 1. The Command Palette --- */}
      {/* Hidden until triggered by Ctrl+K */}
      <CommandMenu />

      {/* --- 2. Fixed Elements --- */}
      <Navigation />
      <SocialLinks />

      {/* --- 3. Main Scrollable Content --- */}
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}