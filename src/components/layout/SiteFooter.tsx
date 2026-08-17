import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { site } from "@/config/site";
import { telHref } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-graphite-line bg-graphite pt-14 pb-24 text-on-graphite-muted md:pb-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="font-display text-lg font-bold text-on-graphite">
              DECLAU<span className="text-primary">CAR</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Auto peças em {site.city} há mais de 30 anos. Mais de 14.000 itens para consumidores
              e oficinas.
            </p>
          </div>

          <div>
            <h2 className="eyebrow mb-3 text-on-graphite">Contato</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={telHref} className="hover:text-on-graphite">
                  {site.phone.display}
                </a>
              </li>
              <li>{site.whatsapp.display}</li>
              <li>{site.email}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-3 text-on-graphite">Endereço</h2>
            <address className="space-y-1 text-sm not-italic">
              <p>{site.address.street}</p>
              <p>
                {site.address.district} — {site.address.city}/{site.address.state}
              </p>
              <p>{site.address.zip}</p>
            </address>
            <h2 className="eyebrow mt-5 mb-2 text-on-graphite">Horários</h2>
            <ul className="space-y-1 text-sm">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-3 text-on-graphite">Navegação</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-on-graphite">
                  Início
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-on-graphite">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="eyebrow mt-5 mb-2 text-on-graphite">Redes sociais</h2>
            <p className="text-sm">[REDES SOCIAIS A CONFIRMAR]</p>
          </div>
        </div>

        <p className="mt-10 border-t border-graphite-line pt-6 text-xs">
          © {new Date().getFullYear()} {site.name}. Conteúdo entre colchetes é placeholder e será
          substituído pelos dados oficiais da empresa.
        </p>
      </Container>
    </footer>
  );
}
