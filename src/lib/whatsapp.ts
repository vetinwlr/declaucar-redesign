import { site } from "@/config/site";

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida contextual.
 * Enquanto o número não estiver confirmado, o link abre o WhatsApp
 * com a mensagem pronta para o usuário escolher o contato.
 */
export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  const number = site.whatsapp.number.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const whatsappMessages = {
  general: "Olá! Gostaria de solicitar um orçamento de peças.",
  category: (category: string) =>
    `Olá! Preciso de peças de ${category.toLowerCase()}. Meu veículo é: `,
  workshop:
    "Olá! Sou de uma oficina e gostaria de saber sobre condições de atendimento para profissionais.",
  location: "Olá! Gostaria de confirmar o endereço e o horário de atendimento.",
};

export const telHref = site.phone.number ? `tel:${site.phone.number}` : undefined;
