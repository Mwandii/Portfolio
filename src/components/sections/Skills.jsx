import { useState, useEffect, useRef } from "react";
import { skills } from "../../data/siteData";

const categoryIcons = {
  "Frontend": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Backend & APIs": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  "Tools": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const categoryColors = {
  "Frontend": "text-indigo-500 bg-indigo-50",
  "Backend & APIs": "text-emerald-500 bg-emerald-50",
  "Tools": "text-orange-500 bg-orange-50",
};

const categoryBorders = {
  "Frontend": "hover:border-indigo-200",
  "Backend & APIs": "hover:border-emerald-200",
  "Tools": "hover:border-orange-200",
};

const categoryAccents = {
  "Frontend": "bg-indigo-500",
  "Backend & APIs": "bg-emerald-500",
  "Tools": "bg-orange-500",
};

const categoryPillColors = {
  "Frontend": "hover:border-indigo-200 hover:text-indigo-500",
  "Backend & APIs": "hover:border-emerald-200 hover:text-emerald-500",
  "Tools": "hover:border-orange-200 hover:text-orange-500",
};

function FlipCard({ category, items }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          height: "280px",
        }}
      >
        {/* Front face */}
        <div
          className={`absolute inset-0 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 transition-colors duration-300 ${categoryBorders[category]}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${categoryColors[category]}`}>
            {categoryIcons[category]}
          </div>
          <div className="text-center">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {category}
            </h3>
            <p className="text-xs text-gray-400">
              {items.length} technologies
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            Click to see skills
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${categoryAccents[category]}`} />
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {category}
              </span>
            </div>
            <span className="text-xs text-gray-300">click to flip back</span>
          </div>

          <div className="flex flex-wrap gap-2 content-start">
            {items.map((skill) => (
              <span
                key={skill}
                className={`text-xs px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-500 rounded-full transition-colors ${categoryPillColors[category]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current?.classList.add("animate-in");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-gray-50">
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        <p className="uppercase text-xs tracking-widest text-gray-400 mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          What I work with
        </h2>
        <p className="text-sm text-gray-400 mb-12">
          Click a card to explore the stack
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((group) => (
            <FlipCard
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;