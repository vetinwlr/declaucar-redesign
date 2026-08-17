import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui-blocks/SectionHeading";
import { LocationCard } from "@/components/ui-blocks/LocationCard";
import { WhatsAppButton } from "@/components/ui-blocks/WhatsAppButton";
import { site } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

const title = "Contato — Declaucar Auto Peças em São José dos Campos";
const description =
  "Fale com a Declaucar Auto Peças por WhatsApp ou telefone. Endereço, horários de atendimento e área atendida em São José dos Campos e região.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Section tone="dark" size="compact">
        <p className="eyebrow text-primary">Contato</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-bold sm:text-5xl">
          Peça seu orçamento pelo WhatsApp
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-graphite-muted">
          Informe modelo, ano e a peça que você procura. Também atendemos por telefone e
          presencialmente em {site.city}.
        </p>
        <div className="mt-8">
          <WhatsAppButton message={whatsappMessages.general} size="lg" />
        </div>
      </Section>

      <Section>
        <SectionHeading index="01" eyebrow="Atendimento" title="Endereço, horários e rota" />
        <div className="mt-10">
          <LocationCard />
        </div>
      </Section>
    </>
  );
}
