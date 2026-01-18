import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Zap, 
  Link2, 
  Activity, 
  Settings,
  ChevronDown
} from 'lucide-react';
import { TrafficChart } from '@/app/components/traffic-chart';
import { HealthScore } from '@/app/components/health-score';
import { RecentActions } from '@/app/components/recent-actions';
import { LiveCrawler } from '@/app/components/live-crawler';
import { AIAgent } from '@/app/components/ai-agent';

export function Dashboard() {
  const [selectedSite, setSelectedSite] = useState('My-Shop-Il.co.il');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: FileText, label: 'The Interview (Profile)', active: false },
    { icon: Calendar, label: 'Content Planner', active: false },
    { icon: Zap, label: 'Automations', active: false },
    { icon: Link2, label: 'Link Building', active: false },
    { icon: Activity, label: 'SEO Health', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#121212] text-white flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-black/20 backdrop-blur-sm p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">Ghost Post</span>
        </div>

        {/* Site Selector */}
        <div className="mb-6 px-2">
          <label className="block text-xs font-['JetBrains_Mono'] text-gray-400 mb-2">ACTIVE SITE</label>
          <button className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-left flex items-center justify-between hover:bg-white/10 transition-all group">
            <span className="font-['JetBrains_Mono'] text-sm text-white truncate">{selectedSite}</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#00FF9D] transition-colors" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                item.active
                  ? 'bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex">
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-['Space_Grotesk'] text-3xl font-bold">System Status</h1>
              <div className="px-3 py-1 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/20">
                <span className="text-sm font-['JetBrains_Mono'] text-[#00FF9D]">Optimized</span>
              </div>
            </div>
            <p className="text-gray-400">Your AI agent is actively monitoring and optimizing</p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Traffic Chart */}
            <div className="lg:col-span-2">
              <TrafficChart />
            </div>

            {/* Health Score */}
            <HealthScore />

            {/* Recent Actions */}
            <RecentActions />

            {/* Live Crawler */}
            <div className="lg:col-span-2">
              <LiveCrawler />
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Agent */}
        <AIAgent />
      </main>
    </div>
  );
}
