'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  Cloud,
  Code2,
  Globe,
  Infinity as InfinityIcon,
  Lock,
  Palette,
  RefreshCw,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = question.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <article className="premium-card overflow-hidden">
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between gap-md rounded-2xl px-md py-4 text-left"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
      >
        <span className="font-display-lg text-lg font-extrabold text-foreground">{question}</span>
        <ChevronDown className={`shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} aria-hidden="true" />
      </button>
      <div id={`${id}-answer`} className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="body-copy px-md pb-5">{answer}</p>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const services = [
    { icon: Sparkles, title: 'AI Solutions', description: 'Machine learning, generative AI workflows, and automation systems designed around measurable operating gains.' },
    { icon: Globe, title: 'Web Development', description: 'High-performance web applications with resilient frontends, clean APIs, and accessible product experiences.' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile products with fast onboarding, clear flows, and dependable release paths.' },
    { icon: Code2, title: 'Custom Software', description: 'Operational platforms, internal tools, and SaaS products tailored to your teams and business rules.' },
    { icon: Cloud, title: 'Cloud Architecture', description: 'Secure cloud infrastructure design, migration, automation, monitoring, and cost-aware scaling.' },
    { icon: Lock, title: 'Cybersecurity', description: 'Threat modeling, audits, compliance support, secure auth, and practical controls for production software.' },
    { icon: Palette, title: 'UI/UX Design', description: 'Research-backed interfaces, design systems, and polished workflows that make complex tools easier to use.' },
    { icon: InfinityIcon, title: 'DevOps', description: 'CI/CD, observability, environments, release automation, and uptime-focused delivery practices.' },
    { icon: RefreshCw, title: 'Digital Transformation', description: 'Legacy modernization, data migration, process redesign, and pragmatic roadmaps for change.' },
    { icon: Workflow, title: 'API Development', description: 'Secure integrations and documented APIs that connect your product ecosystem without brittle glue code.' },
  ];

  const steps = ['Discover', 'Plan', 'Design', 'Develop', 'Test', 'Deploy', 'Support'];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A focused web application can take 6-8 weeks, while enterprise systems often span several months. We provide a delivery plan after discovery.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes. We offer maintenance, monitoring, security updates, feature iteration, and technical advisory support after launch.',
    },
    {
      question: 'What is your tech stack?',
      answer: 'We are stack-pragmatic and commonly work with React, Next.js, Node.js, Python, AWS, Azure, SQL and NoSQL databases, and modern AI infrastructure.',
    },
  ];

  return (
    <>
      <section className="section-shell section-pad text-center">
        <span className="eyebrow mx-auto">Services</span>
        <h1 className="display-xl mx-auto mt-md max-w-4xl text-foreground">Product engineering for ambitious software teams.</h1>
        <p className="lead mx-auto mt-md max-w-3xl">
          We turn complex business and technical requirements into elegant SaaS products, intelligent workflows, and resilient cloud systems.
        </p>
      </section>

      <section className="section-shell pb-xl">
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="premium-card group p-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h2 className="headline mt-md text-foreground">{title}</h2>
              <p className="body-copy mt-sm">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-subtle py-xl">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mx-auto">Delivery model</span>
            <h2 className="display-lg mt-md text-foreground">A clear process from first conversation to stable release.</h2>
            <p className="lead mt-md">The workflow stays visible, testable, and collaborative so decisions do not disappear inside the build.</p>
          </div>
          <ol className="mt-xl grid gap-sm md:grid-cols-7">
            {steps.map((step, index) => (
              <li key={step} className="premium-card relative p-md text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">{index + 1}</span>
                <h3 className="mt-sm text-sm font-extrabold text-foreground">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-xl lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="display-lg mt-md text-foreground">Questions teams ask before we start.</h2>
            <p className="lead mt-md">A little clarity up front saves a lot of churn later. Here are the usual starting points.</p>
            <Link href="/contact" className="btn-primary mt-lg px-5 py-4">
              Discuss a project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
