import { useEffect, useRef, useState } from "react";

function formatValue(value: number) {
  return value.toLocaleString("pt-BR");
}

export function StatItem({
  value,
  suffix,
  label,
  placeholder,
}: {
  value: number;
  suffix?: string;
  label: string;
  placeholder?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || placeholder) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, placeholder]);

  return (
    <div ref={ref} className="border-t border-graphite-line pt-4">
      <p className="num-display text-4xl text-on-graphite sm:text-5xl">
        {placeholder ? "[—]" : `${formatValue(display)}${suffix ?? ""}`}
      </p>
      <p className="mt-2 text-sm text-on-graphite-muted">{label}</p>
    </div>
  );
}
