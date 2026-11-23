export type ProjectCategory = 
  | 'All' 
  | 'Full Stack' 
  | 'Web Development' 
  | 'Mobile Development' 
  | 'Backend Development';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: string[];
  features: string[];
  image: string;
  role: string;
  challenges: string;
  solutions: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  completionDate?: string;
}
