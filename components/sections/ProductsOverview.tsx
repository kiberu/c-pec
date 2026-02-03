import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { homeCopy } from "@/content/copy";
import { Zap, Shield, Battery, Gauge, Power } from "lucide-react";

const productImageMap: Record<string, string> = {
  Generators: "/c-pec-assets/products/product-generator.png",
  "Voltage Stabilizers": "/c-pec-assets/products/product-stabilizer.png",
  "UPS Systems": "/c-pec-assets/products/product-ups.png",
  Transformers: "/c-pec-assets/products/product-transformer-indoor.png",
  "Changeovers & Isolators": "/c-pec-assets/products/product-manual-switch.png",
};

const productIcons = {
  Generators: Zap,
  "Voltage Stabilizers": Shield,
  "UPS Systems": Battery,
  Transformers: Gauge,
  "Changeovers & Isolators": Power,
};

export function ProductsOverview() {
  return (
    <Section id="products" className="bg-cpec-offwhite">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {homeCopy.whatWeDo.headline}
        </h2>
        <p className="text-lg text-cpec-gray font-body max-w-2xl mx-auto">
          {homeCopy.whatWeDo.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {homeCopy.whatWeDo.products.map((product) => {
          const Icon = productIcons[product.name as keyof typeof productIcons] || Zap;
          const productImage = productImageMap[product.name];
          return (
            <Card key={product.name} className="border-cpec-border hover:shadow-lg transition-shadow overflow-hidden">
              {productImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={productImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-cpec-orange/10 rounded-md">
                    <Icon className="h-6 w-6 text-cpec-orange" />
                  </div>
                  <CardTitle className="text-xl text-cpec-blue font-sans">
                    {product.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-cpec-gray font-body">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-cpec-orange text-cpec-orange hover:bg-cpec-orange hover:text-white">
                  <Link href="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
