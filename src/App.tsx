import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Leaf, 
  CheckCircle, 
  ChevronRight, 
  Star,
  Download,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  School,
  GraduationCap,
  ClipboardCheck,
  Award,
  Facebook,
  Linkedin,
  LogIn,
  Building2,
  Factory,
  Stethoscope,
  Baby,
  Package,
  Truck,
  Wrench,
  HardHat
} from 'lucide-react';

// --- Data Models ---

interface ServicePageData {
  id: string;
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

const pagesData: ServicePageData[] = [
  {
    id: 'schools',
    navTitle: 'Schools',
    navIcon: School,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2025/03/Namoli_008.jpg',
    heroTitle: <>Protecting Students & Staff with <span className="text-[#F06278]">Hospital-Grade Hygiene.</span></>,
    heroSubtitle: '',
    heroDescription: 'School cleaning is about more than aesthetics; it’s about infection control. Namoli delivers compliant, audit-ready cleaning solutions for K-12 and Universities.',
    whySectionTitle: 'Beyond the Blackboard: A Safer Learning Environment',
    whySectionSubtitle: 'Generic cleaners wipe surfaces. Namoli manages risk. We understand that a missed clean in a school can lead to outbreaks and absenteeism.',
    whyCards: [
      {
        icon: ShieldCheck,
        title: 'Professional Presentation',
        description: 'We know that trust on school grounds is paramount. Our staff maintain strict security protocols, including full uniforms and visible ID badges at all times, ensuring only authorised personnel are on site.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: Leaf,
        title: 'Student-Safe & Non-Toxic',
        description: 'We use GECA-certified, eco-friendly cleaning solutions that are tough on germs but safe for students. No harsh chemical residues in classrooms or common areas.',
        iconBgClass: 'bg-green-50',
        iconColorClass: 'text-green-700'
      },
      {
        icon: ClipboardCheck,
        title: 'App-Based Transparency',
        description: 'Principals and facility managers get real-time visibility. Our teams use the Namoli App to clock in, checklist tasks, and upload photos of completed zones, ensuring you never pay for a missed clean.',
        iconBgClass: 'bg-purple-50',
        iconColorClass: 'text-purple-700'
      }
    ],
    detailsSectionTitle: 'Tailored to Your Campus',
    detailsSectionSubtitle: 'From local primary schools to sprawling university campuses, our operational model adapts to your density, schedule, and specific hygiene risks.',
    detailsList: [
      'Flexible after-hours scheduling',
      'Term-break deep cleaning',
      'Rapid response for gastro/flu'
    ],
    detailsCards: [
      {
        icon: School,
        title: 'Primary & Secondary',
        description: 'Robust maintenance of corridors, canteens, and sports halls. We manage the heavy foot traffic grime while ensuring toilets are stocked and hygienic for student dignity.'
      },
      {
        icon: GraduationCap,
        title: 'Tertiary & Colleges',
        description: '24/7 capability for libraries and research labs. We handle large-scale waste management and event cleaning for lecture theatres and common rooms.'
      },
      {
        icon: Clock,
        title: 'Term Break Deep Cleans',
        description: 'We utilise holidays for intensive work: Carpet steam cleaning, window washing, hard floor strip & seal, and high-pressure cleaning of outdoor play areas and eating zones.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions from Schools',
    faqs: [
      {
        question: 'Do you use safe chemicals?',
        answer: 'Absolutely. We prioritise GECA-certified, non-toxic, and hypoallergenic cleaning products in all student areas to ensure safety for children with allergies or sensitivities.'
      },
      {
        question: 'Can you clean during school hours?',
        answer: 'While we typically clean after hours to minimise disruption, we can provide day porters for large campuses to handle immediate spills, toilet restocking, and bin maintenance during the day.'
      },
      {
        question: 'How do you handle lock-up and security?',
        answer: 'Our teams are trained in alarm setting and secure lock-up procedures. We can be the last ones out, ensuring gates and doors are secured according to your specific protocols.'
      }
    ],
    formTitle: 'Get a School Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough. We'll assess your square footage and hygiene needs to provide a tailored quote.",
    formFacilityOptions: ['Primary School', 'Secondary School', 'University / TAFE', 'Other']
  },
  {
    id: 'childcare',
    navTitle: 'Childcare',
    navIcon: Baby,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2022/12/Namoli-Childcare-Cleaning2.jpg',
    heroTitle: <>Expert Childcare Cleaning Services for a <span className="text-[#F06278]">Safer Learning Environment.</span></>,
    heroSubtitle: 'Are your little learners protected from hidden germs?',
    heroDescription: 'Childcare centres and schools are hubs of activity, but they are also breeding grounds for bacteria and viruses. Keeping children safe means going beyond a simple surface wipe. It requires a dedicated approach to hygiene that focuses on where it matters most.',
    whySectionTitle: 'Why Trust Namoli for Childcare?',
    whySectionSubtitle: 'High-touch points like toys, desks, and door handles are often neglected in standard cleaning routines. For childcare providers, an outbreak can mean closure and a damaged reputation.',
    whyCards: [
      {
        icon: ShieldCheck,
        title: 'Safety First',
        description: 'Deep cleaning that is safe for children and pets. We ensure every surface is sanitised without leaving harmful chemical residues behind.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: Award,
        title: 'Consistent Quality',
        description: 'Regular monitoring to ensure standards never slip. Our quality assurance processes guarantee a consistently hygienic environment day after day.',
        iconBgClass: 'bg-amber-50',
        iconColorClass: 'text-amber-600'
      },
      {
        icon: Leaf,
        title: 'Decontamination Experts',
        description: 'Certified processes for preventing the spread of illness. We target the hidden pathogens that cause outbreaks in early learning environments.',
        iconBgClass: 'bg-green-50',
        iconColorClass: 'text-green-700'
      }
    ],
    detailsSectionTitle: 'Our Childcare Cleaning Solution',
    detailsSectionSubtitle: 'Namoli provides specialised childcare cleaning solutions designed to eliminate pathogens and maintain a healthy study environment. We understand the specific requirements of educational facilities, from play areas to staff rooms.',
    detailsList: [
      'Right Areas: Focusing on HTP and communal zones.',
      'Right Time: Scheduled cleaning that doesn\'t disrupt learning.',
      'Right Chemicals: Non-toxic, effective decontaminants.',
      'Right Training: Our staff are experts in educational facility hygiene.'
    ],
    detailsCards: [
      {
        icon: ClipboardCheck,
        title: 'HTP Cleaning for Childcare',
        description: 'Our childcare cleaning services focus on High-Touch Points (HTP). We use child-safe, eco-friendly chemicals to ensure that sanitisation doesn\'t come at the cost of safety. From shared toys to sleep areas, we cover it all.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions from Childcare Centres',
    faqs: [
      {
        question: 'Are your products safe for toddlers?',
        answer: 'Absolutely. We prioritise GECA-certified, non-toxic, and hypoallergenic cleaning products to ensure complete safety for children who frequently touch surfaces and their faces.'
      },
      {
        question: 'Can you clean outside operating hours?',
        answer: 'Yes, we schedule our cleans after hours to ensure zero disruption to your daily routines and to allow surfaces to fully dry and ventilate before children arrive.'
      },
      {
        question: 'Are your staff background checked?',
        answer: 'Yes, all our staff hold current Working with Children Checks, are fully police checked, and adhere to a rigid drug and alcohol policy for your complete peace of mind.'
      }
    ],
    formTitle: 'Get a Childcare Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough to assess your centre's specific hygiene needs.",
    formFacilityOptions: ['Early Learning Centre', 'Kindergarten', 'Preschool', 'Outside School Hours Care', 'Other']
  },
  {
    id: 'industrial',
    navTitle: 'Industrial',
    navIcon: Factory,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/05/tile-img-04.png',
    heroTitle: <>Certified Industrial Cleaning Services for <span className="text-[#F06278]">Factories & Facilities.</span></>,
    heroSubtitle: 'Is your industrial facility maintaining the highest safety and sustainability standards?',
    heroDescription: 'Industrial environments present unique challenges that standard cleaning services aren\'t equipped to handle. From heavy machinery to hazardous waste, maintaining a safe and productive workplace requires specialised expertise and certified processes.',
    whySectionTitle: 'Why Trust Namoli for Industrial Cleaning?',
    whySectionSubtitle: 'Neglecting specialised industrial cleaning services can lead to serious safety hazards, equipment failure, and regulatory non-compliance. You need a partner who understands the complexity of factories.',
    whyCards: [
      {
        icon: Award,
        title: 'Certified Expertise',
        description: 'Trained professionals who share our values. Every franchisee undergoes rigorous WHS induction and SDS chemical safety training before stepping onto your site, with always-on education.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: ShieldCheck,
        title: 'Safety Focused',
        description: 'Rigorous adherence to safety standards and colour-coding. We mitigate risks and ensure our cleaning processes align perfectly with your site-specific WHS requirements.',
        iconBgClass: 'bg-red-50',
        iconColorClass: 'text-red-700'
      },
      {
        icon: Clock,
        title: 'Innovation-Driven',
        description: 'Using the latest technology to improve efficiency and results. We deploy advanced industrial scrubbers and sweepers to tackle large-scale grime effectively.',
        iconBgClass: 'bg-purple-50',
        iconColorClass: 'text-purple-700'
      }
    ],
    detailsSectionTitle: 'Our Industrial Cleaning Solution',
    detailsSectionSubtitle: 'Namoli provides certified industrial cleaning services designed to maintain your facility safely and sustainably. We focus on innovation and safety, ensuring your workplace is both sparkling and compliant.',
    detailsList: [
      'Workplace Safety: Minimizing risks through rigorous cleaning protocols.',
      'Operational Efficiency: Preventing grime buildup that can lead to machinery downtime.',
      'Environmental Responsibility: Using sustainable cleaning methods that don\'t compromise on performance.'
    ],
    detailsCards: [
      {
        icon: ClipboardCheck,
        title: 'Transparent Management',
        description: 'Track and schedule all your cleaning requirements through our Clean Smarts app. It enables auditing, issue tracking, and daily checklists between all parties.'
      },
      {
        icon: ShieldCheck,
        title: 'Audit-Ready Reports',
        description: 'Ensure you are always compliant with WHS standards. We provide detailed documentation of all cleaning activities for your compliance records.'
      },
      {
        icon: Award,
        title: 'Consistent Results',
        description: 'Monitoring that ensures the standard never drops. Regular site audits by our area managers guarantee that your industrial facility maintains peak hygiene levels.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions from Industrial Facilities',
    faqs: [
      {
        question: 'Do you handle hazardous waste?',
        answer: 'We have specialised protocols for various industrial waste types and work within your existing waste management frameworks to ensure safe disposal.'
      },
      {
        question: 'Are your staff WHS trained?',
        answer: 'Yes, all staff undergo rigorous site-specific safety inductions and hold relevant certifications for operating in high-risk industrial environments.'
      },
      {
        question: 'Can you clean around heavy machinery?',
        answer: 'Our teams are trained to work safely around industrial equipment without causing disruption to your operations or risking damage to sensitive machinery.'
      }
    ],
    formTitle: 'Get an Industrial Proposal + Free Site Assessment',
    formSubtitle: "Book a site walkthrough to assess your facility's safety and cleaning requirements.",
    formFacilityOptions: ['Manufacturing Plant', 'Warehouse', 'Distribution Centre', 'Food Processing', 'Other'],
    testimonials: [
      {
        quote: "When it came time for us to switch facilities cleaners, we considered a number of companies in the local marketplace. When I met Namoli I was blown away by their professionalism. They weren't just yes people. They asked the right questions and did a comprehensive review. They demonstrated through our tender that they understood our business, did an additional walk through with their franchisee and were professional end to end. We felt comforted, reassured and secure and the Swept App gave us great confidence as it is visual as well as written. Overall, the franchisee team are fantastic and there is continuity of team.",
        author: "Nikki Norum",
        title: "Office Manager, Brisbane Camperland"
      }
    ]
  },
  {
    id: 'medical',
    navTitle: 'Medical',
    navIcon: Stethoscope,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2022/12/Namoli-Medical-Cleaning2-1024x683.jpg',
    heroTitle: <>Professional Medical Facility Cleaning & <span className="text-[#F06278]">Infection Control.</span></>,
    heroSubtitle: 'Does your healthcare facility meet the highest hygiene standards?',
    heroDescription: 'In a medical environment, "clean" isn\'t just about appearance. It\'s about safety, compliance, and saving lives. Whether you run a local clinic or a large hospital facility, maintaining a sterile environment is your top priority.',
    whySectionTitle: 'Why Choose Namoli for Clinical Cleaning?',
    whySectionSubtitle: 'Traditional cleaning methods often fall short in clinical settings. Cross-contamination risks, strict regulatory audits, and the need for specialised chemical use create a high-pressure environment.',
    whyCards: [
      {
        icon: ShieldCheck,
        title: 'Infection Control Experts',
        description: 'Specialised training in medical-grade sanitisation is mandatory. We use team cleaning methodologies, disposable mops, and appropriate PPE to break the chain of infection.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: ClipboardCheck,
        title: 'Regulatory Compliance',
        description: 'We help you meet and exceed Australian healthcare hygiene standards, ensuring your facility is always prepared for rigorous health audits.',
        iconBgClass: 'bg-green-50',
        iconColorClass: 'text-green-700'
      },
      {
        icon: Users,
        title: 'Customised Plans',
        description: 'No two facilities are the same; our plans reflect your specific clinical requirements, from general waiting areas to sterile procedure rooms.',
        iconBgClass: 'bg-purple-50',
        iconColorClass: 'text-purple-700'
      }
    ],
    detailsSectionTitle: 'Our Clinical Cleaning Solution',
    detailsSectionSubtitle: 'At Namoli, we specialize in high-standard medical clinic cleaning services tailored to the unique needs of the healthcare sector. Our process ensures that every surface is decontaminated and every room is audit-ready.',
    detailsList: [
      'Detailed onsite risk assessments.',
      'Customised infection control plans.',
      'Transparent reporting and monitoring to ensure consistent standards.'
    ],
    detailsCards: [
      {
        icon: ShieldCheck,
        title: 'Specialized Hospital Cleaning',
        description: 'We provide comprehensive hospital cleaning solutions, from waiting rooms to high-risk clinical areas. Our staff are trained in infection control protocols.'
      },
      {
        icon: Leaf,
        title: 'Hospital-Grade Disinfectants',
        description: 'Our product selection is fit for purpose. We use TGA-approved (Therapeutic Goods Administration) disinfectants and strict colour-coding to ensure absolutely no cross-contamination.'
      },
      {
        icon: Award,
        title: 'The CARE Process',
        description: 'Confidence, Action, Reliability, Excellence. This unique process is at the heart of our medical facility cleaning services, driving continuous improvement and impeccable results.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions from Medical Facilities',
    faqs: [
      {
        question: 'Do you use hospital-grade disinfectants?',
        answer: 'Yes, we exclusively use TGA-approved hospital-grade disinfectants that are proven effective against a wide range of clinical pathogens.'
      },
      {
        question: 'How do you prevent cross-contamination?',
        answer: 'We use strict colour-coding systems for all equipment and cloths, combined with specialised isolation cleaning protocols to ensure pathogens are never transferred between zones.'
      },
      {
        question: 'Are you compliant with RACGP standards?',
        answer: 'Our cleaning processes are meticulously designed to help you meet and exceed all relevant healthcare standards, including RACGP accreditation requirements.'
      }
    ],
    formTitle: 'Get a Medical Cleaning Proposal + Free Site Assessment',
    formSubtitle: "Book a confidential site walkthrough to discuss your infection control requirements.",
    formFacilityOptions: ['Medical Clinic', 'Dental Practice', 'Hospital', 'Allied Health', 'Other'],
    testimonials: [
      {
        quote: "At Keilor Private Hospital, we have had a relationship with the crew from Namoli for many years. We consider them to be part of our team and rely on them to keep the facility well maintained. Janaka and his team at Namoli are always available to us and happy to arrange after-hours work when needed. They have provided us with certificate cleans at breakneck speed with negligible disruption to business and can deal with any urgent concern that occurs. It has been very important to us to have the facility presented as impeccably clean so that our patients have confidence in their healthcare experience during these escalated times. The team at Namoli is an all-encompassing, one stop service provider that saves me hours of time and concern, delivering first class outcomes, not only at a competitive price, but ultimately working with me to save money with innovative solutions and economies via his extensive network. I highly recommend Namoli and Janaka and his team and look forward to working with them for many years to come.",
        author: "Jayne Gaunt",
        title: "Chief Executive Officer, Keilor Private Hospital, Melbourne"
      }
    ]
  },
  {
    id: 'office',
    navTitle: 'Office',
    navIcon: Building2,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/01/Namoli-Office-Cleaning6-1024x683.jpg',
    heroTitle: <>Professional Office Cleaning Services for <span className="text-[#F06278]">High-Performance Workspaces.</span></>,
    heroSubtitle: 'Is a cluttered office slowing down your team\'s productivity?',
    heroDescription: 'We understand you are busy and discussing cleaning isn\'t the best use of your time. A clean office reflects your professional standards, and you need a cleaner who just gets it done seamlessly.',
    whySectionTitle: 'Why Choose Namoli as Your Office Cleaner?',
    whySectionSubtitle: 'Inconsistent standards, missed areas, and poor communication can make managing your office cleaning a full-time job in itself. You need a service that "just gets it done".',
    whyCards: [
      {
        icon: Clock,
        title: 'Agile and Responsive',
        description: 'Clear communication via our Clean Smarts app. Just upload a picture or message in the app, and consider your problem solved without wasting your valuable time.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: Award,
        title: 'Cost-Effective',
        description: 'High-quality service that fits your budget. We optimise our cleaning schedules to deliver maximum impact without unnecessary overheads.',
        iconBgClass: 'bg-green-50',
        iconColorClass: 'text-green-700'
      },
      {
        icon: ShieldCheck,
        title: 'Raising the Standards',
        description: 'We bring the same rigor to office spaces as we do to clinical environments, ensuring your workspace is not just visually clean, but hygienically safe.',
        iconBgClass: 'bg-purple-50',
        iconColorClass: 'text-purple-700'
      }
    ],
    detailsSectionTitle: 'Our Office Cleaning Solution',
    detailsSectionSubtitle: 'Namoli offers agile and responsive office cleaning services tailored to any operating environment. From boutique agencies to multi-storey corporate offices, we provide a cost-effective solution.',
    detailsList: [
      'Tailored Plans: Customised to your office layout and schedule.',
      'Monitoring & Reporting: Transparent tracking so you know exactly what\'s been done.',
      'Agile Response: We adapt to your needs as your business grows.'
    ],
    detailsCards: [
      {
        icon: ClipboardCheck,
        title: 'Systematic Office Cleaning',
        description: 'We don\'t believe in "one size fits all." Our office cleaning process begins with a deep dive into your specific requirements and workspace layout.'
      },
      {
        icon: Users,
        title: 'Seamless Communication',
        description: 'Direct lines of communication through the Clean Smarts app. Our fully police-checked and vetted teams provide absolute reassurance for your business needs.'
      },
      {
        icon: Star,
        title: 'Consistent Quality',
        description: 'Regular audits to ensure your workspace always looks its best. We proactively manage our teams so you never have to micromanage your cleaners.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions from Office Managers',
    faqs: [
      {
        question: 'Can you clean after business hours?',
        answer: 'Yes, the majority of our office cleaning is performed after hours to avoid disruption to your team\'s productivity.'
      },
      {
        question: 'Do you supply consumables?',
        answer: 'Yes, we provide costings and management for all restroom consumables, including toilet paper, hand towels, air fresheners, sanitary bins, hand soap, and hand sanitiser.'
      },
      {
        question: 'How do you handle security alarms?',
        answer: 'Our staff are fully trained in building security, alarm operation, and lock-up procedures, ensuring your premises are always secure when we leave.'
      }
    ],
    formTitle: 'Get an Office Cleaning Proposal + Free Site Assessment',
    formSubtitle: "Book a quick site walkthrough to get a tailored quote for your workspace.",
    formFacilityOptions: ['Corporate Office', 'Co-working Space', 'Boutique Agency', 'Multi-tenant Building', 'Other'],
    testimonials: [
      {
        quote: "When it came time for us to switch facilities cleaners, we considered a number of companies in the local marketplace. When I met Namoli I was blown away by their professionalism. They weren't just yes people. They asked the right questions and did a comprehensive review. They demonstrated through our tender that they understood our business, did an additional walk through with their franchisee and were professional end to end. We felt comforted, reassured and secure and the Swept App gave us great confidence as it is visual as well as written. Overall, the franchisee team are fantastic and there is continuity of team.",
        author: "Nikki Norum",
        title: "Office Manager, Brisbane Camperland"
      }
    ]
  },
  {
    id: 'warehouse',
    navTitle: 'Warehouse',
    navIcon: Package,
    heroImage: 'https://www.namoli.com.au/wp-content/uploads/2023/05/tile-img-04.png',
    heroTitle: <>Expert Warehouse Cleaning Services <span className="text-[#F06278]">Built for Industry.</span></>,
    heroSubtitle: '',
    heroDescription: 'Industrial zones are a constant buzz of activity. We remove the debris, minimise hazards, and keep your supply chain moving with specialised 24/7 cleaning solutions.',
    whySectionTitle: 'Industrial Sites Demand a Different Kind of Clean',
    whySectionSubtitle: 'There is no room for error when it comes to employee safety and productivity. We utilise the best technology and training processes to provide bespoke warehouse cleaning solutions.',
    whyCards: [
      {
        icon: HardHat,
        title: 'Safe Work Conditions',
        description: 'We prioritise protocols that minimise hazards. This includes proper handling of industrial materials, spill response procedures, and maintaining clear, debris-free walkways.',
        iconBgClass: 'bg-blue-50',
        iconColorClass: 'text-[#003B5C]'
      },
      {
        icon: Wrench,
        title: 'Specialised Equipment',
        description: 'Our professional industrial cleaners know how to manage heavy-duty tasks. We use specialised ride-on sweepers, scrubbers, and pressure washers to clean hard-to-access areas efficiently.',
        iconBgClass: 'bg-green-50',
        iconColorClass: 'text-green-700'
      },
      {
        icon: Clock,
        title: '24/7 Operations',
        description: 'Manufacturing and logistics don\'t stop, and neither do we. Our operations team delivers services around the clock, fitting seamlessly into your shift schedules to avoid operational downtime.',
        iconBgClass: 'bg-purple-50',
        iconColorClass: 'text-purple-700'
      }
    ],
    detailsSectionTitle: 'Tailored to Your Operations',
    detailsSectionSubtitle: 'We don’t offer a one-size-fits-all solution. Our experienced cleaning teams are trained to adapt to the specific logistical needs of your facility.',
    detailsList: [
      'Machine degreasing & maintenance',
      'High-level dust removal',
      'Amenities & office sanitation'
    ],
    detailsCards: [
      {
        icon: Factory,
        title: 'Industrial Floor Cleaning',
        description: 'Every room and surface receives a special treatment. We handle routine sweeping and scrubbing using fit-for-purpose equipment to ensure a safe and compliant warehouse floor.'
      },
      {
        icon: Truck,
        title: 'Hard Logistic Zones',
        description: 'Loading docks and exterior surfaces require rigorous maintenance. We deploy high-pressure cleaning to remove stubborn stains and grime from heavy usage areas.'
      },
      {
        icon: Package,
        title: 'Soft Logistics & Amenities',
        description: 'We pay equal attention to administrative offices, break rooms, and staff washrooms within logistics facilities. A clean, hygienic amenity space is crucial for workforce morale and reducing absenteeism.',
        fullWidth: true
      }
    ],
    faqTitle: 'Common Questions',
    faqs: [
      {
        question: 'Can you clean around our operating hours?',
        answer: 'Yes. We understand industrial facilities often operate continuously. We schedule our deep cleaning, sweeping, and scrubbing tasks during your quietest periods or shift changes to ensure zero disruption to your supply chain.'
      },
      {
        question: 'Do you provide your own heavy machinery for cleaning?',
        answer: 'We provide all necessary industrial-grade equipment, including ride-on sweepers, floor scrubbers, and high-pressure washing gear required to handle large warehouse footprints.'
      },
      {
        question: 'Are your teams trained in industrial safety?',
        answer: 'Absolutely. All operatives undergo thorough WHS inductions before stepping on site. We familiarise our teams with your specific hazard protocols, ensuring they work safely around forklifts and heavy machinery.'
      }
    ],
    formTitle: 'Get an Industrial Proposal + Free Site Assessment',
    formSubtitle: "Book a no-obligation site walkthrough. We'll assess your facility size and operational hazards to provide a tailored quote.",
    formFacilityOptions: ['Warehouse / Distribution', 'Manufacturing Factory', 'Logistics Hub', 'Other Industrial'],
    testimonials: [
      {
        quote: "Cleaning is important to our business, it's more than a requirement.We searched around for nearly 12 months and then we found Namoli.They are fantastic. We wanted a commercial cleaner who managed their staff well and understood our strict guidelines and needs for cleaning. Namoli have clear account management, have supported us through COVID, identify specific cleaning needs and communication is quick and easy via the app, any needs are fixed immediately. We really rely on them and they make my job easier!",
        author: "Josh Barnes",
        title: "OH&S, QA and Facilities Coordinator, Melbourne"
      },
      {
        quote: "The less I hear about cleaning, the better, as I know it's being done! Namoli are efficient, action oriented, well presented and easily contactable. Their app is good for communications, for ease of feedback or when additional cleaning needs to be logged. While costs are competitive, the value is in regular audits, quality and maintenance. There is a well-balanced relationship and partnership between us, Namoli and their franchisee and they now operate across multiple sites.",
        author: "Peter Walsh",
        title: "CFO, Australia Wool Testing Authority, Melbourne & Brisbane"
      }
    ]
  }
];


// --- Main App Component ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(pagesData[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const activePage = pagesData.find(p => p.id === activeTabId) || pagesData[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (heroRef.current && formRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const formTop = formRef.current.getBoundingClientRect().top;
        
        const isPastHero = heroBottom <= 100; 
        const isBeforeForm = formTop > window.innerHeight - 50; 

        setShowStickyCta(isPastHero && isBeforeForm);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTabId]); // Re-run effect when tab changes to attach to new refs

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeTabId]);

  const scrollToForm = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-[#003B5C] bg-white min-h-screen flex flex-col relative pb-[80px] md:pb-0">
      
      {/* Top Bar */}
      <div className="bg-[#003B5D] text-white text-xs py-2 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-[#F06278]" /> Brisbane & Melbourne</span>
            <span className="flex items-center gap-2"><Phone size={12} className="text-[#F06278]" /> 1300 626 654</span>
            <span className="flex items-center gap-2"><Mail size={12} className="text-[#F06278]" /> info@namoli.com.au</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F06278] transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#F06278] transition-colors"><Linkedin size={14} /></a>
            <div className="h-3 w-px bg-slate-600"></div>
            <a href="#" className="flex items-center gap-1 font-bold hover:text-[#F06278] transition-colors">
              <LogIn size={12} /> Client Login
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 md:top-[32px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-auto overflow-hidden">
                 <img src="https://www.namoli.com.au/wp-content/uploads/2021/11/namoli-fadedlogo.png" alt="Namoli Commercial" className="h-full object-contain" />
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <button 
                onClick={scrollToForm}
                className="bg-[#F06278] hover:bg-[#d64d63] text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm ml-2"
              >
                Contact Us
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#003B5C] p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-1 border-t border-slate-100 pt-2">
            {pagesData.map((page) => {
              const Icon = page.navIcon;
              const isActive = activeTabId === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => setActiveTabId(page.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    isActive 
                      ? 'bg-[#003B5C] text-white shadow-sm' 
                      : 'text-[#003B5C] hover:bg-slate-100 hover:text-[#F06278]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-[#F06278]' : ''} />
                  {page.navTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
            <div className="px-4 py-4 space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Our Services</p>
              {pagesData.map((page) => {
                const Icon = page.navIcon;
                const isActive = activeTabId === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => setActiveTabId(page.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium text-left transition-colors ${
                      isActive 
                        ? 'bg-[#003B5C] text-white' 
                        : 'text-[#003B5C] hover:bg-slate-50'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-[#F06278]' : 'text-slate-400'} />
                    {page.navTitle}
                  </button>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button 
                  onClick={scrollToForm}
                  className="w-full bg-[#F06278] text-white px-4 py-3 rounded-md font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- Dynamic Page Content --- */}
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-[#003B5C] overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <img 
            key={activePage.heroImage} // Force re-render of image for animation
            src={activePage.heroImage} 
            alt={activePage.navTitle} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 animate-[fadeIn_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#003B5C]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-[slideUp_0.5s_ease-out]">
            {activePage.heroSubtitle && (
              <p className="text-[#F06278] font-bold tracking-wider uppercase text-sm mb-4">
                {activePage.heroSubtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {activePage.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              {activePage.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#F06278] hover:bg-[#d64d63] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Claim Your Free Site Assessment <ChevronRight size={20} />
              </button>
              
              <div className="flex items-center gap-4 text-white text-sm font-medium px-4">
                <div className="flex items-center gap-1"><CheckCircle size={16} className="text-[#F06278]" /> App Reported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Banner */}
      <div className="bg-white border-b border-slate-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Certified for Safety & Quality
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
             <img src="https://www.namoli.com.au/wp-content/uploads/2023/11/ECA_2023-24_proud_member_logo_450px-wide-300x249.jpg" alt="Early Childhood Australia" className="h-20 w-auto object-contain" />
             <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/issa-member-logo-converted.png" alt="ISSA" className="h-16 w-auto object-contain" />
             <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/FCA-Member-logo-CMYK-300x169.jpg" alt="FCA" className="h-14 w-auto object-contain" />
             <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/bscaa-300x152.png" alt="BSCAA" className="h-14 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Why Namoli Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#003B5C] mb-4">{activePage.whySectionTitle}</h2>
            <p className="text-lg text-slate-600">
              {activePage.whySectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activePage.whyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#F06278] transition-colors group">
                  <div className={`w-14 h-14 ${card.iconBgClass} rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F06278] transition-colors`}>
                    <Icon size={28} className={`${card.iconColorClass} group-hover:text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B5C] mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Sectors / Details */}
      <section className="py-20 bg-[#003B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6">{activePage.detailsSectionTitle}</h2>
              <p className="text-slate-300 mb-6">
                {activePage.detailsSectionSubtitle}
              </p>
              <ul className="space-y-4">
                {activePage.detailsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 font-medium">
                    <CheckCircle size={18} className="text-[#F06278] mt-1 shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToForm} className="mt-8 text-white font-bold flex items-center gap-2 hover:underline">
                Claim Your Free Site Assessment <ChevronRight size={18} />
              </button>
            </div>

            <div className="w-full lg:w-2/3 grid md:grid-cols-2 gap-6">
              {activePage.detailsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className={`bg-slate-50 p-8 rounded-lg border border-slate-100 ${card.fullWidth ? 'md:col-span-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-[#F06278]" size={28} />
                      <h3 className="font-bold text-[#003B5C] text-xl">{card.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {activePage.testimonials && activePage.testimonials.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#003B5C] mb-12">What Our Clients Say</h2>
            <div className={`grid gap-8 ${activePage.testimonials.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
              {activePage.testimonials.map((test, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="flex gap-1 text-amber-400 mb-6">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed flex-grow">"{test.quote}"</p>
                  <div>
                    <h4 className="font-bold text-[#003B5C]">{test.author}</h4>
                    <p className="text-sm text-slate-500">{test.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ & Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* FAQ Column */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#003B5C] mb-8">{activePage.faqTitle}</h2>
              <div className="space-y-6">
                {activePage.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-4">
                    <h4 className="font-bold text-[#003B5C] mb-2">{faq.question}</h4>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div id="enquiry-form" ref={formRef} className="w-full lg:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#003B5C] mb-2">{activePage.formTitle}</h3>
              <p className="text-slate-600 mb-6 text-sm">{activePage.formSubtitle}</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label>
                    <input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label>
                    <input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company / Facility Name</label>
                  <input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                  <input type="email" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label>
                  <input type="tel" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Facility Type</label>
                  <select className="w-full p-3 rounded border border-slate-300 bg-white focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none">
                    {activePage.formFacilityOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#F06278] hover:bg-[#d64d63] text-white font-bold py-4 rounded shadow-md transition-all mt-2">
                  Request Site Assessment
                </button>
                <p className="text-xs text-slate-400 text-center mt-3">Your details are secure. We respect your privacy.</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003B5C] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
               <div className="h-8 w-auto mb-4 opacity-50">
                <span className="text-2xl font-bold text-white">Namoli</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Namoli Commercial is a leader in compliant, app-managed cleaning services across multiple sectors. We protect your environment so you can focus on your core business.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                {pagesData.map(page => (
                  <li key={page.id}>
                    <button onClick={() => setActiveTabId(page.id)} className="hover:text-[#F06278] transition-colors">
                      {page.navTitle} Cleaning
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} /> 1300 626 654</li>
                <li className="flex items-center gap-2"><Mail size={14} /> info@namoli.com.au</li>
                <li className="flex items-center gap-2"><MapPin size={14} /> Australia Wide</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs pt-8 border-t border-slate-800">
            &copy; {new Date().getFullYear()} Namoli Commercial. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA Banner for Desktop */}
      <div className={`hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-[#003B5C] border-t border-slate-700 p-4 shadow-lg justify-center items-center gap-6 transition-transform duration-300 ${showStickyCta ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <p className="text-white font-medium">Ready to ensure a safer environment for your facility?</p>
        <button 
          onClick={scrollToForm}
          className="bg-[#F06278] hover:bg-[#d64d63] text-white font-bold py-2.5 px-8 rounded shadow-sm transition-colors"
        >
          Claim Your Free Site Assessment
        </button>
      </div>

      {/* Sticky Bottom CTA for Mobile */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ${showStickyCta ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <button 
          onClick={scrollToForm}
          className="w-full bg-[#F06278] text-white font-bold py-3 rounded-md shadow-sm"
        >
          Free Site Assessment
        </button>
      </div>

      {/* Simple animations for page transitions */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.4; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
