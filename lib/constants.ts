// Data models for products, services, and team

export interface Product {
  id: string;
  name: string;
  category: 'generators' | 'stabilizers' | 'ups' | 'transformers' | 'changeovers';
  description: string;
  types: string[];
  capacityRange: string;
  keyFeatures: string[];
  useCases: string[];
  cta: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  includes?: string[];
  process?: string[];
  cta: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  capability: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: 'generators',
    name: 'Generators',
    category: 'generators',
    description: 'Diesel, petrol, inverter, and silent generators for backup and prime power. Capacities from 1 kVA to 1000+ kVA. Auto-start capability available. Ideal for factories, hospitals, data centers, and commercial facilities.',
    types: ['Diesel', 'Petrol', 'Inverter', 'Silent/Super-Silent'],
    capacityRange: '1 kVA to 1000+ kVA (diesel), 1-20 kVA (petrol), 0.5-5 kVA (inverter), 10-500+ kVA (silent)',
    keyFeatures: ['Auto-start capability', 'Fuel efficiency', 'Durability'],
    useCases: ['Industrial plants', 'Hospitals', 'Data centers', 'Small businesses'],
    cta: 'Request Generator Quote',
  },
  {
    id: 'stabilizers',
    name: 'Voltage Stabilizers (SVC)',
    category: 'stabilizers',
    description: 'Single-phase and three-phase SVC series stabilizers protecting equipment from voltage fluctuations. Rapid response, high precision (±3% output), capacity ranges 0.5-30 kVA (single-phase) and 3-100 kVA (three-phase).',
    types: ['Single-phase', 'Three-phase'],
    capacityRange: '0.5-30 kVA (single-phase), 3-100 kVA (three-phase)',
    keyFeatures: ['Rapid response (<1s)', 'High precision (±3%)', 'Overload protection'],
    useCases: ['Laboratories', 'Hospitals', 'Factories', 'Offices'],
    cta: 'Request Stabilizer Quote',
  },
  {
    id: 'ups',
    name: 'UPS Systems',
    category: 'ups',
    description: 'Line-interactive UPS for home/office use and online double-conversion UPS for mission-critical applications. Zero transfer time (online), battery backup, capacity ranges 500 VA to 200+ kVA.',
    types: ['Line-interactive', 'Online/Double-conversion'],
    capacityRange: '500 VA - 5 kVA (line-interactive), 1 kVA - 200+ kVA (online)',
    keyFeatures: ['Zero transfer time (online)', 'AVR', 'Battery backup'],
    useCases: ['Data centers', 'Hospitals', 'Banks', 'Offices'],
    cta: 'Request UPS Quote',
  },
  {
    id: 'transformers',
    name: 'Transformers',
    category: 'transformers',
    description: 'Oil-immersed and dry-type distribution transformers for voltage conversion. Oil units for high-capacity outdoor use, dry-type for fire-safe indoor installations. Capacity ranges 25 kVA to several MVA.',
    types: ['Oil-immersed', 'Dry-type'],
    capacityRange: '50 kVA - several MVA (oil), 25 kVA - few MVA (dry)',
    keyFeatures: ['Voltage conversion', 'Distribution', 'Fire safety (dry-type)'],
    useCases: ['Industrial plants', 'Commercial buildings', 'Hospitals', 'Substations'],
    cta: 'Request Transformer Quote',
  },
  {
    id: 'changeovers',
    name: 'Changeovers & Isolators',
    category: 'changeovers',
    description: 'Manual changeovers and automatic transfer switches (ATS) for safe power source switching. Amp ranges 63A to 3200A+. ATS provides automatic backup power activation within seconds.',
    types: ['Manual changeovers', 'Automatic Transfer Switches (ATS)'],
    capacityRange: '63A - 1600A+ (manual), 100A - 3200A+ (ATS)',
    keyFeatures: ['Safety interlocks', 'Automatic operation (ATS)', 'Phase sensing'],
    useCases: ['Critical facilities (ATS)', 'Residential/commercial (manual)'],
    cta: 'Request Changeover Quote',
  },
];

export const services: Service[] = [
  {
    id: 'assessment',
    name: 'Power Site Assessment',
    description: 'We review your electrical load, assess site conditions, and analyze power risks. Our assessment includes load calculations, voltage quality evaluation, and backup power requirements. We then provide detailed recommendations with clear specifications for the right equipment setup.',
    includes: ['Load review', 'Site conditions evaluation', 'Power risk analysis', 'Recommendation report'],
    process: ['Site visit', 'Analysis', 'Detailed report', 'Recommendations'],
    cta: 'Schedule Assessment',
  },
  {
    id: 'installation',
    name: 'Supply + Installation',
    description: 'We source quality equipment, handle delivery, and provide professional installation by experienced technicians. Our installation service includes proper wiring, exhaust systems, fuel storage setup, testing, and commissioning. We ensure compliance with safety standards and proper integration with your existing electrical systems.',
    includes: ['Product sourcing', 'Delivery', 'Professional installation', 'Testing', 'Commissioning'],
    cta: 'Request Installation Quote',
  },
  {
    id: 'maintenance',
    name: 'Maintenance + Support',
    description: 'Scheduled preventive maintenance keeps your equipment running reliably. Our maintenance service includes inspections, oil changes, battery replacements, and system testing. We also provide fast fault response—when something goes wrong, we are there quickly to get you back online.',
    includes: ['Scheduled preventive maintenance', 'Fault response', 'Spare parts', 'Technical support'],
    cta: 'Learn About Maintenance Plans',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '[Name]',
    role: 'Senior Engineer',
    capability: 'Specializes in power system design and generator installations',
  },
  {
    id: '2',
    name: '[Name]',
    role: 'Project Manager',
    capability: 'Oversees installations and ensures timely project completion',
  },
  {
    id: '3',
    name: '[Name]',
    role: 'Service Technician',
    capability: 'Provides maintenance and fault response across Uganda',
  },
  {
    id: '4',
    name: '[Name]',
    role: 'Sales Engineer',
    capability: 'Helps clients select the right equipment for their needs',
  },
  {
    id: '5',
    name: '[Name]',
    role: 'Operations Manager',
    capability: 'Coordinates nationwide service and support operations',
  },
];
