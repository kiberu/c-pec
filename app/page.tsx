import { Hero } from "@/components/sections/Hero";
import { ProductsOverview } from "@/components/sections/ProductsOverview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyCpec } from "@/components/sections/WhyCpec";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { homeCopy } from "@/content/copy";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <ServicesOverview />
      <WhyCpec />
      <HowWeWork />
      <ContactSection />
      <FAQ faqs={homeCopy.faq} />
    </>
  );
}
