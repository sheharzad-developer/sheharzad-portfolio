import { CalendarDays, Coffee, Download, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const channels: {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
  href: string;
  external?: boolean;
  iconClass: string;
  badgeClass: string;
}[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message me",
    subtext: "Get instant responses",
    href: profile.whatsapp,
    external: true,
    iconClass: "text-emerald-400",
    badgeClass: "bg-emerald-400/10",
  },
  {
    icon: CalendarDays,
    label: "Calendly",
    value: "Book a call",
    subtext: "30-minute discovery call",
    href: profile.calendly,
    external: true,
    iconClass: "text-amber-400",
    badgeClass: "bg-amber-400/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    subtext: "Let's talk about a project",
    href: `mailto:${profile.email}`,
    iconClass: "text-accent-b",
    badgeClass: "bg-accent-b/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    subtext: "Call or text anytime",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    iconClass: "text-accent-a",
    badgeClass: "bg-accent-a/10",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="glow left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 bg-accent-a" />
      <div className="glow left-1/2 top-20 h-96 w-96 -translate-x-1/2 bg-accent-b opacity-20" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, opportunity, or collaboration in mind? I'd love to hear from you — get in touch via any of the channels below."
        />

        <Reveal className="mt-14">
          <div className="conic-border rounded-[2rem] p-px">
            <div className="rounded-[2rem] bg-background/95 p-3 backdrop-blur-xl sm:p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {channels.map((channel) => (
                  <SpotlightCard key={channel.label} className="min-w-0 rounded-3xl">
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group flex h-full flex-col items-center gap-3 p-7 text-center"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${channel.badgeClass} ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                      >
                        <channel.icon className={`h-6 w-6 ${channel.iconClass}`} />
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        {channel.label}
                      </p>
                      <p className="w-full break-all text-xs font-semibold sm:text-sm">
                        {channel.value}
                      </p>
                      <p className="text-sm text-muted">{channel.subtext}</p>
                    </a>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-4" delay={100}>
          <a
            href={profile.resume}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-[0_0_40px_-8px] shadow-accent-b/60 transition-transform hover:scale-[1.04]"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download my resume (PDF)
          </a>
          <a
            href={profile.buyMeACoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#FFDD00] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_-8px] shadow-[#FFDD00]/60 transition-transform hover:scale-[1.04]"
          >
            <Coffee className="h-4 w-4 transition-transform group-hover:-rotate-12" />
            Buy me a coffee
          </a>
        </Reveal>
      </div>
    </section>
  );
}
