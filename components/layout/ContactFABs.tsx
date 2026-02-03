"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/256781773776";
const CONTACT_FORM_URL = "/contact#contact-form";

const fabBaseStyles =
  "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cpec-orange focus-visible:ring-offset-2";

export function ContactFABs() {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6"
      aria-label="Quick contact options"
    >
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={cn(fabBaseStyles, "bg-[#25D366] text-white")}
        onClick={() => analytics.trackWhatsAppClick("+256 781773776")}
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </Link>
      <Link
        href={CONTACT_FORM_URL}
        aria-label="Email us - Contact form"
        title="Contact form"
        className={cn(fabBaseStyles, "bg-cpec-orange text-white hover:bg-[#b34d00]")}
        onClick={() => analytics.trackEmailClick("contact_form_fab")}
      >
        <Mail className="h-6 w-6" aria-hidden />
      </Link>
    </div>
  );
}
