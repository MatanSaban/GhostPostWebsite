import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Link as LinkIcon, ExternalLink, TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export function LinkBuilding() {
  const backlinks = [
    { domain: 'fashionblog.com', dr: 68, status: 'active', anchor: 'vintage clothing guide', traffic: 1247 },
    { domain: 'styletips.co.il', dr: 45, status: 'active', anchor: 'sustainable fashion', traffic: 892 },
    { domain: 'retrostyle.net', dr: 52, status: 'pending', anchor: 'vintage denim collection', traffic: 0 },
    { domain: 'ecofashion.com', dr: 71, status: 'active', anchor: 'eco-friendly vintage', traffic: 1654 },
    { domain: 'trendmagazine.com', dr: 63, status: 'broken', anchor: 'vintage accessories', traffic: 0 },
  ];

  const opportunities = [
    { site: 'vintagefashionweek.com', dr: 58, relevance: 95, type: 'Guest Post' },
    { site: 'fashionhistory.net', dr: 64, relevance: 88, type: 'Resource Link' },
    { site: 'sustainablestyle.co.il', dr: 42, relevance: 92, type: 'Collaboration' },
    { site: 'styleguide.com', dr: 76, relevance: 81, type: 'Expert Roundup' },
  ];

  return (
    <DashboardLayout title="Link Building" breadcrumb="Link Building" agentContext="Link Building">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <LinkIcon className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">127</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Backlinks</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">58</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Domain Authority</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">23</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Referring Domains</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Broken Links</div>
            </div>
          </div>
        </div>

        {/* Backlink Opportunities */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-1">AI-Discovered Opportunities</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">High-quality backlink prospects for your site</p>
              </div>
            </div>

            <div className="space-y-3">
              {opportunities.map((opp, index) => (
                <div key={index} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <ExternalLink className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                          {opp.site}
                        </h4>
                        <span className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 text-xs font-['Poppins']">
                          {opp.type}
                        </span>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">DR: <span className="text-gray-900 dark:text-white">{opp.dr}</span></span>
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">Relevance: <span className="text-green-600 dark:text-[#00FF9D]">{opp.relevance}%</span></span>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                      Outreach
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Backlinks */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Active Backlinks</h3>
            
            <div className="space-y-2">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 font-['Poppins'] border-b border-purple-200 dark:border-purple-500/10">
                <div className="col-span-4">Domain</div>
                <div className="col-span-2 text-center">DR</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-3">Anchor Text</div>
                <div className="col-span-1 text-right">Traffic</div>
              </div>

              {/* Table Rows */}
              {backlinks.map((link, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className="col-span-4 flex items-center gap-2">
                    <LinkIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-900 dark:text-white truncate">{link.domain}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`font-bold font-['Poppins'] ${
                      link.dr >= 60 ? 'text-green-600 dark:text-[#00FF9D]' : link.dr >= 40 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {link.dr}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    {link.status === 'active' ? (
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30 text-xs">
                        <CheckCircle2 className="w-3 h-3" />
                        Active
                      </span>
                    ) : link.status === 'pending' ? (
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-500/30 text-xs">
                        <Clock className="w-3 h-3" />
                        Pending
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-500/30 text-xs">
                        <AlertTriangle className="w-3 h-3" />
                        Broken
                      </span>
                    )}
                  </div>

                  <div className="col-span-3 flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm truncate">{link.anchor}</span>
                  </div>

                  <div className="col-span-1 flex items-center justify-end">
                    <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">{link.traffic > 0 ? link.traffic : '-'}</span>
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