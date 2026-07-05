import { useState, useEffect } from "react";
import { navLinks } from "../../data/siteData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-white fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-100 shadow-sm shadow-gray-100"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900">
            Mwandi<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop nav */}
          <nav>
            <ul className="hidden md:flex gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop hire me */}
            <a
              href="#contact"
              className="hidden md:block py-2 px-5 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-lg text-sm font-medium"
            >
              Hire me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-current rounded-full transition-all" />
              <span className="w-5 h-0.5 bg-current rounded-full transition-all" />
              <span className="w-3 h-0.5 bg-current rounded-full transition-all self-start" />
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-semibold tracking-tight text-gray-900">
            Mwandi<span className="text-indigo-500">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }, index) => (
              <li
                key={href}
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                }}
                className={`transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
               <a 
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 transition-colors" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-6 border-t border-gray-100">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-xl text-sm font-medium text-center"
          >
            Hire me
          </a>
          <p className="text-center text-xs text-gray-300 mt-4">
            Frontend Developer · Nairobi, Kenya
          </p>
        </div>

      </div>
    </>
  );
}

export default Navbar;