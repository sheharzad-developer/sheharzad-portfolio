"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { profile, skillGroups } from "@/lib/data";

const floatingChips = [
  { label: "React", className: "-left-6 top-10" },
  { label: "Next.js", className: "-right-8 top-1/3 [animation-delay:-2s]" },
  { label: "AI / LLMs", className: "-left-10 bottom-16 [animation-delay:-4s]" },
];

const marqueeSkills = skillGroups.flatMap((g) => g.skills);

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.taglines.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28"
    >
      <div className="glow aurora -left-40 -top-40 h-[32rem] w-[32rem] bg-accent-a" />
      <div className="glow aurora-delayed -right-32 top-1/4 h-[26rem] w-[26rem] bg-accent-b" />
      <div className="glow aurora bottom-0 left-1/3 h-72 w-72 bg-accent-c opacity-20" />
      <div className="grid-overlay absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="fade-slide-in mb-6 flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities · {profile.location}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted backdrop-blur">
              <Sparkles className="h-3 w-3 text-accent-b" />
              Currently learning {profile.currentlyLearning}
            </p>
          </div>

          <h1
            className="fade-slide-in text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="relative inline-block min-h-[1.1em]">
              <span key={index} className="fade-slide-in inline-block">
                <span className="gradient-text">{profile.taglines[index]}</span>
              </span>
            </span>
          </h1>

          <p
            className="fade-slide-in mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            {profile.summary}
          </p>

          <div
            className="fade-slide-in mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-[0_0_40px_-8px] shadow-accent-a/60 transition-transform hover:scale-[1.04]"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-accent-b/60 hover:text-accent-b"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <dl
            className="fade-slide-in mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            style={{ animationDelay: "400ms" }}
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface/40 px-4 py-3 backdrop-blur"
              >
                <dt className="text-[10px] uppercase tracking-[0.15em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="fade-slide-in relative order-first mx-auto aspect-square w-full max-w-[240px] sm:max-w-xs md:order-none md:max-w-sm"
          style={{ animationDelay: "150ms" }}
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-a/30 via-accent-b/20 to-accent-c/30 blur-3xl" />
          <div className="conic-border float relative h-full w-full rounded-[2.5rem] p-[2px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-surface">
              <Image
                src="/sheharzad.png"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 240px, 24rem"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>
          {floatingChips.map((chip) => (
            <span
              key={chip.label}
              className={`float absolute hidden rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium shadow-xl shadow-black/40 backdrop-blur-md sm:inline-flex ${chip.className}`}
            >
              <span className="gradient-text">{chip.label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="marquee relative mt-6 overflow-hidden border-y border-border bg-surface/30 py-4 backdrop-blur">
        <div className="marquee-track flex w-max gap-10">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-sm text-muted"
            >
              {skill}
              <span className="h-1 w-1 rounded-full bg-accent-b/60" />
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto my-8 flex flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
      >
        Scroll down
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
