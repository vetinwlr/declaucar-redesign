import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";

// Imagens vêm do registro central (src/config/images.ts), onde estão as
// instruções para substituir cada placeholder pela fotografia real.
import { placeholderNotice, siteImages } from "@/config/images";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui-blocks/SectionHeading";
import { CategoryCard } from "@/components/ui-blocks/CategoryCard";
import { BrandCard } from "@/components/ui-blocks/BrandCard";
import { StepItem } from "@/components/ui-blocks/StepItem";
import { FeatureCard } from "@/components/ui-blocks/FeatureCard";
import { StatItem } from "@/components/ui-blocks/StatItem";
import { Timeline } from "@/components/ui-blocks/Timeline";
import { LocationCard } from "@/components/ui-blocks/LocationCard";
import { CTABanner } from "@/components/ui-blocks/CTABanner";
import { WhatsAppButton } from "@/components/ui-blocks/WhatsAppButton";
import { Reveal } from "@/components/ui-blocks/Reveal";
import { site } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { about, brands, categories, credibility, differentials, hero, stats, steps } from "@/content/home";

const title = "Declaucar Auto Peças — Peças automotivas em São José dos Campos";
const description =
  "Mais de 30 anos e 14.000+ itens em estoque: motor, freios, suspensão e mais. Orçamento rápido pelo WhatsApp para motoristas e oficinas de São José dos Campos e região.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          name: site.name,
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            addressCountry: "BR",
          },
          areaServed: site.city,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite text-on-graphite">
        <Container>
          <div className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-primary">{hero.eyebrow}</p>
              <h1 className="mt-4 text-[2rem] leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-on-graphite-muted sm:text-lg">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message={whatsappMessages.general}
                  size="lg"
                  className="w-full sm:w-auto"
                />
                <a
                  href="#categorias"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-md border border-graphite-line px-6 text-base font-semibold text-on-graphite transition-colors hover:bg-graphite-soft sm:w-auto"
                >
                  Ver categorias
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-graphite-muted">
                {hero.microProof.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:col-span-5">
              {/* IMAGEM HERO — siteImages.hero (3/4 no desktop, 4/3 no mobile) */}
              <div className="aspect-4/3 overflow-hidden rounded-md border border-graphite-line/60 lg:aspect-3/4">
                <img
                  src={siteImages.hero.src}
                  alt={siteImages.hero.alt}
                  width={siteImages.hero.width}
                  height={siteImages.hero.height}
                  className="size-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 rounded-md border border-graphite-line bg-graphite/90 px-4 py-3 backdrop-blur-sm">
                <p className="num-display text-2xl text-on-graphite">{hero.badge.value}</p>
                <p className="text-xs text-on-graphite-muted">{hero.badge.label}</p>
              </div>
            </div>
          </div>
        </Container>

        {/* Faixa de credibilidade */}
        <div className="border-t border-graphite-line">
          <Container>
            <dl className="grid grid-cols-2 gap-px lg:grid-cols-4">
              {credibility.map((item) => (
                <div key={item.label} className="py-6 lg:py-7">
                  <dt className="num-display text-2xl text-on-graphite sm:text-3xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm text-on-graphite-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* Categorias */}
      <Section id="categorias">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Categorias"
            title="Peças para praticamente todo o carro"
            description="Escolha a categoria e receba o orçamento no WhatsApp com a mensagem já preenchida."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 40}>
              <CategoryCard {...category} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="card">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Como funciona"
            title="Do pedido ao orçamento em poucos minutos"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <StepItem index={i + 1} title={step.title} text={step.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Marcas */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading index="03" eyebrow="Marcas" title={brands.title} />
              <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {brands.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Lista oficial de marcas a confirmar com a empresa.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {brands.list.map((brand, i) => (
                <Reveal key={brand.name} delay={i * 30}>
                  <BrandCard {...brand} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Por que escolher */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Diferenciais"
            tone="dark"
            title="Por que escolher a Declaucar?"
            description="Estrutura de loja tradicional com a agilidade que oficina e motorista precisam hoje."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              placeholder={stat.value === 0}
            />
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppButton message={whatsappMessages.general} size="lg" />
        </div>
      </Section>

      {/* Sobre */}
      <Section tone="card">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            {/* IMAGEM INSTITUCIONAL — siteImages.sobre (4/3) */}
            <div className="aspect-4/3 overflow-hidden rounded-md border border-border">
              <img
                src={siteImages.sobre.src}
                alt={siteImages.sobre.alt}
                width={siteImages.sobre.width}
                height={siteImages.sobre.height}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            {siteImages.sobre.status === "placeholder" && (
              <p className="mt-2 text-xs text-muted-foreground">{placeholderNotice}</p>
            )}

          </Reveal>
          <Reveal delay={60}>
            <SectionHeading index="05" eyebrow="A empresa" title="Mais de 30 anos de estrada" />
            <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              to="/sobre"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4"
            >
              Conhecer a história completa
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12">
          <Timeline items={about.timeline} />
          <p className="mt-3 text-xs text-muted-foreground">
            Datas dos marcos a confirmar com a empresa.
          </p>
        </div>
      </Section>

      {/* Oficinas */}
      <Section>
        <div className="grid items-center gap-8 rounded-md border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow flex items-center gap-2 text-primary">
              <Wrench className="size-4" aria-hidden="true" />
              Para oficinas e mecânicos
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Atendimento dedicado a quem trabalha com carro todos os dias
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Cotação rápida, disponibilidade confirmada na hora e apoio na identificação da peça
              correta. Condições comerciais para profissionais a confirmar.
            </p>
          </div>
          <WhatsAppButton message={whatsappMessages.workshop} size="lg" className="w-full lg:w-auto">
            Atendimento para oficinas
          </WhatsAppButton>
        </div>
      </Section>

      {/* Localização */}
      <Section id="localizacao" tone="card">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Localização"
            title={`Estamos em ${site.city}`}
            description="Retire na loja ou fale com a gente antes de sair de casa — confirmamos a disponibilidade na hora."
          />
        </Reveal>
        <div className="mt-10">
          <LocationCard />
        </div>
      </Section>

      <CTABanner
        title="Precisa de uma peça? Fale com um especialista agora."
        description="Envie o modelo do veículo e a peça pelo WhatsApp. Respondemos no horário comercial."
        message={whatsappMessages.general}
      />
    </>
  );
}
