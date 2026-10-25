"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" aria-label={profile.name} className="flex items-center pl-1">
          <Logo className="h-8 w-8 shrink-0" />
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 transition-colors ${
                active === item.href
                  ? "bg-surface-2 text-foreground shadow-inner shadow-white/5"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.href && (
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-b to-transparent" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent-b/60 hover:text-accent-b"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.04]"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-foreground transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="fade-slide-in mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl border border-border bg-background/90 p-3 backdrop-blur-xl md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-2.5 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                active === item.href ? "bg-surface text-foreground" : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-4 py-2.5 text-sm"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-2xl bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
          >
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
}
