import { useRef, useEffect } from "react";
import { projects } from "../../data/siteData";

function ProjectCard({ title, description, tech, image, live }) {
  return (
    <div className="flex-none w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col group">
      <div className="w-full h-44 bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
            <span className="text-indigo-300 text-sm">No image yet</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-0.5 bg-gray-50 border border-gray-100 text-gray-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-xs text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
        >
          View live
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

const infiniteProjects = [...projects, ...projects, ...projects];
const CARD_WIDTH = 336; 

function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Start at middle copy — no animation, instant
    el.scrollLeft = CARD_WIDTH * projects.length;
  }, []);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;

    const middle = CARD_WIDTH * projects.length;
    const nearStart = CARD_WIDTH * 0.5; // half a card from the very left edge
    const nearEnd = CARD_WIDTH * (infiniteProjects.length - 0.5); // half a card from the very right edge

    // Only reset when truly at the edge — silently teleport to middle equivalent
    if (el.scrollLeft < nearStart) {
      el.scrollLeft = middle + (el.scrollLeft - nearStart + CARD_WIDTH * projects.length);
    } else if (el.scrollLeft > nearEnd) {
      el.scrollLeft = middle - (nearEnd - el.scrollLeft + CARD_WIDTH * projects.length);
    }
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="uppercase text-xs tracking-widest text-gray-400 mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          Selected work
        </h2>
      </div>

      {/* Full width carousel with side arrows */}
      <div className="relative px-10">

        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all flex items-center justify-center text-gray-400 hover:text-gray-900"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all flex items-center justify-center text-gray-400 hover:text-gray-900"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {infiniteProjects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;