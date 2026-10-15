import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscordBotsSection } from './components/DiscordBotsSection';
import { ProjectsVaultSection } from './components/ProjectsVaultSection';
import { RoleHighlightSection } from './components/RoleHighlightSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { DraggableSandbox } from './components/DraggableSandbox';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CyberBackground } from './components/CyberBackground';
import { IntroSplash } from './components/IntroSplash';
import { CustomCursor } from './components/CustomCursor';
import { MirChatbot } from './components/MirChatbot';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Ensure page strictly starts at top on initial load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-x-hidden scroll-smooth">
      {/* Precision Monochrome Cursor Follower */}
      <CustomCursor />

      {/* Starting Loading Bar Animation with Numeric Percentage */}
      {showIntro && (
        <IntroSplash 
          onComplete={() => {
            setShowIntro(false);
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }} 
        />
      )}

      {/* Falling Aurora Cyan & Purple Background Animation */}
      <CyberBackground />

      {/* Navigation (Wordmark, Nav Links, Discord Quick CTA) */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        {/* Hero Section with Discord Tag, Minecraft & Bot Focus */}
        <HeroSection />

        {/* Dynamic Continuous Tech Marquee Ticker */}
        <MarqueeTicker />

        {/* Featured Discord Bots Showcase (Mirsa & MIR with Client IDs and Direct Invites) */}
        <DiscordBotsSection />

        {/* Flagship: Modern Editorial Bento Grid with Project Preview Modals */}
        <ProjectsVaultSection />

        {/* Core Architecture & Systems Pillars */}
        <RoleHighlightSection />

        {/* Interactive Physics Badge Sandbox */}
        <DraggableSandbox />

        {/* Technical Skills, Offerings & Reliable Pricing */}
        <SkillsSection />

        {/* Experience & Milestones */}
        <ExperienceSection />

        {/* Production Metrics & Verified Stats */}
        <StatsSection />

        {/* Direct Discord Hub & Interactive QR Code */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating MIR Portfolio Assistant Chatbot */}
      <MirChatbot />
    </div>
  );
}
