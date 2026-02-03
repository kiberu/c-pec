import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/FAQ";
import { servicesCopy } from "@/content/copy";
import { services } from "@/lib/constants";
import { pageMetadata } from "@/content/metadata";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
                {servicesCopy.hero.headline}
              </h1>
              <p className="text-xl mb-6 font-body text-white/90">
                {servicesCopy.hero.subhead}
              </p>
              <Button asChild size="lg" className="bg-cpec-orange hover:bg-[#b34d00]">
                <Link href="/request-quote">{servicesCopy.hero.cta}</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/c-pec-assets/cpec-van-mockup.png"
                alt="C-PEC service vehicle"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section className="py-12 md:py-16">
        <div className="space-y-12">
          {services.map((service) => {
            const serviceCopy = servicesCopy[service.id as keyof typeof servicesCopy] as {
              name: string;
              description: string;
              includes?: string[];
              process?: string[];
              cta: string;
            };

            return (
              <Card key={service.id} className="border-cpec-border">
                <CardHeader>
                  <CardTitle className="text-3xl text-cpec-blue font-sans mb-4">
                    {serviceCopy.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-cpec-gray font-body">
                    {serviceCopy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {serviceCopy.includes && (
                    <div>
                      <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-3">
                        What It Includes
                      </h3>
                      <ul className="space-y-2">
                        {serviceCopy.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-cpec-orange flex-shrink-0 mt-0.5" />
                            <span className="text-cpec-gray font-body">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {serviceCopy.process && (
                    <div>
                      <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-3">
                        Process
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {serviceCopy.process.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpec-orange text-white font-bold text-sm font-sans">
                              {index + 1}
                            </div>
                            <span className="text-cpec-gray font-body">{step}</span>
                            {index < serviceCopy.process!.length - 1 && (
                              <span className="text-cpec-gray">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button asChild size="lg" className="bg-cpec-orange hover:bg-[#b34d00]">
                      <Link href="/request-quote">{serviceCopy.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-cpec-offwhite">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
            Our Process Timeline
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {servicesCopy.process.steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cpec-orange text-white font-bold font-sans mb-2">
                  {index + 1}
                </div>
                <span className="text-sm md:text-base text-cpec-gray font-body text-center">
                  {step}
                </span>
              </div>
              {index < servicesCopy.process.steps.length - 1 && (
                <span className="mx-2 md:mx-4 text-cpec-gray text-2xl">→</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <FAQ faqs={servicesCopy.faq} />
      </Section>
    </>
  );
}
