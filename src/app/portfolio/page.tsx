'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Rocket, Code } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & ML', 'Mobile', 'Cloud', 'Enterprise'];

  const projects = [
    {
      title: 'AI Content Generator',
      category: 'AI & ML',
      tags: ['React', 'Python', 'OpenAI API'],
      description: 'An enterprise-grade AI content generation platform featuring real-time collaborative editing, custom LLM fine-tuning, and robust compliance checking algorithms.',
      image: '/images/project-ai.png',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile',
      tags: ['React Native', 'Node.js', 'GraphQL'],
      description: 'A secure, high-performance mobile banking application offering real-time transaction processing, biometric authentication, and predictive financial analytics.',
      image: '/images/project-fintech.png',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Cloud Infrastructure',
      category: 'Cloud',
      tags: ['AWS', 'Terraform', 'Kubernetes'],
      description: 'Complete modernization of a legacy monolith to a microservices architecture, achieving 99.99% uptime and reducing infrastructure costs by 40%.',
      image: '/images/project-cloud.png',
      demoUrl: '#',
      githubUrl: '#',
      actionText: 'Case Study',
    },
    {
      title: 'Enterprise CRM',
      category: 'Enterprise',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      description: 'A bespoke customer relationship management system designed for a Fortune 500 client, featuring advanced automation workflows and deep integration with existing ERP systems.',
      image: '/images/project-crm.png',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pb-xl px-gutter max-w-container-max mx-auto py-md relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/10 blur-[150px] -z-10"></div>

      {/* Header Section */}
      <section className="text-center mb-xl max-w-3xl mx-auto">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">Our Work</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface">
          Pioneering technical excellence through innovative solutions. Explore our portfolio of cutting-edge projects that define the future of digital architecture.
        </p>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-sm mb-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-md py-xs rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${
              filter === cat
                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105 dark:bg-primary-container dark:text-white'
                : 'bg-white/50 dark:bg-zinc-800/50 border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-inverse-on-surface hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {filteredProjects.map((project, idx) => (
          <article key={idx} className="glass-card rounded-xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
            <div className="h-64 overflow-hidden relative w-full">
              <Image
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                alt={project.title}
                src={project.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">{project.title}</h3>
              <div className="flex flex-wrap gap-xs mb-md">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary-container/10 text-primary dark:text-primary-fixed-dim font-label-md text-label-md">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface mb-lg flex-grow">
                {project.description}
              </p>
              <div className="flex gap-sm mt-auto">
                <a className="btn-primary flex-1 py-sm px-md rounded-lg flex justify-center items-center gap-xs font-label-md text-label-md cursor-pointer" href={project.demoUrl}>
                  <Rocket size={16} /> {project.actionText || 'Live Demo'}
                </a>
                <a className="btn-secondary border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-inverse-on-surface hover:bg-black/5 dark:hover:bg-white/5 flex-1 py-sm px-md rounded-lg flex justify-center items-center gap-xs font-label-md text-label-md cursor-pointer" href={project.githubUrl}>
                  <Code size={16} /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
