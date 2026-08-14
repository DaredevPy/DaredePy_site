export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'React' | 'Node.js' | 'TypeScript' | 'HTML/CSS';
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Intermediário"
    percentage: number;
  }[];
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
