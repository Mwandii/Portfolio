import { useState, useEffect } from "react";
import { heroPhrases } from "../../data/siteData";

function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullPhrase = heroPhrases[currentPhrase];

    if (charIndex < fullPhrase.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentPhrase]);

  useEffect(() => {
    setCharIndex(0);
  }, [currentPhrase]);

  return (
    <section id="home" className="md:pt-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Available badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-500">Available for work</span>
        </div>

        {/* Overline */}
        <p className="uppercase text-xs tracking-widest text-gray-400 mb-4">
          Front-end Developer · Nairobi, Kenya
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6 max-w-2xl">
          I build fast,{" "}
          <span className="text-indigo-500">
            {heroPhrases[currentPhrase].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
          </span>{" "}
          that convert.
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
          React · JavaScript · Tailwind CSS. I turn client briefs into polished,
          production-ready websites.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="py-2.5 px-6 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-lg text-sm font-medium">
            View my work
          </button>
          <button className="py-2.5 px-6 border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700 rounded-lg text-sm font-medium">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
