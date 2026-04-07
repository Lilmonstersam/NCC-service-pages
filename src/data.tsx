import React from 'react';
import {
  ShieldCheck, Users, Clock, Leaf, CheckCircle,
  ClipboardCheck, Award, School, GraduationCap,
  Building2, Factory, Stethoscope, Baby, Package,
  Truck, Wrench, HardHat
} from 'lucide-react';

export interface ServicePageData {
  id: string;
  slug: string;
  navTitle: string;
  navIcon: React.ElementType;
  heroImage: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroDescription: string;
  whySectionTitle: string;
  whySectionSubtitle: string;
  whyCards: {
    icon: React.ElementType;
    title: string;
    description: string;
    iconBgClass: string;
    iconColorClass: string;
  }[];
  detailsSectionTitle: string;
  detailsSectionSubtitle: string;
  detailsList: string[];
  detailsCards: {
    icon: React.ElementType;
    title: string;
    description: string;
    fullWidth?: boolean;
  }[];
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  formTitle: string;
  formSubtitle: string;
  formFacilityOptions: string[];
  testimonials?: {
    quote: string;
    author: string;
    title: string;
  }[];
}

export const pagesData: ServicePageData[] = [
  {
    id: 'schools',
    slug: 'school-cleaning',
    navTitle: 'Schools',
    navIcon: School,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2025/03/Namoli_008.jpg',
    heroTitle: <>Protecting Students & Staff with <span className="text-[#F06278]">Hospital-Grade Hygiene.</span></>,
    heroSubtitle: '',
    heroDescription: 'School cleaning is about more than aesthetics; it\'s about infection control. Namoli delivers compliant, audit-ready cleaning solutions for K-12 and Universities.',
    whySectionTitle: 'Beyond the Blackboard: A Safer Learning Environment',
    whySectionSubtitle: 'Generic cleaners wipe surfaces. Namoli manages risk. We understand that a missed clean in a school can lead to outbreaks and absenteeism.',
    whyCards: [
      { icon: ShieldCheck, title: 'Professional Presentation', description: 'We know that trust on school grounds is paramount. Our staff maintain strict security protocols, including full uniforms and visible ID badges at all times, ensuring only authorised personnel are on site.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: Leaf, title: 'Student-Safe & Non-Toxic', description: 'We use GECA-certified, eco-friendly cleaning solutions that are tough on germs but safe for students. No harsh chemical residues in classrooms or common areas.', iconBgClass: 'bg-green-50', iconColorClass: 'text-green-700' },
      { icon: ClipboardCheck, title: 'App-Based Transparency', description: 'Principals and facility managers get real-time visibility. Our teams use the Namoli App to clock in, checklist tasks, and upload photos of completed zones, ensuring you never pay for a missed clean.', iconBgClass: 'bg-purple-50', iconColorClass: 'text-purple-700' }
    ],
    detailsSectionTitle: 'Tailored to Your Campus',
    detailsSectionSubtitle: 'From local primary schools to sprawling university campuses, our operational model adapts to your density, schedule, and specific hygiene risks.',
    detailsList: ['Flexible after-hours scheduling', 'Term-break deep cleaning', 'Rapid response for gastro/flu'],
    detailsCards: [
      { icon: School, title: 'Primary & Secondary', description: 'Robust maintenance of corridors, canteens, and sports halls. We manage the heavy foot traffic grime while ensuring toilets are stocked and hygienic for student dignity.' },
      { icon: GraduationCap, title: 'Tertiary & Colleges', description: '24/7 capability for libraries and research labs. We handle large-scale waste management and event cleaning for lecture theatres and common rooms.' },
      { icon: Clock, title: 'Term Break Deep Cleans', description: 'We utilise holidays for intensive work: Carpet steam cleaning, window washing, hard floor strip & seal, and high-pressure cleaning of outdoor play areas and eating zones.', fullWidth: true }
    ],
    faqTitle: 'Common Questions from Schools',
    faqs: [
      { question: 'Do you use safe chemicals?', answer: 'Absolutely. We prioritise GECA-certified, non-toxic, and hypoallergenic cleaning products in all student areas to ensure safety for children with allergies or sensitivities.' },
      { question: 'Can you clean during school hours?', answer: 'While we typically clean after hours to minimise disruption, we can provide day porters for large campuses to handle immediate spills, toilet restocking, and bin maintenance during the day.' },
      { question: 'How do you handle lock-up and security?', answer: 'Our teams are trained in alarm setting and secure lock-up procedures. We can be the last ones out, ensuring gates and doors are secured according to your specific protocols.' }
    ],
    formTitle: 'Get a School Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough. We'll assess your square footage and hygiene needs to provide a tailored quote.",
    formFacilityOptions: ['Primary School', 'Secondary School', 'University / TAFE', 'Other']
  },
  {
    id: 'childcare',
    slug: 'childcare-cleaning',
    navTitle: 'Childcare',
    navIcon: Baby,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2022/12/Namoli-Childcare-Cleaning2.jpg',
    heroTitle: <>Expert Childcare Cleaning Services for a <span className="text-[#F06278]">Safer Learning Environment.</span></>,
    heroSubtitle: 'Are your little learners protected from hidden germs?',
    heroDescription: 'Childcare centres and schools are hubs of activity, but they are also breeding grounds for bacteria and viruses. Keeping children safe means going beyond a simple surface wipe.',
    whySectionTitle: 'Why Trust Namoli for Childcare?',
    whySectionSubtitle: 'High-touch points like toys, desks, and door handles are often neglected in standard cleaning routines. For childcare providers, an outbreak can mean closure and a damaged reputation.',
    whyCards: [
      { icon: ShieldCheck, title: 'Safety First', description: 'Deep cleaning that is safe for children and pets. We ensure every surface is sanitised without leaving harmful chemical residues behind.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: Award, title: 'Consistent Quality', description: 'Regular monitoring to ensure standards never slip. Our quality assurance processes guarantee a consistently hygienic environment day after day.', iconBgClass: 'bg-amber-50', iconColorClass: 'text-amber-600' },
      { icon: Leaf, title: 'Decontamination Experts', description: 'Certified processes for preventing the spread of illness. We target the hidden pathogens that cause outbreaks in early learning environments.', iconBgClass: 'bg-green-50', iconColorClass: 'text-green-700' }
    ],
    detailsSectionTitle: 'Our Childcare Cleaning Solution',
    detailsSectionSubtitle: 'Namoli provides specialised childcare cleaning solutions designed to eliminate pathogens and maintain a healthy study environment.',
    detailsList: ['Right Areas: Focusing on HTP and communal zones.', "Right Time: Scheduled cleaning that doesn't disrupt learning.", 'Right Chemicals: Non-toxic, effective decontaminants.', 'Right Training: Our staff are experts in educational facility hygiene.'],
    detailsCards: [
      { icon: ClipboardCheck, title: 'HTP Cleaning for Childcare', description: "Our childcare cleaning services focus on High-Touch Points (HTP). We use child-safe, eco-friendly chemicals to ensure that sanitisation doesn't come at the cost of safety.", fullWidth: true }
    ],
    faqTitle: 'Common Questions from Childcare Centres',
    faqs: [
      { question: 'Are your products safe for toddlers?', answer: 'Absolutely. We prioritise GECA-certified, non-toxic, and hypoallergenic cleaning products to ensure complete safety for children who frequently touch surfaces and their faces.' },
      { question: 'Can you clean outside operating hours?', answer: 'Yes, we schedule our cleans after hours to ensure zero disruption to your daily routines and to allow surfaces to fully dry and ventilate before children arrive.' },
      { question: 'Are your staff background checked?', answer: 'Yes, all our staff hold current Working with Children Checks, are fully police checked, and adhere to a rigid drug and alcohol policy for your complete peace of mind.' }
    ],
    formTitle: 'Get a Childcare Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough to assess your centre's specific hygiene needs.",
    formFacilityOptions: ['Early Learning Centre', 'Kindergarten', 'Preschool', 'Outside School Hours Care', 'Other']
  },
  {
    id: 'industrial',
    slug: 'industrial-cleaning',
    navTitle: 'Industrial',
    navIcon: Factory,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/05/tile-img-04.png',
    heroTitle: <>Certified Industrial Cleaning Services for <span className="text-[#F06278]">Factories & Facilities.</span></>,
    heroSubtitle: 'Is your industrial facility maintaining the highest safety and sustainability standards?',
    heroDescription: "Industrial environments present unique challenges that standard cleaning services aren't equipped to handle. From heavy machinery to hazardous waste, maintaining a safe and productive workplace requires specialised expertise.",
    whySectionTitle: 'Why Trust Namoli for Industrial Cleaning?',
    whySectionSubtitle: 'Neglecting specialised industrial cleaning services can lead to serious safety hazards, equipment failure, and regulatory non-compliance.',
    whyCards: [
      { icon: Award, title: 'Certified Expertise', description: 'Trained professionals who share our values. Every franchisee undergoes rigorous WHS induction and SDS chemical safety training before stepping onto your site.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: ShieldCheck, title: 'Safety Focused', description: 'Rigorous adherence to safety standards and colour-coding. We mitigate risks and ensure our cleaning processes align perfectly with your site-specific WHS requirements.', iconBgClass: 'bg-red-50', iconColorClass: 'text-red-700' },
      { icon: Clock, title: 'Innovation-Driven', description: 'Using the latest technology to improve efficiency and results. We deploy advanced industrial scrubbers and sweepers to tackle large-scale grime effectively.', iconBgClass: 'bg-purple-50', iconColorClass: 'text-purple-700' }
    ],
    detailsSectionTitle: 'Our Industrial Cleaning Solution',
    detailsSectionSubtitle: 'Namoli provides certified industrial cleaning services designed to maintain your facility safely and sustainably.',
    detailsList: ['Workplace Safety: Minimizing risks through rigorous cleaning protocols.', 'Operational Efficiency: Preventing grime buildup that can lead to machinery downtime.', "Environmental Responsibility: Using sustainable cleaning methods that don't compromise on performance."],
    detailsCards: [
      { icon: ClipboardCheck, title: 'Transparent Management', description: 'Track and schedule all your cleaning requirements through our Clean Smarts app. It enables auditing, issue tracking, and daily checklists between all parties.' },
      { icon: ShieldCheck, title: 'Audit-Ready Reports', description: 'Ensure you are always compliant with WHS standards. We provide detailed documentation of all cleaning activities for your compliance records.' },
      { icon: Award, title: 'Consistent Results', description: 'Monitoring that ensures the standard never drops. Regular site audits by our area managers guarantee that your industrial facility maintains peak hygiene levels.', fullWidth: true }
    ],
    faqTitle: 'Common Questions from Industrial Facilities',
    faqs: [
      { question: 'Do you handle hazardous waste?', answer: 'We have specialised protocols for various industrial waste types and work within your existing waste management frameworks to ensure safe disposal.' },
      { question: 'Are your staff WHS trained?', answer: 'Yes, all staff undergo rigorous site-specific safety inductions and hold relevant certifications for operating in high-risk industrial environments.' },
      { question: 'Can you clean around heavy machinery?', answer: 'Our teams are trained to work safely around industrial equipment without causing disruption to your operations or risking damage to sensitive machinery.' }
    ],
    formTitle: 'Get an Industrial Proposal + Free Site Assessment',
    formSubtitle: "Book a site walkthrough to assess your facility's safety and cleaning requirements.",
    formFacilityOptions: ['Manufacturing Plant', 'Warehouse', 'Distribution Centre', 'Food Processing', 'Other'],
    testimonials: [
      { quote: "When it came time for us to switch facilities cleaners, we considered a number of companies in the local marketplace. When I met Namoli I was blown away by their professionalism. They weren't just yes people. They asked the right questions and did a comprehensive review.", author: "Nikki Norum", title: "Office Manager, Brisbane Camperland" }
    ]
  },
  {
    id: 'medical',
    slug: 'medical-cleaning',
    navTitle: 'Medical',
    navIcon: Stethoscope,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2022/12/Namoli-Medical-Cleaning2-1024x683.jpg',
    heroTitle: <>Professional Medical Facility Cleaning & <span className="text-[#F06278]">Infection Control.</span></>,
    heroSubtitle: 'Does your healthcare facility meet the highest hygiene standards?',
    heroDescription: "In a medical environment, \"clean\" isn't just about appearance. It's about safety, compliance, and saving lives.",
    whySectionTitle: 'Why Choose Namoli for Clinical Cleaning?',
    whySectionSubtitle: 'Traditional cleaning methods often fall short in clinical settings. Cross-contamination risks, strict regulatory audits, and the need for specialised chemical use create a high-pressure environment.',
    whyCards: [
      { icon: ShieldCheck, title: 'Infection Control Experts', description: 'Specialised training in medical-grade sanitisation is mandatory. We use team cleaning methodologies, disposable mops, and appropriate PPE to break the chain of infection.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: ClipboardCheck, title: 'Regulatory Compliance', description: 'We help you meet and exceed Australian healthcare hygiene standards, ensuring your facility is always prepared for rigorous health audits.', iconBgClass: 'bg-green-50', iconColorClass: 'text-green-700' },
      { icon: Users, title: 'Customised Plans', description: 'No two facilities are the same; our plans reflect your specific clinical requirements, from general waiting areas to sterile procedure rooms.', iconBgClass: 'bg-purple-50', iconColorClass: 'text-purple-700' }
    ],
    detailsSectionTitle: 'Our Clinical Cleaning Solution',
    detailsSectionSubtitle: 'At Namoli, we specialize in high-standard medical clinic cleaning services tailored to the unique needs of the healthcare sector.',
    detailsList: ['Detailed onsite risk assessments.', 'Customised infection control plans.', 'Transparent reporting and monitoring to ensure consistent standards.'],
    detailsCards: [
      { icon: ShieldCheck, title: 'Specialized Hospital Cleaning', description: 'We provide comprehensive hospital cleaning solutions, from waiting rooms to high-risk clinical areas.' },
      { icon: Leaf, title: 'Hospital-Grade Disinfectants', description: 'We use TGA-approved disinfectants and strict colour-coding to ensure absolutely no cross-contamination.' },
      { icon: Award, title: 'The CARE Process', description: 'Confidence, Action, Reliability, Excellence. This unique process is at the heart of our medical facility cleaning services.', fullWidth: true }
    ],
    faqTitle: 'Common Questions from Medical Facilities',
    faqs: [
      { question: 'Do you use hospital-grade disinfectants?', answer: 'Yes, we exclusively use TGA-approved hospital-grade disinfectants that are proven effective against a wide range of clinical pathogens.' },
      { question: 'How do you prevent cross-contamination?', answer: 'We use strict colour-coding systems for all equipment and cloths, combined with specialised isolation cleaning protocols.' },
      { question: 'Are you compliant with RACGP standards?', answer: 'Our cleaning processes are meticulously designed to help you meet and exceed all relevant healthcare standards, including RACGP accreditation requirements.' }
    ],
    formTitle: 'Get a Medical Cleaning Proposal + Free Site Assessment',
    formSubtitle: "Book a confidential site walkthrough to discuss your infection control requirements.",
    formFacilityOptions: ['Medical Clinic', 'Dental Practice', 'Hospital', 'Allied Health', 'Other'],
    testimonials: [
      { quote: "At Keilor Private Hospital, we have had a relationship with the crew from Namoli for many years. We consider them to be part of our team and rely on them to keep the facility well maintained. The team at Namoli is an all-encompassing, one stop service provider that saves me hours of time and concern, delivering first class outcomes.", author: "Jayne Gaunt", title: "CEO, Keilor Private Hospital, Melbourne" }
    ]
  },
  {
    id: 'office',
    slug: 'office-cleaning',
    navTitle: 'Office',
    navIcon: Building2,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/01/Namoli-Office-Cleaning6-1024x683.jpg',
    heroTitle: <>Professional Office Cleaning Services for <span className="text-[#F06278]">High-Performance Workspaces.</span></>,
    heroSubtitle: "Is a cluttered office slowing down your team's productivity?",
    heroDescription: "We understand you are busy and discussing cleaning isn't the best use of your time. A clean office reflects your professional standards, and you need a cleaner who just gets it done seamlessly.",
    whySectionTitle: 'Why Choose Namoli as Your Office Cleaner?',
    whySectionSubtitle: 'Inconsistent standards, missed areas, and poor communication can make managing your office cleaning a full-time job in itself.',
    whyCards: [
      { icon: Clock, title: 'Agile and Responsive', description: 'Clear communication via our Clean Smarts app. Just upload a picture or message and consider your problem solved.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: Award, title: 'Cost-Effective', description: 'High-quality service that fits your budget. We optimise our cleaning schedules to deliver maximum impact without unnecessary overheads.', iconBgClass: 'bg-green-50', iconColorClass: 'text-green-700' },
      { icon: ShieldCheck, title: 'Raising the Standards', description: 'We bring the same rigor to office spaces as we do to clinical environments, ensuring your workspace is not just visually clean, but hygienically safe.', iconBgClass: 'bg-purple-50', iconColorClass: 'text-purple-700' }
    ],
    detailsSectionTitle: 'Our Office Cleaning Solution',
    detailsSectionSubtitle: 'Namoli offers agile and responsive office cleaning services tailored to any operating environment.',
    detailsList: ["Tailored Plans: Customised to your office layout and schedule.", "Monitoring & Reporting: Transparent tracking so you know exactly what's been done.", 'Agile Response: We adapt to your needs as your business grows.'],
    detailsCards: [
      { icon: ClipboardCheck, title: 'Systematic Office Cleaning', description: "We don't believe in \"one size fits all.\" Our office cleaning process begins with a deep dive into your specific requirements." },
      { icon: Users, title: 'Seamless Communication', description: 'Direct lines of communication through the Clean Smarts app. Our fully police-checked and vetted teams provide absolute reassurance.' },
      { icon: Award, title: 'Consistent Quality', description: 'Regular audits to ensure your workspace always looks its best. We proactively manage our teams so you never have to micromanage your cleaners.', fullWidth: true }
    ],
    faqTitle: 'Common Questions from Office Managers',
    faqs: [
      { question: 'Can you clean after business hours?', answer: "Yes, the majority of our office cleaning is performed after hours to avoid disruption to your team's productivity." },
      { question: 'Do you supply consumables?', answer: 'Yes, we provide costings and management for all restroom consumables, including toilet paper, hand towels, air fresheners, sanitary bins, hand soap, and hand sanitiser.' },
      { question: 'How do you handle security alarms?', answer: 'Our staff are fully trained in building security, alarm operation, and lock-up procedures, ensuring your premises are always secure when we leave.' }
    ],
    formTitle: 'Get an Office Cleaning Proposal + Free Site Assessment',
    formSubtitle: "Book a quick site walkthrough to get a tailored quote for your workspace.",
    formFacilityOptions: ['Corporate Office', 'Co-working Space', 'Boutique Agency', 'Multi-tenant Building', 'Other'],
    testimonials: [
      { quote: "When it came time for us to switch facilities cleaners, we considered a number of companies in the local marketplace. When I met Namoli I was blown away by their professionalism. They weren't just yes people. They asked the right questions and did a comprehensive review.", author: "Nikki Norum", title: "Office Manager, Brisbane Camperland" }
    ]
  },
  {
    id: 'warehouse',
    slug: 'warehouse-cleaning',
    navTitle: 'Warehouse',
    navIcon: Package,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/05/tile-img-04.png',
    heroTitle: <>Expert Warehouse Cleaning Services <span className="text-[#F06278]">Built for Industry.</span></>,
    heroSubtitle: '',
    heroDescription: "Industrial zones are a constant buzz of activity. We remove the debris, minimise hazards, and keep your supply chain moving with specialised 24/7 cleaning solutions.",
    whySectionTitle: 'Industrial Sites Demand a Different Kind of Clean',
    whySectionSubtitle: 'There is no room for error when it comes to employee safety and productivity.',
    whyCards: [
      { icon: HardHat, title: 'Safe Work Conditions', description: 'We prioritise protocols that minimise hazards. This includes proper handling of industrial materials, spill response procedures, and maintaining clear, debris-free walkways.', iconBgClass: 'bg-blue-50', iconColorClass: 'text-[#003B5C]' },
      { icon: Wrench, title: 'Specialised Equipment', description: 'Our professional industrial cleaners use specialised ride-on sweepers, scrubbers, and pressure washers to clean hard-to-access areas efficiently.', iconBgClass: 'bg-green-50', iconColorClass: 'text-green-700' },
      { icon: Clock, title: '24/7 Operations', description: "Manufacturing and logistics don't stop, and neither do we. Our operations team delivers services around the clock, fitting seamlessly into your shift schedules.", iconBgClass: 'bg-purple-50', iconColorClass: 'text-purple-700' }
    ],
    detailsSectionTitle: 'Tailored to Your Operations',
    detailsSectionSubtitle: "We don't offer a one-size-fits-all solution. Our experienced cleaning teams are trained to adapt to the specific logistical needs of your facility.",
    detailsList: ['Machine degreasing & maintenance', 'High-level dust removal', 'Amenities & office sanitation'],
    detailsCards: [
      { icon: Factory, title: 'Industrial Floor Cleaning', description: 'Every room and surface receives a special treatment. We handle routine sweeping and scrubbing using fit-for-purpose equipment.' },
      { icon: Truck, title: 'Hard Logistic Zones', description: 'Loading docks and exterior surfaces require rigorous maintenance. We deploy high-pressure cleaning to remove stubborn stains and grime.' },
      { icon: Package, title: 'Soft Logistics & Amenities', description: 'We pay equal attention to administrative offices, break rooms, and staff washrooms within logistics facilities.', fullWidth: true }
    ],
    faqTitle: 'Common Questions',
    faqs: [
      { question: 'Can you clean around our operating hours?', answer: 'Yes. We schedule our deep cleaning tasks during your quietest periods or shift changes to ensure zero disruption to your supply chain.' },
      { question: 'Do you provide your own heavy machinery for cleaning?', answer: 'We provide all necessary industrial-grade equipment, including ride-on sweepers, floor scrubbers, and high-pressure washing gear.' },
      { question: 'Are your teams trained in industrial safety?', answer: 'Absolutely. All operatives undergo thorough WHS inductions before stepping on site.' }
    ],
    formTitle: 'Get an Industrial Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough. We'll assess your facility size and operational hazards to provide a tailored quote.",
    formFacilityOptions: ['Warehouse / Distribution', 'Manufacturing Factory', 'Logistics Hub', 'Other Industrial'],
    testimonials: [
      { quote: "Cleaning is important to our business, it's more than a requirement. We searched around for nearly 12 months and then we found Namoli. They are fantastic. We wanted a commercial cleaner who managed their staff well and understood our strict guidelines.", author: "Josh Barnes", title: "OH&S, QA and Facilities Coordinator, Melbourne" },
      { quote: "The less I hear about cleaning, the better, as I know it's being done! Namoli are efficient, action oriented, well presented and easily contactable. While costs are competitive, the value is in regular audits, quality and maintenance.", author: "Peter Walsh", title: "CFO, Australia Wool Testing Authority" }
    ]
  }
];
