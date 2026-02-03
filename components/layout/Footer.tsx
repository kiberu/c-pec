import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Request Quote", href: "/request-quote" },
];

const serviceAreas = ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"];

export function Footer() {
  return (
    <footer className="bg-cpec-blue text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Image
              src="/c-pec-assets/logos/dark.png"
              alt="C-PEC Logo"
              width={200}
              height={70}
              className="h-16 md:h-20 w-auto"
            />
            <p className="text-sm text-white/80 font-body">
              Power continuity and voltage protection for institutions and factories across Uganda
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans">Service Areas</h3>
            <p className="text-sm text-white/80 font-body mb-2">
              Nationwide Coverage - Uganda
            </p>
            <ul className="space-y-1">
              {serviceAreas.map((city) => (
                <li key={city} className="text-sm text-white/80 font-body">
                  {city}
                </li>
              ))}
              <li className="text-sm text-white/80 font-body">and more</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+256757157479"
                  className="flex items-center space-x-2 text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                >
                  <Phone className="h-4 w-4" />
                  <span>+256 757157479</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+256700930363"
                  className="flex items-center space-x-2 text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                >
                  <Phone className="h-4 w-4" />
                  <span>+256 700930363</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/256781773776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>+256 781773776</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@c-pec.com"
                  className="flex items-center space-x-2 text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@c-pec.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.c-pec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-white/80 hover:text-cpec-orange transition-colors font-body"
                >
                  <Globe className="h-4 w-4" />
                  <span>www.c-pec.com</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-start space-x-2 text-sm text-white/80 font-body">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Kamure Park Building, PLOT 128 OLD KIRA ROAD, BUKOTO FLOOR 1, OFFICE 3
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60 font-body">
              © {new Date().getFullYear()} Crown Power & Equipment Company Limited (C-PEC). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
