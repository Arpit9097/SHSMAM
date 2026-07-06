'use client';

import { useMemo, useState } from 'react';
import { Brain, CheckCircle2, Cloud, Cpu, Terminal } from 'lucide-react';

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

const tabs: TabData[] = [
  {
    id: 'ai',
    icon: <Brain size={18} aria-hidden="true" />,
    label: 'AI Agents',
    title: 'Agentic Cognitive Systems',
    subtitle: 'Self-improving generative workflows',
    description: 'We build agent networks that orchestrate multi-step tasks, analyze unstructured data, and integrate with LLMs under practical security controls.',
    features: ['Multi-agent task orchestration', 'Semantic search and vector indexing', 'Human-in-the-loop audit logs', 'Localized hosting and data shielding'],
    metric: '10x',
    metricLabel: 'Faster processing times',
    language: 'typescript',
    codeSnippet: `import { AgentOrchestrator } from '@shsmam/ai';

const orchestrator = new AgentOrchestrator({
  agents: ['Coder', 'Auditor', 'Deployer'],
  security: 'enterprise-shield',
  autoOptimize: true
});

const result = await orchestrator.execute({
  task: 'Architect microservice and audit dependencies'
});`,
  },
  {
    id: 'cloud',
    icon: <Cloud size={18} aria-hidden="true" />,
    label: 'Cloud',
    title: 'Resilient Multi-Cloud Meshes',
    subtitle: 'Zero-downtime microservices',
    description: 'We design cloud topologies with Kubernetes, Terraform, and serverless backends for autoscaling, observability, and disaster recovery.',
    features: ['Infrastructure as code', 'Zero-trust network architecture', 'Autoscaling orchestration', 'Real-time observability alerts'],
    metric: '99.99%',
    metricLabel: 'Uptime SLA target',
    language: 'hcl',
    codeSnippet: `module "kubernetes_cluster" {
  source  = "./modules/k8s"
  region  = "us-west-2"
  ha_mode = "multi-region-mesh"

  nodes = {
    min_count = 3
    max_count = 100
  }
}`,
  },
  {
    id: 'saas',
    icon: <Cpu size={18} aria-hidden="true" />,
    label: 'SaaS',
    title: 'Enterprise SaaS Cores',
    subtitle: 'Scalable product foundations',
    description: 'We build multi-tenant product foundations with authorization, auditability, analytics, and real-time collaboration paths.',
    features: ['Tenant-aware data modeling', 'RBAC and SSO foundations', 'Real-time event streams', 'Performance-focused rendering'],
    metric: '<45ms',
    metricLabel: 'Global edge response',
    language: 'json',
    codeSnippet: `{
  "tenant": "enterprise-nexus",
  "tier": "enterprise",
  "auth": {
    "strategy": "sso-saml2",
    "mfa": "enforced"
  },
  "audit_logs": "persistent"
}`,
  },
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('ai');
  const currentTab = useMemo(() => tabs.find((tab) => tab.id === activeTab) ?? tabs[0], [activeTab]);

  return (
    <div className="grid gap-lg">
      <div className="flex gap-2 overflow-x-auto border-b border-border pb-2" role="tablist" aria-label="Architecture showcase">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`focus-ring flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                isActive ? 'bg-primary text-white' : 'bg-subtle text-secondary hover:text-foreground'
              }`}
              role="tab"
              aria-selected={isActive}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-lg lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between gap-md">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">{currentTab.subtitle}</p>
            <h3 className="headline mt-sm text-foreground">{currentTab.title}</h3>
            <p className="body-copy mt-sm">{currentTab.description}</p>
            <ul className="mt-md grid gap-3">
              {currentTab.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm font-semibold text-secondary">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-subtle p-md">
            <p className="font-display-lg text-4xl font-extrabold text-primary">{currentTab.metric}</p>
            <p className="mt-1 text-sm font-extrabold text-secondary">{currentTab.metricLabel}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
            </div>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              <Terminal size={13} aria-hidden="true" />
              {currentTab.language}
            </span>
          </div>
          <pre className="max-h-[360px] overflow-auto p-4 text-sm leading-6">
            <code>{currentTab.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
