"use client";

import { useEffect, useState } from "react";
import {
  Command,
  FileDown,
  LayoutDashboard,
  Mail,
  User,
  Code,
  Github,
  Linkedin,
  X,
} from "lucide-react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // 1. Toggle Menu (Ctrl + K / Cmd + K)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        return;
      }

      // 2. Close on Escape
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      // --- GLOBAL SHORTCUTS (P, A, C) ---

      // Safety Check: Don't trigger if user is typing in an input (Contact Form or Search)
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Navigation Shortcuts
      switch (e.key.toLowerCase()) {
        case "p":
          setOpen(false); // Close menu if open
          window.location.href = "#projects";
          break;
        case "a":
          setOpen(false);
          window.location.href = "#about";
          break;
        case "c":
          setOpen(false);
          window.location.href = "#contact";
          break;
        // You can add more (e.g., 'r' for resume)
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Navigation Helper
  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* The Command Modal */}
      <div className="relative w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header / Input */}
        <div className="flex items-center border-b border-border px-4 py-3">
          <Command className="w-4 h-4 text-muted-foreground mr-3" />
          <input
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm font-mono"
            autoFocus
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>

        {/* Command List */}
        <div className="p-2 overflow-y-auto max-h-[300px]">
          <div className="px-2 py-1.5 text-xs font-semibold text-chart-2 uppercase tracking-wider font-mono">
            Navigation
          </div>

          <CommandItem
            icon={<LayoutDashboard />}
            label="Go to Projects"
            shortcut="P"
            onClick={() =>
              runCommand(() => (window.location.href = "#projects"))
            }
          />
          <CommandItem
            icon={<User />}
            label="Go to About"
            shortcut="A"
            onClick={() => runCommand(() => (window.location.href = "#about"))}
          />
          <CommandItem
            icon={<Mail />}
            label="Go to Contact"
            shortcut="C"
            onClick={() =>
              runCommand(() => (window.location.href = "#contact"))
            }
          />

          <div className="my-2 border-t border-border" />

          <div className="px-2 py-1.5 text-xs font-semibold text-chart-2 uppercase tracking-wider font-mono">
            General
          </div>

          <CommandItem
            icon={<FileDown />}
            label="Download Resume"
            onClick={() =>
              runCommand(() => window.open("/resume.pdf", "_blank"))
            }
          />
          <CommandItem
            icon={<Github />}
            label="View GitHub"
            onClick={() =>
              runCommand(() =>
                window.open("https://github.com/zacst", "_blank")
              )
            }
          />
          <CommandItem
            icon={<Linkedin />}
            label="View LinkedIn"
            onClick={() =>
              runCommand(() =>
                window.open(
                  "https://linkedin.com/in/zacharysamueltobing",
                  "_blank"
                )
              )
            }
          />
          <CommandItem
            icon={<Code />}
            label="View Source Code"
            onClick={() =>
              runCommand(() =>
                window.open("https://github.com/zacst/portfolio", "_blank")
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

// Helper Component for List Items
function CommandItem({
  icon,
  label,
  shortcut,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors group text-left"
    >
      <span className="group-hover:text-chart-2 transition-colors">{icon}</span>
      <span className="flex-1">{label}</span>
      {shortcut && (
        <span className="text-xs text-muted-foreground font-mono border border-border px-1.5 py-0.5 rounded bg-background">
          {shortcut}
        </span>
      )}
    </button>
  );
}
