"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
        />

        <div className="mt-12 flex items-center justify-end gap-2">
          <button
            aria-label="Previous certificate"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent-b/60 hover:text-accent-b disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next certificate"
            onClick={scrollNext}
            disabled={!canNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent-b/60 hover:text-accent-b disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60">
                  {cert.image && (
                    <div className="relative h-36 w-full border-b border-border">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 85vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-wide text-accent-b">
                      {cert.category}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">{cert.issuer}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-xs text-muted">{cert.date}</span>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-accent-b"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
