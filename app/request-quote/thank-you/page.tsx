import Link from "next/link";
import { Section } from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { quoteCopy } from "@/content/copy";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl text-center">
            <CheckCircle2 className="h-16 w-16 mx-auto mb-6 text-cpec-orange" />
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
              {quoteCopy.thankYou.headline}
            </h1>
            <p className="text-xl mb-6 font-body text-white/90">
              {quoteCopy.thankYou.message}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="border-cpec-border">
            <CardHeader>
              <CardTitle className="text-2xl text-cpec-blue font-sans">
                {quoteCopy.thankYou.nextSteps.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {quoteCopy.thankYou.nextSteps.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpec-orange text-white font-bold text-sm font-sans flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-cpec-gray font-body pt-1">{step}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="border-cpec-orange text-cpec-orange hover:bg-cpec-orange hover:text-white">
                  <Link href="/products">{quoteCopy.thankYou.ctas.browseProducts}</Link>
                </Button>
                <Button asChild variant="outline" className="border-cpec-orange text-cpec-orange hover:bg-cpec-orange hover:text-white">
                  <Link href="/services">{quoteCopy.thankYou.ctas.learnServices}</Link>
                </Button>
                <Button asChild variant="outline" className="border-cpec-orange text-cpec-orange hover:bg-cpec-orange hover:text-white">
                  <Link href="/contact">{quoteCopy.thankYou.ctas.contactUs}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
