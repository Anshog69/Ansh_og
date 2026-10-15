import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, ExternalLink, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'invite-mirsa' | 'invite-mir' | 'copy-discord';
    label: string;
    url?: string;
  };
}

const QUICK_PROMPTS = [
  "🤖 Flagship Discord Bots",
  "⛏️ Minecraft Plugins",
  "📦 Fabric & Forge Mods",
  "🖥️ Custom Servers",
  "💰 Rates & Pricing",
  "📩 How to Hire Ansh",
  "⚡ Delivery Time",
  "🛠️ Custom Discord Bot"
];

export function MirChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hey there! I'm **MIR**, Ansh's portfolio assistant. 👋\n\nAnsh specializes in **Custom Minecraft Plugins, Mods, Complete Servers, and Flagship Discord Bots (Mirsa & MIR)** at reliable, budget-friendly prices.\n\nAsk me anything or choose a quick topic below!`,
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.discordUsername);
    setCopiedDiscord(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#a855f7', '#ffffff']
    });
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  // Comprehensive AI/Rule-based trained natural response handler
  const processBotResponse = (query: string): { text: string; action?: ChatMessage['action'] } => {
    const q = query.toLowerCase().trim();

    // 1. Casual Greetings & Politeness (English & Hinglish)
    if (
      /^(hi|hello|hey|yo|sup|hola|namaste|salaam|suno|kaise ho|kese ho|kya haal|kaisa hai|good morning|good evening)/i.test(q)
    ) {
      return {
        text: `Hello! Sab badhiya! Main **MIR** hoon, Ansh ka portfolio guide. 🚀\n\nAapko Ansh ke **Minecraft plugins, mods, custom servers, ya Discord bots (Mirsa & MIR)** ke baare me kuch puchna hai? Price aur hiring details bhi available hain!`,
        action: {
          type: 'copy-discord',
          label: `Chat on Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 2. Mirsa Discord Bot
    if (
      q.includes('mirsa') ||
      q.includes('moderation bot') ||
      q.includes('mod bot') ||
      q.includes('ticket bot') ||
      q.includes('anti raid') ||
      (q.includes('mirsa') && q.includes('invite'))
    ) {
      return {
        text: `🛡️ **Mirsa — All-in-One Community & Moderation Bot**\n\nMirsa is Ansh's flagship Discord moderation bot engineered for high-security servers:\n• **Intelligent Anti-Raid Shield:** Real-time spam, raid, and bad-link filtering\n• **Interactive Ticket Suite:** Seamless button-based customer support tickets\n• **Role Management:** Verification gates, reaction roles, and auto-roles\n• **Granular Audit Logs:** Complete records of admin actions and channel activity\n\nClick the button below to add Mirsa directly to your Discord server!`,
        action: {
          type: 'invite-mirsa',
          label: 'Invite Mirsa Bot to Discord',
          url: 'https://discord.com/oauth2/authorize?client_id=1550942705012576317&permissions=8&scope=bot%20applications.commands'
        }
      };
    }

    // 3. MIR Music Bot
    if (
      q.includes('music') ||
      q.includes('mir music') ||
      q.includes('song') ||
      q.includes('gaana') ||
      q.includes('audio') ||
      q.includes('24/7') ||
      q.includes('equalizer') ||
      q.includes('bass') ||
      (q.includes('mir') && !q.includes('mirsa') && (q.includes('bot') || q.includes('invite') || q.includes('stream')))
    ) {
      return {
        text: `🎵 **MIR — 24/7 High-Fidelity Discord Music Bot**\n\nMIR brings crystal-clear studio sound to your Discord voice channels:\n• **384kbps HD Audio:** Zero-lag, non-stuttering high bitrate stream\n• **24/7 Uptime:** Always ready in voice channels with continuous radio playback\n• **Dynamic Queue & Controls:** Button navigation, loop, shuffle, and skip\n• **Equalizer Engine:** Built-in bass-boost, treble enhancement, and audio presets\n\nClick below to invite MIR to your Discord server!`,
        action: {
          type: 'invite-mir',
          label: 'Invite MIR Music Bot to Discord',
          url: 'https://discord.com/oauth2/authorize?client_id=1553694404420706395&permissions=8&scope=bot%20applications.commands'
        }
      };
    }

    // 4. Custom Discord Bot commissioning
    if (
      q.includes('custom bot') ||
      q.includes('naya bot') ||
      q.includes('bot banana') ||
      q.includes('bot banwana') ||
      q.includes('bot commission') ||
      q.includes('apna bot') ||
      q.includes('discord bot development')
    ) {
      return {
        text: `🤖 **Custom Discord Bot Commissioning**\n\nHaan bilkul! Mirsa aur MIR ke alawa Ansh aapke server ke liye 100% custom Discord bot bana sakte hain:\n• Custom Economy, Levelling & Leaderboards\n• Webhook integrations & API syncs\n• Community verification & anti-nuke defense\n• Game stat trackers & custom slash commands\n• 24/7 VPS hosting setup with zero downtime\n\nSabhi bots reliable aur affordable rates me banaye jaate hain!`,
        action: {
          type: 'copy-discord',
          label: `Discuss Bot on Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 5. Minecraft Plugins
    if (
      q.includes('plugin') ||
      q.includes('spigot') ||
      q.includes('paper') ||
      q.includes('purpur') ||
      q.includes('nms') ||
      q.includes('custom plugin')
    ) {
      return {
        text: `⛏️ **Custom Minecraft Plugins (Paper / Spigot / Purpur)**\n\nAnsh Java 21 me high-performance plugins develop karte hain:\n• **Locked 20.0 TPS:** Asynchronous pipelines prevent any server-tick lag\n• **Custom GUIs:** Dynamic inventory menus, shops, and kits with click handlers\n• **Custom Mechanics:** Custom enchantments, combat balances, skills, and economy\n• **Network Sync:** Multi-server data synchronization using Redis\n• Compatibility across Minecraft versions 1.16 through 1.21+.`,
        action: {
          type: 'copy-discord',
          label: `Order Custom Plugin: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 6. Minecraft Mods
    if (
      q.includes('mod') ||
      q.includes('fabric') ||
      q.includes('forge') ||
      q.includes('neoforge') ||
      q.includes('mixin') ||
      q.includes('custom item')
    ) {
      return {
        text: `📦 **Minecraft Custom Mods (Fabric & Forge)**\n\nAnsh modern Minecraft loaders ke liye bespoke mods banate hain:\n• **Custom Items & Blocks:** Unique 3D models, textures, animations, and armor sets\n• **Custom Mob Behaviors:** Tailored AI goal selectors, boss fights, and particle fx\n• **Network Payloads:** Robust client-server packet sync that resists desync\n• **Mixin Engineering:** Clean bytecode transformers without breaking other mods.`,
        action: {
          type: 'copy-discord',
          label: `Commission a Mod: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 7. Custom Minecraft Servers & Velocity Networks
    if (
      q.includes('server') ||
      q.includes('velocity') ||
      q.includes('bungee') ||
      q.includes('bungeecord') ||
      q.includes('tps') ||
      q.includes('lag') ||
      q.includes('network') ||
      q.includes('server banana')
    ) {
      return {
        text: `🖥️ **Custom Minecraft Servers & Multi-Server Networks**\n\nAnsh turnkey Minecraft servers create aur optimize karte hain:\n• **Velocity & BungeeCord Proxy:** Fast player routing across Hub, Survival, and Minigame sub-servers\n• **Anti-DDoS & Exploit Hardening:** Edge packet filtering and crash exploit patches\n• **Cross-Server Sync:** Unified chat, friends list, party system, and economy\n• **Linux & Pterodactyl:** High-performance Linux VPS tuning with locked 20.0 TPS.`,
        action: {
          type: 'copy-discord',
          label: `Build Server with Ansh: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 8. Pricing, Rates, Cost, Budget (English & Hinglish)
    if (
      q.includes('price') ||
      q.includes('pricing') ||
      q.includes('rate') ||
      q.includes('cost') ||
      q.includes('kitna') ||
      q.includes('kitne') ||
      q.includes('charge') ||
      q.includes('sasta') ||
      q.includes('budget') ||
      q.includes('reliable') ||
      q.includes('paisa') ||
      q.includes('fees')
    ) {
      return {
        text: `💰 **Reliable & Affordable Pricing ('Ekdam Reliable Prices')**\n\nAnsh ka pricing structure bilkul transparent aur budget-friendly hai!\n\n• **Tailored Quotes:** Har project ka charge uske exact features aur aapke budget ke anusar decide hota hai\n• **Zero Hidden Fees:** Jo quote agree hota hai, wahi final rehta hai\n• **Post-Deployment Support:** Delivery ke baad testing, bug fixes aur setup guidance free included rehti hai\n\nApne project ka requirement share karein for an instant friendly quote!`,
        action: {
          type: 'copy-discord',
          label: `Get Free Quote on Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 9. How to Hire / Order / Contact Ansh
    if (
      q.includes('hire') ||
      q.includes('contact') ||
      q.includes('order') ||
      q.includes('kaise') ||
      q.includes('kare') ||
      q.includes('reach') ||
      q.includes('connect') ||
      q.includes('discord') ||
      q.includes('username') ||
      q.includes('talk') ||
      q.includes('message') ||
      q.includes('dm')
    ) {
      return {
        text: `📩 **How to Hire Ansh**\n\nAap directly Ansh ko Discord par message (DM) bhej sakte hain:\n• **Discord Username:** \`ansh_og0255\`\n• **Handle:** \`@Ansh_og\`\n\n**Process:**\n1. Copy Ansh's Discord username below\n2. Add on Discord & send your project idea (plugin, mod, server, or bot)\n3. Discuss requirements, get a reliable quote, and kick off development!`,
        action: {
          type: 'copy-discord',
          label: `Copy Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 10. Delivery Time / Speed / Deadlines
    if (
      q.includes('time') ||
      q.includes('delivery') ||
      q.includes('turnaround') ||
      q.includes('kab tak') ||
      q.includes('kitna time') ||
      q.includes('fast') ||
      q.includes('deadline')
    ) {
      return {
        text: `⚡ **Turnaround & Delivery Timelines**\n\nAnsh takes deadlines very seriously with fast, prioritized turnaround:\n• **Small Plugins / Bot Commands:** 24 - 48 Hours\n• **Medium Discord Bots / Custom Mods:** 2 - 4 Days\n• **Full Minecraft Server Networks:** 4 - 7 Days\n\nRegular progress updates aur dev server test access provide kiya jata hai development ke doran!`,
        action: {
          type: 'copy-discord',
          label: `Check Timeline for Your Project: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 11. Tech Stack / Skills / Languages
    if (
      q.includes('stack') ||
      q.includes('skill') ||
      q.includes('tech') ||
      q.includes('tool') ||
      q.includes('java') ||
      q.includes('language') ||
      q.includes('experience')
    ) {
      return {
        text: `🛠️ **Ansh's Engineering Tech Stack**\n\n• **Languages:** Java 21, TypeScript, JavaScript (Node.js v22), Bash / Shell\n• **Discord APIs:** discord.js v14, REST v10, Gateway WebSockets\n• **Minecraft Systems:** PaperMC, Spigot, Purpur, Velocity Proxy, Fabric, NeoForge\n• **Databases & DevOps:** Linux VPS, Redis Pub/Sub, MySQL, Systemd daemons, Pterodactyl.`,
        action: {
          type: 'copy-discord',
          label: `Contact on Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // 12. About Ansh / Who is Ansh
    if (
      q.includes('who') ||
      q.includes('ansh') ||
      q.includes('about') ||
      q.includes('kon hai') ||
      q.includes('kaun hai') ||
      q.includes('profile') ||
      q.includes('og')
    ) {
      return {
        text: `⚡ **Ansh The OG — Full-Stack Developer**\n\n*"Making systems that work when you are sleeping."* 🌙💻\n\nAnsh is a full-stack developer & systems architect with 3+ years of production engineering experience:\n• **High-Traffic Discord Bots:** Mirsa (Enterprise moderation) & MIR (24/7 audio streaming) running reliably 24/7\n• **Minecraft Architecture:** Custom Paper/Spigot plugins, Fabric/Forge mods, and 20.0 TPS multi-server networks\n• **Reliable Execution:** Everything is engineered to run self-sufficiently with zero downtime, robust logging, and budget-friendly pricing.`,
        action: {
          type: 'copy-discord',
          label: `Connect on Discord: @${PERSONAL_INFO.discordUsername}`
        }
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! Ansh is ready to build your custom **Minecraft plugins, Fabric/Forge mods, custom Minecraft servers, or Discord bots (Mirsa & MIR)** at very reliable prices.\n\nYou can reach out directly on Discord at **@${PERSONAL_INFO.discordUsername}** to discuss your project!`,
      action: {
        type: 'copy-discord',
        label: `Copy Discord: @${PERSONAL_INFO.discordUsername}`
      }
    };
  };

  const handleSend = (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const { text, action } = processBotResponse(messageText);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text,
        timestamp: 'Just now',
        action
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 350);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: `Hey there! I'm **MIR**, Ansh's portfolio assistant. 👋\n\nAnsh specializes in **Custom Minecraft Plugins, Mods, Complete Servers, and Flagship Discord Bots (Mirsa & MIR)** at reliable, budget-friendly prices.\n\nAsk me anything or choose a quick topic below!`,
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button (Zero "Portfolio AI" tag per user directive) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          id="mir-chatbot-toggle-btn"
          type="button"
          data-cursor="MIR"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white px-4 py-3 rounded-full shadow-2xl cursor-pointer group transition-all"
          aria-label="Open MIR Assistant"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
              Ask MIR
            </span>
            <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Online • Chat</span>
            </span>
          </div>
        </motion.button>
      </div>

      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mir-chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[550px] max-h-[80vh] bg-zinc-950/98 backdrop-blur-2xl border border-zinc-800 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white">MIR</span>
                    <span className="text-[9px] font-mono bg-zinc-800 text-cyan-400 border border-zinc-700 px-1.5 py-0.2 rounded">
                      BOT
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 ml-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Portfolio &amp; Services Guide
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Questions Horizontal Scroller */}
            <div className="px-3 py-2 bg-zinc-950 border-b border-zinc-900 overflow-x-auto no-scrollbar flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[10px] font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-2.5 py-1 rounded-md transition-all shrink-0 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                        isBot
                          ? 'bg-zinc-900/90 border border-zinc-800 text-zinc-200'
                          : 'bg-white text-black font-medium'
                      }`}
                    >
                      {msg.text}

                      {/* Action buttons embedded in message */}
                      {msg.action && (
                        <div className="mt-3 pt-2.5 border-t border-zinc-800 flex flex-wrap gap-2">
                          {msg.action.url ? (
                            <a
                              href={msg.action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold bg-white text-black px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors"
                            >
                              <span>{msg.action.label}</span>
                              <ExternalLink className="w-3 h-3 text-zinc-700" />
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={handleCopyDiscord}
                              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold bg-white text-black px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
                            >
                              {copiedDiscord ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-700" />}
                              <span>{copiedDiscord ? 'Copied Username!' : msg.action.label}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-zinc-500 bg-zinc-900/60 border border-zinc-800 px-3 py-2 rounded-xl w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-900/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask MIR about bots, plugins, prices..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black disabled:opacity-30 disabled:hover:bg-white transition-all cursor-pointer"
                  title="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
