import { DashboardLayout } from '@/app/components/dashboard-layout';
import { RotateCcw, ExternalLink, AlertTriangle, CheckCircle2, Plus } from 'lucide-react';

export function Redirections() {
  const redirects = [
    { from: '/old-vintage-collection', to: '/vintage-collection', type: '301', status: 'active', hits: 1247 },
    { from: '/blog/summer-2025', to: '/blog/summer-2026', type: '301', status: 'active', hits: 892 },
    { from: '/products/denim', to: '/collections/denim', type: '301', status: 'active', hits: 2156 },
    { from: '/about-us-old', to: '/about', type: '301', status: 'active', hits: 456 },
    { from: '/sale', to: '/collections/sale', type: '302', status: 'active', hits: 3421 },
  ];

  return (
    <DashboardLayout title="URL Redirections" breadcrumb="Redirections" agentContext="Redirections">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">47</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Redirects</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">8,172</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Redirects</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Broken Chains</div>
            </div>
          </div>
        </div>

        {/* Add New Redirect */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-4">Create New Redirect</h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-['Poppins']">From URL</label>
                <input
                  type="text"
                  placeholder="/old-page"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                />
              </div>
              <div className="md:col-span-5">
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-['Poppins']">To URL</label>
                <input
                  type="text"
                  placeholder="/new-page"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                />
              </div>
              <div className="md:col-span-2 flex items-end">
                <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Redirects Table */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Active Redirections</h3>
            
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 font-['Poppins'] border-b border-purple-200 dark:border-purple-500/10">
                <div className="col-span-4">From</div>
                <div className="col-span-4">To</div>
                <div className="col-span-1 text-center">Type</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-1 text-right">Hits</div>
              </div>

              {/* Rows */}
              {redirects.map((redirect, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all"
                >
                  <div className="col-span-4 flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm truncate font-['Poppins']">{redirect.from}</span>
                  </div>

                  <div className="col-span-4 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white text-sm truncate font-['Poppins']">{redirect.to}</span>
                  </div>

                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`px-2 py-1 rounded text-xs font-['Poppins'] ${
                      redirect.type === '301'
                        ? 'bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30'
                        : 'bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30'
                    }`}>
                      {redirect.type}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className="flex items-center gap-1 px-2 py-1 rounded bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30 text-xs">
                      <CheckCircle2 className="w-3 h-3" />
                      Active
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center justify-end">
                    <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">{redirect.hits.toLocaleString()}</span>
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