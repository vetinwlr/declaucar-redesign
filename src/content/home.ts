import catMotor from "@/assets/cat-motor.jpg";
import catFreios from "@/assets/cat-freios.jpg";
import catSuspensao from "@/assets/cat-suspensao.jpg";
import catEletrica from "@/assets/cat-eletrica.jpg";
import catFiltros from "@/assets/cat-filtros.jpg";
import catTransmissao from "@/assets/cat-transmissao.jpg";
import catArrefecimento from "@/assets/cat-arrefecimento.jpg";

export const hero = {
  eyebrow: "Auto peças · São José dos Campos · desde [ANO A CONFIRMAR]",
  title: "A peça certa para o seu carro, com quem entende do assunto há mais de 30 anos.",
  subtitle:
    "Mais de 14.000 itens em estoque — motor, freios, suspensão e muito mais. Atendemos consumidores e oficinas em São José dos Campos e região.",
  microProof: ["Atendimento técnico especializado", "Resposta rápida no horário comercial"],
  badge: { value: "14.000+", label: "itens disponíveis" },
};

export const credibility = [
  { value: "30+", label: "anos de mercado" },
  { value: "14.000+", label: "itens em estoque" },
  { value: "SJC", label: "e região atendida" },
  { value: "B2B", label: "atendimento a oficinas" },
];

export const categories = [
  {
    name: "Motor",
    image: catMotor,
    items: "Juntas, bombas, correias, kits de distribuição",
    confirmed: true,
  },
  {
    name: "Freios",
    image: catFreios,
    items: "Pastilhas, discos, tambores, cilindros",
    confirmed: true,
  },
  {
    name: "Suspensão",
    image: catSuspensao,
    items: "Amortecedores, molas, bandejas, pivôs",
    confirmed: true,
  },
  {
    name: "Elétrica",
    image: catEletrica,
    items: "Alternadores, velas, sensores, chicotes",
    confirmed: false,
  },
  {
    name: "Filtros",
    image: catFiltros,
    items: "Óleo, ar, combustível, cabine",
    confirmed: false,
  },
  {
    name: "Transmissão",
    image: catTransmissao,
    items: "Embreagens, homocinéticas, rolamentos",
    confirmed: false,
  },
  {
    name: "Arrefecimento",
    image: catArrefecimento,
    items: "Radiadores, bombas d'água, válvulas termostáticas",
    confirmed: false,
  },
];

export const steps = [
  {
    title: "Envie a peça e o veículo",
    text: "Mande no WhatsApp o modelo, ano e a peça que você precisa. Uma foto também ajuda.",
  },
  {
    title: "Conferimos a disponibilidade",
    text: "Nossa equipe verifica a aplicação correta no estoque e confirma a compatibilidade.",
  },
  {
    title: "Você recebe o orçamento",
    text: "Preço, prazo e opções de marca. Sem cadastro e sem formulário longo.",
  },
];

export const brands = {
  title: "Trabalhamos com as marcas em que o seu mecânico confia",
  text: [
    "Nossa curadoria prioriza fabricantes reconhecidos no mercado de reposição, com aplicação correta e garantia.",
    "Quando existe mais de uma opção para a mesma peça, apresentamos as alternativas e explicamos a diferença — para você decidir com clareza.",
  ],
  // PLACEHOLDER — lista oficial de marcas a confirmar
  list: [
    { name: "[MARCA 1]", segment: "motor" },
    { name: "[MARCA 2]", segment: "freios" },
    { name: "[MARCA 3]", segment: "suspensão" },
    { name: "[MARCA 4]", segment: "elétrica" },
    { name: "[MARCA 5]", segment: "filtros" },
    { name: "[MARCA 6]", segment: "transmissão" },
    { name: "[MARCA 7]", segment: "arrefecimento" },
    { name: "[MARCA 8]", segment: "geral" },
  ],
};

export const stats = [
  { value: 30, suffix: "+", label: "anos de mercado" },
  { value: 14000, suffix: "+", label: "itens em estoque" },
  { value: 0, suffix: "", label: "marcas atendidas [A CONFIRMAR]" },
  { value: 0, suffix: "", label: "cidades atendidas [A CONFIRMAR]" },
];

export const differentials = [
  {
    icon: "boxes" as const,
    title: "Estoque próprio",
    text: "Grande volume de itens disponíveis para retirada imediata, sem espera desnecessária.",
  },
  {
    icon: "wrench" as const,
    title: "Atendimento técnico",
    text: "Equipe que conhece aplicação de peça e ajuda a identificar o item correto.",
  },
  {
    icon: "truck" as const,
    title: "Agilidade na região",
    text: "Atendimento rápido para São José dos Campos e cidades vizinhas.",
  },
  {
    icon: "handshake" as const,
    title: "Condições para oficinas",
    text: "Atendimento dedicado a mecânicos e oficinas parceiras. [CONDIÇÕES A CONFIRMAR]",
  },
];

export const about = {
  paragraphs: [
    "A Declaucar nasceu como uma loja de bairro dedicada a resolver o problema de quem precisava de uma peça específica e não encontrava.",
    "Mais de três décadas depois, a estrutura cresceu, o estoque passou de 14.000 itens e o atendimento continua sendo feito por gente que entende de carro.",
    "Hoje atendemos tanto o motorista quanto as oficinas da região, com a mesma atenção do primeiro dia.",
  ],
  timeline: [
    { year: "[ANO]", title: "Fundação", text: "Início das atividades em São José dos Campos." },
    { year: "[ANO]", title: "Expansão do estoque", text: "Ampliação das linhas atendidas." },
    { year: "[ANO]", title: "Nova estrutura", text: "Mudança para a estrutura atual." },
    { year: "Hoje", title: "14.000+ itens", text: "Atendimento a consumidores e oficinas." },
  ],
};
