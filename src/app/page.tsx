import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Brain, 
  ArrowRight, 
  Rocket, 
  Eye, 
  Gem, 
  Code, 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  HeartHandshake, 
  Star,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import InteractiveShowcase from '@/components/InteractiveShowcase';

// Sleek grayscale placeholder logos for ticker
function ClientLogos() {
  const logos = [
    { name: 'AETHER CLOUD', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )},
    { name: 'VERTEX AI', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 22h20L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )},
    { name: 'SOLARIS HEALTH', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
      </svg>
    )},
    { name: 'NEXUS LABS', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v10M6.5 17.5l4-10M17.5 17.5l-4-10" />
      </svg>
    )},
    { name: 'NOVA FINTECH', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M3 12h18M12 12l6-6M12 12l-6 6" strokeLinecap="round" />
      </svg>
    )},
    { name: 'AERO AUTOMATION', icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h20M12 2v20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
      </svg>
    )}
  ];

  return (
    <div className="w-full overflow-hidden relative border-y border-outline-variant/20 dark:border-white/5 py-lg bg-surface-container-lowest/20 dark:bg-zinc-950/10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee flex items-center gap-2xl">
        {/* Set 1 */}
        {logos.map((logo, i) => (
          <div key={`set1-${i}`} className="flex items-center gap-xs text-on-surface-variant/45 dark:text-inverse-on-surface/40 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors select-none shrink-0">
            {logo.icon}
            <span className="font-bold tracking-widest text-[13px] font-display-lg">{logo.name}</span>
          </div>
        ))}
        {/* Set 2 (for seamless loop) */}
        {logos.map((logo, i) => (
          <div key={`set2-${i}`} className="flex items-center gap-xs text-on-surface-variant/45 dark:text-inverse-on-surface/40 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors select-none shrink-0">
            {logo.icon}
            <span className="font-bold tracking-widest text-[13px] font-display-lg">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const whyPartner = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Experienced Developers",
      desc: "Elite engineering teams with deep domain expertise across modern technology stacks."
    },
    {
      icon: <Cpu className="text-secondary" size={24} />,
      title: "AI Driven Innovation",
      desc: "Integrating predictive modeling and generative AI to future-proof your digital assets."
    },
    {
      icon: <Cloud className="text-tertiary" size={24} />,
      title: "Cloud Native Architecture",
      desc: "Designing resilient, infinitely scalable systems on AWS, Azure, and GCP."
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Enterprise Security",
      desc: "Security-first development lifecycle ensuring data integrity and compliance."
    },
    {
      icon: <Zap className="text-secondary" size={24} />,
      title: "Agile Delivery",
      desc: "Rapid prototyping and iterative deployment to accelerate time-to-market."
    },
    {
      icon: <HeartHandshake className="text-tertiary" size={24} />,
      title: "24/7 Strategic Support",
      desc: "Continuous monitoring, maintenance, and technical consulting post-launch."
    }
  ];

  const caseStudies = [
    {
      title: "FinTech Cloud Mesh",
      client: "Nova FinTech",
      stat: "99.99% SLA Uptime",
      desc: "Architected a zero-downtime, multi-region Kubernetes mesh on AWS for a fast-growing digital banking application, scaling to 2M+ active users.",
      image: "/images/project-cloud.png",
      tags: ["Kubernetes", "AWS", "Terraform"]
    },
    {
      title: "Cognitive Care Agent",
      client: "Solaris Health",
      stat: "40% Ops Boost",
      desc: "Developed a secure cognitive AI agent network to parse unstructured medical transcripts, enabling real-time clinical recommendations with zero data leaks.",
      image: "/images/project-ai.png",
      tags: ["GenAI", "Python", "Vector DB"]
    }
  ];

  const testimonials = [
    {
      stars: 5,
      text: "SHSMAM Innovations completely overhauled our legacy system into a sleek, AI-powered platform. Their technical mastery is unmatched, and they delivered ahead of schedule.",
      name: "Sarah Jenkins",
      title: "CTO, FinTech Forward",
      avatar: "/images/avatar-sarah.png"
    },
    {
      stars: 5,
      text: "The team's ability to translate our vague ideas into a concrete, scalable cloud architecture was impressive. They act more like strategic partners than just developers.",
      name: "David Chen",
      title: "Founder, Nexus Health",
      avatar: "/images/avatar-david.png"
    },
    {
      stars: 5,
      text: "Implementing their custom machine learning models increased our operational efficiency by 40%. The UI/UX is clean, intuitive, and exactly what we needed.",
      name: "Marcus Thorne",
      title: "VP Operations, GlobalLogix",
      avatar: "/images/avatar-marcus.png"
    }
  ];

  return (
    <div className="pb-xl relative">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container/5 rounded-full blur-[150px] -z-10"></div>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-gutter max-w-container-max mx-auto mb-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center w-full">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-md">
            <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full glass-card w-max text-primary dark:text-primary-fixed-dim font-label-md text-label-md">
              <Brain size={16} />
              <span>SaaS Architecture &amp; AI Agents</span>
            </div>
            
            <h1 className="font-display-xl text-display-xl text-on-surface">
              Building Intelligent <br /> 
              <span className="text-primary dark:text-primary-fixed-dim">Digital Solutions</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface max-w-xl">
              We help startups and enterprises transform ideas into powerful, high-performance digital products using AI cognitive agents, cloud meshes, and custom engineering.
            </p>
            
            <div className="flex flex-wrap gap-sm pt-sm">
              <Link href="/contact" className="btn-primary px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs cursor-pointer shadow-md">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-primary bg-none border border-outline-variant/30 text-on-surface hover:bg-black/5 dark:text-inverse-on-surface dark:hover:bg-white/5 px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs cursor-pointer">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* 3D Tech Illustration Area */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
            <div className="w-full h-full absolute inset-0 z-10 animate-float">
              <Image
                src="/images/hero-tech.png"
                alt="SHSMAM Innovations AI and Software Engineering Illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            
            {/* Visual Glass Badges */}
            <div className="absolute top-12 left-4 glass-card p-sm rounded-xl shadow-lg border border-white/20 dark:border-white/5 flex items-center gap-xs z-20 hover:-translate-y-1 transition-transform">
              <Sparkles size={16} className="text-secondary" />
              <span className="font-label-md text-label-md text-on-surface text-xs font-semibold">Self-Optimizing Core</span>
            </div>
            <div className="absolute bottom-16 right-4 glass-card p-sm rounded-xl shadow-lg border border-white/20 dark:border-white/5 flex items-center gap-xs z-20 hover:-translate-y-1 transition-transform">
              <Cloud size={16} className="text-primary" />
              <span className="font-label-md text-label-md text-on-surface text-xs font-semibold">Elastic Scaling</span>
            </div>

            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#004ac6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          </div>
        </div>
      </section>

      {/* Trusted By Client Logo Bar */}
      <section className="mb-2xl">
        <div className="text-center mb-md max-w-3xl mx-auto">
          <p className="font-semibold text-body-md text-on-surface-variant dark:text-inverse-on-surface uppercase tracking-widest text-xs opacity-60">
            Trusted by innovative teams worldwide
          </p>
        </div>
        <ClientLogos />
      </section>

      {/* About Section */}
      <section className="py-xl px-gutter max-w-container-max mx-auto mb-2xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">The Architect of the Future</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">Forging the next generation of digital infrastructure through precision engineering and visionary design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Mission */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary dark:text-primary-fixed-dim mb-sm shrink-0">
              <Rocket size={24} />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Mission</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">To engineer robust, scalable, and intelligent software that accelerates business growth and technological capability.</p>
          </div>
          {/* Vision */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <div className="w-12 h-12 rounded-lg bg-secondary-container/10 flex items-center justify-center text-secondary dark:text-secondary-fixed-dim mb-sm shrink-0">
              <Eye size={24} />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Vision</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">A seamlessly connected digital ecosystem where AI and human ingenuity collaborate to solve complex global challenges.</p>
          </div>
          {/* Values */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary dark:text-tertiary-fixed-dim mb-sm shrink-0">
              <Gem size={24} />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Values</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">Precision, Innovation, Integrity, and relentless pursuit of Technical Mastery in every line of code we deploy.</p>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section (Stripe Style) */}
      <section className="py-xl px-gutter max-w-container-max mx-auto mb-2xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Interactive Technology Showcase</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">Explore the codebase, scaling performance, and core architecture of our modular systems.</p>
        </div>
        <div className="glass-card rounded-2xl p-lg bg-surface-container-lowest/30 dark:bg-zinc-950/20">
          <InteractiveShowcase />
        </div>
      </section>

      {/* Case Study Spotlight Section */}
      <section className="py-xl px-gutter max-w-container-max mx-auto mb-2xl">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Flagship Case Studies</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">Discover how we help enterprises achieve high performance, reliability, and automation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {caseStudies.map((study, i) => (
            <article key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
              <div className="h-64 relative overflow-hidden w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white font-label-md text-label-md px-sm py-1 rounded-full shadow-md text-xs dark:bg-primary-container">
                  {study.stat}
                </div>
              </div>
              <div className="p-lg flex flex-col justify-between flex-grow gap-md">
                <div className="flex flex-col gap-xs">
                  <span className="font-semibold text-body-md text-primary dark:text-primary-fixed-dim uppercase tracking-wider text-xs">
                    {study.client}
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">
                    {study.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface mt-xs">
                    {study.desc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-sm border-t border-outline-variant/20 dark:border-white/5 pt-md mt-sm">
                  <div className="flex gap-xs">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="bg-surface-container/60 dark:bg-zinc-800/60 px-sm py-1 rounded-full text-xs font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/portfolio" className="text-primary dark:text-primary-fixed-dim font-label-md text-label-md flex items-center gap-0.5 hover:gap-1.5 transition-all">
                    View Case Study <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-xl bg-surface-container-low/50 dark:bg-zinc-950/20 backdrop-blur-md border-y border-outline-variant/20 dark:border-white/5 mb-2xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-display-xl text-primary dark:text-primary-fixed-dim font-extrabold mb-xs">
                <AnimatedCounter target={150} />+
              </span>
              <span className="font-semibold text-body-md text-on-surface-variant dark:text-inverse-on-surface uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-display-xl text-secondary dark:text-secondary-fixed-dim font-extrabold mb-xs">
                <AnimatedCounter target={85} />+
              </span>
              <span className="font-semibold text-body-md text-on-surface-variant dark:text-inverse-on-surface uppercase tracking-wider">Global Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-display-xl text-tertiary dark:text-tertiary-fixed-dim font-extrabold mb-xs">
                <AnimatedCounter target={40} />+
              </span>
              <span className="font-semibold text-body-md text-on-surface-variant dark:text-inverse-on-surface uppercase tracking-wider">Expert Developers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-display-xl text-primary dark:text-primary-fixed-dim font-extrabold mb-xs">
                <AnimatedCounter target={99} />%
              </span>
              <span className="font-semibold text-body-md text-on-surface-variant dark:text-inverse-on-surface uppercase tracking-wider">Client Retention %</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-xl px-gutter max-w-container-max mx-auto bg-surface-container-lowest/50 dark:bg-zinc-900/30 backdrop-blur-sm rounded-3xl my-xl border border-white/40 dark:border-white/5 shadow-sm relative overflow-hidden mb-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-sm">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Why Partner With Us</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">We don&apos;t just build software; we architect solutions that become the backbone of modern enterprises.</p>
          </div>
          <Link className="text-primary dark:text-primary-fixed-dim font-label-md text-label-md flex items-center gap-xs hover:underline mt-sm md:mt-0 cursor-pointer shrink-0" href="/services">
            Our Methodology <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {whyPartner.map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl p-lg flex gap-md items-start group hover:-translate-y-1 transition-all duration-300">
              <div className="p-sm rounded-lg bg-white dark:bg-zinc-800 shadow-sm border border-outline-variant/30 dark:border-white/5 transition-colors duration-300 shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-md text-on-surface mb-sm">{item.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Review Section */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Client Success Stories</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">Hear from the partners who have transformed their businesses with us.</p>
        </div>
        
        {/* Testimonials Grid (Responsive layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card rounded-xl p-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 min-h-[250px]">
              <div>
                <div className="flex text-amber-400 mb-sm gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
                <p className="font-body-lg text-body-lg text-on-surface italic mb-md">&ldquo;{t.text}&rdquo;</p>
              </div>
              <div className="flex items-center gap-sm mt-auto">
                <Image 
                  className="w-12 h-12 rounded-full object-cover border border-outline-variant/30 dark:border-white/10" 
                  alt={t.name}
                  src={t.avatar}
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="font-label-md text-label-md font-bold text-on-surface">{t.name}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
