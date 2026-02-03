"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { homeCopy } from "@/content/copy";
import { analytics } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white overflow-hidden py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 leading-tight">
              {homeCopy.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-body text-white/90">
              {homeCopy.hero.subhead}
            </p>
            <p className="text-lg mb-8 font-body text-white/80">
              {homeCopy.hero.firstSentence}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cpec-orange hover:bg-[#b34d00] text-white"
              onClick={() => analytics.trackQuoteCTA("hero")}
            >
              <Link href="/request-quote">{homeCopy.hero.cta}</Link>
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/c-pec-assets/staff-inspecting-generator.png"
              alt="C-PEC technician inspecting generator"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cpec-blue via-cpec-blue/80 to-transparent z-0" />
    </section>
  );
}
