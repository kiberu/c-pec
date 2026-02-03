import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productsCopy } from "@/content/copy";
import { products } from "@/lib/constants";
import { pageMetadata } from "@/content/metadata";
import Link from "next/link";

// Map product IDs to image paths
const productImages: Record<string, string> = {
  generators: "/c-pec-assets/products/product-diesel-generator.png",
  stabilizers: "/c-pec-assets/products/product-stabilizer.png",
  ups: "/c-pec-assets/products/product-online-UPS.png",
  transformers: "/c-pec-assets/products/product-oil-transformer.png",
  changeovers: "/c-pec-assets/products/product-ats-switch.png",
};

export const metadata: Metadata = pageMetadata.products;

export default function ProductsPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
              {productsCopy.hero.headline}
            </h1>
            <p className="text-xl mb-6 font-body text-white/90">
              {productsCopy.hero.subhead}
            </p>
            <Button asChild size="lg" className="bg-cpec-orange hover:bg-[#b34d00]">
              <Link href="/request-quote">{productsCopy.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="py-12 md:py-16">
        <Tabs defaultValue="generators" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="generators" className="text-sm">Generators</TabsTrigger>
            <TabsTrigger value="stabilizers" className="text-sm">Stabilizers</TabsTrigger>
            <TabsTrigger value="ups" className="text-sm">UPS</TabsTrigger>
            <TabsTrigger value="transformers" className="text-sm">Transformers</TabsTrigger>
            <TabsTrigger value="changeovers" className="text-sm">Changeovers</TabsTrigger>
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-8">
              <Card className="border-cpec-border">
                <CardHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <CardTitle className="text-3xl text-cpec-blue font-sans mb-4">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-cpec-gray font-body">
                        {product.description}
                      </CardDescription>
                    </div>
                    {productImages[product.id] && (
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                        <Image
                          src={productImages[product.id]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-2">
                      Types
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.types.map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1 bg-cpec-offwhite text-cpec-blue rounded-full text-sm font-body"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-2">
                      Capacity Range
                    </h3>
                    <p className="text-cpec-gray font-body">{product.capacityRange}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-2">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-cpec-gray font-body">
                      {product.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-2">
                      Use Cases
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-cpec-gray font-body">
                      {product.useCases.map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                      ))}
                    </ul>
                  </div>

                  {product.id === "stabilizers" && (
                    <div>
                      <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-4">
                        Specifications
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-cpec-border">
                          <thead>
                            <tr className="bg-cpec-offwhite">
                              <th className="border border-cpec-border p-3 text-left font-sans text-cpec-blue">
                                Series
                              </th>
                              <th className="border border-cpec-border p-3 text-left font-sans text-cpec-blue">
                                Input Voltage Range
                              </th>
                              <th className="border border-cpec-border p-3 text-left font-sans text-cpec-blue">
                                Output Voltage
                              </th>
                              <th className="border border-cpec-border p-3 text-left font-sans text-cpec-blue">
                                Capacity Range
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                SVC Single-Phase
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                150-250V AC
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                220V AC ±3%
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                0.5-30 kVA
                              </td>
                            </tr>
                            <tr className="bg-cpec-offwhite">
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                SVC Three-Phase
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                280-430V AC
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                380V AC ±3%
                              </td>
                              <td className="border border-cpec-border p-3 font-body text-cpec-gray">
                                3-100 kVA
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button asChild size="lg" className="bg-cpec-orange hover:bg-[#b34d00]">
                      <Link href="/request-quote">{product.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      <FAQ faqs={productsCopy.faq} />
    </>
  );
}
