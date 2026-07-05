'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Logo() {
  return (
    <svg className="h-8 w-8 text-primary dark:text-primary-fixed-dim animate-pulse" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L30 9V23L16 30L2 23V9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="3" fill="currentColor" className="animate-ping origin-center" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
                   localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      setTimeout(() => {
        setDarkMode(true);
      }, 0);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-on-surface/70 backdrop-blur-md border-b border-white/40 dark:border-white/10 shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center h-[72px] px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-sm hover:opacity-90 transition-opacity">
          <Logo />
          <span className="font-display-lg text-headline-md tracking-tighter text-primary dark:text-primary-fixed-dim font-extrabold select-none">
            SHSMAM Innovations
          </span>
        </Link>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-md" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md transition-all hover:-translate-y-[2px] hover:text-primary dark:hover:text-primary-fixed-dim duration-200 ease-in-out pb-1 relative group ${
                  isActive
                    ? 'text-primary dark:text-primary-fixed-dim font-bold'
                    : 'text-on-surface-variant dark:text-inverse-on-surface/85'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary dark:bg-primary-fixed-dim transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Actions (Desktop and Mobile) */}
        <div className="flex items-center gap-sm">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-on-surface-variant" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle main menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-white/95 dark:bg-on-surface/95 border-b border-outline-variant/20 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          isMobileMenuOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-gutter py-md gap-sm" aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-sm px-md rounded-lg font-label-md text-label-md transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary dark:bg-primary-container/20 dark:text-primary-fixed-dim font-bold'
                    : 'text-on-surface-variant dark:text-inverse-on-surface/85 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
