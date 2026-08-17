import { Boxes, Handshake, Truck, Wrench, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { boxes: Boxes, wrench: Wrench, truck: Truck, handshake: Handshake };

export function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: keyof typeof icons | string;
  title: string;
  text: string;
}) {
  const Icon = icons[icon] ?? Boxes;
  return (
    <div className="rounded-md border border-graphite-line/60 bg-graphite-soft p-5">
      <Icon className="size-6 text-primary" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-bold text-on-graphite">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-on-graphite-muted">{text}</p>
    </div>
  );
}
