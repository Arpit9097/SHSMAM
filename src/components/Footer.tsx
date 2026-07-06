'use client';

import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'GitHub', href: '#', icon: FaGithub },
];

function FooterLogo() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white" aria-hidden="true">
      <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.5 28 10v12L16 28.5 4 22V10L16 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 13.4 16 10l6 3.4v6.9l-6 3.2-6-3.2v-6.9Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="mt-xl border-t border-border bg-white">
      <div className="section-shell grid gap-xl py-xl lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-sm rounded-xl" aria-label="SHSMAM Innovations home">
            <FooterLogo />
            <span>
              <span className="block font-display-lg text-lg font-extrabold text-foreground">SHSMAM Innovations</span>
              <span className="block text-sm font-semibold text-muted">Premium digital product engineering</span>
            </span>
          </Link>
          <br />
          <br />
          <p>
            We design and engineer AI-enabled platforms, cloud systems, and polished software products for teams that need speed without fragility.
          </p>
          <br />
          <br />
          
          <div className="mt-md flex gap-sm">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-secondary transition hover:border-primary hover:text-primary"
                aria-label={name}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">Company</h2>
          <ul className="mt-md grid gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded-md text-sm font-semibold text-secondary transition hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">Contact</h2>
          <ul className="mt-md grid gap-4 text-sm font-semibold text-secondary">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span>Remote</span>
            </li>

            <li>
              <a href="mailto:architects@shsmaminnovations.com" className="focus-ring flex rounded-md transition hover:text-primary">
                <Mail size={18} className="mr-3 shrink-0 text-primary" aria-hidden="true" />
                <span className="break-all">arpits2484@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">Insights</h2>
          <p className="body-copy mt-md">Short notes on AI systems, cloud architecture, and shipping better SaaS products.</p>
          <form onSubmit={onNewsletterSubmit} className="mt-md flex gap-2">
            <input className="form-field min-w-0 py-3 text-sm" type="email" required placeholder="Email address" aria-label="Email address for newsletter" />
            <button type="submit" className="btn-primary h-12 w-12 shrink-0 rounded-xl" aria-label="Subscribe to newsletter">
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-3 py-md text-sm font-semibold text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 SHSMAM Innovations. All rights reserved.</p>
          <p>Built for dependable digital growth.</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`focus-ring fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-soft transition ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </footer>
  );
}
