export function Timeline({
  items,
}: {
  items: { year: string; title: string; text: string }[];
}) {
  return (
    <ol className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="w-56 shrink-0 snap-start border-t-2 border-primary pt-4 sm:w-auto"
        >
          <span className="eyebrow text-primary">{item.year}</span>
          <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
