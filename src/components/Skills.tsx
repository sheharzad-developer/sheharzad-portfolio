"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for"
          description="Frontend, backend, AI, and everything that connects them."
        />

        <div className="mt-12 flex items-center justify-end gap-2">
          <button
            aria-label="Previous skill group"
            onClick={scrollPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent-b/60 hover:text-accent-b"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next skill group"
            onClick={scrollNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent-b/60 hover:text-accent-b"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-b">
                    {group.label}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-accent-b" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
