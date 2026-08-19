import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

/**
 * Botão flutuante "Fale Conosco!" — visível em telas médias para cima.
 * No mobile, a MobileContactBar (barra inferior fixa) já oferece o mesmo
 * acesso ao WhatsApp, evitando sobreposição e poluição visual.
 *
 * O link abre uma conversa no WhatsApp com mensagem pré-preenchida. Quando o
 * número oficial for confirmado em src/config/site.ts, o botão passa a abrir
 * a conversa diretamente com a Declaucar; até lá, abre o WhatsApp com a
 * mensagem pronta para o usuário escolher o contato.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-5 bottom-5 z-50 hidden items-center gap-2.5 rounded-full bg-brand px-5 py-3.5 font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex"
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap text-base">Fale Conosco!</span>
      <span
        aria-hidden="true"
        className="absolute -top-1 -right-1 flex size-3.5"
      >
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-foreground/70 opacity-75" />
        <span className="relative inline-flex size-3.5 rounded-full bg-brand-foreground" />
      </span>
    </a>
  );
}
