import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Activity, Zap, AlertCircle, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const vitalData = [
  { metric: 'LCP', value: 2.1, threshold: 2.5, status: 'good' },
  { metric: 'FID', value: 45, threshold: 100, status: 'good' },
  { metric: 'CLS', value: 0.08, threshold: 0.1, status: 'good' },
  { metric: 'FCP', value: 1.3, threshold: 1.8, status: 'good' },
  { metric: 'TTI', value: 3.2, threshold: 3.8, status: 'good' },
  { metric: 'TBT', value: 180, threshold: 200, status: 'warning' },
];

const performanceHistory = [
  { date: 'Week 1', score: 78 },
  { date: 'Week 2', score: 82 },
  { date: 'Week 3', score: 85 },
  { date: 'Week 4', score: 91 },
];

export function SiteAudit() {
  return (
    <DashboardLayout title="Site Audit & Core Web Vitals" breadcrumb="Site Audit" agentContext="Site Audit">
      <div className="space-y-6">
        {/* Performance Score */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-8 shadow-lg text-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="inline-block mb-4">
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e5e7eb"
                    className="dark:stroke-[#2a2a3a]"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${88 * 2 * Math.PI}`}
                    strokeDashoffset={`${88 * 2 * Math.PI * (1 - 0.91)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7B2CBF" />
                      <stop offset="100%" stopColor="#00FF9D" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white font-['Poppins']">91</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Performance</div>
                </div>
              </div>
            </div>
            <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white mb-2">Excellent Performance</h2>
            <p className="text-gray-600 dark:text-gray-400">Your site is performing well across all metrics</p>
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Core Web Vitals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vitalData.map((vital, index) => (
                <div key={index} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white">{vital.metric}</h4>
                    {vital.status === 'good' ? (
                      <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF9D]"></div>
                    ) : vital.status === 'warning' ? (
                      <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-orange-500 dark:bg-orange-400"></div>
                    )}
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white font-['Poppins']">{vital.value}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      {vital.metric === 'FID' || vital.metric === 'TBT' ? 'ms' : vital.metric === 'CLS' ? '' : 's'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span>Threshold:</span>
                    <span className="text-gray-700 dark:text-gray-300">{vital.threshold}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trend */}
        <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-1">Performance Trend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last 4 weeks</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-[#00FF9D]">
                <TrendingUp className="w-5 h-5" />
                <span className="font-['Poppins'] font-bold">+16%</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" className="dark:stroke-[#2a2a3a]" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #7B2CBF', borderRadius: '8px' }}
                  labelStyle={{ color: '#111827' }}
                  wrapperClassName="dark:[&>div]:!bg-[#1a1a2e] dark:[&>div]:!border-[#7B2CBF]"
                />
                <Bar dataKey="score" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B2CBF" />
                    <stop offset="100%" stopColor="#4361EE" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations */}
        <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">AI Recommendations</h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-yellow-100 dark:bg-yellow-600/10 border border-yellow-300 dark:border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-1">Optimize Image Sizes</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">8 images are larger than 500KB. Compressing them could improve LCP by 0.3s.</p>
                    <button className="px-3 py-1 rounded bg-yellow-200 dark:bg-yellow-600/20 text-yellow-800 dark:text-yellow-300 border border-yellow-400 dark:border-yellow-500/30 text-xs font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-600/30 transition-all">
                      Auto-Optimize
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-purple-100 dark:bg-purple-600/10 border border-purple-300 dark:border-purple-500/20">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-1">Enable Browser Caching</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Set longer cache times for static resources to improve repeat visit performance.</p>
                    <button className="px-3 py-1 rounded bg-purple-200 dark:bg-purple-600/20 text-purple-800 dark:text-purple-300 border border-purple-400 dark:border-purple-500/30 text-xs font-semibold hover:bg-purple-300 dark:hover:bg-purple-600/30 transition-all">
                      Apply Fix
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-600/10 border border-blue-300 dark:border-blue-500/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-1">Defer JavaScript Loading</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3 non-critical scripts can be deferred to improve initial page load.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}