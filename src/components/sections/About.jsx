import { useEffect, useRef } from "react";
import { aboutData } from "../../data/siteData";
import StatCard from "../ui/StatCard";

function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="bg-gray-50 py-24 px-6"
    >
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >

        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-3">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
              {aboutData.heading}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-500 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              className="py-2.5 px-6 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-lg text-sm font-medium"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="py-2.5 px-6 border border-gray-200 hover:bg-white transition-colors text-gray-700 rounded-lg text-sm font-medium"
            >
              See my work
            </a>
          </div>
        </div>

        {/* Right — Stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {aboutData.stats.map(({ value, label }) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;