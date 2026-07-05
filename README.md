# Mwandi — Personal Portfolio

Live site: [athanas.vercel.app](https://athanas.vercel.app)

A fast, responsive personal portfolio built with React 18, Vite, and Tailwind CSS v4. Features a typewriter hero, animated code block, infinite project carousel, flip-card skills section, and a WhatsApp-integrated contact form.

---

## Tech Stack

- **React 18** — component architecture, hooks
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling with `@tailwindcss/vite`
- **React Router v6** — client-side routing
- **Vercel** — hosting and deployment

---

## Project Structure

```
my-portfolio/
├── public/
│   └── cv.pdf                  # Downloadable CV
├── src/
│   ├── assets/
│   │   └── projects/           # Project screenshot images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Fixed navbar with slide-in mobile drawer
│   │   │   └── Footer.jsx      # Footer with nav links and social icons
│   │   ├── sections/
│   │   │   ├── Hero.jsx        # Typewriter headline + animated code block
│   │   │   ├── About.jsx       # Bio + stat cards with scroll animation
│   │   │   ├── Projects.jsx    # Infinite horizontal carousel
│   │   │   ├── Skills.jsx      # 3D flip cards grouped by category
│   │   │   └── Contact.jsx     # WhatsApp-integrated contact form
│   │   └── ui/
│   │       └── StatCard.jsx    # Reusable stat card component
│   ├── data/
│   │   └── siteData.js         # Single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Features

- **Typewriter effect** — hero headline cycles through phrases character by character using `useState` + `useEffect`
- **Animated code block** — terminal-style graphic that types out line by line on load
- **Infinite carousel** — projects scroll endlessly in both directions with no visible reset
- **3D flip cards** — skills section uses CSS `preserve-3d` and `backfaceVisibility` for a card flip reveal
- **Scroll animations** — sections fade and slide in on scroll via `IntersectionObserver`
- **Slide-in mobile menu** — drawer slides in from the right with staggered link animations and backdrop blur
- **WhatsApp contact** — form pre-fills a WhatsApp message and opens the chat directly
- **Scroll-reactive navbar** — shadow appears on scroll via `useEffect` + `window.scrollY`
- **Fully responsive** — mobile-first design across all breakpoints

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Mwandii/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:5173`

### Build for production

```bash
npm run build
```

---

## Customisation

All site content lives in one file — `src/data/siteData.js`. To update your portfolio:

- **Nav links** — edit `navLinks`
- **Hero phrases** — edit `heroPhrases`
- **About content** — edit `aboutData`
- **Projects** — edit `projects` array, add screenshots to `src/assets/projects/`
- **Skills** — edit `skills` array
- **Contact details** — edit `contactData`

To update the CV, replace `public/cv.pdf` with your new file.

---

## Deployment

Deployed on Vercel. To deploy your own fork:

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no configuration needed
4. Set the output directory to `dist` if prompted

---

## Contact

**Athanas Muinde**
- Email: [athanasmwandi5@gmail.com](mailto:athanasmwandi5@gmail.com)
- GitHub: [github.com/Mwandii](https://github.com/Mwandii)
- Live: [athanas.vercel.app](https://athanas.vercel.app)

---

*Built with React + Vite + Tailwind CSS v4*