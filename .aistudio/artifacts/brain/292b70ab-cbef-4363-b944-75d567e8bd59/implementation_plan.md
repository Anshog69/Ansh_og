# Ansh Portfolio: Minecraft & Discord Systems Evolution + MIR Chatbot & Aurora

Comprehensive transformation of Ansh's developer portfolio to showcase specialized Minecraft development (plugins, mods, custom servers), flagship Discord bots (Mirsa and MIR) with direct invite links, dynamic falling aurora background animations, and an interactive MIR portfolio chatbot assistant—while completely removing legacy Meowlix.gg and PC hardware imagery.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Confirmed Decisions from Clarification Phase:**
> - **MIR Portfolio Chatbot**: Implemented as a floating bottom-right interactive widget with quick question prompt chips, instant intelligent answers regarding Ansh's work, tech stack, Minecraft services, bot features, reliable pricing, and direct hiring inquiries.
> - **Falling Aurora Background**: Ethereal, flowing celestial aurora ribbons with subtle cyan (`#06b6d4`) and purple (`#a855f7`) luminescence cascading through a deep obsidian dark field (`#050505`), preserving performance and legibility.
> - **Featured Discord Bots**: Dedicated high-visibility showcase cards for **Mirsa** (Moderation & All-in-One, Client ID `1550942705012576317`) and **MIR** (High-Fidelity Music, Client ID `1553694404420706395`) featuring one-click invite buttons, feature badges, and copyable client IDs.
> - **Total Meowlix & PC Photo Removal**: Clean excision of all Meowlix references and hardware photographs, replacing them with focused Minecraft architecture and bot engineering content.

---

### 1. Overview & Core Concept

- **What It Does**: A showcase for Ansh—a specialized Discord Bot and Minecraft Systems Architect. Visitors explore live bot invitations (Mirsa for moderation/community, MIR for music), Minecraft engineering services (custom Spigot/Paper plugins, Fabric/Forge mods, enterprise server infrastructure), reliable pricing models, and an interactive MIR chatbot for instant answers.
- **Target Audience / Persona**: Minecraft server owners, gaming community managers, Discord server administrators, and gaming networks seeking reliable, custom-built bots, plugins, or complete server builds at accessible rates.
- **Key Value**: Direct access to working bots with one-click invite links, clear service pricing and capabilities, and an on-demand virtual portfolio assistant (MIR).

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Arrival & Aurora Atmosphere**: Smooth minimal percentage loader fades into deep obsidian canvas with gentle falling cyan-purple aurora streaks.
  2. **Hero Presentation**: Bold wordmark typography highlighting Discord bot creation and Minecraft plugin/mod services with Discord handle (`@Ansh_og` / `ansh_og0255`) and direct "Hire Me" action.
  3. **Featured Discord Bots Showcase**: High-impact cards for **Mirsa** and **MIR** with direct Discord authorization invite URLs, client ID copy buttons, active feature specs, and permission details.
  4. **Minecraft & Bot Skills Matrix**: Dedicated interactive service cards for Custom Plugins, Mods, Custom Server Networks, and High-Throughput Bots with transparent "Reliable & Affordable Pricing" badges.
  5. **Bento Grid Architecture**: Showcases real system workflows (Spigot/Paper Bridge, Sharded Bot Clusters, Packet Gateways) without Meowlix or hardware photos.
  6. **Interactive MIR Chatbot**: Floating bottom-right widget with one-tap chips ("What bots did Ansh make?", "Can he make Minecraft plugins?", "What are his prices?", "Invite Mirsa", "Invite MIR").

- **Visual Identity & Theme**:
  - *Canvas*: Deep obsidian black (`#050505` to `#09090b`) with refined hairline silver borders (`#27272a`).
  - *Atmospheric Accents*: Multi-layer HTML5 Canvas Aurora rendering falling curtain ribbons in translucent cyan (`rgba(6, 182, 212, 0.15)`) and royal violet (`rgba(168, 85, 247, 0.15)`).
  - *Typography*: Architectural modern sans (`Plus Jakarta Sans`) paired with tabular figures (`tabular-nums`) for Discord IDs and metrics.
  - *Restraint*: Zero mechanical comment headers or fake status telemetry; pure human-readable titles.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Zero-Latency Local MIR Chatbot Knowledge Engine vs External LLM API Call**
  - *Chosen Approach*: An on-device intelligent intent and knowledge base engine for MIR containing complete structured data about Ansh, his Minecraft services (Paper/Spigot plugins, Forge/Fabric mods, server setup), Discord bots (Mirsa and MIR with their respective client IDs), reliable pricing policy, and hiring workflow.
  - *Why*: Instantaneous sub-10ms response time, zero rate-limit failures, reliable offline support, guaranteed accuracy of client IDs and links, and seamless user interaction without external API keys or cost overhead.
  - *Alternative Considered*: External Gemini API proxy. Deferred to prevent network latency and potential quota exhaustion for simple portfolio inquiries.

- **Decision 2: Canvas-Based Falling Aurora vs Heavy WebGL Shader**
  - *Chosen Approach*: Lightweight 2D canvas with sinusoidal ribbon physics and subtle particle trails.
  - *Why*: High framerate (60fps) on all devices and mobile viewports, zero GPU memory hogging, and clean layering behind text content.

- **Decision 3: Dedicated Bot Showcase Section vs Hiding Bots Inside Bento Grid**
  - *Chosen Approach*: Prominent showcase section above the fold displaying Mirsa and MIR cards side-by-side with explicit "Invite Bot" action buttons and copyable Client IDs.
  - *Why*: Meets the user's primary business goal: getting server owners to invite Mirsa and MIR immediately.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                         App.tsx (Main Shell)                           │
│  ├─ AuroraBackground (Falling Cyan/Purple Aurora Canvas)               │
│  ├─ CustomCursor (Monochrome subtle tracer)                           │
│  ├─ Navbar (Clean 3-zone header, Wordmark, Navigation, Discord CTA)    │
│  ├─ HeroSection (Ansh intro, Minecraft & Discord bot tagline, CTA)     │
│  ├─ DiscordBotsSection (Mirsa Client ID & MIR Music Client ID Cards)   │
│  ├─ ProjectsBentoGrid (Minecraft Systems, Cluster Gateways - No Meowlix)│
│  ├─ SkillsSection (Custom Plugins, Mods, Custom Servers, Discord Bots) │
│  ├─ ExperienceSection (Engineering & Bot Developer Milestones)         │
│  ├─ ContactSection (Hire Me, Reliable Rates, Discord QR Hub)           │
│  ├─ Footer (Editorial links & top return)                              │
│  └─ MirChatbot (Floating widget, Quick Chips, Instant Knowledge Base)   │
└────────────────────────────────────────────────────────────────────────┘
```

#### Key Data Additions & Updates:
- **Discord Bots Configuration**:
  - `Mirsa`: ID `1550942705012576317`, Type: Moderation, Auto-Mod, Utility & All-in-One, Invite URL formatted with permissions=8 and bot+applications.commands scopes.
  - `MIR`: ID `1553694404420706395`, Type: High-Fidelity Music Bot, Voice Channel Audio Engine, 24/7 Playback, Invite URL with music permissions.
- **Minecraft Services Data**:
  - Custom Spigot / Paper / Purpur Plugins (Java 17/21, custom events, NMS packet handling).
  - Fabric & NeoForge/Forge Mods (Custom mechanics, blocks, items, client-server sync).
  - High-Performance Minecraft Servers (Velocity proxies, multi-world setups, lag mitigation, anti-cheat & DDoS protection).
  - Affordable & Reliable Pricing: Custom quotes tailored to client needs with direct Discord consultation.
- **Exclusions**:
  - Remove all mentions of "Meowlix.gg" across all data structures and text strings.
  - Remove all PC hardware photos, specs galleries, and previous logos.
