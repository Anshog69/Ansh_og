import { SkillItem, ExperienceItem, StatItem, ProjectBentoItem, DiscordBotItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ansh",
  handle: "@Ansh_og",
  discordUsername: "ansh_og0255",
  title: "The OG Full-Stack Developer & Systems Architect",
  roles: [
    "Full-Stack Systems Engineer",
    "Custom Discord Bot Developer (Mirsa & MIR)",
    "Minecraft Plugin Engineer (Spigot/Paper)",
    "Minecraft Mod Developer (Fabric/Forge)",
    "Custom Minecraft Server Architect",
    "Linux Infrastructure & VPS Engineer"
  ],
  tagline: "Ansh the OG — A full-stack developer making bulletproof systems that work when you are sleeping. High-performance Minecraft plugins, mods, servers & Discord bots at reliable, affordable prices.",
  year: "2026",
  discordAppUrl: "https://discord.com",
};

export const DISCORD_BOTS_DATA: DiscordBotItem[] = [
  {
    id: "mirsa-bot",
    name: "Mirsa",
    tagline: "Moderation, Security & All-in-One Community Bot",
    description: "Enterprise-grade Discord community moderation and automation bot. Engineered with intelligent anti-raid shields, automated rule heuristics, custom ticket workflows, reaction roles, and granular audit logging.",
    category: "MODERATION & UTILITY",
    clientId: "1550942705012576317",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1550942705012576317&permissions=8&scope=bot%20applications.commands",
    badge: "MODERATION ENGINE",
    status: "ONLINE & ACTIVE",
    features: [
      "Real-Time Anti-Raid & Spam Filtering",
      "Interactive Support Ticket Suite",
      "Dynamic Role Management & Verification",
      "Granular Multi-Channel Audit Logs",
      "Bespoke Embeds & Slash Command Architecture"
    ],
    permissions: "Administrator (Permissions: 8)"
  },
  {
    id: "mir-music-bot",
    name: "MIR",
    tagline: "High-Fidelity 24/7 Discord Music & Audio Streaming Bot",
    description: "Next-generation audio streaming bot engineered for crystal-clear voice channel sound quality. Features 24/7 continuous radio playback, zero-stutter buffering, dynamic queue control, equalizer filters, and interactive button controls.",
    category: "MUSIC & VOICE STREAMING",
    clientId: "1553694404420706395",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1553694404420706395&permissions=8&scope=bot%20applications.commands",
    badge: "24/7 HIGH-FIDELITY MUSIC",
    status: "ONLINE & STREAMING",
    features: [
      "24/7 Uninterrupted Voice Channel Streaming",
      "Studio-Grade High-Bitrate Audio Engine",
      "Dynamic Track Queue & Playlist Shuffling",
      "Custom Equalizer with Bass-Boost Modes",
      "Interactive Discord Button Controls"
    ],
    permissions: "Voice & Audio (Permissions: 8)"
  }
];

export const PROJECTS_DATA: ProjectBentoItem[] = [
  {
    id: "discord-cluster-gateway",
    title: "Discord Sharded Cluster Gateway",
    tag: "SHARDED GATEWAY",
    category: "DISCORD SYSTEMS",
    tagline: "Multi-process shard orchestrator handling 50,000+ community members across dozens of production guilds.",
    description: "Engineered a distributed Discord gateway manager built on Node.js v22 and discord.js v14. Features automated IPC process synchronization, worker threads for CPU-heavy tasks, and automatic reconnection backoffs.",
    status: "ACTIVE IN PRODUCTION",
    metrics: [
      { label: "Community Reach", value: "50,000+" },
      { label: "Cluster Uptime", value: "99.99%" },
      { label: "Process Routing", value: "Zero-Drop IPC" }
    ],
    technologies: ["Node.js v22", "discord.js v14", "TypeScript", "Redis Pub/Sub", "Linux Systemd"],
    highlights: [
      "Custom interaction router supporting slash commands, autocompletes, dynamic modal forms, and secure select menus.",
      "In-memory Redis session caching to preserve state across seamless hot reloads without user session loss.",
      "Fine-grained role hierarchy enforcement with cryptographically logged administrative audit trails."
    ],
    architectureOverview: "Incoming WebSocket gateway packets are received by the master coordinator process and dispatched across dedicated worker shards via UNIX domain sockets, bypassing NodeJS single-thread event loop bottlenecks.",
    codeSnippet: {
      filename: "gateway-cluster.ts",
      language: "typescript",
      code: `import { ShardingManager } from 'discord.js';
import { logger } from './utils/logger';

const manager = new ShardingManager('./dist/bot.js', {
  token: process.env.DISCORD_TOKEN,
  totalShards: 'auto',
  respawn: true,
  mode: 'worker'
});

manager.on('shardCreate', shard => {
  logger.info(\`[CLUSTER] Launched Shard #\${shard.id} | Health: ONLINE\`);
});

await manager.spawn();`
    },
    colSpan: 'double',
    featured: true
  },
  {
    id: "minecraft-custom-plugins",
    title: "Minecraft Custom Plugins Engine",
    tag: "PAPER & SPIGOT",
    category: "MINECRAFT SYSTEMS",
    tagline: "Bespoke Java plugins with asynchronous event processing, custom NMS packet listeners, and GUI menus.",
    description: "Engineered high-performance Minecraft plugins for Paper, Purpur, and Spigot. Features async event pipelines, custom item attributes, economy bridges, and anti-lag optimizations maintaining a locked 20.0 TPS.",
    status: "PRODUCTION READY",
    metrics: [
      { label: "Target Tick Rate", value: "20.0 TPS" },
      { label: "Architecture", value: "Async Event Bus" },
      { label: "Compatibility", value: "1.16 - 1.21+" }
    ],
    technologies: ["Java 21", "PaperMC API", "Spigot API", "NMS Packets", "Adventure API", "Redis"],
    highlights: [
      "Zero main-thread blocking with asynchronous event processing and task schedulers.",
      "Custom GUI inventory menus with interactive click handlers and persistent metadata.",
      "Seamless multi-server network database synchronization via Redis."
    ],
    architectureOverview: "Hooks into PaperMC internal event bus; computational tasks and database queries are dispatched to pooled async worker threads, keeping server tick rate locked at 20.0 TPS.",
    colSpan: 'single'
  },
  {
    id: "minecraft-mods-engine",
    title: "Minecraft Custom Mods & Forge/Fabric Engine",
    tag: "FORGE & FABRIC",
    category: "MOD ARCHITECTURE",
    tagline: "Custom client-server mods introducing unique mechanics, custom items, and packet networking.",
    description: "Bespoke mod development across modern Minecraft versions using Fabric, NeoForge, and Forge. Crafts custom gameplay loops, entity behaviors, particle systems, and client-server network synchronizations.",
    status: "STABLE BUILDS",
    metrics: [
      { label: "Loaders", value: "Fabric & Forge" },
      { label: "Protocol", value: "Custom Packets" },
      { label: "Performance", value: "Zero Memory Leak" }
    ],
    technologies: ["Java 21", "Fabric Loader", "NeoForge", "Mixin Engine", "Network Payloads"],
    highlights: [
      "Custom client-server packet networking ensuring cheat-resistant gameplay verification.",
      "Optimized mixin injections into vanilla rendering loops without shader incompatibilities.",
      "Custom item attributes, unique enchantments, and inventory synchronization."
    ],
    architectureOverview: "Uses bytecode Mixin transformers and custom payload channels to register items, custom blocks, and network events seamlessly alongside vanilla Minecraft clients.",
    colSpan: 'single'
  },
  {
    id: "minecraft-server-network",
    title: "Custom Minecraft Server & Velocity Proxy Network",
    tag: "NETWORK ARCHITECTURE",
    category: "SERVER DEPLOYMENT",
    tagline: "High-concurrency Velocity proxy network with automated protection, lag mitigation, and custom economy.",
    description: "Turnkey enterprise Minecraft server creation and optimization. Features multi-server Velocity/BungeeCord proxy routing, Linux performance tuning, anti-DDoS firewalls, and synchronized cross-server inventories.",
    status: "ACTIVE NETWORK",
    metrics: [
      { label: "Proxy Engine", value: "Velocity Next" },
      { label: "TPS Stability", value: "20.0 Continuous" },
      { label: "Mitigation", value: "Layer 4/7 Shield" }
    ],
    technologies: ["Velocity Proxy", "PaperMC", "Linux VPS", "MySQL / Redis", "Pterodactyl", "iptables"],
    highlights: [
      "Velocity modern forwarding protocol with fast player handshakes and zero packet sniffing.",
      "DDoS firewall filtering and automated bad-packet dropping via Linux kernel tables.",
      "Cross-server chat, friends list, and permission sync via Redis Pub/Sub."
    ],
    architectureOverview: "External players connect through an edge Velocity proxy node with DDoS filtering, which dynamically forwards verified sessions to back-end PaperMC game instances on isolated subnets.",
    colSpan: 'single'
  },
  {
    id: "vps-failover-daemon",
    title: "Autonomous VPS Node Failover Daemon",
    tag: "RESILIENCE & MONITORING",
    category: "DEVOPS DAEMON",
    tagline: "Lightweight background daemon continuously auditing bot health, socket heartbeats, and memory leaks.",
    description: "Custom Linux daemon executing heartbeat diagnostics against active bot processes. Performs automatic process memory defragmentation, automated restarts on hangs, and pushes emergency incident reports.",
    status: "DAEMON ONLINE",
    metrics: [
      { label: "Memory Overhead", value: "< 12 MB" },
      { label: "Check Frequency", value: "10s Polling" },
      { label: "Auto Recovery", value: "Enabled" }
    ],
    technologies: ["Bash", "Linux systemd", "Node.js Child Process", "Webhook Alerter", "cgroups"],
    highlights: [
      "Continuous RSS memory tracking with proactive graceful restarts before OS out-of-memory kills.",
      "Deadlock detection via periodic synthetic ping/pong requests to local IPC endpoints.",
      "Incident report generation detailing stack traces and resource telemetry delivered to private developer channel."
    ],
    architectureOverview: "Runs as a standalone systemd service sandboxed under system cgroups. Emits heartbeats and executes controlled SIGTERM / SIGKILL cascades when an unresponsive threshold is exceeded.",
    colSpan: 'double'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "minecraft-plugins",
    num: "01",
    category: "MINECRAFT",
    title: "Custom Minecraft Plugins",
    description: "Bespoke Spigot, PaperMC, and Purpur plugin development in Java 21. Custom events, NMS packet manipulation, interactive GUIs, custom item mechanics, and strict 20.0 TPS optimization.",
    iconName: "Boxes",
    tags: ["PaperMC", "Spigot API", "Java 21", "NMS Packets", "Custom GUIs", "20.0 TPS"]
  },
  {
    id: "minecraft-mods",
    num: "02",
    category: "MINECRAFT",
    title: "Minecraft Mods (Fabric & Forge)",
    description: "Custom mod development for modern Minecraft. Creating unique gameplay mechanics, custom items, custom blocks, client-server packet sync, and mixin architecture.",
    iconName: "Terminal",
    tags: ["Fabric", "Forge", "NeoForge", "Custom Items", "Packet Sync", "Mixin Engine"]
  },
  {
    id: "minecraft-servers",
    num: "03",
    category: "MINECRAFT",
    title: "Custom Minecraft Server Creation",
    description: "Full-scale custom Minecraft server deployment from scratch. Velocity and BungeeCord proxy networks, multi-world setups, lag mitigation, custom economies, and DDoS protection.",
    iconName: "Server",
    tags: ["Velocity Proxy", "Multi-Server Network", "Lag Mitigation", "Anti-DDoS", "Economy"]
  },
  {
    id: "stunning-discord-bots",
    num: "04",
    category: "DISCORD",
    title: "Stunning Discord Bots",
    description: "High-impact custom Discord bots that look extraordinary and perform reliably. Advanced moderation (Mirsa), 24/7 music (MIR), tickets, verification, and interactive embeds.",
    iconName: "Bot",
    tags: ["discord.js v14", "Node.js v22", "TypeScript", "Mirsa & MIR", "Slash Commands"]
  },
  {
    id: "backend-infra",
    num: "05",
    category: "INFRASTRUCTURE",
    title: "Linux VPS & Dedicated Nodes",
    description: "Linux server provisioning, systemd automation daemons, high-uptime monitoring, Redis caching, and automated backup pipelines.",
    iconName: "Cpu",
    tags: ["Linux VPS", "Systemd Daemons", "Redis Caching", "Nginx", "High Uptime"]
  },
  {
    id: "reliable-pricing",
    num: "06",
    category: "HIRE & RATES",
    title: "Reliable & Affordable Pricing — Hire Me",
    description: "Offering premium quality Minecraft plugins, mods, servers, and Discord bots at completely reliable, budget-friendly prices. Custom quotes tailored to your exact needs with zero hidden fees.",
    iconName: "Sparkles",
    tags: ["Reliable Rates", "Fast Delivery", "Direct Consultation", "Hire Ansh", "Full Support"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "lead-bot-eng",
    company: "Gaming Communities & Discord Guilds",
    role: "Lead Discord Bot & Systems Architect",
    period: "2024 - Present",
    description: "Architected flagship Discord bots including Mirsa (moderation & all-in-one) and MIR (high-fidelity music), managing large communities with zero downtime.",
    iconName: "Briefcase",
    badge: "Active"
  },
  {
    id: "minecraft-engineer",
    company: "Minecraft Server Networks & Communities",
    role: "Minecraft Plugin & Server Engineer",
    period: "2023 - Present",
    description: "Developing custom PaperMC plugins, Fabric/Forge mods, and Velocity proxy networks with synchronized cross-server player economies and locked 20.0 TPS.",
    iconName: "Briefcase",
    badge: "Specialist"
  },
  {
    id: "infra",
    company: "Linux VPS & Dedicated Nodes",
    role: "Infrastructure & Security Maintainer",
    period: "2022 - Present",
    description: "Maintaining dedicated Linux nodes, firewalls, automated failover daemons, and low-latency socket routing for gaming bots and servers.",
    iconName: "Briefcase"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: "20.0",
    numericTarget: 20,
    suffix: " TPS",
    label: "Server Optimization"
  },
  {
    value: "2",
    numericTarget: 2,
    suffix: " Flagship",
    label: "Bots (Mirsa & MIR)"
  },
  {
    value: "50k+",
    numericTarget: 50,
    suffix: "k+",
    label: "Community Members Served"
  },
  {
    value: "100%",
    numericTarget: 100,
    suffix: "%",
    label: "Reliable Pricing Guarantee"
  }
];
