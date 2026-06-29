// src/components/sections/Skills.jsx
import { useEffect, useRef } from "react";
import { skills } from "../../data/siteData";

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
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
          What I work with
        </h2>

        <div className="flex flex-col gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-4 py-2 bg-white border border-gray-100 text-gray-500 rounded-full hover:border-indigo-200 hover:text-indigo-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;