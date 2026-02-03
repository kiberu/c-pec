"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { quoteCopy, ctaBank } from "@/content/copy";
import { validateQuoteForm, type FormErrors } from "@/lib/validations";
import { analytics } from "@/lib/analytics";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function RequestQuotePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    productInterest: [] as string[],
    applicationType: "",
    capacity: "",
    timeline: "",
    message: "",
  });

  const handleProductInterestChange = (product: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        productInterest: [...formData.productInterest, product],
      });
    } else {
      setFormData({
        ...formData,
        productInterest: formData.productInterest.filter((p) => p !== product),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validateQuoteForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      productInterest: formData.productInterest,
      applicationType: formData.applicationType,
      timeline: formData.timeline,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      analytics.trackFormError("quote_request", Object.keys(validationErrors)[0]);
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Track form submission
    analytics.trackFormSubmit("quote_request");

    // In a real app, you would send the data to your API here
    console.log("Form data:", formData);

    setIsSubmitting(false);
    router.push("/request-quote/thank-you");
  };

  return (
    <>
      <section className="relative min-h-[300px] flex items-center bg-gradient-to-br from-cpec-blue to-cpec-blue/90 text-white pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
              {quoteCopy.hero.headline}
            </h1>
            <p className="text-xl mb-6 font-body text-white/90">
              {quoteCopy.hero.subhead}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="border-cpec-border">
            <CardHeader>
              <CardTitle className="text-2xl text-cpec-blue font-sans">Quote Request Form</CardTitle>
              <CardDescription className="font-body">
                Please fill out the form below. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-4">
                    {quoteCopy.form.contactInfoHeader}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.nameLabel}
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                          errors.name ? "border-cpec-error" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.emailLabel}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                          errors.email ? "border-cpec-error" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.phoneLabel}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                          errors.phone ? "border-cpec-error" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.companyLabel}
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.locationLabel}
                      </label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                          errors.location ? "border-cpec-error" : ""
                        }`}
                      />
                      {errors.location && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.location}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-4">
                    {quoteCopy.form.projectDetailsHeader}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.productInterestLabel}
                      </label>
                      <div className="space-y-2">
                        {["Generators", "Voltage Stabilizers", "UPS Systems", "Transformers", "Changeovers & Isolators", "General Inquiry"].map(
                          (product) => (
                            <div key={product} className="flex items-center space-x-2">
                              <Checkbox
                                id={product}
                                checked={formData.productInterest.includes(product)}
                                onCheckedChange={(checked) =>
                                  handleProductInterestChange(product, checked === true)
                                }
                              />
                              <label
                                htmlFor={product}
                                className="text-sm text-cpec-gray font-body cursor-pointer"
                              >
                                {product}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                      {errors.productInterest && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.productInterest}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="applicationType" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.applicationTypeLabel}
                      </label>
                      <Select
                        value={formData.applicationType}
                        onValueChange={(value) => setFormData({ ...formData, applicationType: value })}
                      >
                        <SelectTrigger
                          className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                            errors.applicationType ? "border-cpec-error" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select application type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="factory">Factory/Industrial</SelectItem>
                          <SelectItem value="institution">Institution (School/Hospital/Office)</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.applicationType && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.applicationType}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="capacity" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.capacityLabel}
                      </label>
                      <Input
                        id="capacity"
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        placeholder={quoteCopy.form.capacityPlaceholder}
                        className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                        {quoteCopy.form.timelineLabel}
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger
                          className={`border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20 ${
                            errors.timeline ? "border-cpec-error" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (&lt;1 week)</SelectItem>
                          <SelectItem value="soon">Soon (1-4 weeks)</SelectItem>
                          <SelectItem value="planning">Planning (1-3 months)</SelectItem>
                          <SelectItem value="exploring">Exploring (3+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="text-sm text-cpec-error mt-1 font-body">{errors.timeline}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-cpec-blue font-sans mb-4">
                    {quoteCopy.form.additionalInfoHeader}
                  </h3>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cpec-gray mb-2 font-body">
                      {quoteCopy.form.messageLabel}
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={quoteCopy.form.messagePlaceholder}
                      rows={4}
                      className="border-cpec-border focus:border-cpec-orange focus:ring-cpec-orange/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cpec-orange hover:bg-[#b34d00]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {quoteCopy.form.loadingText}
                    </>
                  ) : (
                    quoteCopy.form.submitButton
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
