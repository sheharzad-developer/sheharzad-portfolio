"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";

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
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="glow -left-40 -top-40 h-[28rem] w-[28rem] bg-accent-a" />
      <div className="glow -right-32 top-1/3 h-[24rem] w-[24rem] bg-accent-b" />
      <div className="grid-overlay absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to new opportunities · {profile.location}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-b" />
              Self-taught, currently learning {profile.currentlyLearning}
            </p>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span
              key={index}
              className="gradient-text fade-slide-in inline-block"
            >
              {profile.taglines[index]}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              View profile
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-b/60 hover:text-accent-b"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center md:flex">
          <div className="absolute inset-0 rounded-[2.5rem] border border-border bg-gradient-to-br from-surface to-surface-2" />
          <div className="absolute inset-6 overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-accent-a/20 via-transparent to-accent-b/20">
            <Image
              src="/Profile.png"
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 0px, 24rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
      >
        Scroll down
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
