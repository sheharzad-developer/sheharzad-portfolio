"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.32-3.77-1.32-.51-1.29-1.24-1.64-1.24-1.64-1.01-.69.08-.67.08-.67 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

const filters = [
  { label: "All", match: () => true },
  { label: "AI", match: (p: Project) => p.category.startsWith("AI") },
  { label: "Full-Stack", match: (p: Project) => /Full-Stack/.test(p.category) },
  { label: "FinTech", match: (p: Project) => p.category === "FinTech" },
  { label: "Live", match: (p: Project) => p.status === "live" },
];

const INITIAL_COUNT = 6;

function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="group flex h-full flex-col p-6">
      <div className="flex items-center justify-between text-xs text-muted">
        <span className="font-mono">#{project.id}</span>
        <span className="flex items-center gap-3">
          {project.status === "live" && (
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Live
            </span>
          )}
          {project.year}
        </span>
      </div>

      <p className="mt-5 text-xs uppercase tracking-[0.15em] text-accent-b">
        {project.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.problem}
      </p>

      <p className="mt-4 text-xs text-muted/80">{project.credit}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.live || project.code) && (
        <div className="mt-6 flex gap-2 border-t border-border pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-transform hover:scale-[1.04]"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent-b/60 hover:text-accent-b"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      )}
    </SpotlightCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState(filters[0].label);
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const { match } = filters.find((f) => f.label === filter) ?? filters[0];
    return projects.filter(match);
  }, [filter]);

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="The problem each project solves, and how I built it."
        />

        <Reveal className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-border bg-surface/50 p-1 backdrop-blur">
            {filters.map((f) => {
              const count = projects.filter(f.match).length;
              const isActive = filter === f.label;
              return (
                <button
                  key={f.label}
                  onClick={() => {
                    setFilter(f.label);
                    setExpanded(false);
                  }}
                  className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                    isActive
                      ? "bg-foreground text-background shadow-lg"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {f.label}
                  <span className={`ml-1.5 text-xs ${isActive ? "text-background/60" : "text-muted/60"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <div
              key={`${filter}-${project.id}`}
              className="fade-slide-in"
              style={{ animationDelay: `${(i % INITIAL_COUNT) * 60}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-accent-b/60 hover:text-accent-b"
            >
              {expanded ? "Show less" : `Show all ${filtered.length} projects`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
