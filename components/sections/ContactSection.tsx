"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { homeCopy } from "@/content/copy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Section id="contact" className="bg-cpec-offwhite">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {homeCopy.talkToUs.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <Card className="border-cpec-border">
            <CardHeader>
              <CardTitle className="text-xl text-cpec-blue font-sans">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={`tel:${homeCopy.talkToUs.phone.split(" / ")[0].replace(/\s/g, "")}`}
                className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
              >
                <Phone className="h-5 w-5" />
                <span>{homeCopy.talkToUs.phone}</span>
              </a>
              <a
                href={`https://wa.me/${homeCopy.talkToUs.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{homeCopy.talkToUs.whatsapp}</span>
              </a>
              <a
                href={`mailto:${homeCopy.talkToUs.email}`}
                className="flex items-center space-x-3 text-cpec-gray hover:text-cpec-orange transition-colors font-body"
              >
                <Mail className="h-5 w-5" />
                <span>{homeCopy.talkToUs.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-cpec-gray font-body">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>{homeCopy.talkToUs.address}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Form */}
        <Card className="border-cpec-border">
          <CardHeader>
            <CardTitle className="text-xl text-cpec-blue font-sans">Request a Quote</CardTitle>
            <CardDescription className="font-body">
              Fill out the form and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                  Name *
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
                <label htmlFor="phone" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                  Phone *
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
                <label htmlFor="message" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                  Message *
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
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
