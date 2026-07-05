import { useState, useRef, useEffect } from "react";
import { contactData } from "../../data/siteData";

const defaultForm = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("idle");
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

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = form;

    const text = `Hi Mwandi! 👋

*New Portfolio Enquiry*

*Name:* ${name}
*Email:* ${email}

*Message:*
${message}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/254715657326?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setForm(defaultForm);
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-white">
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        <p className="uppercase text-xs tracking-widest text-gray-400 mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
          {contactData.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 text-base leading-relaxed">
              {contactData.subtext}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-500 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {contactData.email}
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-500 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                github.com/Mwandii
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-500 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                linkedin.com/in/mwandi
              </a>

              {/* WhatsApp direct link */}
              <a
                href="https://wa.me/254718525592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-green-500 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                +254 718 525 592
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-4">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">WhatsApp opened</p>
                <p className="text-xs text-gray-400 max-w-xs">
                  Your message is ready to send — just hit send in WhatsApp.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 text-sm border border-gray-100 rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 text-sm border border-gray-100 rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-2.5 text-sm border border-gray-100 rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center text-xs text-gray-300">
                  Opens WhatsApp with your message pre-filled
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;