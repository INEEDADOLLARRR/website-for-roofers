import {
  Home,
  Building2,
  Hammer,
  ShieldCheck,
  Droplets,
  Umbrella,
  Wrench,
  Layers,
  LayoutGrid,
  PaintBucket,
  Flame,
  Calendar
} from 'lucide-react';
import { ServiceItem, NavItem, TestimonialData } from './types';

export const BUSINESS_INFO = {
  name: "Gorrocino Roofing",
  tagline: "Your Local Top Rated Roofing Company",
  phone: "951-322-8760",
  email: "info@gorrocinoroofing.com",
  license: "Lic.#1110895",
  area: "Southern California",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Who We Are", href: "#about" },
  { label: "Projects", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "New Roofs",
    description: "Complete installation of brand new roofing systems for residential and commercial properties.",
    icon: Home,
    colSpan: 1,
  },
  {
    title: "Waterproofing",
    description: "Advanced waterproofing solutions to protect your structure from water damage and leaks.",
    icon: Droplets,
    colSpan: 1,
  },
  {
    title: "Roofing Repair",
    description: "Rapid response repair for leaks, wear and tear, and structural issues.",
    icon: Wrench,
    colSpan: 1,
  },
  {
    title: "Sheet Metal",
    description: "Custom sheet metal fabrication and installation for durable roofing components.",
    icon: Layers,
    colSpan: 1,
  },
  {
    title: "TPO",
    description: "Energy-efficient Thermoplastic Polyolefin single-ply roofing membranes.",
    icon: Building2,
    colSpan: 1,
  },
  {
    title: "Tile",
    description: "Premium clay and concrete tile roofing for timeless beauty and durability.",
    icon: LayoutGrid,
    colSpan: 1,
  },
  {
    title: "Roof Replacement",
    description: "Expert removal of old roofs and installation of high-quality replacement systems.",
    icon: Hammer,
    colSpan: 1,
  },
  {
    title: "Shingle",
    description: "High-quality asphalt and composite shingles available in various styles.",
    icon: ShieldCheck,
    colSpan: 1,
  },
  {
    title: "Coping",
    description: "Protective cap installation for wall tops to prevent water seepage.",
    icon: Umbrella,
    colSpan: 1,
  },
  {
    title: "Coating",
    description: "Restorative coatings to extend roof life and reflect UV rays.",
    icon: PaintBucket,
    colSpan: 1,
  },
  {
    title: "Torch Down System",
    description: "Durable multi-ply modified bitumen membranes applied with heat.",
    icon: Flame,
    colSpan: 1,
  },
  {
    title: "Annual Maintenance",
    description: "Scheduled inspections and maintenance to ensure long-term performance.",
    icon: Calendar,
    colSpan: 1,
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: "Karim",
    role: "Homeowner",
    rating: 5,
    content: "I used this service a year ago. I had a slight leak in my garage today and had nothing to do with what he worked on last year. Fernando came over and took care of the issue without any questions asked. I will highly recommend this company and I will used them again. Thanks Fernando for saving the day and taking care of the leak.",
    tags: ["Professionalism", "Punctuality", "Quality", "Responsiveness", "Value"],
    servicePerformed: "Roof repair, Storm / wind damage roof repair, Gutter repair"
  },
];

export const PROJECTS = [
  {
    title: "Retail Commercial Showcase",
    category: "Commercial",
    image: "/commercial-tpo-roof.png",
    description: "Full TPO system installation for the 99 Cent Store facility. Optimized for energy efficiency and long-term durability.",
    date: "2023"
  },
  {
    title: "Multi-Family Residential Complex",
    category: "Residential",
    image: "/aerial-shingle-roof.png",
    description: "Comprehensive roof replacement for a major apartment complex. Focused on aesthetic uniformity and superior weather protection.",
    date: "2024"
  },
  {
    title: "Institutional & Community Roofing",
    category: "Specialty",
    image: "/skylight-roof.png",
    description: "Specialized roofing solutions for community church structures, featuring advanced waterproofing and structural integrity.",
    date: "2024"
  },
  {
    title: "Custom Metal System",
    category: "Residential",
    image: "/metal-roofing.png",
    description: "Premium standing seam metal roofing designed for architectural elegance and lifetime performance.",
    date: "2023"
  },
  {
    title: "High-Performance TPO",
    category: "Commercial",
    image: "/roofers-at-work.jpg",
    description: "Industrial-grade TPO membrane installation with custom flashing and drainage solutions.",
    date: "2024"
  },
  {
    title: "Architectural Shingle Design",
    category: "Residential",
    image: "/shingle-closeup.png",
    description: "High-end asphalt shingles with enhanced dimension and wind resistance for premium residences.",
    date: "2024"
  }
];