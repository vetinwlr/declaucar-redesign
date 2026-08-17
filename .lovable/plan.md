# Declaucar Auto Peças — Novo site institucional

Redesign conceitual, mobile-first, com foco em conversão via WhatsApp. Site atual é Wix (conteúdo dinâmico, não copiável) — usado só como referência de negócio.

## 1. Arquitetura recomendada

Site de página única (home longa e bem seccionada) + rotas próprias para conteúdos que merecem SEO e link direto:

```text
/            Home (hero, prova, categorias, marcas, sobre, diferenciais, localização, CTA)
/produtos    Catálogo por categoria (motor, freios, suspensão, elétrica, etc.)
/sobre       História, estrutura, equipe, credibilidade
/contato     Canais, formulário, horários, mapa
```
Rotas separadas (não âncoras) porque cada uma indexa com título/descrição próprios e pode ser compartilhada. Dentro da home, âncoras suaves para navegação rápida.

## 2 e 3. Estrutura e objetivo de cada seção (Home)

| Seção | Conteúdo | Objetivo |
|---|---|---|
| Header fixo | Logo, nav, telefone, botão "Falar no WhatsApp" | Contato sempre a 1 clique |
| Hero | Headline forte + subheadline + 2 CTAs + imagem automotiva | Entender o negócio em 3s e converter |
| Barra de prova | 30+ anos · 14.000+ itens · São José dos Campos e região · atendimento especializado | Confiança imediata |
| Categorias | Cards: Motor, Freios, Suspensão, Elétrica, Filtros, Transmissão, Arrefecimento, Acessórios | Mostrar amplitude e direcionar o pedido |
| Como funciona | 3 passos: envie a peça/veículo → conferimos disponibilidade → orçamento na hora | Reduzir atrito do primeiro contato |
| Marcas | Grid de nomes/logos em cartões sóbrios + frase sobre curadoria e originalidade | Credibilidade sem "parede de logos" |
| Sobre | História desde os anos 90, estrutura, atendimento a oficinas e consumidor final | Autoridade e tradição |
| Diferenciais | Estoque, agilidade, atendimento técnico, condições para oficinas, entrega regional | Diferenciação frente a concorrentes |
| Para profissionais | Bloco dedicado a mecânicos/oficinas com CTA próprio | Captar o público B2B recorrente |
| Localização | Endereço, mapa, horários, telefone | Converter busca local |
| CTA final | Bloco escuro com WhatsApp em destaque | Última chance de conversão |
| Footer | Logo, contatos, endereço, horários, links, redes | Fechamento e SEO local |

Melhorias propostas sobre a estrutura enviada: inclusão de "Como funciona" (o principal atrito é o cliente não saber como pedir), bloco B2B para oficinas, e barra fixa de WhatsApp no mobile.

## 4. Hierarquia visual

Uma única ação dominante por tela. Headline > subheadline > CTA primário (cor de destaque) > CTA secundário (contorno). Seções alternam fundo claro/escuro para ritmo. Números da prova social em tipografia grande e condensada. Máximo 2 pesos tipográficos por bloco.

## 5. Identidade visual

Tradicional que se moderniza: base grafite/aço industrial, acento laranja-âmbar (peça/ferramenta), tipografia condensada e técnica em títulos, cantos pouco arredondados, linhas finas, textura sutil. Sem gradientes chamativos, sem animação além de fade/rise discretos no scroll.

## 6. Paleta

- Grafite profundo `#101317` (fundo escuro / header)
- Aço `#1C2229` (superfícies)
- Cinza claro `#F4F5F7` (fundo claro)
- Laranja-âmbar `#F26B21` (CTA / acento)
- Vermelho-tijolo `#B23A16` (hover, detalhes)
- Branco e cinzas neutros para texto

Tudo em tokens `oklch` no design system, sem cor solta em componente.

## 7. Tipografia

Títulos: Archivo / Archivo Narrow (condensada, industrial, forte). Texto: Inter Tight ou Barlow (legível, neutra). Números da prova social com tabular numerals.

## 8. Estratégia de CTAs

- Primário em todo o site: "Solicitar orçamento no WhatsApp"
- Secundário: "Ver categorias" (hero) / "Ligar agora" (mobile)
- Cada categoria e cada card de diferencial leva ao WhatsApp com mensagem pré-preenchida específica ("Olá, preciso de peças de freio para...")
- Barra fixa inferior no mobile: WhatsApp + Ligar
- CTA repetido a cada 1,5 tela de rolagem

## 9. Estratégia de conversão

Contato sem formulário longo. Mensagens pré-preenchidas por contexto reduzem o esforço. Prova social alta na página. Bloco "Como funciona" elimina a dúvida de como pedir. Formulário em `/contato` como alternativa a quem não usa WhatsApp (envio simples, sem backend nesta fase).

## 10. Mobile

Mobile-first: hero com altura controlada, CTA acima da dobra, menu em drawer, categorias em grid 2 colunas, marcas em carrossel horizontal, barra fixa de contato, alvos de toque ≥ 44px, imagens otimizadas e lazy.

## 11. SEO

Title/description únicos por rota, H1 único, HTML semântico, alt descritivo, JSON-LD `AutoPartsStore` com endereço/horário/telefone, foco em termos locais ("auto peças São José dos Campos"), sitemap e robots, canonical relativo.

## 12. Problemas de UX a evitar

Carrossel de hero, excesso de texto, telefone só em imagem, mapa pesado carregado de imediato, popups, contraste baixo em fundo escuro, animações que atrasam leitura, catálogo falso que promete busca de peça que não existe.

## 13. Imagens

Hero: oficina/balcão de peças em luz dirigida (gerada). Ícones lineares por categoria. Fotos de bancada, estoque e atendimento. Marcas como cartões tipográficos elegantes até termos os logos oficiais.

## 14. Componentes reutilizáveis

`SiteHeader`, `MobileContactBar`, `Hero`, `StatStrip`, `SectionHeading`, `CategoryCard`, `BrandCard`, `StepItem`, `FeatureCard`, `CTASection`, `LocationBlock`, `SiteFooter`, `WhatsAppButton` (variante de Button com mensagem contextual).

## 15. Tecnologias

Stack já do projeto: TanStack Start (SSR — essencial para SEO local), React 19, Tailwind v4 com tokens semânticos, shadcn/ui customizado, ícones lucide. Sem backend nesta fase: WhatsApp resolve a conversão. Lovable Cloud só se depois quiser catálogo real ou registro de leads.

## Pendências de conteúdo (uso de placeholders claros até você confirmar)

Número do WhatsApp, telefone fixo, endereço completo, horários e lista oficial de marcas.
