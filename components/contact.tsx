"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  ArrowRight,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Added "error" state to handle failures
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Send data to Formspree
      const response = await fetch("https://formspree.io/f/mrbnrljn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        // If Formspree returns an error (e.g., spam detected)
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      // Network error
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: Info & Context */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-chart-2 font-mono text-xs uppercase tracking-[0.2em]">
                // Get in touch
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
                CONTACT<span className="text-chart-2">.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I am currently looking for{" "}
              <span className="text-foreground font-semibold">
                internship opportunities
              </span>{" "}
              or collaboration on{" "}
              <span className="text-foreground font-semibold">
                Web Development & Cybersecurity
              </span>{" "}
              projects.
              <br />
              <br />
              Have a question or just want to say hi? My inbox is always open.
            </p>

            {/* Contact Details Cards */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-secondary/30 border border-border group-hover:border-chart-2/50 transition-colors">
                  <Mail className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:zacharysamueltobing@gmail.com"
                    className="text-foreground text-lg font-medium hover:text-chart-2 transition-colors"
                  >
                    zacharysamueltobing@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-secondary/30 border border-border group-hover:border-chart-2/50 transition-colors">
                  <MapPin className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-foreground text-lg font-medium">
                    Bandung, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="relative bg-card border border-border p-8 md:p-12 rounded-2xl shadow-2xl">
            {/* Optional: Code comment decoration */}
            <div className="absolute top-4 right-6 text-border font-mono text-xs hidden md:block">
              {"<Form />"}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Send a message
              </h3>

              <div className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border text-foreground placeholder-muted-foreground/50 py-4 focus:outline-none focus:border-chart-2 transition-all font-mono text-sm"
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border text-foreground placeholder-muted-foreground/50 py-4 focus:outline-none focus:border-chart-2 transition-all font-mono text-sm"
                  />
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border text-foreground placeholder-muted-foreground/50 py-4 focus:outline-none focus:border-chart-2 transition-all resize-none font-mono text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`
                  group flex items-center gap-3 px-8 py-4 mt-8
                  font-bold tracking-widest uppercase text-xs
                  transition-all duration-300 ease-out
                  ${
                    status === "error"
                      ? "bg-red-500/10 text-red-500 border border-red-500/50"
                      : "bg-foreground text-background hover:bg-chart-2 hover:text-white"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}

                {status === "submitting" && (
                  <>
                    <span>Sending...</span>
                    <Send className="w-4 h-4 animate-pulse" />
                  </>
                )}

                {status === "success" && (
                  <>
                    <span>Sent Successfully</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}

                {status === "error" && (
                  <>
                    <span>Try Again</span>
                    <AlertCircle className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
