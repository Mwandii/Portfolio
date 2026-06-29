import { useState, useEffect } from "react";
import { heroPhrases } from "../../data/siteData";

const codeLines = [
  { token: "const", color: "text-purple-400" },
  { token: " developer", color: "text-blue-300" },
  { token: " = {", color: "text-gray-300" },
  { token: "  name:", color: "text-gray-400", indent: true },
  { token: ' "Athanas Muinde"', color: "text-green-400", indent: true },
  { token: "  stack:", color: "text-gray-400", indent: true },
  { token: ' ["React", "TypeScript", "Tailwind"],', color: "text-orange-300", indent: true },
  { token: "  available:", color: "text-gray-400", indent: true },
  { token: " true,", color: "text-purple-400", indent: true },
  { token: "  passion:", color: "text-gray-400", indent: true },
  { token: ' "pixel-perfect UIs"', color: "text-green-400", indent: true },
  { token: "}", color: "text-gray-300" },
];

function CodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 120);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-md rounded-2xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/80">
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-gray-500 font-mono">developer.js</span>
      </div>

      {/* Code area */}
      <div className="bg-gray-950 px-6 py-6 font-mono text-sm leading-7 min-h-[280px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.indent ? "pl-6" : ""}>
            <span className={line.color}>{line.token}</span>
            {i === visibleLines - 1 && (
              <span className="animate-pulse text-indigo-400">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0);
  }, [currentPhrase]);

  useEffect(() => {
    const fullPhrase = heroPhrases[currentPhrase];
    if (charIndex < fullPhrase.length) {
      const timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 120);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentPhrase]);

  return (
    <section id="home" className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-500">Available for work</span>
            </div>

            <p className="uppercase text-xs tracking-widest text-gray-400">
              Front-end Developer · Nairobi, Kenya
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              I build fast,{" "}
              <span className="text-indigo-500">
                {heroPhrases[currentPhrase].slice(0, charIndex)}
                <span className="animate-pulse">|</span>
              </span>{" "}
              that convert.
            </h1>

            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              React · JavaScript · Tailwind CSS. I turn client briefs into
              polished, production-ready websites.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="py-2.5 px-6 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-lg text-sm font-medium"
              >
                View my work
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700 rounded-lg text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — animated code block */}
          <div className="hidden lg:flex justify-end">
            <CodeBlock />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;