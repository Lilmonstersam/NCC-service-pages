import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useParams, Navigate, useLocation, Outlet, Link } from 'react-router-dom';
import {
  ShieldCheck, Users, Clock, Leaf, CheckCircle, ChevronRight, Star,
  Phone, Mail, MapPin, Menu, X, School, GraduationCap,
  ClipboardCheck, Award, Facebook, Linkedin, LogIn, Building2, Factory,
  Stethoscope, Baby, Package, Truck, Wrench, HardHat,
  Home as HomeIcon, ArrowRight, ExternalLink
} from 'lucide-react';
import { pagesData } from './data.tsx';

// --- Utilities ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const scrollToForm = () => {
  document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
};

// --- Header ---

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (isActive: boolean) =>
    `flex items-center gap-2 px-3 py-2 rounded-md font-medium text-sm transition-all ${
      isActive ? 'bg-[#003B5C] text-white shadow-sm' : 'text-[#003B5C] hover:bg-slate-100 hover:text-[#F06278]'
    }`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#003B5D] text-white text-xs py-2 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-[#F06278]" /> Brisbane, Melbourne & Sydney</span>
            <span className="flex items-center gap-2"><Phone size={12} className="text-[#F06278]" /> 1300 626 654</span>
            <span className="flex items-center gap-2"><Mail size={12} className="text-[#F06278]" /> info@namoli.com.au</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/namolicommercialcleaning/" className="hover:text-[#F06278] transition-colors"><Facebook size={14} /></a>
            <a href="https://au.linkedin.com/company/namoli-commercial-cleaning" className="hover:text-[#F06278] transition-colors"><Linkedin size={14} /></a>
            <div className="h-3 w-px bg-slate-600"></div>
            <a href="https://www.namoli.com.au/member-login/" className="flex items-center gap-1 font-bold hover:text-[#F06278] transition-colors"><LogIn size={12} /> Client Login</a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 md:top-[32px] left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-auto overflow-hidden">
                <img src="https://www.namoli.com.au/wp-content/uploads/2021/11/namoli-fadedlogo.png" alt="Namoli Commercial" className="h-full object-contain" />
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-2">
              <button onClick={scrollToForm} className="bg-[#F06278] hover:bg-[#d64d63] text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm ml-2">
                Contact Us
              </button>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#003B5C] p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 border-t border-slate-100 pt-2">
            <NavLink to="/" end className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }: { isActive: boolean }) => (<><HomeIcon size={16} className={isActive ? 'text-[#F06278]' : ''} /> Home</>)}
            </NavLink>
            {pagesData.map((page) => {
              const Icon = page.navIcon;
              return (
                <NavLink key={page.id} to={`/services/${page.slug}`} className={({ isActive }) => navLinkClass(isActive)}>
                  {({ isActive }: { isActive: boolean }) => (<><Icon size={16} className={isActive ? 'text-[#F06278]' : ''} />{page.navTitle}</>)}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
            <div className="px-4 py-4 space-y-2">
              <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors ${isActive ? 'bg-[#003B5C] text-white' : 'text-[#003B5C] hover:bg-slate-50'}`}>
                {({ isActive }: { isActive: boolean }) => (<><HomeIcon size={18} className={isActive ? 'text-[#F06278]' : 'text-slate-400'} /> Home</>)}
              </NavLink>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">Our Services</p>
              {pagesData.map((page) => {
                const Icon = page.navIcon;
                return (
                  <NavLink key={page.id} to={`/services/${page.slug}`} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors ${isActive ? 'bg-[#003B5C] text-white' : 'text-[#003B5C] hover:bg-slate-50'}`}>
                    {({ isActive }: { isActive: boolean }) => (<><Icon size={18} className={isActive ? 'text-[#F06278]' : 'text-slate-400'} />{page.navTitle}</>)}
                  </NavLink>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button onClick={() => { scrollToForm(); setMobileMenuOpen(false); }} className="w-full bg-[#F06278] text-white px-4 py-3 rounded-md font-semibold">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// --- Footer ---

function Footer() {
  return (
    <footer className="bg-[#003B5C] text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="h-8 w-auto mb-4 opacity-50"><span className="text-2xl font-bold text-white">Namoli</span></div>
            <p className="text-sm leading-relaxed max-w-xs">
              Namoli Commercial is a leader in compliant, app-managed cleaning services across multiple sectors. We protect your environment so you can focus on your core business.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              {pagesData.map(page => (
                <li key={page.id}><Link to={`/services/${page.slug}`} className="hover:text-[#F06278] transition-colors">{page.navTitle} Cleaning</Link></li>
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
  );
}

// --- Trust Banner ---

function TrustBanner() {
  return (
    <div className="bg-white border-b border-slate-100 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Certified for Safety & Quality</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
          <img src="https://www.namoli.com.au/wp-content/uploads/2023/11/ECA_2023-24_proud_member_logo_450px-wide-300x249.jpg" alt="Early Childhood Australia" className="h-20 w-auto object-contain" />
          <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/issa-member-logo-converted.png" alt="ISSA" className="h-16 w-auto object-contain" />
          <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/FCA-Member-logo-CMYK-300x169.jpg" alt="FCA" className="h-14 w-auto object-contain" />
          <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/bscaa-300x152.png" alt="BSCAA" className="h-14 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}

// --- Sticky CTA Banners ---

function StickyCta({ show }: { show: boolean }) {
  return (
    <>
      <div className={`hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-[#003B5C] border-t border-slate-700 p-4 shadow-lg justify-center items-center gap-6 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <p className="text-white font-medium">Ready to ensure a safer environment for your facility?</p>
        <button onClick={scrollToForm} className="bg-[#F06278] hover:bg-[#d64d63] text-white font-bold py-2.5 px-8 rounded shadow-sm transition-colors">Claim Your Free Site Assessment</button>
      </div>
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <button onClick={scrollToForm} className="w-full bg-[#F06278] text-white font-bold py-3 rounded-md shadow-sm">Free Site Assessment</button>
      </div>
    </>
  );
}

// --- Enquiry Form ---

function EnquiryForm({ title, subtitle, facilityOptions, formRef }: { title: string; subtitle: string; facilityOptions: string[]; formRef?: React.Ref<HTMLDivElement> }) {
  return (
    <div id="enquiry-form" ref={formRef} className="w-full lg:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
      <h3 className="text-2xl font-bold text-[#003B5C] mb-2">{title}</h3>
      <p className="text-slate-600 mb-6 text-sm">{subtitle}</p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label><input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" /></div>
          <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label><input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" /></div>
        </div>
        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company / Facility Name</label><input type="text" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" /></div>
        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label><input type="email" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" /></div>
        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label><input type="tel" className="w-full p-3 rounded border border-slate-300 focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none" /></div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Service Type</label>
          <select className="w-full p-3 rounded border border-slate-300 bg-white focus:border-[#F06278] focus:ring-1 focus:ring-[#F06278] outline-none">
            {facilityOptions.map((opt, idx) => (<option key={idx} value={opt}>{opt}</option>))}
          </select>
        </div>
        <button type="submit" className="w-full bg-[#F06278] hover:bg-[#d64d63] text-white font-bold py-4 rounded shadow-md transition-all mt-2">Request Site Assessment</button>
        <p className="text-xs text-slate-400 text-center mt-3">Your details are secure. We respect your privacy.</p>
      </form>
    </div>
  );
}

// --- Home Page ---

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && formRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const formTop = formRef.current.getBoundingClientRect().top;
        setShowStickyCta(heroBottom <= 100 && formTop > window.innerHeight - 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCards = [
    { page: pagesData.find(p => p.id === 'medical')!, items: ["Doctors' Rooms", 'Bathrooms', 'Electronic Devices', 'Beds & Desks'] },
    { page: pagesData.find(p => p.id === 'office')!, items: ['Reception Areas', 'Office Cubicles', 'Kitchens', 'Meeting Rooms'] },
    { page: pagesData.find(p => p.id === 'schools')!, items: ['Corridors & Canteens', 'Playgrounds', 'Toilets', 'Sports Halls'] },
    { page: pagesData.find(p => p.id === 'childcare')!, items: ['Play Areas & Toys', 'Hand Basins', 'Sleep Areas', 'Staff Rooms'] },
    { page: pagesData.find(p => p.id === 'industrial')!, items: ['Factories', 'Machines', 'High Ceilings', 'Processing Facilities'] },
    { page: pagesData.find(p => p.id === 'warehouse')!, items: ['Loading Docks', 'Warehouses', 'Amenities', 'Mezzanine Levels'] },
  ];

  const processSteps = [
    { num: '1', title: 'Cleaning Requirements', subtitle: 'We learn everything about your needs', desc: 'Upon receiving your quote request, our team will touch base to get specific information about your requirements — the areas, timing, frequency, and any special needs.' },
    { num: '2', title: 'Tailored Cleaning Plan', subtitle: 'We devise a customised plan', desc: 'Based on the information you provide, we will come up with a tailored package that meets your company\'s unique requirements and budget.' },
    { num: '3', title: 'Induction', subtitle: 'We get the ball rolling', desc: 'A manager will be assigned to supervise your cleaning. With your permission, we photograph your space and add detailed visual instructions to our mobile management system.' },
    { num: '4', title: 'Monitoring & Reporting', subtitle: 'Transparent and consistent service', desc: 'Our standard operating procedures ensure all activities are recorded in real time, producing comprehensive data on task completion and audit results.' },
  ];

  const testimonials = [
    { quote: "Namoli understand our business and just get the job done. They work after hours, we trust their ability, they scale up when required and they assist us with waste partners. There is clear communication between the franchise cleaners and Namoli — they work together and I can see there is mutual respect.", author: "Peter Walsh", title: "CFO, Australia Wool Testing Authority" },
    { quote: "Cleaning is important to our business, it's more than a requirement. We searched around for nearly 12 months and then we found Namoli. They are fantastic. We wanted a commercial cleaner who managed their staff well and understood our strict guidelines.", author: "Josh Barnes", title: "OH&S, QA and Facilities Coordinator" },
    { quote: "The less I hear about cleaning, the better, as I know it's being done! Namoli are efficient, action oriented, well presented and easily contactable. While costs are competitive, the value is in regular audits, quality and maintenance.", author: "National Transport & Logistics Manager", title: "Bostik Australia, Melbourne" },
  ];

  const faqs = [
    { question: 'What size of jobs and locations does Namoli service?', answer: 'Any size. Our services range from small offices to very large factories and more. Contact us to discuss your need.' },
    { question: 'What are the working hours of your commercial cleaner?', answer: 'Any hours 24/7 a day. The working hours of our cleaners are very flexible. You can schedule, monitor, and manage the cleaning progress anytime on our Smart Clean application.' },
    { question: 'Does Namoli adopt any cleaner training programs?', answer: 'Partnering with iKnow Training, Namoli has an organised Online Training and Safety System for all our cleaners, including franchisees, their staff and contractors.' },
    { question: 'What do you charge for your commercial cleaning services?', answer: 'There are $0 fees for onsite assessments. We know that every client is different and has unique requirements, so we build a schedule priced according to your needs and budget.' },
  ];

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-[#003B5C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://www.namoli.com.au/wp-content/uploads/2023/01/Namoli-Office-Cleaning6-1024x683.jpg" alt="Commercial Cleaning" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#003B5C]/85 to-[#003B5C]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-lg md:text-xl font-semibold text-[#F06278] mb-3 tracking-wide">Namoli Commercial Cleaning Services Brisbane, Melbourne & Sydney</h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              We care about commercial cleaning <span className="text-[#F06278]">so you don't have to.</span>
            </p>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              We are a community of cleaning experts who want you to experience the satisfaction of a great clean, without having to lift a finger. Our fully certified team operates quietly in the background, delivering essential cleaning services with continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="bg-[#F06278] hover:bg-[#d64d63] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Claim Your Free Audit <ChevronRight size={20} />
              </button>
              <a href="tel:1300626654" className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-4 rounded-md border border-white/30 hover:bg-white/10 transition-all">
                <Phone size={18} /> 1300 626 654
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBanner />

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#003B5C] mb-4">Our Specialties</h2>
            <p className="text-lg text-slate-600">The health and wellbeing of staff and workplace visitors is important to every business. Namoli operates in specialist sectors and understands mandatory requirements exist in relation to your business sector.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map(({ page, items }) => {
              const Icon = page.navIcon;
              return (
                <Link key={page.id} to={`/services/${page.slug}`} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#F06278] hover:shadow-md transition-all group block">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F06278] transition-colors">
                    <Icon size={28} className="text-[#003B5C] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B5C] mb-3">{page.navTitle} Cleaning</h3>
                  <ul className="space-y-2 text-slate-600 text-sm mb-6">
                    {items.map((item, idx) => (<li key={idx} className="flex items-center gap-2"><CheckCircle size={14} className="text-[#F06278] shrink-0" />{item}</li>))}
                  </ul>
                  <span className="text-[#F06278] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#003B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-300">Our simple 4-step process ensures a seamless transition to a cleaner, safer workplace.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="w-12 h-12 bg-[#F06278] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#F06278] text-sm font-medium mb-3">{step.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={scrollToForm} className="text-white font-bold flex items-center gap-2 hover:underline mx-auto">Claim Your Free Site Assessment <ChevronRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003B5C] mb-4">Commercial Cleaning Franchise Opportunities</h2>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">Our business is driven by a truly collaborative community. As much as we care about cleaning for our customers, in equal measure, we care for our franchisees.</p>
          <a href="https://www.namoli.com.au/franchise-opportunities/" className="inline-flex items-center gap-2 bg-[#003B5C] hover:bg-[#002a42] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Explore Franchise Opportunities <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003B5C] mb-12">Hear from Our Customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="flex gap-1 text-amber-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}</div>
                <p className="text-slate-600 italic mb-6 leading-relaxed flex-grow">"{test.quote}"</p>
                <div><h4 className="font-bold text-[#003B5C]">{test.author}</h4><p className="text-sm text-slate-500">{test.title}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#003B5C] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-4">
                    <h4 className="font-bold text-[#003B5C] mb-2">{faq.question}</h4>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <EnquiryForm
              title="Get a Free Quote + Site Assessment"
              subtitle="Book a no-obligation site walkthrough. We'll assess your cleaning needs and provide a tailored quote."
              facilityOptions={['Medical Facility', 'Office', 'School', 'Childcare Centre', 'Industrial / Warehouse', 'Other']}
              formRef={formRef}
            />
          </div>
        </div>
      </section>

      <StickyCta show={showStickyCta} />
    </>
  );
}

// --- Service Page ---

function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const activePage = pagesData.find(p => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && formRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const formTop = formRef.current.getBoundingClientRect().top;
        setShowStickyCta(heroBottom <= 100 && formTop > window.innerHeight - 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!activePage) return <Navigate to="/" replace />;

  if (activePage.id === 'medical') {
    return (
      <>
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-56 bg-[#003B5C] overflow-hidden transition-all duration-500 min-h-[80vh] flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <img key={activePage.heroImage} src={activePage.heroImage} alt={activePage.navTitle} className="absolute inset-0 w-full h-full object-cover opacity-40 animate-[fadeIn_1s_ease-out]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C] via-[#003B5C]/90 to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-[slideUp_0.5s_ease-out]">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
              <Stethoscope size={40} className="text-[#F06278]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              We've Launched a Dedicated Healthcare Division
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              To better serve our clinical and healthcare clients, all medical cleaning services and expertise have been transitioned to our specialised branch: <strong>Namoli Healthcare</strong>.
            </p>
            <a 
              href="https://www.namolihealthcare.com.au/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex flex-col items-center justify-center bg-[#F06278] hover:bg-[#d64d63] text-white px-10 py-6 rounded-xl shadow-2xl hover:shadow-[#F06278]/20 transition-all border border-white/20 group"
            >
              <div className="flex items-center gap-3 text-2xl font-bold mb-1">
                Visit Namoli Healthcare <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="text-sm font-medium opacity-90">(You will be redirected to our dedicated medical site)</span>
            </a>
          </div>
        </section>
        <TrustBanner />
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-[#003B5C] overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <img key={activePage.heroImage} src={activePage.heroImage} alt={activePage.navTitle} className="absolute inset-0 w-full h-full object-cover opacity-40 animate-[fadeIn_1s_ease-out]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#003B5C]/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-[slideUp_0.5s_ease-out]">
            {activePage.heroSubtitle && <p className="text-[#F06278] font-bold tracking-wider uppercase text-sm mb-4">{activePage.heroSubtitle}</p>}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">{activePage.heroTitle}</h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">{activePage.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="bg-[#F06278] hover:bg-[#d64d63] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Claim Your Free Site Assessment <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-4 text-white text-sm font-medium px-4">
                <div className="flex items-center gap-1"><CheckCircle size={16} className="text-[#F06278]" /> App Reported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBanner />

      {/* Why Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#003B5C] mb-4">{activePage.whySectionTitle}</h2>
            <p className="text-lg text-slate-600">{activePage.whySectionSubtitle}</p>
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
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-[#003B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6">{activePage.detailsSectionTitle}</h2>
              <p className="text-slate-300 mb-6">{activePage.detailsSectionSubtitle}</p>
              <ul className="space-y-4">
                {activePage.detailsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 font-medium"><CheckCircle size={18} className="text-[#F06278] mt-1 shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <button onClick={scrollToForm} className="mt-8 text-white font-bold flex items-center gap-2 hover:underline">Claim Your Free Site Assessment <ChevronRight size={18} /></button>
            </div>
            <div className="w-full lg:w-2/3 grid md:grid-cols-2 gap-6">
              {activePage.detailsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className={`bg-slate-50 p-8 rounded-lg border border-slate-100 ${card.fullWidth ? 'md:col-span-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4"><Icon className="text-[#F06278]" size={28} /><h3 className="font-bold text-[#003B5C] text-xl">{card.title}</h3></div>
                    <p className="text-slate-600 mb-4">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {activePage.testimonials && activePage.testimonials.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#003B5C] mb-12">What Our Clients Say</h2>
            <div className={`grid gap-8 ${activePage.testimonials.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
              {activePage.testimonials.map((test, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="flex gap-1 text-amber-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}</div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed flex-grow">"{test.quote}"</p>
                  <div><h4 className="font-bold text-[#003B5C]">{test.author}</h4><p className="text-sm text-slate-500">{test.title}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ + Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
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
            <EnquiryForm title={activePage.formTitle} subtitle={activePage.formSubtitle} facilityOptions={activePage.formFacilityOptions} formRef={formRef} />
          </div>
        </div>
      </section>

      <StickyCta show={showStickyCta} />
    </>
  );
}

// --- App ---

export default function App() {
  return (
    <div className="font-sans text-[#003B5C] bg-white min-h-screen flex flex-col relative pb-[80px] md:pb-0">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />

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
