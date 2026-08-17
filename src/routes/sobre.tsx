import { createFileRoute } from "@tanstack/react-router";

import sobreImage from "@/assets/sobre-loja.jpg";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui-blocks/SectionHeading";
import { Timeline } from "@/components/ui-blocks/Timeline";
import { FeatureCard } from "@/components/ui-blocks/FeatureCard";
import { CTABanner } from "@/components/ui-blocks/CTABanner";
import { about, differentials } from "@/content/home";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/config/site";

const title = "Sobre a Declaucar Auto Peças — tradição em São José dos Campos";
const description =
  "Há mais de 30 anos fornecendo peças automotivas em São José dos Campos, com atendimento técnico para motoristas, mecânicos e oficinas.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Section tone="dark" size="compact">
        <p className="eyebrow text-primary">A empresa</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-bold sm:text-5xl">
          Uma loja tradicional de {site.city}, com estrutura de hoje
        </h1>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="aspect-4/3 overflow-hidden rounded-md border border-border">
            <img
              src={sobreImage}
              alt="Atendimento no balcão da loja de auto peças com prateleiras organizadas"
              width={1200}
              height={912}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Imagem provisória e datas entre colchetes a confirmar com a empresa.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Timeline items={about.timeline} />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading index="01" eyebrow="Diferenciais" tone="dark" title="O que nos define" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Fale com quem entende de peça há mais de 30 anos"
        message={whatsappMessages.general}
      />
    </>
  );
}
