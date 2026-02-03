import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/FAQ";
import { aboutCopy } from "@/content/copy";
import { teamMembers } from "@/lib/constants";
import { pageMetadata } from "@/content/metadata";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
                {aboutCopy.hero.headline}
              </h1>
              <p className="text-xl mb-6 font-body text-white/90">
                {aboutCopy.hero.subhead}
              </p>
              <Button asChild size="lg" className="bg-cpec-orange hover:bg-[#b34d00]">
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/c-pec-assets/inspector-mockup.png"
                alt="C-PEC team inspecting equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-cpec-gray font-body leading-relaxed">
            {aboutCopy.mission.text}
          </p>
        </div>
      </Section>

      <Section className="bg-cpec-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-8">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutCopy.howWeWork.points.map((point, index) => (
              <Card key={index} className="border-cpec-border">
                <CardHeader>
                  <CardTitle className="text-xl text-cpec-blue font-sans">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-cpec-gray font-body">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-6">
            {aboutCopy.partnership.headline}
          </h2>
          <p className="text-lg text-cpec-gray font-body leading-relaxed">
            {aboutCopy.partnership.description}
          </p>
        </div>
      </Section> */}

      {/* <Section className="bg-cpec-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-cpec-border">
                <CardHeader>
                  <CardTitle className="text-xl text-cpec-blue font-sans">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-cpec-orange font-body font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cpec-gray font-body">{member.capability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section> */}

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-6 w-6 text-cpec-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans">
              {aboutCopy.coverage.headline}
            </h2>
          </div>
          <p className="text-lg text-cpec-gray font-body mb-6">
            We serve clients across Uganda, from Kampala to remote locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutCopy.coverage.cities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cpec-offwhite text-cpec-blue rounded-full font-body"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-cpec-offwhite">
        <FAQ faqs={aboutCopy.faq} />
      </Section>
    </>
  );
}
