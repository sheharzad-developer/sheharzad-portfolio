import { about, focusAreas } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Bot, Code2 } from "lucide-react";

const icons = [Bot, Code2];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title="Building things that work, and work well"
          description={about.paragraphs[0]}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {about.blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-b">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {about.meta.map((item) => (
            <span
              key={item.label}
              className="rounded-full border border-border bg-surface/40 px-4 py-2 text-xs text-muted"
            >
              <span className="text-foreground">{item.label}:</span>{" "}
              {item.value}
            </span>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={area.title}
                className="group rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8 transition-colors hover:border-accent-a/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60">
                  <Icon className="h-5 w-5 text-accent-b" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
