/**
 * ============================================================================
 * REGISTRO CENTRAL DE IMAGENS — Declaucar Auto Peças
 * ============================================================================
 *
 * TODAS as imagens do site são declaradas aqui. Nenhum componente deve importar
 * um arquivo de imagem diretamente.
 *
 * ⚠️ STATUS ATUAL: todas as imagens abaixo são PROVISÓRIAS (geradas por IA,
 * `status: "placeholder"`). Elas existem apenas para preservar o layout até que
 * as fotografias reais da Declaucar sejam entregues.
 *
 * ----------------------------------------------------------------------------
 * COMO SUBSTITUIR POR UMA FOTOGRAFIA REAL (passo a passo)
 * ----------------------------------------------------------------------------
 * 1. Salve a foto real em `src/assets/` usando o MESMO nome do arquivo atual
 *    (ex.: `hero-balcao.jpg`) — assim nada mais precisa ser alterado; ou use um
 *    nome novo e atualize apenas o `import` no topo deste arquivo.
 * 2. Respeite a proporção indicada em `aspect` e a largura mínima em `minWidth`.
 *    O recorte é `object-cover`, então o layout NÃO muda: tamanho, proporção e
 *    estrutura dos cards permanecem exatamente iguais.
 * 3. Troque `status: "placeholder"` por `status: "real"` naquela entrada.
 *    Isso remove automaticamente os avisos de "imagem provisória" exibidos no site.
 * 4. Ajuste o `alt` para descrever a foto real (importante para SEO e acessibilidade).
 *
 * Dica: `pendingPhotos()` lista, em tempo de execução, tudo que ainda falta.
 * ============================================================================
 */

import catArrefecimento from "@/assets/cat-arrefecimento.jpg";
import catEletrica from "@/assets/cat-eletrica.jpg";
import catFiltros from "@/assets/cat-filtros.jpg";
import catFreios from "@/assets/cat-freios.jpg";
import catMotor from "@/assets/cat-motor.jpg";
import catSuspensao from "@/assets/cat-suspensao.jpg";
import catTransmissao from "@/assets/cat-transmissao.jpg";
import heroBalcao from "@/assets/hero-balcao.jpg";
import sobreLoja from "@/assets/sobre-loja.jpg";

export type ImageStatus = "placeholder" | "real";

export type SiteImageSlot = {
  /** Arquivo atualmente exibido. */
  src: string;
  /** Texto alternativo (SEO + acessibilidade). Atualizar junto com a foto real. */
  alt: string;
  /** Proporção esperada — não alterar ao trocar a foto. */
  aspect: "4/3" | "3/4" | "16/9" | "1/1";
  /** Largura mínima recomendada do arquivo, em pixels. */
  minWidth: number;
  /** Dimensões usadas nos atributos width/height do <img>. */
  width: number;
  height: number;
  /** "placeholder" = imagem provisória de IA · "real" = fotografia da empresa. */
  status: ImageStatus;
  /** Onde a imagem aparece no site. */
  usedIn: string[];
  /** Orientação para o fotógrafo / seleção da foto real. */
  brief: string;
};

export const siteImages = {
  /** HERO da home — a imagem mais importante do site. */
  hero: {
    src: heroBalcao,
    alt: "Balcão de atendimento da Declaucar com discos de freio e peças automotivas",
    aspect: "3/4",
    minWidth: 1280,
    width: 1280,
    height: 1600,
    status: "placeholder",
    usedIn: ["src/routes/index.tsx — seção Hero"],
    brief:
      "Fachada ou balcão de atendimento real, com atendente e cliente. Vertical no desktop; luz natural; evitar poses artificiais.",
  },

  /** Foto institucional usada na home e na página /sobre. */
  sobre: {
    src: sobreLoja,
    alt: "Interior da loja de auto peças com prateleiras organizadas e atendimento no balcão",
    aspect: "4/3",
    minWidth: 1200,
    width: 1200,
    height: 912,
    status: "placeholder",
    usedIn: ["src/routes/index.tsx — seção Sobre", "src/routes/sobre.tsx — bloco de história"],
    brief:
      "Interior da loja, estoque ou equipe. Mostrar volume de peças e organização — reforça os 30+ anos e os 14.000+ itens.",
  },

  // --- Cards de categoria (grade de 4 colunas — proporção 4/3 obrigatória) ---
  categoriaMotor: {
    src: catMotor,
    alt: "Peças de motor: juntas, correias e kits de distribuição",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Detalhe real de peças de motor em estoque, fundo escuro e neutro.",
  },
  categoriaFreios: {
    src: catFreios,
    alt: "Peças de freio: pastilhas, discos e tambores",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Discos e pastilhas reais na prateleira ou no balcão.",
  },
  categoriaSuspensao: {
    src: catSuspensao,
    alt: "Peças de suspensão: amortecedores, molas e pivôs",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Amortecedores e molas reais em exposição.",
  },
  categoriaEletrica: {
    src: catEletrica,
    alt: "Peças elétricas: alternadores, velas e sensores",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Componentes elétricos reais; confirmar antes se a categoria é atendida.",
  },
  categoriaFiltros: {
    src: catFiltros,
    alt: "Filtros automotivos de óleo, ar, combustível e cabine",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Filtros reais em caixa/prateleira, com marcas visíveis se autorizado.",
  },
  categoriaTransmissao: {
    src: catTransmissao,
    alt: "Peças de transmissão: embreagens, homocinéticas e rolamentos",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Kit de embreagem ou homocinética reais.",
  },
  categoriaArrefecimento: {
    src: catArrefecimento,
    alt: "Peças de arrefecimento: radiadores, bombas d'água e válvulas termostáticas",
    aspect: "4/3",
    minWidth: 800,
    width: 800,
    height: 600,
    status: "placeholder",
    usedIn: ["src/content/home.ts → categories", "home e /produtos"],
    brief: "Radiador ou bomba d'água reais em estoque.",
  },
} satisfies Record<string, SiteImageSlot>;

export type SiteImageKey = keyof typeof siteImages;

/** Aviso padrão exibido abaixo de imagens ainda provisórias. */
export const placeholderNotice =
  "Imagem provisória — substituir por fotografia real da loja e da equipe.";

export const isPlaceholder = (key: SiteImageKey) => siteImages[key].status === "placeholder";

/** Lista das imagens que ainda aguardam fotografia real. */
export const pendingPhotos = () =>
  (Object.keys(siteImages) as SiteImageKey[]).filter(isPlaceholder);
