/**
 * Configuração do cliente.
 * Trocar este arquivo (+ src/content/* e os tokens de src/styles.css)
 * adapta toda a base para outro cliente.
 *
 * TODO_CONFIRMAR: todos os campos marcados com PLACEHOLDER precisam ser
 * substituídos pelos dados reais antes da publicação.
 */

export const site = {
  name: "Declaucar Auto Peças",
  shortName: "Declaucar",
  tagline: "Auto peças em São José dos Campos",
  city: "São José dos Campos",
  state: "SP",

  /** PLACEHOLDER — número real do WhatsApp (formato internacional, só dígitos) */
  whatsapp: {
    number: "", // TODO_CONFIRMAR ex.: "5512999999999"
    display: "[WHATSAPP A CONFIRMAR]",
  },

  /** PLACEHOLDER — telefone fixo */
  phone: {
    number: "", // TODO_CONFIRMAR ex.: "+551239999999"
    display: "[TELEFONE A CONFIRMAR]",
  },

  /** PLACEHOLDER — e-mail comercial */
  email: "[E-MAIL A CONFIRMAR]", // TODO_CONFIRMAR

  address: {
    street: "[ENDEREÇO COMPLETO A CONFIRMAR]", // TODO_CONFIRMAR
    district: "[BAIRRO A CONFIRMAR]", // TODO_CONFIRMAR
    city: "São José dos Campos",
    state: "SP",
    zip: "[CEP A CONFIRMAR]", // TODO_CONFIRMAR
  },

  /** PLACEHOLDER — horários reais de atendimento */
  hours: [
    { days: "Segunda a sexta", time: "[HORÁRIO A CONFIRMAR]" }, // TODO_CONFIRMAR
    { days: "Sábado", time: "[HORÁRIO A CONFIRMAR]" }, // TODO_CONFIRMAR
    { days: "Domingo e feriados", time: "[A CONFIRMAR]" }, // TODO_CONFIRMAR
  ],

  /** PLACEHOLDER — cidades atendidas além de SJC */
  serviceArea: "São José dos Campos e região [CIDADES A CONFIRMAR]", // TODO_CONFIRMAR

  /** PLACEHOLDER — redes sociais */
  social: [
    { label: "Instagram", href: "" }, // TODO_CONFIRMAR
    { label: "Facebook", href: "" }, // TODO_CONFIRMAR
  ],

  nav: [
    { label: "Produtos", to: "/produtos" as const },
    { label: "Sobre", to: "/sobre" as const },
    { label: "Contato", to: "/contato" as const },
  ],
};

export type Site = typeof site;
