import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function HealthScore() {
  const [score, setScore] = useState(0);
  const targetScore = 92;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (score < targetScore) {
        setScore(score + 1);
      }
    }, 20);
    return () => clearTimeout(timer);
  }, [score]);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9D]/20 to-[#7B2CBF]/20 rounded-xl blur opacity-30"></div>
      
      <div className="relative">
        <div className="mb-6">
          <h3 className="font-['Poppins'] text-xl font-bold text-white mb-1">Site Health</h3>
          <p className="text-sm text-gray-400 font-['Poppins']">Overall performance score</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="96"
                cy="96"
                r="70"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="12"
                fill="none"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="96"
                cy="96"
                r="70"
                stroke="url(#healthGradient)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FF9D" />
                  <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Score Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white font-['Poppins']">{score}</span>
              <span className="text-xl text-gray-400">/100</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
            <span className="text-sm text-gray-400 font-['Poppins']">Performance</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF9D]" style={{ width: '95%' }}></div>
              </div>
              <span className="text-sm text-[#00FF9D] font-['Poppins']">95</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
            <span className="text-sm text-gray-400 font-['Poppins']">Accessibility</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF9D]" style={{ width: '88%' }}></div>
              </div>
              <span className="text-sm text-[#00FF9D] font-['Poppins']">88</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
            <span className="text-sm text-gray-400 font-['Poppins']">SEO Score</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF9D]" style={{ width: '94%' }}></div>
              </div>
              <span className="text-sm text-[#00FF9D] font-['Poppins']">94</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
