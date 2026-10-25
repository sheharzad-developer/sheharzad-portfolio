import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent-b">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-b" />
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-b" />
      </p>
      <h2 className="mt-4 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
