import { useEffect, useState } from 'react';

const crawlLogs = [
  '> Initializing Ghost Agent v2.1.0',
  '> Scanning site structure...',
  '> Found 342 pages',
  '> Analyzing meta descriptions...',
  '> Checking h1 tags: 340/342 optimized',
  '> Validating image alt tags...',
  '> Scanning internal links: 1,243 found',
  '> Checking page load speed...',
  '> Testing mobile responsiveness...',
  '> Analyzing keyword density...',
  '> All systems operational',
];

export function LiveCrawler() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < crawlLogs.length) {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, crawlLogs[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Reset after showing all logs
      const resetTimer = setTimeout(() => {
        setVisibleLogs([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9D]/20 to-[#7B2CBF]/20 rounded-xl blur opacity-30"></div>
      
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-['Poppins'] text-xl font-bold text-white mb-1">Live Crawler</h3>
            <p className="text-sm text-gray-400 font-['Poppins']">Real-time site analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>
            <span className="text-sm text-[#00FF9D] font-['Poppins']">Active</span>
          </div>
        </div>

        <div className="rounded-lg bg-black/60 border border-[#00FF9D]/20 p-4 font-['Poppins'] text-sm overflow-hidden">
          <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00FF9D]/20 scrollbar-track-transparent">
            {visibleLogs.map((log, index) => (
              <div
                key={index}
                className="text-[#00FF9D] opacity-0 animate-[fadeIn_0.3s_ease-in_forwards] flex items-start gap-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-gray-500 select-none">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex-1">{log}</span>
              </div>
            ))}
            {currentIndex < crawlLogs.length && (
              <div className="text-[#00FF9D] flex items-center gap-2">
                <span className="text-gray-500 select-none">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="animate-pulse">▊</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-center">
            <div className="text-xs text-gray-400 mb-1">Pages Scanned</div>
            <div className="text-lg font-bold text-white font-['Poppins']">342</div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-center">
            <div className="text-xs text-gray-400 mb-1">Issues Found</div>
            <div className="text-lg font-bold text-[#7B2CBF] font-['Poppins']">3</div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-center">
            <div className="text-xs text-gray-400 mb-1">Auto-Fixed</div>
            <div className="text-lg font-bold text-[#00FF9D] font-['Poppins']">18</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 157, 0.2);
          border-radius: 2px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 157, 0.3);
        }
      `}</style>
    </div>
  );
}
