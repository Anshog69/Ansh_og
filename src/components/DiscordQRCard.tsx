import { useState } from 'react';
import { QrCode, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

// Accurate module representation of the Discord QR code
const QR_GRID = [
  "11111110010101111111",
  "10000010111001000001",
  "10111010010101011101",
  "10111010101011011101",
  "10111010001101011101",
  "10000010110101000001",
  "11111110101011111111",
  "00000000101100000000",
  "11010111100101101011",
  "00101100011010010100",
  "11010011110101101101",
  "01110100001100101010",
  "10011011100101011011",
  "00000000110100100100",
  "11111110101011010111",
  "10000010011001001010",
  "10111010100101110101",
  "10111010011010011001",
  "10111010101011010111",
  "10000010010101001010",
  "11111110111011111111"
];

interface DiscordQRCardProps {
  compact?: boolean;
}

export function DiscordQRCard({ compact = false }: DiscordQRCardProps) {
  const [copied, setCopied] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.discordUsername);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#e4e4e7', '#a1a1aa', '#71717a']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TiltCard maxTilt={6} scale={1.01} dataCursor="DISCORD" className={compact ? 'max-w-sm' : 'max-w-md w-full'}>
      <div
        id="discord-qr-interactive-card"
        className="relative group rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 p-6 sm:p-7 shadow-xl overflow-hidden transition-colors"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
              DISCORD IDENTITY
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase">
            VERIFIED
          </span>
        </div>

        {/* QR Code Container in Stark Monochrome */}
        <div className="relative mx-auto w-48 sm:w-56 h-48 sm:h-56 bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center justify-center shadow-inner">
          {/* QR Matrix Grid */}
          <div 
            className="w-full h-full grid gap-[1.5px] p-1 bg-black rounded-xl"
            style={{ 
              gridTemplateColumns: `repeat(${QR_GRID[0].length}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${QR_GRID.length}, minmax(0, 1fr))` 
            }}
          >
            {QR_GRID.map((row, rIdx) => 
              row.split('').map((cell, cIdx) => (
                <div 
                  key={`${rIdx}-${cIdx}`}
                  className={`${cell === '1' ? 'bg-white rounded-[1px]' : 'bg-transparent'}`}
                />
              ))
            )}
          </div>

          {/* Discord Icon Center Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Username & Action */}
        <div className="mt-5 text-center">
          <div className="font-mono text-sm font-bold text-white mb-1">
            @{PERSONAL_INFO.discordUsername}
          </div>
          <p className="text-xs text-zinc-400 mb-4 font-normal">
            Scan via Discord mobile app or copy handle to direct message.
          </p>

          <button
            type="button"
            data-cursor="COPY"
            onClick={copyDiscord}
            className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold py-2.5 rounded-xl transition-colors text-xs shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Handle Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-black" />
                <span>Copy Discord Handle</span>
              </>
            )}
          </button>
        </div>
      </div>
    </TiltCard>
  );
}
