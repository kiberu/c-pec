import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { homeCopy } from "@/content/copy";
import { CheckCircle2 } from "lucide-react";

export function ServicesOverview() {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {homeCopy.ourServices.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {homeCopy.ourServices.services.map((service) => (
          <Card key={service.name} className="border-cpec-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start space-x-3 mb-2">
                <CheckCircle2 className="h-6 w-6 text-cpec-orange flex-shrink-0 mt-1" />
                <CardTitle className="text-xl text-cpec-blue font-sans">
                  {service.name}
                </CardTitle>
              </div>
              <CardDescription className="text-cpec-gray font-body">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-cpec-orange hover:bg-[#b34d00]">
                <Link href="/services">{homeCopy.ourServices.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
