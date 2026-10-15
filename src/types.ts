export interface SkillItem {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  numericTarget?: number;
  suffix?: string;
}

export interface ProjectBentoItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  tagline: string;
  description: string;
  status: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
  architectureOverview: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  colSpan?: 'single' | 'double' | 'full';
  featured?: boolean;
}

export interface DiscordBotItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  clientId: string;
  inviteUrl: string;
  badge: string;
  status: string;
  features: string[];
  permissions: string;
}
