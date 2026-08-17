export function BrandCard({ name, segment }: { name: string; segment: string }) {
  return (
    <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-md border border-border bg-card px-3 text-center">
      <span className="font-display text-sm font-bold text-foreground">{name}</span>
      <span className="text-[0.65rem] tracking-wide text-muted-foreground uppercase">
        {segment}
      </span>
    </div>
  );
}
