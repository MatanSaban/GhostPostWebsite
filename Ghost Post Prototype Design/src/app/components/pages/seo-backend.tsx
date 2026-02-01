import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Server, CheckCircle2, AlertTriangle, XCircle, Database, Code } from 'lucide-react';

export function SEOBackend() {
  const technicalIssues = [
    { issue: 'Sitemap XML', status: 'pass', description: 'Valid sitemap found at /sitemap.xml' },
    { issue: 'Robots.txt', status: 'pass', description: 'Properly configured robots.txt' },
    { issue: 'SSL Certificate', status: 'pass', description: 'Valid HTTPS encryption' },
    { issue: 'Canonical Tags', status: 'warning', description: '5 pages missing canonical tags' },
    { issue: 'Schema Markup', status: 'fail', description: 'Missing structured data on 23 pages' },
    { issue: 'Page Speed', status: 'warning', description: 'Average load time: 2.4s (target: <2s)' },
  ];

  return (
    <DashboardLayout title="SEO Health - Backend" breadcrumb="SEO Backend" agentContext="Backend SEO">
      <div className="space-y-6">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tests Passed</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Warnings</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Critical Issues</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">82%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Health Score</div>
            </div>
          </div>
        </div>

        {/* Technical SEO Checklist */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Technical SEO Checklist</h3>
            
            <div className="space-y-3">
              {technicalIssues.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.status === 'pass'
                        ? 'bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30'
                        : item.status === 'warning'
                        ? 'bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30'
                        : 'bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30'
                    }`}>
                      {item.status === 'pass' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-[#00FF9D]" />
                      ) : item.status === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-1">{item.issue}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </div>
                    {item.status !== 'pass' && (
                      <button className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-600/30 transition-all text-sm font-semibold">
                        Fix
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Server Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Server Info</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Hosting Provider</span>
                  <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">AWS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Server Location</span>
                  <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">Tel Aviv, IL</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Response Time</span>
                  <span className="text-green-600 dark:text-[#00FF9D] font-['Poppins'] text-sm">124ms</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">CDN Status</span>
                  <span className="flex items-center gap-1 text-green-600 dark:text-[#00FF9D] font-['Poppins'] text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Technical Details</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">CMS Platform</span>
                  <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">WordPress 6.4</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">PHP Version</span>
                  <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">8.2.1</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200 dark:border-purple-500/10">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Compression</span>
                  <span className="text-green-600 dark:text-[#00FF9D] font-['Poppins'] text-sm">Gzip Enabled</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Cache</span>
                  <span className="text-green-600 dark:text-[#00FF9D] font-['Poppins'] text-sm">Redis Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}