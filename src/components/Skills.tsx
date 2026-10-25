import { Brain, Database, Layout, Server, Users, Workflow, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  AI: Brain,
  Database: Database,
  DevOps: Workflow,
  Collaboration: Users,
};

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="glow right-0 top-1/3 h-96 w-96 bg-accent-a opacity-15" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for"
          description="Frontend, backend, AI, and everything that connects them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.label] ?? Layout;
            return (
              <Reveal key={group.label} delay={(i % 3) * 90}>
                <SpotlightCard className="group h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-a/25 to-accent-b/25 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-foreground" />
                      </span>
                      <h3 className="font-semibold">{group.label}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {String(group.skills.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-b/50 hover:text-foreground"
                      >
                        {skill}
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
