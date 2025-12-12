export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <div className="text-muted-foreground text-xs font-mono">
          <span className="text-chart-2">© {currentYear} ZACST.</span> ALL RIGHTS RESERVED.
        </div>

        {/* Center: System Status (Purely aesthetic) */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider">
            System Online
          </span>
        </div>

        {/* Right: Built With */}
        <p className="text-muted-foreground text-xs font-mono">
          BUILT WITH <span className="text-foreground">NEXT.JS</span> & <span className="text-foreground">TAILWIND</span>
        </p>

      </div>
    </footer>
  )
}