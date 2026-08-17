import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui-blocks/SectionHeading";
import { CategoryCard } from "@/components/ui-blocks/CategoryCard";
import { BrandCard } from "@/components/ui-blocks/BrandCard";
import { CTABanner } from "@/components/ui-blocks/CTABanner";
import { Reveal } from "@/components/ui-blocks/Reveal";
import { brands, categories } from "@/content/home";
import { whatsappMessages } from "@/lib/whatsapp";

const title = "Produtos e categorias — Declaucar Auto Peças São José dos Campos";
const description =
  "Peças de motor, freios, suspensão, elétrica, filtros, transmissão e arrefecimento. Mais de 14.000 itens em estoque em São José dos Campos.";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  return (
    <>
      <Section tone="dark" size="compact">
        <p className="eyebrow text-primary">Produtos</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-bold sm:text-5xl">
          Mais de 14.000 itens para praticamente todo o carro
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-graphite-muted">
          Não temos catálogo online: o estoque muda todos os dias. Envie o veículo e a peça pelo
          WhatsApp que confirmamos a disponibilidade e o preço na hora.
        </p>
      </Section>

      <Section>
        <SectionHeading index="01" eyebrow="Categorias" title="Escolha a linha que você precisa" />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 40}>
              <CategoryCard {...category} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="card">
        <SectionHeading index="02" eyebrow="Marcas" title={brands.title} description={brands.text[0] ?? ""} />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {brands.list.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Lista oficial de marcas a confirmar com a empresa.
        </p>
      </Section>

      <CTABanner
        title="Não encontrou a categoria da sua peça?"
        description="Mande a descrição ou uma foto no WhatsApp. Nossa equipe identifica a aplicação correta."
        message={whatsappMessages.general}
      />
    </>
  );
}
