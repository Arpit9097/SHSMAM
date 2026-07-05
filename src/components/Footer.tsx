'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Send, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa6';

function Logo() {
  return (
    <svg className="h-8 w-8 text-primary dark:text-primary-fixed-dim" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L30 9V23L16 30L2 23V9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/70 dark:bg-on-surface/70 backdrop-blur-md text-primary dark:text-primary-fixed-dim font-body-md text-body-md w-full py-xl border-t border-outline-variant/30 opacity-95 hover:opacity-100 transition-opacity mt-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg px-gutter max-w-container-max mx-auto">
        {/* Brand & Socials */}
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-sm mb-xs">
            <Logo />
            <span className="font-display-lg text-headline-md text-primary dark:text-primary-fixed-dim font-bold">
              SHSMAM
            </span>
          </div>
          <p className="text-on-surface-variant dark:text-inverse-on-surface text-body-md font-body-md max-w-xs">
            Architecting the future of digital solutions with precision, innovation, and trust.
          </p>
          <div className="flex gap-sm mt-sm">
            <a 
              aria-label="LinkedIn" 
              className="p-2 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant dark:bg-zinc-800 dark:hover:bg-primary dark:hover:text-white rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center cursor-pointer" 
              href="#"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              aria-label="Twitter" 
              className="p-2 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant dark:bg-zinc-800 dark:hover:bg-primary dark:hover:text-white rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center cursor-pointer" 
              href="#"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              aria-label="GitHub" 
              className="p-2 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant dark:bg-zinc-800 dark:hover:bg-primary dark:hover:text-white rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center cursor-pointer" 
              href="#"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md font-bold text-on-surface dark:text-white">Navigation</h4>
          <Link href="/" className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary dark:hover:text-primary-fixed-dim transition-colors w-max">
            Home
          </Link>
          <Link href="/services" className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary dark:hover:text-primary-fixed-dim transition-colors w-max">
            Services
          </Link>
          <Link href="/portfolio" className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary dark:hover:text-primary-fixed-dim transition-colors w-max">
            Portfolio
          </Link>
          <Link href="/technologies" className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary dark:hover:text-primary-fixed-dim transition-colors w-max">
            Technologies
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-sm text-body-md font-body-md text-on-surface-variant dark:text-inverse-on-surface">
          <h4 className="font-label-md text-label-md font-bold text-on-surface dark:text-white">Contact Us</h4>
          <span className="flex items-center gap-xs">
            <MapPin size={16} className="text-primary dark:text-primary-fixed-dim shrink-0" />
            Silicon Valley, CA
          </span>
          <a href="tel:+18005550199" className="flex items-center gap-xs hover:text-primary transition-colors">
            <Phone size={16} className="text-primary dark:text-primary-fixed-dim shrink-0" />
            +1 (800) 555-0199
          </a>
          <a href="mailto:architects@shsmaminnovations.com" className="flex items-center gap-xs hover:text-primary transition-colors break-all">
            <Mail size={16} className="text-primary dark:text-primary-fixed-dim shrink-0" />
            architects@shsmaminnovations.com
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md font-bold text-on-surface dark:text-white">Stay Updated</h4>
          <p className="text-body-md font-body-md text-on-surface-variant dark:text-inverse-on-surface">
            Subscribe to our newsletter for insights and tech updates.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-xs mt-xs">
            <input
              className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-white rounded-md px-sm py-xs text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none w-full placeholder:text-on-surface-variant/60"
              placeholder="Email address"
              type="email"
              required
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-primary hover:bg-primary-container text-white rounded-md px-sm py-xs transition-colors flex items-center justify-center cursor-pointer dark:bg-primary-container dark:hover:bg-primary"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-lg pt-md border-t border-outline-variant/20 dark:border-white/5 text-center text-body-md font-body-md text-on-surface-variant dark:text-inverse-on-surface">
        © 2026 SHSMAM Innovations. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 rounded-full p-3 z-50 bg-primary/95 dark:bg-primary-container/90 backdrop-blur-md text-white font-label-md text-label-md shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40 transition-all duration-300 active:scale-95 flex items-center justify-center border border-white/20 dark:border-white/10 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
