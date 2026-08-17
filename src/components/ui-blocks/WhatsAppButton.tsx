import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
  lg: "h-14 px-6 text-base",
};

export function WhatsAppButton({
  message,
  children = "Solicitar orçamento no WhatsApp",
  size = "md",
  variant = "solid",
  className,
}: {
  message: string;
  children?: React.ReactNode;
  size?: Size;
  variant?: "solid" | "outline" | "onDark";
  className?: string;
}) {
  const variants = {
    solid: "bg-brand text-brand-foreground hover:bg-brand-hover",
    outline: "border border-border bg-transparent text-foreground hover:bg-accent",
    onDark: "border border-graphite-line bg-transparent text-on-graphite hover:bg-graphite-soft",
  };

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}
