import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Discord Bots', href: '#bots' },
    { name: 'Minecraft Systems', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills & Pricing', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="portfolio-footer" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-6 relative z-10">
      {/* Brand copyright */}
      <div className="flex items-center gap-2 text-center sm:text-left">
        <span className="font-mono text-zinc-400">
          © {PERSONAL_INFO.year} <strong className="text-white font-bold">{PERSONAL_INFO.handle}</strong> • Minecraft Systems &amp; Discord Bot Developer
        </span>
      </div>

      {/* Quick Nav */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-xs text-zinc-400">
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Back to top button */}
      <button
        id="scroll-to-top-btn"
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
