import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { site } from "@/config/site";
import { telHref } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

export function CTABanner({
  title,
  description,
  message,
  cta = "Solicitar orçamento no WhatsApp",
}: {
  title: string;
  description?: string;
  message: string;
  cta?: string;
}) {
  return (
    <section className="bg-graphite py-16 text-on-graphite sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-on-graphite-muted">{description}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton message={message} size="lg" className="w-full sm:w-auto">
              {cta}
            </WhatsAppButton>
            <a
              href={telHref ?? "#localizacao"}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-md border border-graphite-line px-6 text-base font-semibold text-on-graphite transition-colors hover:bg-graphite-soft sm:w-auto"
            >
              <Phone className="size-5" aria-hidden="true" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
