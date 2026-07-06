import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  Layers3,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import InteractiveShowcase from '@/components/InteractiveShowcase';

const capabilities = [
  {
    icon: Brain,
    title: 'AI product systems',
    desc: 'Agent workflows, semantic search, model orchestration, and human-reviewed automation built into real products.',
  },
  {
    icon: Cloud,
    title: 'Cloud architecture',
    desc: 'Multi-region infrastructure, observability, deployment pipelines, and cost-aware scaling for serious workloads.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure SaaS foundations',
    desc: 'Tenant isolation, role-based access, audit trails, and pragmatic security controls from the first release.',
  },
];

const whyPartner = [
  { icon: Code2, title: 'Senior engineering craft', desc: 'Small, focused teams that design clean interfaces, stable APIs, and maintainable delivery paths.' },
  { icon: Cpu, title: 'AI where it actually helps', desc: 'We use automation to remove operational drag, not as decoration on top of weak workflows.' },
  { icon: Database, title: 'Data-aware architecture', desc: 'Schemas, pipelines, and reporting surfaces are designed together so teams can trust the product.' },
  { icon: Lock, title: 'Security by design', desc: 'Authentication, authorization, secrets, and deployment boundaries are treated as product requirements.' },
  { icon: Gauge, title: 'Performance budgets', desc: 'We optimize rendering, bundle weight, image delivery, and infrastructure hot paths throughout the build.' },
  { icon: Layers3, title: 'Long-term systems thinking', desc: 'Every release is planned around the next one, so the system can grow without a rewrite tax.' },
];

const caseStudies = [
  {
    title: 'FinTech Cloud Mesh',
    client: 'Nova FinTech',
    stat: '99.99% SLA',
    desc: 'A zero-downtime Kubernetes mesh for a digital banking platform serving millions of active users.',
    image: '/images/project-cloud.png',
    tags: ['Kubernetes', 'AWS', 'Terraform'],
  },
  {
    title: 'Cognitive Care Agent',
    client: 'Solaris Health',
    stat: '40% ops lift',
    desc: 'A secure AI agent network that parses medical transcripts and supports clinical operations with auditability.',
    image: '/images/project-ai.png',
    tags: ['GenAI', 'Python', 'Vector DB'],
  },
];

const testimonials = [
  {
    text: 'SHSMAM Innovations overhauled our legacy system into a polished AI-powered platform. Their technical judgement changed the trajectory of the product.',
    name: 'Arpita Singh Parihar',
    title: 'CTO, FinTech',

  },
  {
    text: 'They translated an ambiguous idea into a concrete cloud architecture and kept the delivery process calm, visible, and disciplined.',
    name: 'Deepak Kumar',
    title: 'Founder, Nexus Health',
    avatar: '/images/avatar-david.png',
  },
  {
    text: 'The product quality, performance, and UI polish were exactly what our operators needed. It felt designed for daily use.',
    name: 'Marcus Thorne',
    title: 'VP Operations, GlobalLogix',
    avatar: '/images/avatar-marcus.png',
  },
];

const logos = ['AETHER CLOUD', 'VERTEX AI', 'SOLARIS HEALTH', 'NEXUS LABS', 'NOVA FINTECH', 'AERO AUTOMATION'];

function ClientLogos() {
  return (
    <div className="overflow-hidden border-y border-border bg-white py-6">
      <div className="animate-marquee gap-12 pr-12">
        {[...logos, ...logos].map((logo, index) => (
          <span key={`${logo}-${index}`} className="flex shrink-0 items-center gap-3 text-sm font-extrabold tracking-[0.18em] text-muted">
            <span className="h-2 w-2 rounded-full bg-primary/50" aria-hidden="true" />
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="section-shell grid min-h-[calc(100svh-72px)] items-center gap-xl py-xl lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <span className="eyebrow">
              <Sparkles size={15} aria-hidden="true" />
              Premium SaaS, AI and cloud engineering
            </span>
            <h1 className="display-xl mt-md max-w-xl text-foreground">
              Build Software..
            </h1>
            <br />
            <br />
            <p>
              SHSMAM Innovations helps ambitious teams design and ship high-end digital products, from AI-powered workflows to resilient cloud platforms and polished SaaS experiences.
            </p>
            <div className="mt-lg flex flex-col gap-sm sm:flex-row">
              <Link href="/contact" className="btn-primary px-5 py-4">
                Start a project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className="btn-secondary px-5 py-4">
                View portfolio
              </Link>
            </div>
            <dl className="mt-xl grid max-w-4xl grid-cols-3 gap-md border-t border-border pt-md">
              {[
                ['150+', 'Projects'],
                ['85+', 'Clients'],
                ['99%', 'Retention'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-sm font-bold text-muted">{label}</dt>
                  <dd className="mt-1 font-display-lg text-2xl font-extrabold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-[2rem] bg-primary/12 blur-3xl" aria-hidden="true" />
            <div className="premium-card relative overflow-hidden p-3">
              <div className="soft-grid relative aspect-[1.08] overflow-hidden rounded-2xl bg-surface-soft">
                <Image
                  src="/images/hero-tech.png"
                  alt="AI, cloud and software platform illustration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                />
                <div className="absolute left-5 top-5 rounded-xl border border-border bg-white/88 px-4 py-3 shadow-soft backdrop-blur">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">Runtime</p>
                  <p className="mt-1 text-sm font-extrabold text-foreground">AI workflow online</p>
                </div>
                <div className="absolute bottom-5 right-5 rounded-xl border border-border bg-white/88 px-4 py-3 shadow-soft backdrop-blur">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">Latency</p>
                  <p className="mt-1 text-sm font-extrabold text-primary">42ms edge p95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="section-shell section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">What we build</span>
          <h2 className="display-lg mt-md text-foreground">Systems that look premium because the architecture underneath is solid.</h2>
          <p className="lead mt-md">High-end UX is not a skin. We pair interface design, product architecture, and engineering execution so the product feels trustworthy from first click to daily operation.</p>
        </div>
        <div className="mt-xl grid gap-md md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="premium-card p-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="headline mt-md text-foreground">{title}</h3>
              <p className="body-copy mt-sm">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-subtle py-xl">
        <div className="section-shell">
          <div className="grid gap-xl lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <span className="eyebrow">Interactive architecture</span>
              <h2 className="display-lg mt-md text-foreground">Explore how we think about product systems.</h2>
              <p className="lead mt-md">The tabs below preserve the original interactive showcase while giving it a cleaner, more operational SaaS presentation.</p>
            </div>
            <div className="premium-card p-md">
              <InteractiveShowcase />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
      
        <div className="mt-xl grid gap-lg lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="premium-card group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={study.image} alt={study.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-primary shadow-soft backdrop-blur">{study.stat}</div>
              </div>
              <div className="p-lg">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">{study.client}</p>
                <h3 className="headline mt-sm text-foreground">{study.title}</h3>
                <p className="body-copy mt-sm">{study.desc}</p>
                <div className="mt-md flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-extrabold text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white py-xl">
        <div className="section-shell grid gap-lg text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            [150, '+', 'Projects delivered'],
            [85, '+', 'Global clients'],
            [40, '+', 'Expert developers'],
            [99, '%', 'Client retention'],
          ].map(([target, suffix, label]) => (
            <div key={label as string} className="rounded-2xl bg-subtle p-lg">
              <div className="font-display-lg text-4xl font-extrabold text-primary">
                <AnimatedCounter target={target as number} />
                {suffix}
              </div>
              <p className="mt-sm text-sm font-extrabold uppercase tracking-[0.12em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-xl lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Why partner with us</span>
            <h2 className="display-lg mt-md text-foreground">Practical engineering with premium product taste.</h2>
            <p className="lead mt-md">We keep the work focused: clear scope, strong technical choices, thoughtful interfaces, and delivery habits that hold up under pressure.</p>
            <Link href="/services" className="btn-primary mt-lg px-5 py-4">
              Our services
              <Rocket size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-md sm:grid-cols-2">
            {whyPartner.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="premium-card p-md">
                <Icon className="text-primary" size={22} aria-hidden="true" />
                <h3 className="mt-sm text-base font-extrabold text-foreground">{title}</h3>
                <p className="body-copy mt-2 text-[0.95rem]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-2xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">Client signal</span>
          <h2 className="display-lg mt-md text-foreground">Trusted by product-minded teams</h2>
        </div>
        <div className="mt-xl grid gap-md lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="premium-card flex flex-col p-lg">
              <div className="flex gap-1 text-primary" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-md flex-1 text-base leading-7 text-foreground">&ldquo;{item.text}&rdquo;</p>
              <div className="mt-md flex items-center gap-sm border-t border-border pt-md">
                <div>
                  <h3 className="font-extrabold text-foreground">{item.name}</h3>
                  <p className="text-sm font-semibold text-muted">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-xl">
        <div className="glass-card overflow-hidden rounded-2xl p-lg md:p-xl">
          <div className="grid gap-lg md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <BarChart3 size={20} aria-hidden="true" />
                <span className="text-sm font-extrabold uppercase tracking-[0.14em]">Ready to modernize?</span>
              </div>
              <h2 className="display-lg mt-sm text-foreground">Let&apos;s turn the product idea into a system your team can rely on.</h2>
            </div>
            <Link href="/contact" className="btn-primary px-5 py-4">
              Talk to us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-lg grid gap-sm border-t border-border pt-lg sm:grid-cols-3">
            {['Clear discovery', 'Architecture-first delivery', 'Polished launch support'].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm font-bold text-secondary">
                <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
