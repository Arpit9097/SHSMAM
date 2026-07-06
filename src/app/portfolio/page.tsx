'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Code2, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & ML', 'Mobile', 'Cloud', 'Enterprise'];

  const projects = [
    {
      title: 'AI Content Generator',
      category: 'AI & ML',
      tags: ['React', 'Python', 'OpenAI API'],
      description: 'An enterprise-grade AI content platform with collaborative editing, custom model workflows, and compliance checks.',
      image: '/images/project-ai.png',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile',
      tags: ['React Native', 'Node.js', 'GraphQL'],
      description: 'A secure mobile banking experience with real-time transaction processing and biometric authentication.',
      image: '/images/project-fintech.png',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Cloud Infrastructure',
      category: 'Cloud',
      tags: ['AWS', 'Terraform', 'Kubernetes'],
      description: 'A monolith-to-microservices modernization that improved uptime and reduced infrastructure costs.',
      image: '/images/project-cloud.png',
      demoUrl: '#',
      githubUrl: '#',
      actionText: 'Case Study',
    },
    {
      title: 'Enterprise CRM',
      category: 'Enterprise',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      description: 'A custom CRM with automation workflows and integrations into an established enterprise ERP environment.',
      image: '/images/project-crm.png',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="section-shell section-pad text-center">
        <span className="eyebrow mx-auto">Portfolio</span>
        <h1 className="display-xl mx-auto mt-md max-w-4xl text-foreground">Selected digital products and infrastructure systems.</h1>
        <p className="lead mx-auto mt-md max-w-3xl">
          A focused look at AI platforms, mobile products, cloud modernization, and enterprise tools delivered with product-grade polish.
        </p>
      </section>

      <section className="section-shell pb-xl">
        <div className="mb-lg flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project category filters">
          {categories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-extrabold transition ${
                  active ? 'bg-primary text-white shadow-[0_12px_26px_rgba(7,87,216,0.22)]' : 'border border-border bg-white text-secondary hover:bg-subtle hover:text-foreground'
                }`}
                role="tab"
                aria-selected={active}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-lg md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.title} className="premium-card group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-sm">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/78">{project.category}</p>
                    <h2 className="mt-1 font-display-lg text-2xl font-extrabold text-white">{project.title}</h2>
                  </div>
                  <ArrowUpRight className="hidden text-white sm:block" size={24} aria-hidden="true" />
                </div>
              </div>
              <div className="p-lg">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-extrabold text-primary">{tag}</span>
                  ))}
                </div>
                <p className="body-copy mt-md">{project.description}</p>
                <div className="mt-lg grid gap-sm sm:grid-cols-2">
                  <a className="btn-primary px-4 py-3 text-sm" href={project.demoUrl}>
                    <Rocket size={16} aria-hidden="true" />
                    {project.actionText || 'Live Demo'}
                  </a>
                  <a className="btn-secondary px-4 py-3 text-sm" href={project.githubUrl}>
                    <Code2 size={16} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
