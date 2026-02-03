"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-cpec-border transition-all duration-300",
        isScrolled ? "h-16 shadow-sm" : "h-20"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/c-pec-assets/logos/light.png"
              alt="C-PEC Logo"
              width={300}
              height={80}
              className="w-[300px] h-20 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => analytics.trackNavigationClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cpec-orange",
                  pathname === item.href
                    ? "text-cpec-orange"
                    : "text-cpec-gray"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-cpec-orange hover:bg-[#b34d00]"
              onClick={() => analytics.trackQuoteCTA("header")}
            >
              <Link href="/request-quote">Request a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-cpec-orange",
                      pathname === item.href
                        ? "text-cpec-orange"
                        : "text-cpec-gray"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-cpec-orange hover:bg-[#b34d00] w-full mt-4">
                  <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
