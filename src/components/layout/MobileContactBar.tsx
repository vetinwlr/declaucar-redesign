import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl, telHref, whatsappMessages } from "@/lib/whatsapp";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite-line bg-graphite p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="flex gap-2">
        <a
          href={buildWhatsAppUrl(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Fale Conosco!
        </a>
        <a
          href={telHref ?? "/contato"}
          aria-label="Ligar para a loja"
          className="inline-flex size-12 items-center justify-center rounded-md border border-graphite-line text-on-graphite"
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
