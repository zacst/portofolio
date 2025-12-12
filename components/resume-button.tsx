"use client"

import { FileDown } from "lucide-react"

export default function ResumeButton() {
  return (
    <a 
      // This path points to the file in your 'public' folder
      href="/Zachary_Samuel_Tobing_CV.pdf"
      // This forces the browser to open the PDF in a new tab (better UX)
      target="_blank" 
      rel="noopener noreferrer"
      className="
        group flex items-center gap-2 px-6 py-3 
        border border-zinc-700 rounded-full 
        text-zinc-400 hover:text-white hover:border-white 
        transition-all duration-300 ease-out
      "
    >
      <span className="text-sm tracking-widest uppercase">CV</span>
      <FileDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
    </a>
  )
}