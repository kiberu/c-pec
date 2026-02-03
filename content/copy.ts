// Single source of truth for all website copy content

export const homeCopy = {
  hero: {
    headline: "WE POWER YOUR BUSINESS",
    subhead: "Power continuity and voltage protection for institutions and factories across Uganda",
    firstSentence: "C-PEC supplies and installs generators, stabilizers, UPS systems, transformers, and changeover switches—built for stable operations, clear specs, and dependable support.",
    cta: "Request a Quote",
  },
  whatWeDo: {
    headline: "WHAT WE DO",
    intro: "Crown Power & Equipment Company Limited (C-PEC) supplies and installs:",
    products: [
      {
        name: "Generators",
        description: "Diesel, petrol, inverter, and silent options for backup and prime power",
      },
      {
        name: "Voltage Stabilizers",
        description: "SVC series single-phase and three-phase units protecting equipment from voltage fluctuations",
      },
      {
        name: "UPS Systems",
        description: "Line-interactive and online double-conversion systems for zero-downtime power backup",
      },
      {
        name: "Transformers",
        description: "Oil-immersed and dry-type distribution transformers for voltage conversion",
      },
      {
        name: "Changeovers & Isolators",
        description: "Manual changeovers and automatic transfer switches (ATS) for safe power source switching",
      },
    ],
  },
  ourServices: {
    headline: "OUR SERVICES",
    services: [
      {
        name: "Power Site Assessment",
        description: "We review your load, site conditions, and power risks, then recommend the right setup.",
      },
      {
        name: "Supply + Installation",
        description: "Delivery, installation, testing, and commissioning for generators, stabilizers, UPS, and switching systems.",
      },
      {
        name: "Maintenance + Support",
        description: "Scheduled maintenance and fault response to keep your systems stable and running.",
      },
    ],
    cta: "Get Started",
  },
  whyCpec: {
    headline: "WHY C-PEC",
    points: [
      "Nationwide coverage across Uganda",
      "Partnership with Andelli for quality-assured products",
      "Experienced team of engineers and technicians",
      "End-to-end support from assessment to maintenance",
      "Clear specifications and transparent recommendations",
    ],
  },
  howWeWork: {
    headline: "HOW WE WORK",
    steps: [
      {
        title: "Assessment",
        description: "We visit your site, review your load, and analyze power risks.",
      },
      {
        title: "Recommendation",
        description: "We provide clear specifications and solution proposals tailored to your needs.",
      },
      {
        title: "Supply + Installation",
        description: "We deliver, install, test, and commission your equipment professionally.",
      },
      {
        title: "Support",
        description: "We maintain your systems and respond quickly to faults.",
      },
    ],
  },
  talkToUs: {
    headline: "TALK TO US",
    phone: "+256 757157479 / +256 700930363",
    whatsapp: "+256 781773776",
    email: "info@c-pec.com",
    address: "Kamure Park Building, PLOT 128 OLD KIRA ROAD, BUKOTO FLOOR 1, OFFICE 3",
  },
  faq: [
    {
      question: "What types of generators do you supply?",
      answer: "We supply diesel, petrol, inverter, and silent/super-silent generators. Diesel generators range from 1 kVA to 1000+ kVA for industrial use. Petrol generators cover 1-20 kVA for smaller applications. Inverter generators (0.5-5 kVA) provide clean, quiet power for sensitive electronics. Silent generators (10-500+ kVA) are designed for noise-sensitive environments like hospitals and schools.",
    },
    {
      question: "How do I know what capacity generator I need?",
      answer: "We provide power site assessments to determine your exact load requirements. Our team reviews your electrical load, site conditions, and power risks, then recommends the right capacity. Factors include your total connected load, starting currents, and future expansion plans.",
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide complete installation services including delivery, professional installation, testing, and commissioning. Our technicians handle proper wiring, exhaust systems, fuel storage setup, and ensure compliance with safety standards.",
    },
    {
      question: "What areas do you cover?",
      answer: "We operate nationwide across Uganda, serving clients from Kampala to remote locations. Our team provides on-site consultations and after-sales service throughout the country.",
    },
    {
      question: "How quickly can you respond to a fault?",
      answer: "We provide fast fault response to get your systems back online quickly. Response times vary by location, but we prioritize critical facilities and work to minimize downtime.",
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer scheduled preventive maintenance contracts. Our maintenance service includes inspections, oil changes, battery replacements, and system testing to keep your equipment running reliably.",
    },
    {
      question: "What is the typical lead time for equipment delivery?",
      answer: "Popular models are typically available from our Kampala warehouse for immediate delivery. Larger or specialized units may require ordering with reasonable lead times. We'll provide specific timelines when you request a quote.",
    },
    {
      question: "Can you help with power system design?",
      answer: "Yes, our experienced engineers provide power site assessments and system design recommendations. We review your load, site conditions, and power risks, then provide detailed recommendations with clear specifications for the right equipment setup.",
    },
  ],
};

export const productsCopy = {
  hero: {
    headline: "Power Equipment for Institutions and Factories",
    subhead: "Generators, stabilizers, UPS systems, transformers, and changeover switches—specified for your needs",
    cta: "Request a Quote",
  },
  generators: {
    name: "Generators",
    description: "Diesel, petrol, inverter, and silent generators for backup and prime power. Capacities from 1 kVA to 1000+ kVA. Auto-start capability available. Ideal for factories, hospitals, data centers, and commercial facilities.",
    types: ["Diesel", "Petrol", "Inverter", "Silent/Super-Silent"],
    capacityRange: "1 kVA to 1000+ kVA (diesel), 1-20 kVA (petrol), 0.5-5 kVA (inverter), 10-500+ kVA (silent)",
    keyFeatures: ["Auto-start capability", "Fuel efficiency", "Durability"],
    useCases: ["Industrial plants", "Hospitals", "Data centers", "Small businesses"],
    cta: "Request Generator Quote",
  },
  stabilizers: {
    name: "Voltage Stabilizers (SVC)",
    description: "Single-phase and three-phase SVC series stabilizers protecting equipment from voltage fluctuations. Rapid response, high precision (±3% output), capacity ranges 0.5-30 kVA (single-phase) and 3-100 kVA (three-phase).",
    types: ["Single-phase", "Three-phase"],
    specs: {
      singlePhase: {
        inputRange: "150-250V AC",
        output: "220V AC ±3%",
        capacityRange: "0.5-30 kVA",
      },
      threePhase: {
        inputRange: "280-430V AC",
        output: "380V AC ±3%",
        capacityRange: "3-100 kVA",
      },
    },
    keyFeatures: ["Rapid response (<1s)", "High precision (±3%)", "Overload protection"],
    useCases: ["Laboratories", "Hospitals", "Factories", "Offices"],
    cta: "Request Stabilizer Quote",
  },
  ups: {
    name: "UPS Systems",
    description: "Line-interactive UPS for home/office use and online double-conversion UPS for mission-critical applications. Zero transfer time (online), battery backup, capacity ranges 500 VA to 200+ kVA.",
    types: ["Line-interactive", "Online/Double-conversion"],
    capacityRange: "500 VA - 5 kVA (line-interactive), 1 kVA - 200+ kVA (online)",
    keyFeatures: ["Zero transfer time (online)", "AVR", "Battery backup"],
    useCases: ["Data centers", "Hospitals", "Banks", "Offices"],
    cta: "Request UPS Quote",
  },
  transformers: {
    name: "Transformers",
    description: "Oil-immersed and dry-type distribution transformers for voltage conversion. Oil units for high-capacity outdoor use, dry-type for fire-safe indoor installations. Capacity ranges 25 kVA to several MVA.",
    types: ["Oil-immersed", "Dry-type"],
    capacityRange: "50 kVA - several MVA (oil), 25 kVA - few MVA (dry)",
    keyFeatures: ["Voltage conversion", "Distribution", "Fire safety (dry-type)"],
    useCases: ["Industrial plants", "Commercial buildings", "Hospitals", "Substations"],
    cta: "Request Transformer Quote",
  },
  changeovers: {
    name: "Changeovers & Isolators",
    description: "Manual changeovers and automatic transfer switches (ATS) for safe power source switching. Amp ranges 63A to 3200A+. ATS provides automatic backup power activation within seconds.",
    types: ["Manual changeovers", "Automatic Transfer Switches (ATS)"],
    ampRange: "63A - 1600A+ (manual), 100A - 3200A+ (ATS)",
    keyFeatures: ["Safety interlocks", "Automatic operation (ATS)", "Phase sensing"],
    useCases: ["Critical facilities (ATS)", "Residential/commercial (manual)"],
    cta: "Request Changeover Quote",
  },
  faq: [
    {
      question: "How do I determine the right generator capacity for my facility?",
      answer: "We provide power site assessments to determine your exact load requirements. Our team reviews your electrical load, site conditions, and power risks, then recommends the right capacity based on your total connected load, starting currents, and future expansion plans.",
    },
    {
      question: "What's the difference between single-phase and three-phase stabilizers?",
      answer: "Single-phase stabilizers (0.5-30 kVA) are for homes, offices, and single-phase industrial loads. Three-phase stabilizers (3-100 kVA) are for larger installations and machinery operating on 380/400V three-phase supply, typically used in factories, workshops, and commercial buildings.",
    },
    {
      question: "When should I choose an online UPS over a line-interactive UPS?",
      answer: "Online UPS provides zero transfer time and the highest level of power protection, ideal for mission-critical applications like data centers, hospitals, and banks. Line-interactive UPS is cost-effective for small offices and home use where brief interruptions are acceptable.",
    },
    {
      question: "What factors determine whether I need an oil-immersed or dry-type transformer?",
      answer: "Oil-immersed transformers are for high-capacity outdoor use and can handle very large voltages and loads. Dry-type transformers are preferred for indoor or fire-sensitive environments like hospitals, commercial buildings, and high-rise installations where oil-filled units would pose safety concerns.",
    },
    {
      question: "Do I need an ATS or can I use a manual changeover?",
      answer: "ATS is essential for critical applications requiring immediate backup power without human intervention, such as hospitals, data centers, and telecom towers. Manual changeovers are cost-effective for residential or light commercial settings where an operator is available and brief interruptions are acceptable.",
    },
  ],
};

export const servicesCopy = {
  hero: {
    headline: "End-to-End Power Solutions",
    subhead: "From assessment to installation to ongoing support—we handle every step",
    cta: "Request Consultation",
  },
  assessment: {
    name: "Power Site Assessment",
    description: "We review your electrical load, assess site conditions, and analyze power risks. Our assessment includes load calculations, voltage quality evaluation, and backup power requirements. We then provide detailed recommendations with clear specifications for the right equipment setup.",
    includes: ["Load review", "Site conditions evaluation", "Power risk analysis", "Recommendation report"],
    for: ["New installations", "Upgrades", "Troubleshooting"],
    process: ["Site visit", "Analysis", "Detailed report", "Recommendations"],
    cta: "Schedule Assessment",
  },
  installation: {
    name: "Supply + Installation",
    description: "We source quality equipment, handle delivery, and provide professional installation by experienced technicians. Our installation service includes proper wiring, exhaust systems, fuel storage setup, testing, and commissioning. We ensure compliance with safety standards and proper integration with your existing electrical systems.",
    includes: ["Product sourcing", "Delivery", "Professional installation", "Testing", "Commissioning"],
    equipment: ["Generators", "Stabilizers", "UPS", "Transformers", "Changeover switches"],
    standards: ["Safety compliance", "Proper wiring", "Exhaust systems", "Fuel storage"],
    cta: "Request Installation Quote",
  },
  maintenance: {
    name: "Maintenance + Support",
    description: "Scheduled preventive maintenance keeps your equipment running reliably. Our maintenance service includes inspections, oil changes, battery replacements, and system testing. We also provide fast fault response—when something goes wrong, we're there quickly to get you back online.",
    includes: ["Scheduled preventive maintenance", "Fault response", "Spare parts", "Technical support"],
    serviceLevels: ["Regular maintenance contracts", "Emergency response"],
    coverage: "Nationwide (Uganda-wide)",
    cta: "Learn About Maintenance Plans",
  },
  process: {
    steps: ["Assessment", "Quote", "Approval", "Supply", "Installation", "Commissioning", "Support"],
  },
  faq: [
    {
      question: "How long does a site assessment take?",
      answer: "A typical site assessment takes 2-4 hours depending on the complexity of your facility. This includes load measurements, site inspection, and initial discussions. We then provide a detailed report within 3-5 business days.",
    },
    {
      question: "Do you provide warranties on installations?",
      answer: "Yes, we provide warranties on our installations. Warranty terms vary by equipment type and installation scope. We'll provide specific warranty details when you request a quote.",
    },
    {
      question: "What's included in a maintenance contract?",
      answer: "Our maintenance contracts include scheduled inspections, oil changes, battery replacements, system testing, and priority fault response. Contract terms and frequency are tailored to your equipment and usage patterns.",
    },
    {
      question: "How quickly can you respond to emergency faults?",
      answer: "We prioritize emergency faults and work to respond as quickly as possible. Response times vary by location, but we aim to have a technician on-site within 24 hours for critical facilities.",
    },
    {
      question: "Do you train our staff on equipment operation?",
      answer: "Yes, we provide training on equipment operation and basic maintenance procedures. This ensures your staff can safely operate the equipment and perform routine checks between our scheduled maintenance visits.",
    },
  ],
};

export const aboutCopy = {
  hero: {
    headline: "Powering Uganda's Institutions and Factories",
    subhead: "Built around practical engineering support, clean installations, and fast response",
  },
  mission: {
    text: "C-PEC supports factories, institutions, and growing businesses with power solutions that reduce downtime and protect equipment. We are a company built around practical engineering support, clean installations, and fast response operating nationwide.",
  },
  howWeWork: {
    points: [
      {
        title: "Clear specifications",
        description: "We help you understand exactly what you need based on your load and site conditions.",
      },
      {
        title: "Reliable installations",
        description: "Professional installation by experienced technicians ensures your equipment performs as specified.",
      },
      {
        title: "Dependable support",
        description: "Ongoing maintenance and fast fault response keep your systems running when you need them.",
      },
      {
        title: "Nationwide coverage",
        description: "We serve clients across Uganda, from Kampala to remote locations.",
      },
    ],
  },
  partnership: {
    headline: "Partnership with Andelli",
    description: "We partner with Andelli, a globally respected manufacturer of electrical equipment founded in 1985, to bring you high-quality SVC series stabilizers and related components. This partnership ensures authentic products, technical support, and quality assurance.",
  },
  team: [
    {
      name: "[Name]",
      role: "Senior Engineer",
      capability: "Specializes in power system design and generator installations",
    },
    {
      name: "[Name]",
      role: "Project Manager",
      capability: "Oversees installations and ensures timely project completion",
    },
    {
      name: "[Name]",
      role: "Service Technician",
      capability: "Provides maintenance and fault response across Uganda",
    },
    {
      name: "[Name]",
      role: "Sales Engineer",
      capability: "Helps clients select the right equipment for their needs",
    },
    {
      name: "[Name]",
      role: "Operations Manager",
      capability: "Coordinates nationwide service and support operations",
    },
  ],
  coverage: {
    headline: "Nationwide Coverage - Uganda",
    cities: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu", "and more"],
  },
  faq: [
    {
      question: "How long has C-PEC been operating?",
      answer: "C-PEC has been serving institutions and factories across Uganda with power solutions. Our experienced team brings decades of combined expertise in electrical engineering and project management.",
    },
    {
      question: "What certifications do your technicians have?",
      answer: "Our technicians are experienced professionals with training in electrical engineering, safety standards, and equipment-specific certifications. We ensure all installations comply with relevant safety and quality standards.",
    },
    {
      question: "Do you work with contractors and facility managers?",
      answer: "Yes, we work with contractors, facility managers, and electricians who specify and influence equipment decisions. We provide technical support and competitive pricing for bulk orders and ongoing projects.",
    },
    {
      question: "What makes C-PEC different from other suppliers?",
      answer: "C-PEC combines quality products, professional installation, and dependable support. We provide clear specifications, nationwide coverage, and end-to-end service from assessment to maintenance. Our partnership with Andelli ensures authentic, quality-assured products.",
    },
  ],
};

export const contactCopy = {
  hero: {
    headline: "Get in Touch",
    subhead: "Request a quote, ask a question, or schedule a consultation",
    cta: "Request a Quote",
  },
  contact: {
    phone: "+256 757157479 / +256 700930363",
    whatsapp: "+256 781773776",
    email: "info@c-pec.com",
    address: "Kamure Park Building, PLOT 128 OLD KIRA ROAD, BUKOTO FLOOR 1, OFFICE 3",
    officeHours: "[To be specified]",
  },
  form: {
    nameLabel: "Your Name *",
    emailLabel: "Email Address *",
    phoneLabel: "Phone Number *",
    companyLabel: "Company/Organization",
    messageLabel: "Your Message *",
    productInterestLabel: "Product Interest",
    submitButton: "Send Message",
    successMessage: "Thank you! We'll respond within 24 hours.",
  },
  quickResponse: {
    text: "We respond to all inquiries within 24 hours",
  },
  faq: [
    {
      question: "What are your office hours?",
      answer: "Our office hours are [To be specified]. For urgent inquiries outside office hours, please call our emergency line or send a WhatsApp message.",
    },
    {
      question: "Can I visit your office without an appointment?",
      answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure a team member is available to assist you. You can call or WhatsApp us to arrange a convenient time.",
    },
    {
      question: "Do you provide quotes over the phone?",
      answer: "We can provide preliminary information over the phone, but detailed quotes require understanding your specific requirements. We'll schedule a site assessment or consultation to provide an accurate quote.",
    },
    {
      question: "How do I track my inquiry?",
      answer: "After submitting an inquiry, you'll receive a confirmation email. Our team will respond within 24 hours. You can also call or WhatsApp us to follow up on your inquiry.",
    },
  ],
};

export const quoteCopy = {
  hero: {
    headline: "Request a Quote",
    subhead: "Tell us about your power needs, and we'll provide a detailed quotation",
  },
  form: {
    contactInfoHeader: "Contact Information",
    nameLabel: "Name *",
    emailLabel: "Email *",
    phoneLabel: "Phone *",
    companyLabel: "Company/Organization",
    locationLabel: "Location/City *",
    projectDetailsHeader: "Project Details",
    productInterestLabel: "Product Interest *",
    applicationTypeLabel: "Application Type *",
    capacityLabel: "Estimated Capacity/Power Need",
    capacityPlaceholder: "e.g., 50 kVA generator or 10 kVA stabilizer",
    timelineLabel: "Timeline *",
    additionalInfoHeader: "Additional Information",
    messageLabel: "Message/Requirements",
    messagePlaceholder: "Describe your power needs, site conditions, or specific requirements",
    submitButton: "Submit Quote Request",
    loadingText: "Submitting...",
  },
  validation: {
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid phone number",
  },
  thankYou: {
    headline: "Thank You for Your Inquiry",
    message: "We've received your quote request and will respond within 24 hours. Our team will review your requirements and provide a detailed quotation.",
    nextSteps: {
      title: "What happens next?",
      steps: [
        "We'll review your requirements",
        "A team member will contact you within 24 hours",
        "We'll provide a detailed quote and recommendations",
      ],
    },
    ctas: {
      browseProducts: "Browse Products",
      learnServices: "Learn About Services",
      contactUs: "Contact Us",
    },
  },
  faq: [
    {
      question: "How quickly will I receive a quote?",
      answer: "We respond to all quote requests within 24 hours. For complex requirements, we may schedule a site assessment to provide the most accurate quote.",
    },
    {
      question: "Do I need to provide exact specifications?",
      answer: "No, you don't need exact specifications. Provide your best estimate of capacity or power needs, and we'll help determine the right solution during our consultation.",
    },
    {
      question: "Can I request quotes for multiple products?",
      answer: "Yes, you can select multiple product interests in the form. We'll provide quotes for all products you're interested in.",
    },
    {
      question: "Is there a cost for the quote?",
      answer: "No, quotes are provided free of charge. There's no obligation to purchase, and we're happy to help you understand your options.",
    },
  ],
};

export const ctaBank = [
  "Request a Quote",
  "Get a Quote",
  "Request Consultation",
  "Schedule Assessment",
  "Contact Us",
  "Talk to an Expert",
  "Get Started",
  "Learn More",
  "View Products",
  "Request Installation Quote",
  "Schedule Maintenance",
  "Request Generator Quote",
  "Request Stabilizer Quote",
  "Request UPS Quote",
  "Request Changeover Quote",
];
