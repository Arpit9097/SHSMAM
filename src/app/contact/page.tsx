'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa6';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="pb-xl px-gutter md:px-md lg:px-gutter max-w-container-max mx-auto w-full relative py-md">
      {/* Decorative Ambient Glows */}
      <div className="ambient-glow top-20 -left-20"></div>
      <div 
        className="ambient-glow bottom-40 -right-20" 
        style={{ background: 'radial-gradient(circle, rgba(87,223,254,0.1) 0%, rgba(255,255,255,0) 70%)' }}
      ></div>

      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">
          We&apos;re here to architect your future. Reach out to discuss cutting-edge solutions, technical partnerships, or innovative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg relative">
        {/* Left Side: Contact Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Info Card */}
          <div className="glass-card rounded-xl p-lg hover:border-primary/60 transition-colors duration-300 group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Contact Information</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-surface-container rounded-lg text-primary dark:bg-zinc-800 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Office Address</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">
                    101 Innovation Drive<br />
                    Tech Valley, Silicon Heights<br />
                    CA 90210
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-surface-container rounded-lg text-primary dark:bg-zinc-800 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Phone</h3>
                  <a className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors" href="tel:+18005550199">
                    +1 (800) 555-0199
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-surface-container rounded-lg text-primary dark:bg-zinc-800 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Email</h3>
                  <a className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors break-all" href="mailto:architects@shsmaminnovations.com">
                    architects@shsmaminnovations.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex gap-4">
              <a aria-label="LinkedIn" className="p-3 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center dark:bg-zinc-800 cursor-pointer" href="#">
                <FaLinkedin size={20} />
              </a>
              <a aria-label="Twitter" className="p-3 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center dark:bg-zinc-800 cursor-pointer" href="#">
                <FaTwitter size={20} />
              </a>
              <a aria-label="GitHub" className="p-3 bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center dark:bg-zinc-800 cursor-pointer" href="#">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Map Image */}
          <div className="glass-card rounded-xl overflow-hidden h-64 group relative w-full">
            <Image
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              alt="Silicon Valley Map"
              src="/images/map-silicon.png"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none dark:from-black/40"></div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-xl p-lg relative overflow-hidden h-full flex flex-col min-h-[500px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Send a Message</h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface mb-8">
              Fill out the form below and our architecture team will respond promptly.
            </p>

            {/* Success State */}
            <div 
              className={`absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-8 text-center rounded-xl transition-all duration-300 ${
                isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative">
                <CheckCircle2 size={44} className="text-primary dark:text-primary-fixed-dim" />
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"></div>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Message Sent</h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface max-w-sm">
                Thank you for reaching out. A member of our technical architecture team will be in contact shortly.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 px-6 py-2 border border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim rounded-md font-label-md hover:bg-primary/5 transition-colors cursor-pointer"
              >
                Send Another
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="glass-input w-full px-4 py-3 rounded-md font-body-md text-on-surface dark:text-white placeholder:text-outline-variant/60 dark:bg-zinc-800/50"
                    id="name"
                    placeholder="Jane Doe"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="glass-input w-full px-4 py-3 rounded-md font-body-md text-on-surface dark:text-white placeholder:text-outline-variant/60 dark:bg-zinc-800/50"
                    id="email"
                    placeholder="jane@company.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface" htmlFor="phone">
                  Phone Number (Optional)
                </label>
                <input
                  className="glass-input w-full px-4 py-3 rounded-md font-body-md text-on-surface dark:text-white placeholder:text-outline-variant/60 dark:bg-zinc-800/50"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2 flex-grow flex flex-col">
                <label className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="glass-input w-full px-4 py-3 rounded-md font-body-md text-on-surface dark:text-white placeholder:text-outline-variant/60 resize-none flex-grow dark:bg-zinc-800/50"
                  id="message"
                  placeholder="How can we help architect your vision?"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                className="btn-primary w-full py-4 rounded-md font-label-md text-label-md text-white flex items-center justify-center gap-2 mt-4 cursor-pointer"
                type="submit"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
