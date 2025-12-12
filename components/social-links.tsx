"use client";

import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zacharysamueltobing",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/zacst",
      icon: <Github className="w-5 h-5" />,
    },
      {
      name: "Twitter",
      url: "https://twitter.com/zacst20",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/zacst14",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          // Opens the link in a new tab
          target="_blank"
          // Security best practice for target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110"
          aria-label={`Visit my ${link.name} profile`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
