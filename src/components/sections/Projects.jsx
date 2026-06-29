import { useRef } from "react";
import { projects } from "../../data/siteData";

function ProjectCard({ title, description, tech, image, live }) {
  return (
    <div className="flex-none w-[320px] sm:w-[360px] bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col group">

      {/* Image area */}
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
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

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-base font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live link */}
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
        >
          View live
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
          </svg>
        </a>
      </div>

    </div>
  );
}

function Projects() {
  const scrollRef = useRef(null);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  }

  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Selected work
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-900"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-900"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project) => (
            <div key={project.title} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;