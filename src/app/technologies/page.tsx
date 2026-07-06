import { Brain, Cloud, Globe, Terminal } from 'lucide-react';
import { FaAws } from 'react-icons/fa6';
import {
  SiDocker,
  SiGithub,
  SiGooglecloud,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiVercel,
} from 'react-icons/si';

function GeminiLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

function OpenAILogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21.7 11.3c0-.3 0-.6-.1-.9-.3-1.6-1.5-2.9-3-3.3-.2-.1-.4-.1-.6-.1 0-.2 0-.4-.1-.6-.4-1.6-1.7-2.7-3.3-3-.5-.1-1-.1-1.5.1-.1-.1-.3-.2-.4-.3-1.3-.8-3-.7-4.2.1C7.8 3.7 7.4 4.5 7.2 5.4c-.2 0-.4.1-.6.2-1.6.4-2.8 1.7-3.1 3.3-.1.5-.1 1 .1 1.5-.1.1-.2.3-.3.4-.8 1.3-.7 3 .1 4.2.4.6 1 1.1 1.8 1.3.1.2.2.4.3.6.4 1.6 1.7 2.7 3.3 3 .5.1 1 .1 1.5-.1.1.1.3.2.4.3 1.3.8 3 .7 4.2-.1.6-.4 1-1.1 1.2-1.9.2 0 .4-.1.6-.2 1.6-.4 2.7-1.7 3-3.3.1-.5.1-1-.1-1.5.2-.2.3-.3.3-.5zm-8.9-6.6c.8-.2 1.6-.1 2.3.3.2.1.4.3.5.5v3.3c0 .2-.1.4-.3.5-.2.1-.4.1-.5 0l-2.9-1.7c-.4-.2-.6-.6-.6-1.1V4.9c0-.2.5-.2 1-.2zM6.4 8.1c.2-.8.8-1.4 1.5-1.7.2-.1.4-.1.6-.1v3.3c0 .4.2.7.5.9.2.1.3.1.5.1.1 0 .2 0 .3-.1l2.9-1.7c.2-.1.3-.3.3-.5v3.3c0 .5-.3.9-.7 1.1l-2.9 1.7c-.7.4-1.6.4-2.3 0-.6-.3-1-.9-1.2-1.6-.2-.7-.1-1.6.1-2.4zm2.5 9.3c-.8.2-1.6.1-2.3-.3-.2-.1-.4-.3-.5-.5v-3.3c0-.2.1-.4.3-.5.2-.1.4-.1.5 0l2.9 1.7c.4.2.6.6.6 1.1v1.7c-.5.1-1 .1-1.5.1zm8.7-1.5c-.2.8-.8 1.4-1.5 1.7-.2.1-.4.1-.6.1v-3.3c0-.4-.2-.7-.5-.9-.2-.1-.3-.1-.5-.1-.1 0-.2 0-.3.1l-2.9 1.7c-.2.1-.3.3-.3.5v-3.3c0-.5.3-.9.7-1.1l2.9-1.7c.7-.4 1.6-.4 2.3 0 .6.3 1 .9 1.2 1.6.2.7.1 1.6-.1 2.4z" />
    </svg>
  );
}

function AzureLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 19.34h6.03L12.57 5H6.54z" />
      <path d="M12.57 5l-4.14 7.63 7.82 6.71H24z" />
      <path d="M6.03 19.34h12.22l-5.68-7.71z" />
    </svg>
  );
}

export default function Technologies() {
  const sections = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Model orchestration, semantic indexing, automation, and production-grade AI workflows.',
      icon: Brain,
      span: 'lg:col-span-8',
      tech: [
        { name: 'TensorFlow', icon: <SiTensorflow className="h-11 w-11 text-[#FF6F00]" /> },
        { name: 'OpenAI', icon: <OpenAILogo className="h-11 w-11 text-foreground" /> },
        { name: 'Gemini AI', icon: <GeminiLogo className="h-10 w-10 text-[#4285F4]" /> },
        { name: 'PyTorch', icon: <SiPytorch className="h-11 w-11 text-[#EE4C2C]" /> },
      ],
    },
    {
      title: 'Web Solutions',
      description: 'Accessible, performant web products with modern frontend and API foundations.',
      icon: Globe,
      span: 'lg:col-span-4',
      tech: [
        { name: 'React', icon: <SiReact className="h-11 w-11 text-[#087EA4]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="h-11 w-11 text-foreground" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="h-11 w-11 text-[#339933]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-11 w-11 text-[#06B6D4]" /> },
      ],
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable infrastructure, deployment strategy, and resilient runtime operations.',
      icon: Cloud,
      span: 'lg:col-span-4',
      tech: [
        { name: 'AWS', icon: <FaAws className="h-11 w-11 text-[#FF9900]" /> },
        { name: 'GCP', icon: <SiGooglecloud className="h-11 w-11 text-[#4285F4]" /> },
        { name: 'Azure', icon: <AzureLogo className="h-11 w-11 text-[#0089D6]" /> },
        { name: 'Vercel', icon: <SiVercel className="h-11 w-11 text-foreground" /> },
      ],
    },
    {
      title: 'DevOps & Tooling',
      description: 'CI/CD, containers, observability, infrastructure as code, and reliable release practices.',
      icon: Terminal,
      span: 'lg:col-span-8',
      tech: [
        { name: 'Docker', icon: <SiDocker className="h-11 w-11 text-[#2496ED]" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="h-11 w-11 text-[#326CE5]" /> },
        { name: 'GitHub', icon: <SiGithub className="h-11 w-11 text-foreground" /> },
        { name: 'Terraform', icon: <SiTerraform className="h-11 w-11 text-[#7B42BC]" /> },
      ],
    },
  ];

  return (
    <>
      <section className="section-shell section-pad text-center">
        <span className="eyebrow mx-auto">Technologies</span>
        <h1 className="display-xl mx-auto mt-md max-w-4xl text-foreground">A modern stack for resilient digital products.</h1>
        <p className="lead mx-auto mt-md max-w-3xl">
          We choose proven technologies that support performance, maintainability, security, and fast iteration.
        </p>
      </section>

      <section className="section-shell pb-xl">
        <div className="grid gap-lg lg:grid-cols-12">
          {sections.map(({ title, description, icon: Icon, span, tech }) => (
            <article key={title} className={`premium-card p-lg ${span}`}>
              <header className="flex flex-col gap-md sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="headline text-foreground">{title}</h2>
                  <p className="body-copy mt-sm">{description}</p>
                </div>
              </header>
              <div className="mt-lg grid grid-cols-2 gap-sm sm:grid-cols-4">
                {tech.map((item) => (
                  <div key={item.name} className="group flex min-h-32 flex-col items-center justify-center rounded-xl border border-border bg-subtle p-md text-center transition hover:border-primary/30 hover:bg-white">
                    <div className="transition group-hover:-translate-y-1">{item.icon}</div>
                    <h3 className="mt-sm text-sm font-extrabold text-foreground">{item.name}</h3>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
