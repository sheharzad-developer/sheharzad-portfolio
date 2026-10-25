import { about, focusAreas } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { Bot, Briefcase, Code2, Hammer, Heart, TrendingUp } from "lucide-react";

const focusIcons = [Bot, Code2];
const blockIcons = [Briefcase, Hammer, TrendingUp, Heart];
// Bento layout: wide, narrow / narrow, wide
const blockSpans = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3"];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title="Building things that work, and work well"
          description={about.paragraphs[0]}
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {about.meta.map((item) => (
            <span
              key={item.label}
              className="rounded-full border border-border bg-surface/40 px-4 py-2 text-xs text-muted backdrop-blur"
            >
              <span className="text-foreground">{item.label}:</span>{" "}
              {item.value}
            </span>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {about.blocks.map((block, i) => {
            const Icon = blockIcons[i % blockIcons.length];
            return (
              <Reveal key={block.title} delay={i * 80} className={blockSpans[i % blockSpans.length]}>
                <SpotlightCard className="h-full p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-a/20 to-accent-b/20 ring-1 ring-white/10">
                      <Icon className="h-4 w-4 text-accent-b" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {block.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {block.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {focusAreas.map((area, i) => {
            const Icon = focusIcons[i % focusIcons.length];
            return (
              <Reveal key={area.title} delay={i * 100}>
                <SpotlightCard className="h-full overflow-hidden bg-gradient-to-br from-surface to-surface-2 p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-a/10 blur-3xl" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/60">
                    <Icon className="h-5 w-5 text-accent-b" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
