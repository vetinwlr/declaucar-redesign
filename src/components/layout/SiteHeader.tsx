import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MapPin, Phone, X } from "lucide-react";
import { Container } from "./Container";
import { WhatsAppButton } from "@/components/ui-blocks/WhatsAppButton";
import { site } from "@/config/site";
import { telHref, whatsappMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-graphite-soft text-on-graphite-muted md:block">
        <Container>
          <div className="flex h-9 items-center justify-between text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" aria-hidden="true" />
              {site.city} — {site.state}
            </span>
            <span className="inline-flex items-center gap-4">
              <span>{site.hours[0]?.days}: {site.hours[0]?.time}</span>
              <a href={telHref} className="inline-flex items-center gap-2 hover:text-on-graphite">
                <Phone className="size-3.5" aria-hidden="true" />
                {site.phone.display}
              </a>
            </span>
          </div>
        </Container>
      </div>

      <div
        className={cn(
          "bg-graphite text-on-graphite transition-shadow",
          scrolled && "shadow-lg shadow-black/30",
        )}
      >
        <Container>
          <div className="grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-16">
            <Link to="/" className="flex min-w-0 items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-on-graphite">
                DECLAU<span className="text-primary">CAR</span>
              </span>
              <span className="hidden text-[0.65rem] tracking-[0.18em] text-on-graphite-muted uppercase sm:inline">
                Auto Peças
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <nav className="mr-2 hidden items-center gap-6 md:flex">
                {site.nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm font-medium text-on-graphite-muted transition-colors hover:text-on-graphite"
                    activeProps={{ className: "text-on-graphite" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <WhatsAppButton
                message={whatsappMessages.general}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Solicitar orçamento
              </WhatsAppButton>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                className="inline-flex size-11 items-center justify-center rounded-md border border-graphite-line md:hidden"
              >
                {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </Container>

        {open && (
          <div className="border-t border-graphite-line md:hidden">
            <Container>
              <nav className="flex flex-col py-2">
                {site.nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-graphite-line/60 py-3 text-base font-medium text-on-graphite"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={telHref}
                  className="flex items-center gap-2 py-3 text-base font-medium text-on-graphite"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </nav>
            </Container>
          </div>
        )}
      </div>
      {open && <span className="sr-only"><X className="size-0" /></span>}
    </header>
  );
}
