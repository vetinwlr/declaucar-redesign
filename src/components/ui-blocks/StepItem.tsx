export function StepItem({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-border pt-5">
      <span className="section-index">{String(index).padStart(2, "0")}</span>
      <h3 className="mt-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
