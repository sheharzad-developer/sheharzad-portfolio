import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/S-Logo/S-Logo.jpg"
      alt="Sheharzad Salahuddin logo"
      width={64}
      height={64}
      className={`rounded-lg ${className ?? ""}`}
      priority
    />
  );
}
