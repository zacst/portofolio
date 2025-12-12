"use client"

import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 pb-12 text-muted-foreground">
      <span className="text-sm">Scroll down</span>
      <ChevronDown className="w-4 h-4 animate-bounce" />
    </div>
  )
}
