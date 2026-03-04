export interface Project {
  id: string;
  type: string;
  name: string;
  desc: string;
  techs: string[];
  gradient: string;
  emoji: string;
  url?: string;
  caseStudyUrl?: string;
}

export interface Service {
  num: string;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Testimonial {
  stars: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  gradient: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface TechItem {
  icon: string;
  label: string;
}
