import { Section } from "@/components/Section";
import { homeCopy } from "@/content/copy";
import { CheckCircle2 } from "lucide-react";

export function WhyCpec() {
  return (
    <Section id="why-cpec" className="bg-cpec-offwhite">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {homeCopy.whyCpec.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {homeCopy.whyCpec.points.map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="h-6 w-6 text-cpec-orange flex-shrink-0 mt-1" />
            <p className="text-cpec-gray font-body text-lg">{point}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
