import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Search, TrendingUp, TrendingDown, Target, Eye } from 'lucide-react';

export function KeywordStrategy() {
  const keywords = [
    { keyword: 'vintage clothing', volume: 18100, difficulty: 68, position: 3, change: 2, url: '/vintage-collection' },
    { keyword: 'vintage denim', volume: 8900, difficulty: 54, position: 7, change: -1, url: '/collections/denim' },
    { keyword: 'sustainable fashion', volume: 12400, difficulty: 72, position: 12, change: 5, url: '/blog/sustainable-fashion' },
    { keyword: 'vintage accessories', volume: 5600, difficulty: 45, position: 5, change: 0, url: '/collections/accessories' },
    { keyword: 'retro clothing style', volume: 4200, difficulty: 41, position: 9, change: 3, url: '/blog/retro-style' },
    { keyword: 'vintage fashion tips', volume: 3800, difficulty: 38, position: 4, change: 1, url: '/blog/fashion-tips' },
  ];

  const opportunities = [
    { keyword: 'vintage leather jacket care', volume: 2100, difficulty: 28, potential: 'high' },
    { keyword: 'authentic vintage clothing', volume: 1900, difficulty: 35, potential: 'high' },
    { keyword: 'vintage denim brands', volume: 1600, difficulty: 32, potential: 'medium' },
    { keyword: 'sustainable vintage shopping', volume: 2400, difficulty: 42, potential: 'high' },
  ];

  return (
    <DashboardLayout title="Keyword Strategy" breadcrumb="Keyword Strategy" agentContext="Keyword Strategy">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">247</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tracked Keywords</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">34</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Top 10 Rankings</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">127K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Visibility</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">+18%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Position Change</div>
            </div>
          </div>
        </div>

        {/* Keyword Opportunities */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-1">AI-Discovered Opportunities</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Low-competition keywords with high potential</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {opportunities.map((opp, index) => (
                <div key={index} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors mb-2">
                        {opp.keyword}
                      </h4>
                      <div className="flex gap-3 text-sm">
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">
                          Volume: <span className="text-gray-900 dark:text-white">{opp.volume.toLocaleString()}</span>
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">
                          Difficulty: <span className={opp.difficulty < 35 ? 'text-green-600 dark:text-[#00FF9D]' : 'text-yellow-600 dark:text-yellow-400'}>{opp.difficulty}</span>
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-['Poppins'] ${
                      opp.potential === 'high'
                        ? 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30'
                        : 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30'
                    }`}>
                      {opp.potential}
                    </span>
                  </div>
                  <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    Create Content
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tracked Keywords */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Keyword Rankings</h3>
            
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 font-['Poppins'] border-b border-purple-200 dark:border-purple-500/10">
                <div className="col-span-3">Keyword</div>
                <div className="col-span-2 text-center">Volume</div>
                <div className="col-span-2 text-center">Difficulty</div>
                <div className="col-span-2 text-center">Position</div>
                <div className="col-span-1 text-center">Change</div>
                <div className="col-span-2">URL</div>
              </div>

              {/* Rows */}
              {keywords.map((kw, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all"
                >
                  <div className="col-span-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-900 dark:text-white text-sm truncate">{kw.keyword}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">{kw.volume.toLocaleString()}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`font-bold font-['Poppins'] text-sm ${
                      kw.difficulty < 50 ? 'text-green-600 dark:text-[#00FF9D]' : kw.difficulty < 65 ? 'text-yellow-600 dark:text-yellow-400' : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {kw.difficulty}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`text-2xl font-bold font-['Poppins'] ${
                      kw.position <= 3 ? 'text-green-600 dark:text-[#00FF9D]' : kw.position <= 10 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      #{kw.position}
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center justify-center">
                    {kw.change !== 0 && (
                      <div className={`flex items-center gap-1 ${kw.change > 0 ? 'text-green-600 dark:text-[#00FF9D]' : 'text-orange-600 dark:text-orange-400'}`}>
                        {kw.change > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="text-sm font-['Poppins']">{Math.abs(kw.change)}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-xs truncate font-['Poppins']">{kw.url}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}