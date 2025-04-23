export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
  achievement?: string;
}