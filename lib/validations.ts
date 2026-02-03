// Form validation schemas

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Basic phone validation - accepts digits, spaces, +, -, (, )
  const phoneRegex = /^[\d\s\+\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 8;
}

export interface FormErrors {
  [key: string]: string;
}

export function validateQuoteForm(data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  productInterest: string[];
  applicationType: string;
  timeline: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "This field is required";
  }

  if (!data.email.trim()) {
    errors.email = "This field is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "This field is required";
  } else if (!validatePhone(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.location.trim()) {
    errors.location = "This field is required";
  }

  if (!data.productInterest || data.productInterest.length === 0) {
    errors.productInterest = "This field is required";
  }

  if (!data.applicationType) {
    errors.applicationType = "This field is required";
  }

  if (!data.timeline) {
    errors.timeline = "This field is required";
  }

  return errors;
}
