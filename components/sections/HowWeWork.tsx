import { Section } from "@/components/Section";
import { homeCopy } from "@/content/copy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HowWeWork() {
  return (
    <Section id="how-we-work">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {homeCopy.howWeWork.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {homeCopy.howWeWork.steps.map((step, index) => (
          <Card key={index} className="border-cpec-border">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cpec-orange text-white font-bold font-sans">
                  {index + 1}
                </div>
                <CardTitle className="text-xl text-cpec-blue font-sans">
                  {step.title}
                </CardTitle>
              </div>
              <CardDescription className="text-cpec-gray font-body">
                {step.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
