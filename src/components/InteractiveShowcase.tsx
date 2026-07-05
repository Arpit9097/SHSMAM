'use client';

import React, { useState } from 'react';
import { Brain, Cloud, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

interface TabData {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metric: string;
  metricLabel: string;
  codeSnippet: string;
  language: string;
}

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs: TabData[] = [
    {
      id: 'ai',
      icon: <Brain size={20} />,
      label: 'AI Agents',
      title: 'Agentic Cognitive Systems',
      subtitle: 'Self-improving generative workflows',
      description: 'We build autonomous agent networks that orchestrate multi-step tasks, analyze unstructured data with semantic indexing, and integrate with LLMs to automate operations with full security controls.',
      features: [
        'Multi-agent task orchestration',
        'Semantic search & vector database indexing',
        'Human-in-the-loop audit logs',
        'Localized hosting & data shielding'
      ],
      metric: '10x',
      metricLabel: 'Faster processing times',
      language: 'typescript',
      codeSnippet: `import { AgentOrchestrator } from '@shsmam/ai';

// Initialize multi-agent cognitive mesh
const orchestrator = new AgentOrchestrator({
  agents: ['Coder', 'Auditor', 'Deployer'],
  security: 'enterprise-shield',
  autoOptimize: true
});

const result = await orchestrator.execute({
  task: 'Architect microservice and audit dependencies'
});

console.log(\`Task status: \${result.status} (Security: Verified)\`);`
    },
    {
      id: 'cloud',
      icon: <Cloud size={20} />,
      label: 'Cloud Infrastructure',
      title: 'Resilient Multi-Cloud Meshes',
      subtitle: 'Zero-downtime microservices',
      description: 'Architecting high-performance cloud topologies using Kubernetes, Terraform, and serverless backends to guarantee autoscaling, sub-millisecond API latency, and global disaster recovery.',
      features: [
        'Infrastructure-as-Code (Terraform & Pulumi)',
        'Zero-trust network architecture',
        'Auto-scaling Kubernetes orchestration',
        'Real-time observability and anomaly alerts'
      ],
      metric: '99.99%',
      metricLabel: 'Uptime SLA guaranteed',
      language: 'hcl',
      codeSnippet: `module "kubernetes_cluster" {
  source    = "./modules/k8s"
  region    = "us-west-2"
  ha_mode   = "multi-region-mesh"
  
  nodes = {
    min_count = 3
    max_count = 100
    cpu_type  = "compute-optimized"
  }
  
  security_policies = ["zero-trust-ingress"]
}`
    },
    {
      id: 'saas',
      icon: <Cpu size={20} />,
      label: 'SaaS Platforms',
      title: 'Enterprise SaaS Cores',
      subtitle: 'Hyper-scalable software foundations',
      description: 'Building custom software frameworks featuring multi-tenant database partitioning, robust authorization engines, and real-time streaming to support millions of concurrent connections.',
      features: [
        'Multi-tenant DB partitioning & pooling',
        'Role-Based Access Control (RBAC) & SSO',
        'Real-time WebSocket event bus',
        'High-performance Next.js Server Side Rendering'
      ],
      metric: '< 45ms',
      metricLabel: 'Global edge response latency',
      language: 'json',
      codeSnippet: `{
  "saas_config": {
    "tenant": "enterprise-nexus",
    "tier": "enterprise-unlimited",
    "auth": {
      "strategy": "sso-saml2",
      "mfa": "enforced"
    },
    "features": {
      "websocket_stream": true,
      "audit_logs": "persistent"
    }
  }
}`
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="w-full flex flex-col gap-lg">
      {/* Tabs Selector Header */}
      <div className="flex border-b border-outline-variant/20 dark:border-white/5 overflow-x-auto pb-1 scrollbar-none gap-sm">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-xs px-md py-sm font-label-md text-label-md transition-all border-b-2 cursor-pointer whitespace-nowrap -mb-[2px] ${
                isActive
                  ? 'border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim font-bold'
                  : 'border-transparent text-on-surface-variant dark:text-inverse-on-surface hover:text-primary'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-stretch">
        {/* Left Side: Info & Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-md">
          <div className="flex flex-col gap-sm">
            <span className="text-primary dark:text-primary-fixed-dim font-semibold text-body-md uppercase tracking-wider">
              {currentTab.subtitle}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              {currentTab.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">
              {currentTab.description}
            </p>
            <ul className="space-y-sm mt-sm">
              {currentTab.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-xs font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface">
                  <CheckCircle2 size={18} className="text-primary dark:text-primary-fixed-dim shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Spotlight */}
          <div className="p-md rounded-xl bg-surface-container/50 dark:bg-zinc-800/20 border border-outline-variant/20 dark:border-white/5 flex items-center gap-md mt-sm">
            <div className="font-display-lg text-display-lg text-primary dark:text-primary-fixed-dim font-extrabold shrink-0">
              {currentTab.metric}
            </div>
            <div className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface font-semibold leading-snug">
              {currentTab.metricLabel}
            </div>
          </div>
        </div>

        {/* Right Side: Code Editor Simulator */}
        <div className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 dark:border-white/5 bg-zinc-900 text-zinc-300 font-mono text-sm h-full min-h-[320px]">
          {/* Header Console Bar */}
          <div className="flex items-center justify-between px-md py-sm bg-zinc-950/80 border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-xs">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              <span className="text-xs text-zinc-500 ml-sm font-semibold flex items-center gap-xs select-none">
                <Terminal size={12} />
                {currentTab.id}.{currentTab.language === 'typescript' ? 'ts' : currentTab.language === 'hcl' ? 'tf' : 'json'}
              </span>
            </div>
            <span className="text-xs text-zinc-600 uppercase select-none">{currentTab.language}</span>
          </div>

          {/* IDE Content Area */}
          <div className="p-md overflow-x-auto flex-grow bg-zinc-900/90 select-text leading-relaxed">
            <pre className="font-mono text-left w-full h-full whitespace-pre-wrap sm:whitespace-pre">
              <code>
                {currentTab.codeSnippet.split('\n').map((line, idx) => {
                  let coloredLine = line;
                  if (line.trim().startsWith('import ') || line.trim().startsWith('const ') || line.trim().startsWith('module ') || line.trim().startsWith('export ')) {
                    coloredLine = line.replace(/(import|const|module|export|from|await|new)/g, '<span class="text-pink-400">$1</span>');
                  }
                  if (line.includes('//')) {
                    coloredLine = `<span class="text-zinc-500">${line}</span>`;
                  }
                  return (
                    <span key={idx} className="block w-full">
                      <span className="inline-block w-6 text-zinc-600 select-none mr-sm text-right">{idx + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: coloredLine || ' ' }} />
                    </span>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
