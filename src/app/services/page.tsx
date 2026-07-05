'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  Smartphone, 
  Code, 
  Cloud, 
  Lock, 
  Palette, 
  Infinity as InfinityIcon, 
  RefreshCw, 
  Link as LinkIcon, 
  ChevronDown 
} from 'lucide-react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass-card rounded-lg overflow-hidden border border-outline-variant/30 dark:border-white/5 transition-all duration-350 ${isOpen ? 'bg-white/80 dark:bg-zinc-900/40 shadow-sm border-primary/40 dark:border-primary-fixed-dim/40' : ''}`}>
      <button 
        className="w-full px-md py-sm flex justify-between items-center text-left focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-headline-md text-headline-md text-on-surface dark:text-white font-semibold">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-on-surface-variant dark:text-inverse-on-surface transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary dark:text-primary-fixed-dim' : ''}`} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100 pb-sm px-md' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-sm text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md">{answer}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Sparkles size={28} />,
      title: 'AI Solutions',
      description: 'Leverage machine learning and generative AI to automate processes and unlock actionable insights.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Web Dev',
      description: 'High-performance, responsive web applications built with modern frameworks and robust architectures.',
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App',
      description: 'Native and cross-platform mobile experiences designed for intuitive user engagement and scalability.',
    },
    {
      icon: <Code size={28} />,
      title: 'Software Dev',
      description: 'Custom enterprise software tailored to streamline your unique operational workflows.',
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud',
      description: 'Secure, scalable cloud infrastructure design, migration, and management services.',
    },
    {
      icon: <Lock size={28} />,
      title: 'Cyber Security',
      description: 'Advanced threat protection, audits, and compliance to safeguard your digital assets.',
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX',
      description: 'User-centric design strategies that blend aesthetics with frictionless functionality.',
    },
    {
      icon: <InfinityIcon size={28} />,
      title: 'DevOps',
      description: 'Continuous integration and deployment pipelines to accelerate delivery and ensure reliability.',
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Digital Transformation',
      description: 'Holistic modernization of legacy systems to drive innovation and business agility.',
      colSpan: 'lg:col-span-2',
    },
    {
      icon: <LinkIcon size={28} />,
      title: 'API Development',
      description: 'Robust and secure APIs to ensure seamless integration across your software ecosystem.',
    },
  ];

  const steps = [
    { number: 1, label: 'Discover', active: true },
    { number: 2, label: 'Plan', active: false },
    { number: 3, label: 'Design', active: false },
    { number: 4, label: 'Develop', active: false },
    { number: 5, label: 'Test', active: false },
    { number: 6, label: 'Deploy', active: false },
    { number: 7, label: 'Support', active: false },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary significantly based on scope and complexity. A simple web application might take 6-8 weeks, while enterprise software can span several months. We provide detailed estimates during the planning phase.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, comprehensive post-deployment support is integral to our service. We offer various maintenance packages covering security updates, performance monitoring, and feature enhancements.',
    },
    {
      question: 'What is your tech stack?',
      answer: 'We are technology agnostic but highly proficient in modern stacks including React, Node.js, Python, AWS, Azure, and various SQL/NoSQL databases, selecting the best tools for your specific needs.',
    },
  ];

  return (
    <div className="pb-xl px-gutter max-w-container-max mx-auto py-md relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/10 blur-[150px] -z-10"></div>

      {/* Hero Section */}
      <section className="text-center mb-2xl">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">
          Our Services
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface max-w-3xl mx-auto">
          Architecting the future through comprehensive digital solutions. We transform complex challenges into elegant, scalable technologies.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl p-lg flex flex-col shadow-secondary-container/20 group cursor-pointer hover:-translate-y-1 transition-all duration-300 ${svc.colSpan || ''}`}
            >
              <div className="h-12 w-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary dark:text-primary-fixed-dim mb-md group-hover:scale-105 transition-transform duration-300">
                {svc.icon}
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">{svc.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface flex-grow">{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-2xl py-xl bg-surface-container-low dark:bg-zinc-900/30 rounded-xl px-md relative overflow-hidden border border-outline-variant/10 dark:border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNDM0M2RDciLz48L3N2Zz4=')] dark:opacity-10 opacity-30"></div>
        <div className="relative z-10">
          <div className="text-center mb-xl">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Our Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">A methodical approach to delivering excellence.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-md md:gap-sm">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-outline-variant/30 dark:bg-white/10 -z-10"></div>
            {/* Steps */}
            {steps.map((step, i) => (
              <div key={i} className="flex flex-row md:flex-col items-center md:items-center gap-sm md:gap-0 relative group md:flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md text-label-md mb-0 md:mb-sm z-10 transition-transform group-hover:scale-105 shrink-0 ${
                    step.active
                      ? 'bg-primary text-white shadow-sm shadow-primary/30'
                      : 'bg-surface text-primary border-2 border-primary dark:bg-zinc-800 dark:border-primary-fixed-dim dark:text-primary-fixed-dim'
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`font-label-md text-label-md md:text-center ${
                    step.active ? 'text-on-surface font-semibold' : 'text-on-surface-variant dark:text-inverse-on-surface'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}
