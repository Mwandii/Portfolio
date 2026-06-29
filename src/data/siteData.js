export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const heroPhrases = [
  "clean interfaces",
  "fast experiences", 
  "scalable products",
  "pixel-perfect UIs",
  "ideas into reality",
]

export const aboutData = {
  heading: "Freelance dev turned job-ready engineer",
  bio: [
    "ALX Africa software engineering graduate with hands-on experience building real client projects — from e-commerce stores to event company sites.",
    "Currently open to junior–mid frontend roles, locally in Nairobi or remote."
  ],
  stats: [
    { value: "8+", label: "Client projects" },
    { value: "1yr+", label: "Freelancing" },
    { value: "ALX", label: "Certified" },
    { value: "React", label: "Primary stack" },
  ]
}

import kandyImg from "./assets/projects/kandy.png"
import kelijahImg from "./assets/projects/kelijah.png"
import elumeImg from "./assets/projects/elume.png"
import sneakersImg from "./assets/projects/sneakers.png"
import oneMoreImg from "./assets/projects/onemore.png"

export const projects = [
  {
    title: "Kandy Baby Store",
    description: "Multi-vendor e-commerce platform with API-ready data architecture, category routing, and a full WhatsApp order flow.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    image: kandyImg,
    live: "https://your-kandy-url.vercel.app",
  },
  {
    title: "Kelijah Auto Spares",
    description: "Industrial brutalist aesthetic site with WhatsApp booking flow and a fully decoupled data layer ready for backend integration.",
    tech: ["React 18", "Vite", "Tailwind v4"],
    image: kelijahImg,
    live: "https://your-kelijah-url.vercel.app",
  },
  {
    title: "Élume Décor Events",
    description: "Event company site with serverless contact form via Resend and static content architecture for fast load times.",
    tech: ["React", "Resend", "Vercel"],
    image: elumeImg,
    live: "https://your-elume-url.vercel.app",
  },
  {
    title: "Mwandi's Sneakers",
    description: "Sneaker e-commerce store with catalogue, category routing, M-Pesa payment flow, and same-day delivery via WhatsApp.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    image: sneakersImg,
    live: "https://your-sneakers-url.vercel.app",
  },
  {
    title: "One More Episode",
    description: "TV show discovery app powered by the TMDB API with global state via Zustand and server state via TanStack Query.",
    tech: ["React", "Zustand", "TanStack Query", "TMDB API"],
    image: oneMoreImg,
    live: "https://your-onemore-url.vercel.app",
  },
]