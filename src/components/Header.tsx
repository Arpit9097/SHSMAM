'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

function Logo() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-[0_12px_26px_rgba(7,87,216,0.22)]" aria-hidden="true">
      <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.5 28 10v12L16 28.5 4 22V10L16 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 13.4 16 10l6 3.4v6.9l-6 3.2-6-3.2v-6.9Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v13.4M10.2 13.5l11.6 6.8M21.8 13.5l-11.6 6.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const activeName = useMemo(() => {
    return navLinks.find((link) => link.href === pathname)?.name ?? 'Home';
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        hasScrolled || isMobileMenuOpen
          ? 'border-border bg-white/86 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-white/72 backdrop-blur-xl'
      }`}
    >
      <div className="section-shell flex h-18 items-center justify-between gap-md">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-sm rounded-xl" aria-label="SHSMAM Innovations home">
          <Logo />
          <span className="min-w-0">
            <span className="block truncate font-display-lg text-[1.02rem] font-extrabold leading-tight text-foreground sm:text-[1.08rem]">
              SHSMAM Innovations
            </span>
            <span className="hidden text-xs font-semibold text-muted sm:block">AI, cloud and SaaS engineering</span>
          </span>
        </Link>

        <nav className="hidden items-center rounded-full border border-border bg-white/80 p-1 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-ring relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  isActive ? 'text-primary' : 'text-secondary hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && <span className="absolute inset-0 rounded-full bg-primary-soft" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-sm">
          <Link href="/contact" className="btn-primary hidden px-4 py-3 text-sm sm:inline-flex">
            Start a project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground transition hover:bg-subtle md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} main menu. Current page: ${activeName}`}
          >
            {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t border-border bg-white/96 backdrop-blur-xl transition-[max-height,opacity] duration-240 ${
          isMobileMenuOpen ? 'max-h-[430px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-shell grid gap-2 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition ${
                  isActive ? 'bg-primary-soft text-primary' : 'text-secondary hover:bg-subtle hover:text-foreground'
                }`}
              >
                {link.name}
                {isActive && <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary mt-2 px-4 py-3 text-sm">
            Start a project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
