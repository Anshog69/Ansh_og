import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, QrCode, ArrowUpRight, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenQRModal?: () => void;
}

export function Navbar({ onOpenQRModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Discord Bots', href: '#bots', id: 'bots' },
    { name: 'Minecraft & Systems', href: '#projects', id: 'projects' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Skills & Pricing', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -75;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-nav-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/92 backdrop-blur-xl border-b border-zinc-800/90 shadow-xl' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center gap-8">
        {/* Brand Wordmark (Clean typography, logo removed per user instruction) */}
        <a 
          id="nav-logo"
          href="#about" 
          data-cursor="ANSH"
          onClick={(e) => scrollToSection(e, '#about')}
          className="text-xl font-black tracking-tight text-white hover:text-zinc-200 transition-colors whitespace-nowrap shrink-0"
        >
          Ansh
        </a>

        {/* Desktop Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                data-cursor={link.name.toUpperCase()}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                  isActive 
                    ? 'text-white font-semibold bg-zinc-900 border border-zinc-700 shadow-sm' 
                    : 'hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Direct Discord Trigger */}
          <a
            id="nav-discord-btn"
            href="#contact"
            data-cursor="DISCORD"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="ml-2 flex items-center gap-1.5 text-xs font-mono bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white px-3.5 py-1.5 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
          >
            <QrCode className="w-3.5 h-3.5 text-zinc-400" />
            <span>@{PERSONAL_INFO.discordUsername}</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            data-cursor="MENU"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-zinc-800 px-5 py-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                      isActive 
                        ? 'bg-zinc-800 border border-zinc-700 text-white font-semibold' 
                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Connect on Discord (@{PERSONAL_INFO.discordUsername})</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
