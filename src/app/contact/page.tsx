'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <>
      <section className="section-shell section-pad text-center">
        <span className="eyebrow mx-auto">Contact</span>
        <h1 className="display-xl mx-auto mt-md max-w-4xl text-foreground">Let’s architect your next product.</h1>
        <p className="lead mx-auto mt-md max-w-3xl">
          Tell us what you are building, modernizing, or trying to untangle. We will respond with a practical next step.
        </p>
      </section>

      <section className="section-shell pb-xl">
        <div className="grid gap-lg lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="grid gap-md">
            <div className="premium-card p-lg">
              <h2 className="headline text-foreground">Contact information</h2>
              <ul className="mt-lg grid gap-md">
                <li className="flex gap-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-foreground">Office address</h3>
                    <p className="body-copy mt-1">101 Innovation Drive<br />Tech Valley, Silicon Heights<br />CA 90210</p>
                  </div>
                </li>
                <li className="flex gap-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-foreground">Phone</h3>
                    <a className="focus-ring mt-1 inline-block rounded-md font-semibold text-secondary transition hover:text-primary" href="tel:+18005550199">+1 (800) 555-0199</a>
                  </div>
                </li>
                <li className="flex gap-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-foreground">Email</h3>
                    <a className="focus-ring mt-1 inline-block rounded-md font-semibold text-secondary transition hover:text-primary break-all" href="mailto:architects@shsmaminnovations.com">
                      architects@shsmaminnovations.com
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-lg flex gap-sm border-t border-border pt-md">
                {[
                  { name: 'LinkedIn', icon: FaLinkedin },
                  { name: 'Twitter', icon: FaTwitter },
                  { name: 'GitHub', icon: FaGithub },
                ].map(({ name, icon: Icon }) => (
                  <a key={name} href="#" aria-label={name} className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition hover:border-primary hover:text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="premium-card relative aspect-[16/10] overflow-hidden">
              <Image src="/images/map-silicon.png" alt="Map showing Silicon Valley service area" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" aria-hidden="true" />
            </div>
          </aside>

          <div className="premium-card relative overflow-hidden p-lg">
            <div
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/96 p-lg text-center backdrop-blur transition ${
                isSubmitted ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              role="status"
              aria-live="polite"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
                <CheckCircle2 size={34} aria-hidden="true" />
              </span>
              <h2 className="headline mt-md text-foreground">Message sent</h2>
              <p className="body-copy mt-sm max-w-md">Thank you for reaching out. A member of our technical architecture team will be in contact shortly.</p>
              <button type="button" onClick={handleReset} className="btn-secondary mt-lg px-5 py-3">
                Send another
              </button>
            </div>

            <h2 className="headline text-foreground">Send a message</h2>
            <p className="body-copy mt-sm">Share a few details and we will help frame the best next move.</p>

            <form onSubmit={handleSubmit} className="mt-lg grid gap-md">
              <div className="grid gap-md md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-extrabold text-foreground" htmlFor="name">Full name</label>
                  <input
                    className="form-field"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-extrabold text-foreground" htmlFor="email">Email address</label>
                  <input
                    className="form-field"
                    id="email"
                    name="email"
                    placeholder="jane@company.com"
                    required
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-extrabold text-foreground" htmlFor="phone">Phone number <span className="text-muted">(optional)</span></label>
                <input
                  className="form-field"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-extrabold text-foreground" htmlFor="message">Message</label>
                <textarea
                  className="form-field min-h-40 resize-y"
                  id="message"
                  name="message"
                  placeholder="What are you building?"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                />
              </div>
              <button className="btn-primary px-5 py-4" type="submit">
                Send message
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
