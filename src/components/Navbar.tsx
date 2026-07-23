import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] ${
        scrolled
          ? 'py-3 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5'
          : 'py-5 md:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* ── Logo ─────────────────────────── */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          style={{ animation: 'animationIn 0.6s ease-out forwards' }}
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6F7FB7] to-[#4B5A8A] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#6F7FB7]/20 transition-transform duration-500 group-hover:scale-110">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-white" style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}>
            pennyworth.ai
          </span>
        </a>

        {/* ── Desktop nav links (lg+) ──────── */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-500 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.03]"
              style={{
                animation: `animationIn 0.6s ease-out ${100 + i * 80}ms forwards`,
                opacity: 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Desktop CTA (lg+) ───────────── */}
        <div
          className="hidden lg:block"
          style={{ animation: 'animationIn 0.6s ease-out 400ms forwards', opacity: 0 }}
        >
          <a
            href="#contact"
            className="double-text-btn glass-card inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white hover:border-white/15"
          >
            <span className="btn-text-visible">Work with me</span>
            <span className="btn-text-hidden">Let's go →</span>
          </a>
        </div>

        {/* ── Hamburger (below lg) ─────────── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden glass-card w-10 h-10 rounded-xl flex items-center justify-center text-white relative"
          style={{ animation: 'animationIn 0.6s ease-out 300ms forwards', opacity: 0 }}
          aria-label="Toggle menu"
        >
          <Menu
            size={18}
            className={`absolute transition-all duration-500 ease-out ${
              menuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
            }`}
          />
          <X
            size={18}
            className={`absolute transition-all duration-500 ease-out ${
              menuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Menu ────────────────────── */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full z-40 transition-all duration-500 ease-out ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-4 mt-2 glass-card rounded-2xl overflow-hidden">
          <div className="p-4 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/[0.05] hover:text-white transition-all duration-300"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/5 mt-2 pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 rounded-xl text-sm text-white font-medium text-center bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
              >
                Work with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
