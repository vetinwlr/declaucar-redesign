import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  action,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        {(index || eyebrow) && (
          <p className="mb-3 flex items-center gap-3">
            {index && <span className="section-index">{index}</span>}
            {eyebrow && (
              <span
                className={cn("eyebrow", dark ? "text-on-graphite-muted" : "text-muted-foreground")}
              >
                {eyebrow}
              </span>
            )}
          </p>
        )}
        <h2
          className={cn(
            "text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-on-graphite" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              dark ? "text-on-graphite-muted" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
