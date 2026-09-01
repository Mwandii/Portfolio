export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const heroPhrases = [
  "clean interfaces", 
  "scalable products",
  "pixel-perfect UIs",
  "ideas into reality",
]

export const aboutData = {
  heading: "Building the web, one component at a time.",
bio: [
  "Frontend developer with real-world experience shipping client projects — e-commerce platforms, booking systems, event company sites, and more.",
  "I write clean, maintainable React code and care deeply about performance, accessibility, and getting the details right."
],
stats: [
  { value: "10+", label: "Projects shipped" },
  { value: "6 Months+", label: "Industry experience" },
  { value: "React", label: "Primary stack" },
  { value: "Open", label: "To opportunities" },
]
}

import kandyImg from "../assets/projects/kandy.png"
import kelijahImg from "../assets/projects/kelijah.png"
import elumeImg from "../assets/projects/elume.png"
import sneakersImg from "../assets/projects/sneakers.png"
import oneMoreImg from "../assets/projects/onemore.png"
import kingstonImg from "../assets/projects/kingston.png"

export const projects = [
  {
    title: "Kandy Baby Store",
    description: "Multi-vendor e-commerce platform with API-ready data architecture, category routing, and a full WhatsApp order flow.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    image: kandyImg,
    live: "https://kandy-store.vercel.app",
  },
  {
    title: "Kelijah Auto Spares",
    description: "Industrial brutalist aesthetic site with WhatsApp booking flow and a fully decoupled data layer ready for backend integration.",
    tech: ["React 18", "Vite", "Tailwind v4"],
    image: kelijahImg,
    live: "https://kelijah.vercel.app",
  },
  {
    title: "Graken Events",
    description: "Event company site with serverless contact form via Resend and static content architecture for fast load times.",
    tech: ["React", "Resend", "Vercel"],
    image: elumeImg,
    live: "https://grakenevents.vercel.app",
  },
  {
    title: "Mwandi's Sneakers",
    description: "Sneaker e-commerce store with catalogue, category routing, M-Pesa payment flow, and same-day delivery via WhatsApp.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    image: sneakersImg,
    live: "https://mwandissneakers.vercel.app",
  },
  {
    title: "One More Episode",
    description: "TV show discovery app powered by the TMDB API with global state via Zustand and server state via TanStack Query.",
    tech: ["React", "Zustand", "TanStack Query", "TMDB API"],
    image: oneMoreImg,
    live: "https://onemoreepisode.vercel.app",
  },
  {
    title: "Kingston Complex",
    description: "Full-stack hospitality booking and operations platform with a Supabase-backed admin system — staff auth, row-level security, and a deposit-aware payments and finance module.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Supabase"],
    image: kingstonImg,
    live: "https://kingston-complex.vercel.app",
  },
]

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Zustand", "TanStack Query"]
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Vercel Serverless", "Resend", "REST APIs"]
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "VS Code", "Figma", "Linux", "Vercel"]
  }
]

export const contactData = {
  heading: "Let's work together",
  subtext: "Open to frontend roles, freelance projects, and collaborations. Drop me a message and I'll get back within 24 hours.",
  email: "athanasmwandi5@gmail.com",
  github: "https://github.com/Mwandii",
  linkedin: "https://www.linkedin.com/in/athanas-muinde-223a592bb",
}