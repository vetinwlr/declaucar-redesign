# Declaucar Auto Peças — Redesign premium (revisão 2)

Redesign conceitual, mobile-first, com conversão via WhatsApp. Nada de conteúdo inventado: tudo não confirmado entra como placeholder marcado.

## 1. Como fugir do "template genérico"

Decisões que criam identidade própria:

- **Grade editorial assimétrica** no hero (texto 7 col / imagem 5 col sangrando à direita), não o hero centralizado padrão.
- **Régua técnica**: linhas de 1px, cantos de 4px, numeração "01 / 02 / 03" nas seções, rótulos em caixa alta com letter-spacing — vocabulário de catálogo técnico automotivo.
- **Fundos alternados grafite/claro** com uma faixa escura de dados no meio da página, criando ritmo em vez de "seções brancas empilhadas".
- **Sem**: gradiente roxo/azul, ícones 3D, blobs, cards flutuando com sombra difusa, ilustrações genéricas, badges "AI-powered".
- **Fotografia real e dirigida** (gerada com direção de arte consistente: luz lateral, fundo escuro, peças metálicas), nunca stock colorido demais.

## 2. Estrutura final da Home (ordem definitiva)

| # | Seção | Objetivo | Contribuição para conversão |
|---|---|---|---|
| 0 | **Topbar fina** — telefone + horário + "São José dos Campos" | Contato imediato | Canal direto antes mesmo do scroll |
| 1 | **Header** — logo, nav, botão WhatsApp sólido | Navegação e ação sempre visíveis | CTA persistente (sticky com fundo sólido após scroll) |
| 2 | **Hero** | Ver item 3 abaixo | Principal ponto de conversão |
| 3 | **Faixa de credibilidade** — 30+ anos · 14.000+ itens · SJC e região · atendimento técnico | Confiança em 2s | Remove objeção antes da dúvida aparecer |
| 4 | **Categorias** — cards com imagem | Mostrar amplitude do estoque | Cada card abre WhatsApp com mensagem da categoria |
| 5 | **Como funciona** — 3 passos | Eliminar atrito do pedido | Mostra que pedir orçamento leva 1 minuto |
| 6 | **Marcas** — prova de trabalho com fornecedores reconhecidos | Autoridade | Reduz medo de peça paralela/duvidosa |
| 7 | **Por que escolher a Declaucar?** — números + diferenciais | Diferenciação | Bloco escuro de alto impacto com CTA embutido |
| 8 | **Sobre** — história em timeline curta + foto | Tradição e solidez | Humaniza e valida a empresa |
| 9 | **Para oficinas e mecânicos** | Captar o público B2B | CTA próprio ("Atendimento para oficinas") |
| 10 | **Localização** — endereço, mapa, horários, como chegar | Converter busca local | Cliente da região decide visitar/ligar |
| 11 | **CTA final** — bloco escuro, WhatsApp dominante | Última conversão | Fecha a página com uma única ação |
| 12 | **Footer** — logo, contatos, endereço, horários, links, redes | Referência e SEO local | NAP consistente para busca local |
| — | **Barra fixa mobile** — WhatsApp + Ligar | Conversão contínua no celular | Sempre a um toque, some ao rolar para cima |

## 3. Hero — hierarquia visual

Ordem de leitura desenhada para 3 segundos:

1. **Eyebrow**: `AUTO PEÇAS · SÃO JOSÉ DOS CAMPOS · DESDE [ANO — PLACEHOLDER]`
2. **H1 grande e condensado**: "A peça certa para o seu carro, com quem entende do assunto há mais de 30 anos."
3. **Subheadline curta (máx. 2 linhas)**: mais de 14.000 itens em estoque — motor, freios, suspensão e muito mais, para consumidores e oficinas.
4. **CTA primário**: "Solicitar orçamento no WhatsApp" (laranja, alto contraste)
5. **CTA secundário**: "Ver categorias" (contorno)
6. **Micro-prova sob os botões**: resposta rápida no horário comercial · atendimento técnico
7. **Imagem** à direita (desktop) / abaixo com recorte 4:3 (mobile), com um card sobreposto discreto: "14.000+ itens".

Um único H1 na página. Nada mais compete com o CTA primário nessa dobra.

## 4. WhatsApp como CTA principal, sem poluir

- **Uma** cor de destaque no site inteiro é reservada ao CTA. Nada mais usa laranja cheio.
- Botão verde do WhatsApp apenas no ícone/detalhe; o botão usa o laranja da marca com o ícone do WhatsApp — evita o visual "plugin de loja".
- Frequência controlada: header, hero, fim de cada bloco-chave (categorias, diferenciais, oficinas), CTA final, barra mobile. Nada de botão flutuante redondo pulsante no desktop.
- Todos os links usam `wa.me` com **mensagem pré-preenchida contextual**, centralizada em um único helper.

## 5. Categorias

Grid de cards com foto (2 col mobile / 3-4 col desktop), imagem em tom frio e escurecido, título condensado, 3 exemplos de itens em texto pequeno, seta discreta. Hover: leve zoom da imagem (300ms) e sublinhado do título — só isso. Categorias: Motor, Freios, Suspensão, Elétrica, Filtros, Transmissão, Arrefecimento, Acessórios (as 4 últimas marcadas como *a confirmar*).

## 6. Marcas como prova de confiança

Não é parede de logos. Formato: bloco com um título forte ("Trabalhamos com as marcas em que o seu mecânico confia"), 2-3 frases sobre curadoria, garantia e originalidade, ao lado de um grid de cartões monocromáticos com o nome/logo de cada marca e o segmento ("freios", "motor"). Logos oficiais entram depois — até lá, cartões tipográficos marcados como placeholder.

## 7. "Por que escolher a Declaucar?"

Faixa escura, dois níveis:

- **Números grandes** (tipografia condensada, 4 itens): anos de mercado, itens em estoque, marcas atendidas *(placeholder)*, cidades atendidas *(placeholder)*. Animação: contagem sutil ao entrar na viewport, uma vez, respeitando `prefers-reduced-motion`.
- **Diferenciais** em 4 blocos com ícone linear: estoque próprio, atendimento técnico de verdade, agilidade na entrega regional, condições para oficinas.
- CTA ao final do bloco.

## 8. Sobre a empresa (sem paredão de texto)

Layout em duas colunas: foto real da loja/equipe + texto curto (máx. 3 parágrafos de 2 linhas), acompanhado de uma **timeline horizontal de 4 marcos** (fundação, expansão, novo endereço, hoje) — datas como placeholder. Uma citação curta do proprietário se você quiser fornecer.

## 9. Localização

Bloco de duas colunas: à esquerda endereço completo, bairro, referência de como chegar, horários por dia, telefone e WhatsApp, botões "Traçar rota" e "Ligar"; à direita mapa embutido carregado apenas sob clique (placeholder estático leve antes disso, para não pesar o mobile). Texto explícito de área atendida: São José dos Campos e cidades da região *(lista a confirmar)*.

## 10. Experiência mobile

- Barra fixa inferior com WhatsApp (primário) e Ligar; oculta enquanto o teclado está aberto.
- Header compacto de 56px, menu em drawer, CTA visível mesmo com o menu fechado.
- Hero com altura controlada: CTA sempre acima da dobra em telas de 360×640.
- Categorias 2 colunas; marcas em scroll horizontal com snap; timeline em scroll horizontal.
- Alvos de toque ≥ 44px, texto base 16px, imagens `loading="lazy"` com `aspect-ratio` fixo (zero layout shift).

## 11. Movimento

Só o que ajuda: fade-and-rise de 12px nas seções ao entrar na viewport (200-300ms), zoom sutil em imagem de card no hover, contagem dos números uma única vez, transição do header ao rolar. Tudo desativado com `prefers-reduced-motion`. Sem parallax, sem carrossel automático, sem texto animado letra a letra.

## 12. Acessibilidade e legibilidade

Contraste mínimo AA (texto sobre foto sempre com overlay sólido o bastante), foco visível em todos os interativos, um `<main>` por página, hierarquia H1→H2→H3 correta, `aria-label` em botões de ícone, links de telefone e WhatsApp com texto descritivo, largura de linha 60-75 caracteres.

## 13. SEO local

- Rotas próprias: `/`, `/produtos`, `/sobre`, `/contato` — title e description únicos.
- JSON-LD `AutoPartsStore` com nome, endereço, geo, telefone, horários, área atendida (preenchido só com dados confirmados).
- NAP idêntico em footer, contato e JSON-LD.
- Termos alvo: "auto peças São José dos Campos", "peças automotivas SJC", "peças de freio/motor/suspensão São José dos Campos".
- H1 com intenção local, alt descritivo, sitemap.xml e robots.txt, canonical relativo, imagens comprimidas.
- Recomendação fora do código: Google Business Profile atualizado — é o maior fator de conversão local.

## 14. Paleta

| Token | Cor | Uso |
|---|---|---|
| `graphite-900` | `#0E1114` | Fundos escuros, header sticky |
| `graphite-800` | `#171C21` | Superfícies escuras, cards |
| `steel-500` | `#5B6672` | Texto secundário sobre escuro |
| `paper-50` | `#F6F7F8` | Fundo claro |
| `white` | `#FFFFFF` | Cards claros |
| `orange-500` | `#F26B21` | **Exclusivo de CTA** |
| `orange-600` | `#D2540F` | Hover |
| `whats-500` | `#25D366` | Apenas ícone/detalhe WhatsApp |

Tudo convertido para `oklch` em tokens semânticos (`--primary`, `--surface`, `--accent`…) em `src/styles.css`. Nenhuma cor literal em componente.

## 15. Tipografia — duas opções

**Opção A (recomendada) — Archivo + Inter Tight.** Archivo (e Archivo Narrow nos números) tem estrutura industrial, quase de placa e catálogo de peças; Inter Tight mantém o corpo de texto neutro e altamente legível no celular. Resultado: forte, técnico, atemporal — combina com "tradicional que se moderniza".

**Opção B — Barlow Condensed + Source Sans 3.** Mais esportiva e "oficina", com títulos bem estreitos. Ganha em impacto, perde em sobriedade e fica mais próxima do visual comum de sites de performance/tuning.

Recomendo **A**: o objetivo é confiança e tradição, não velocidade e adrenalina.

## 16. Organização do código (reutilizável em outros clientes)

```text
src/
  config/site.ts           # NAP, WhatsApp, horários, links — TODO_CONFIRMAR marcado
  content/home.ts          # todos os textos, números e listas da home
  lib/whatsapp.ts          # buildWhatsAppUrl(context)
  components/layout/       # SiteHeader, MobileContactBar, SiteFooter, Section, Container
  components/ui-blocks/    # SectionHeading, StatItem, CategoryCard, BrandCard, StepItem,
                           # FeatureCard, CTABanner, Timeline, LocationCard, Reveal
  routes/                  # index, produtos, sobre, contato
```

Regra: componentes não conhecem o cliente — recebem conteúdo por props, lendo de `content/` e `config/`. Trocar `config/site.ts`, `content/` e os tokens de `styles.css` gera um site de outro cliente com a mesma base.

## 17. Placeholders (nada inventado)

Marcados no código com `TODO_CONFIRMAR` e visíveis na interface como texto entre colchetes:

- `[WHATSAPP]` número · `[TELEFONE]` fixo · `[EMAIL]`
- `[ENDEREÇO COMPLETO]`, bairro, CEP
- `[HORÁRIOS]` por dia da semana
- `[ANO DE FUNDAÇÃO]` e marcos da timeline
- `[LISTA DE MARCAS]` oficiais
- `[CIDADES ATENDIDAS]`
- `[REDES SOCIAIS]`
- Fotos reais da loja/equipe (até lá, imagens geradas com direção de arte coerente, marcadas como provisórias)

Os números 30+ anos e 14.000+ itens vêm do site atual e serão usados como estão — confirme se seguem corretos.
