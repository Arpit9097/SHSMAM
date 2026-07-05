'use client';

import React from 'react';
import { 
  Brain, 
  Globe, 
  Cloud, 
  Terminal 
} from 'lucide-react';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGooglecloud, 
  SiVercel, 
  SiDocker, 
  SiKubernetes, 
  SiGithub, 
  SiTerraform 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

function GeminiLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

function OpenAILogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7 11.3c0-.3 0-.6-.1-.9-.3-1.6-1.5-2.9-3-3.3-.2-.1-.4-.1-.6-.1 0 0 0 0-.1 0 0-.2 0-.4-.1-.6-.4-1.6-1.7-2.7-3.3-3-.5-.1-1-.1-1.5.1 0 0 0 0 0 0-.1-.1-.3-.2-.4-.3-1.3-.8-3-.7-4.2.1C7.8 3.7 7.4 4.5 7.2 5.4c-.2 0-.4.1-.6.2-1.6.4-2.8 1.7-3.1 3.3-.1.5-.1 1 .1 1.5 0 0 0 0 0 0-.1.1-.2.3-.3.4-.8 1.3-.7 3 .1 4.2.4.6 1 1.1 1.8 1.3.1.2.2.4.3.6.4 1.6 1.7 2.7 3.3 3 .5.1 1 .1 1.5-.1 0 0 0 0 0 0 .1.1.3.2.4.3 1.3.8 3 .7 4.2-.1.6-.4 1-1.1 1.2-1.9.2 0 .4-.1.6-.2 1.6-.4 2.7-1.7 3-3.3.1-.5.1-1-.1-1.5.2-.2.3-.3.3-.5zm-8.9-6.6c.8-.2 1.6-.1 2.3.3.2.1.4.3.5.5v3.3c0 .2-.1.4-.3.5-.2.1-.4.1-.5 0l-2.9-1.7c-.4-.2-.6-.6-.6-1.1V4.9c0-.2.5-.2 1-.2zM6.4 8.1c.2-.8.8-1.4 1.5-1.7.2-.1.4-.1.6-.1v3.3c0 .4.2.7.5.9.2.1.3.1.5.1.1 0 .2 0 .3-.1l2.9-1.7c.2-.1.3-.3.3-.5v3.3c0 .5-.3.9-.7 1.1l-2.9 1.7c-.7.4-1.6.4-2.3 0-.6-.3-1-.9-1.2-1.6-.2-.7-.1-1.6.1-2.4zm2.5 9.3c-.8.2-1.6.1-2.3-.3-.2-.1-.4-.3-.5-.5v-3.3c0-.2.1-.4.3-.5.2-.1.4-.1.5 0l2.9 1.7c.4.2.6.6.6 1.1v1.7c-.5.1-1 .1-1.5.1zm8.7-1.5c-.2.8-.8 1.4-1.5 1.7-.2.1-.4.1-.6.1v-3.3c0-.4-.2-.7-.5-.9-.2-.1-.3-.1-.5-.1-.1 0-.2 0-.3.1l-2.9 1.7c-.2.1-.3.3-.3.5v-3.3c0-.5.3-.9.7-1.1l2.9-1.7c.7-.4 1.6-.4 2.3 0 .6.3 1 .9 1.2 1.6.2.7.1 1.6-.1 2.4zm-2.5-9.3l-2.9 1.7c-.2.1-.3.1-.5.1s-.2 0-.3-.1c-.2-.1-.3-.3-.3-.5V4.6c.5-.1 1-.1 1.5.1.7.2 1.4.8 1.7 1.5.2.4.3.9.3 1.3-.1.4-.1.7-.1 1.1zm-2.3 9.1l2.9-1.7c.2-.1.3-.1.5-.1s.2 0 .3.1c.2.1.3.3.3.5v3.3c-.5.1-1 .1-1.5-.1-.7-.2-1.4-.8-1.7-1.5-.2-.4-.3-.9-.3-1.3.1-.3.1-.6.1-.9zm-.8-2.8l-1.6-.9c-.2-.1-.3-.3-.3-.5V9.6l1.6.9c.2.1.3.3.3.5v1.6z"/>
    </svg>
  );
}

function AzureLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 19.34h6.03L12.57 5H6.54z" />
      <path d="M12.57 5l-4.14 7.63 7.82 6.71H24z" />
      <path d="M6.03 19.34h12.22l-5.68-7.71z" />
    </svg>
  );
}

export default function Technologies() {
  const aiTech = [
    {
      name: 'TensorFlow',
      icon: <SiTensorflow className="text-[#FF6F00] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'OpenAI',
      icon: <OpenAILogo className="text-[#000000] dark:text-white w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Gemini AI',
      icon: <GeminiLogo className="text-[#4B89FF] w-11 h-11 mb-[6px] transition-transform group-hover:scale-105" />,
    },
    {
      name: 'PyTorch',
      icon: <SiPytorch className="text-[#EE4C2C] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
  ];

  const webTech = [
    {
      name: 'React',
      icon: <SiReact className="text-[#61DAFB] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-[#000000] dark:text-white w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="text-[#339933] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-[#06B6D4] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
  ];

  const cloudTech = [
    {
      name: 'AWS',
      icon: <FaAws className="text-[#FF9900] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'GCP',
      icon: <SiGooglecloud className="text-[#4285F4] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Azure',
      icon: <AzureLogo className="text-[#0089D6] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Vercel',
      icon: <SiVercel className="text-[#000000] dark:text-white w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
  ];

  const devopsTech = [
    {
      name: 'Docker',
      icon: <SiDocker className="text-[#2496ED] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes className="text-[#326CE5] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'GitHub',
      icon: <SiGithub className="text-[#181717] dark:text-white w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
    {
      name: 'Terraform',
      icon: <SiTerraform className="text-[#7B42BC] w-12 h-12 mb-xs transition-transform group-hover:scale-105" />,
    },
  ];

  return (
    <div className="pb-xl px-gutter max-w-container-max mx-auto w-full py-md relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/10 blur-[150px] -z-10"></div>

      {/* Hero Section */}
      <section className="text-center mb-2xl">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">The Tech Stack of Tomorrow</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface max-w-2xl mx-auto">
          We engineer scalable, resilient, and forward-thinking solutions utilizing a carefully curated ecosystem of bleeding-edge technologies.
        </p>
      </section>

      {/* Bento Grid Layout for Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-[minmax(280px,auto)]">
        {/* AI / ML Section (Featured) */}
        <section className="md:col-span-8 glass-card rounded-xl p-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <header className="flex items-center gap-sm mb-xl">
            <div className="tech-icon-container bg-primary/10 border border-primary/20 p-2 rounded-lg text-primary flex items-center justify-center shrink-0">
              <Brain size={28} />
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Artificial Intelligence &amp; Machine Learning</h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">Powering intelligent decision-making and automation.</p>
            </div>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-lg mt-auto">
            {aiTech.map((item) => (
              <div key={item.name} className="group flex flex-col items-center justify-center p-md rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors">
                {item.icon}
                <span className="font-label-md text-label-md text-on-surface mt-2">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Web Section */}
        <section className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <header className="flex items-center gap-sm mb-xl">
            <div className="tech-icon-container bg-secondary/10 border border-secondary/20 p-2 rounded-lg text-secondary flex items-center justify-center shrink-0">
              <Globe size={28} />
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Web Solutions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">High-performance applications.</p>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-lg mt-auto">
            {webTech.map((item) => (
              <div key={item.name} className="group flex flex-col items-center justify-center p-md rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors">
                {item.icon}
                <span className="font-label-md text-label-md text-on-surface mt-2">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Section */}
        <section className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <header className="flex items-center gap-sm mb-xl">
            <div className="tech-icon-container bg-surface-tint/10 border border-surface-tint/20 p-2 rounded-lg text-surface-tint flex items-center justify-center shrink-0">
              <Cloud size={28} />
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Cloud Architecture</h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">Scalable infrastructure.</p>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-lg mt-auto">
            {cloudTech.map((item) => (
              <div key={item.name} className="group flex flex-col items-center justify-center p-md rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors">
                {item.icon}
                <span className="font-label-md text-label-md text-on-surface mt-2">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DevOps Section */}
        <section className="md:col-span-8 glass-card rounded-xl p-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <header className="flex items-center gap-sm mb-xl">
            <div className="tech-icon-container bg-tertiary/10 border border-tertiary/20 p-2 rounded-lg text-tertiary flex items-center justify-center shrink-0">
              <Terminal size={28} />
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">DevOps &amp; Tooling</h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">Ensuring robust CI/CD pipelines and operational excellence.</p>
            </div>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-lg mt-auto">
            {devopsTech.map((item) => (
              <div key={item.name} className="group flex flex-col items-center justify-center p-md rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors">
                {item.icon}
                <span className="font-label-md text-label-md text-on-surface mt-2">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
