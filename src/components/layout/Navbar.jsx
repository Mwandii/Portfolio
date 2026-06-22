import { useState } from "react";
import { navLinks } from "../../data/siteData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-lg font-semibold tracking-tight cursor-pointer text-gray-900">
          Mwandi<span className="text-indigo-500">.</span>
        </h1>

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
          <button className="hidden md:block py-2 px-5 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded-lg text-sm font-medium">
            Hire me
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 bg-white">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors py-2 px-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
}

export default Navbar;