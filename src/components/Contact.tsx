import { Coffee, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

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
    icon: Coffee,
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 flex-col items-center gap-3 rounded-2xl border border-border bg-surface/40 p-8 text-center transition-colors hover:border-accent-b/60"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${channel.badgeClass}`}
              >
                <channel.icon className={`h-5 w-5 ${channel.iconClass}`} />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {channel.label}
              </p>
              <p className="w-full break-all text-xs font-semibold sm:text-sm">
                {channel.value}
              </p>
              <p className="text-sm text-muted">{channel.subtext}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
