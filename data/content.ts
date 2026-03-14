// ============================================
// PORTFOLIO CONTENT - Edit this file to update your portfolio
// ============================================

export type AccentColor = 'cyan' | 'purple' | 'amber' | 'emerald' | 'pink';

export const siteConfig = {
  name: 'Ishwar Ramdasi',
  title: 'AI Engineer & Full Stack Developer',
  url: 'https://github.com/ramdasi',
  location: 'Pune, India',
  availability: 'Available for opportunities',
  copyright: `© ${new Date().getFullYear()} Ishwar Ramdasi. Built with Next.js, Tailwind CSS, and passion for AI systems.`,
};

export const contact = {
  email: 'ramdasiishwar@gmail.com',
  phone: '+918329097878',
  linkedin: 'https://www.linkedin.com/in/ishwar-ramdasi-68592a1a9',
  github: siteConfig.url,
};

export const hero = {
  greeting: "",
  headline: {
    line1: 'Full Stack',
    line2: 'AI Engineer',
  },
  description:
    'Designing and shipping production-grade AI systems. LangGraph. Google VertexAI. GCP. 4+ years of experience leading teams and building infrastructure that scales.',
  cta: {
    primary: { label: 'View Work', href: '#projects' },
    secondary: { label: 'Get in Touch', href: '#contact' },
  },
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '5', label: 'Dev Team Size Led' },
    { value: '3', label: 'Production Systems' },
  ],
};

export const projects: {
  sectionTitle: string;
  sectionDescription: string;
  items: Array<{
    title: string;
    subtitle: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    tags: string[];
    accentColor: AccentColor;
    githubUrl?: string;
    liveUrl?: string;
  }>;
} = {
  sectionTitle: 'Featured Work',
  sectionDescription:
    'Multi-agent AI systems, backend architecture, and infrastructure that powers production applications.',
  items: [
    {
      title: 'AURA AI',
      subtitle: 'Multi-Agent Hospitality System',
      description: 'Enterprise conversational AI using Google ADK and LangGraph orchestration.',
      metrics: [
        { label: 'Intent Accuracy', value: '95%' },
        { label: 'Processing Reduction', value: '40%' },
      ],
      tags: ['Google ADK', 'LangGraph', 'GCP', 'Python'],
      accentColor: 'cyan',
    },
    {
      title: 'ConnectAI',
      subtitle: 'Healthcare Platform',
      description: 'AI-powered patient-doctor platform with NLP analysis and intelligent scheduling.',
      metrics: [
        { label: 'Backlog Reduction', value: '20%' },
        { label: 'Wait Time Cut', value: '25%' },
      ],
      tags: ['FastAPI', 'NLP', 'Python', 'GCP'],
      accentColor: 'purple',
    },
    {
      title: 'ERP System',
      subtitle: 'Supply Chain Intelligence',
      description: 'Intelligent system for 15+ facilities with predictive analytics and automated reporting.',
      metrics: [
        { label: 'Manual Work Cut', value: '60%' },
        { label: 'Facilities', value: '15+' },
      ],
      tags: ['BigQuery', 'SQL', 'Analytics', 'GCP'],
      accentColor: 'amber',
    },
    {
      title: 'Cloud Migration',
      subtitle: 'Legacy to Cloud-Native',
      description: 'Led migration strategy for production systems from legacy infrastructure to GCP.',
      metrics: [
        { label: 'Performance Gain', value: '300%' },
        { label: 'Team Size', value: '5 devs' },
      ],
      tags: ['GKE', 'CloudRun', 'gRPC', 'DevOps'],
      accentColor: 'emerald',
    },
  ],
};

export const skills = {
  sectionTitle: 'Technical Arsenal',
  sectionDescription: 'Languages, frameworks, and tools that fuel production systems.',
  categories: [
    {
      category: 'AI/ML',
      skills: ['Google VertexAI', 'LangGraph', 'Agentic AI', 'TensorFlow', 'Langchain', 'LLM Fine-tuning'],
      color: 'cyan',
    },
    {
      category: 'Backend',
      skills: ['Python', 'FastAPI', 'Flask', 'Node.js', 'gRPC', 'GraphQL'],
      color: 'purple',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['GCP', 'CloudRun', 'GKE', 'BigQuery', 'CloudSQL', 'AWS', 'Kubernetes', 'Docker'],
      color: 'amber',
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      color: 'emerald',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Chroma DB', 'ElasticSearch'],
      color: 'pink',
    },
    {
      category: 'Infrastructure',
      skills: ['Jenkins', 'GitHub Actions', 'CI/CD', 'Terraform', 'Linux', 'Shell Scripting'],
      color: 'cyan',
    },
  ],
};

export const timeline = {
  sectionTitle: 'Career Timeline',
  sectionDescription: 'Journey from engineering fundamentals to leading AI systems at scale.',
  items: [
    {
      date: 'Apr 2025 - Present',
      role: 'Team Lead - Backend & AI',
      company: 'Upswing Cognitive',
      domain: 'Hospitality',
      highlights: ['AURA AI', 'Multi-agent systems', '300% perf gain'],
    },
    {
      date: 'Sept 2024 - Apr 2025',
      role: 'Senior Backend Developer',
      company: 'Upswing Cognitive',
      domain: 'Hospitality',
      highlights: ['Cloud migration', 'GCP architecture', 'FastAPI'],
    },
    {
      date: 'Jul 2021 - Sept 2024',
      role: 'Software Developer',
      company: 'Asindia Innovations',
      domain: 'Healthcare & Logistics',
      highlights: ['Microservices', 'ML integration', 'CI/CD pipelines'],
    },
    {
      date: '2019 - 2023',
      role: 'Bachelor of Engineering',
      company: 'NBN Sinhgad School of Engineering',
      domain: 'Computer Science',
      highlights: ['CGPA: 8.82', 'Pune', 'Foundation'],
    },
  ],
};

export const contactSection = {
  headline: {
    line1: "Let's build something",
    line2: 'extraordinary together',
  },
  description: `I'm ${siteConfig.name}. Open to discussing AI systems, architecture challenges, or exciting opportunities.`,
  ctaLabel: 'Send me an email',
};

export const contactLinks = [
  { label: 'Email', href: `mailto:${contact.email}`, iconKey: 'email' },
  { label: 'LinkedIn', href: contact.linkedin, iconKey: 'linkedin' },
  { label: 'GitHub', href: contact.github, iconKey: 'github' },
  { label: 'Phone', href: `tel:${contact.phone}`, iconKey: 'phone' },
];

export const sidebarContacts = [
  {
    iconKey: 'email',
    label: 'Email',
    href: `mailto:${contact.email}`,
    color: 'hover:bg-cyan-400/20 hover:text-cyan-400',
  },
  {
    iconKey: 'linkedin',
    label: 'LinkedIn',
    href: contact.linkedin,
    color: 'hover:bg-blue-400/20 hover:text-blue-400',
  },
  {
    iconKey: 'phone',
    label: 'Phone',
    href: `tel:${contact.phone}`,
    color: 'hover:bg-purple-400/20 hover:text-purple-400',
  },
  {
    iconKey: 'github',
    label: 'GitHub',
    href: contact.github,
    color: 'hover:bg-amber-400/20 hover:text-amber-400',
  },
];

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: `${siteConfig.name} - AI Engineer specializing in multi-agent systems, agentic AI, and cloud architecture. 4+ years building production systems.`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  keywords: [
    siteConfig.name,
    'AI Engineer',
    'Machine Learning',
    'LangGraph',
    'Google VertexAI',
    'GCP',
    'Python',
    'FastAPI',
  ],
  openGraph: {
    title: `${siteConfig.name} | AI Engineer`,
    description: `Multi-agent AI systems and cloud architecture by ${siteConfig.name}`,
    type: 'website',
    images: ['/og-image.png'],
  },
};
