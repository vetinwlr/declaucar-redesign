import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function CategoryCard({
  name,
  image,
  imageAlt,
  items,
  confirmed = true,
}: {
  name: string;
  /** Vem do registro central em src/config/images.ts — não importar arquivo direto. */
  image: string;
  imageAlt?: string;
  items: string;
  confirmed?: boolean;
}) {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.category(name))}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-md border border-graphite-line/40 bg-graphite"
    >
      {/* IMAGEM DA CATEGORIA — proporção 4/3 fixa: trocar o arquivo não altera o card */}
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={imageAlt ?? `Peças de ${name.toLowerCase()}`}
          width={800}
          height={600}
          loading="lazy"
          className="size-full object-cover opacity-70 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-graphite via-graphite/85 to-transparent p-4 pt-10">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-on-graphite group-hover:underline">{name}</h3>
          <ArrowUpRight
            className="mt-1 size-4 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 text-xs leading-snug text-on-graphite-muted">{items}</p>
        {!confirmed && (
          <p className="mt-2 text-[0.65rem] tracking-wide text-primary uppercase">
            categoria a confirmar
          </p>
        )}
      </div>
    </a>
  );
}
