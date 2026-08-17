import { useState } from "react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/config/site";
import { telHref } from "@/lib/whatsapp";

const mapQuery = encodeURIComponent(`${site.name}, ${site.city}, ${site.state}`);

export function LocationCard() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-md border border-border bg-card p-6">
        <h3 className="flex items-start gap-2 text-lg font-bold text-foreground">
          <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          Onde estamos
        </h3>
        <address className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground not-italic">
          <p className="text-foreground">{site.address.street}</p>
          <p>
            {site.address.district} — {site.address.city}/{site.address.state}
          </p>
          <p>{site.address.zip}</p>
        </address>

        <h3 className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          Horário de atendimento
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {site.hours.map((h) => (
            <li key={h.days} className="flex justify-between gap-4 border-b border-border py-1">
              <span>{h.days}</span>
              <span className="text-foreground">{h.time}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          Área atendida: <span className="text-foreground">{site.serviceArea}</span>
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Traçar rota
          </a>
          <a
            href={telHref}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-accent"
          >
            <Phone className="size-4" aria-hidden="true" />
            Ligar
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-border bg-secondary">
        {showMap ? (
          <iframe
            title={`Mapa da localização da ${site.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-80 w-full lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-80 flex-col items-center justify-center gap-4 p-6 text-center lg:h-full">
            <MapPin className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="max-w-xs text-sm text-muted-foreground">
              O mapa carrega sob demanda para manter o site rápido no celular.
            </p>
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Carregar mapa
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
