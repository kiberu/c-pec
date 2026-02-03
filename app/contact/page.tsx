"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactCopy } from "@/content/copy";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { FAQ } from "@/components/sections/FAQ";
import { analytics } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackFormSubmit("contact");
    toast.success(contactCopy.form.successMessage);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      productInterest: "",
    });
  };

  return (
    <>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
              {contactCopy.hero.headline}
            </h1>
            <p className="text-xl mb-6 font-body text-white/90">
              {contactCopy.hero.subhead}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cpec-orange hover:bg-[#b34d00]"
              onClick={() => analytics.trackQuoteCTA("contact_hero")}
            >
              <Link href="/request-quote">{contactCopy.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="border-cpec-border">
              <CardHeader>
                <CardTitle className="text-2xl text-cpec-blue font-sans">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`tel:${contactCopy.contact.phone.split(" / ")[0].replace(/\s/g, "")}`}
                  onClick={() => analytics.trackPhoneClick(contactCopy.contact.phone)}
                  className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
                >
                  <Phone className="h-5 w-5" />
                  <span>{contactCopy.contact.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${contactCopy.contact.whatsapp.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackWhatsAppClick(contactCopy.contact.whatsapp)}
                  className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{contactCopy.contact.whatsapp}</span>
                </a>
                <a
                  href={`mailto:${contactCopy.contact.email}`}
                  onClick={() => analytics.trackEmailClick(contactCopy.contact.email)}
                  className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
                >
                  <Mail className="h-5 w-5" />
                  <span>{contactCopy.contact.email}</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-cpec-border">
              <CardHeader>
                <CardTitle className="text-2xl text-cpec-blue font-sans">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 text-cpec-gray font-body">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{contactCopy.contact.address}</span>
                </div>
                {/* <div className="mt-4 h-64 bg-cpec-offwhite rounded-md flex items-center justify-center">
                  <p className="text-cpec-gray font-body">Map placeholder - Google Maps embed would go here</p>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <Card className="border-cpec-border">
            <CardHeader>
              <CardTitle className="text-2xl text-cpec-blue font-sans">Inquiry Form</CardTitle>
              <CardDescription className="font-body">
                Fill out the form and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.nameLabel}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.emailLabel}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.phoneLabel}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.companyLabel}
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.productInterestLabel}
                  </label>
                  <Select value={formData.productInterest} onValueChange={(value) => setFormData({ ...formData, productInterest: value })}>
                    <SelectTrigger className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20">
                      <SelectValue placeholder="Select product interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="generators">Generators</SelectItem>
                      <SelectItem value="stabilizers">Stabilizers</SelectItem>
                      <SelectItem value="ups">UPS Systems</SelectItem>
                      <SelectItem value="transformers">Transformers</SelectItem>
                      <SelectItem value="changeovers">Changeovers & Isolators</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                    {contactCopy.form.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                  />
                </div>
                <Button type="submit" className="w-full bg-cpec-orange hover:bg-[#b34d00]">
                  {contactCopy.form.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-cpec-offwhite">
        <Card className="border-cpec-border max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 justify-center">
              <CheckCircle2 className="h-6 w-6 text-cpec-orange" />
              <p className="text-lg text-cpec-gray font-body">
                {contactCopy.quickResponse.text}
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <FAQ faqs={contactCopy.faq} />
      </Section>
    </>
  );
}
