import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For grid layout control
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialData {
  name: string;
  role: string;
  content: string;
  rating: number;
  tags?: string[];
  servicePerformed?: string;
}