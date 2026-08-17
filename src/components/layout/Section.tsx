import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  tone = "light",
  size = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "card" | "dark";
  size?: "default" | "compact";
}) {
  const tones = {
    light: "bg-background text-foreground",
    card: "bg-card text-card-foreground",
    dark: "bg-graphite text-on-graphite",
  };

  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        size === "compact" ? "py-12 sm:py-14" : "py-16 sm:py-20 lg:py-24",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
