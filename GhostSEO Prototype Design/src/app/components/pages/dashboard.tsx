import { DashboardLayout } from '@/app/components/dashboard-layout';
import { TrendingUp, TrendingDown, Users, FileText, Clock, Target } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const trafficData = [
  { date: 'Jan 1', visitors: 2400, pageviews: 4200 },
  { date: 'Jan 5', visitors: 3200, pageviews: 5100 },
  { date: 'Jan 10', visitors: 2800, pageviews: 4800 },
  { date: 'Jan 15', visitors: 3900, pageviews: 6200 },
  { date: 'Jan 20', visitors: 4200, pageviews: 6800 },
  { date: 'Jan 25', visitors: 5100, pageviews: 8400 },
  { date: 'Jan 30', visitors: 5800, pageviews: 9200 },
];

export function Dashboard() {
  return (
    <DashboardLayout title="Command Center" breadcrumb="Dashboard" agentContext="Dashboard Overview">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Organic Traffic */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex items-center gap-1 text-green-600 dark:text-[#00FF9D] text-sm font-['Poppins']">
                <TrendingUp className="w-4 h-4" />
                <span>+24%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">5,847</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Organic Visitors</div>
          </div>
        </div>

        {/* Page Views */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center gap-1 text-green-600 dark:text-[#00FF9D] text-sm font-['Poppins']">
                <TrendingUp className="w-4 h-4" />
                <span>+18%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">9,234</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Page Views</div>
          </div>
        </div>

        {/* Avg. Session */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-pink-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-sm font-['Poppins']">
                <TrendingDown className="w-4 h-4" />
                <span>-3%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">3:42</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Session Duration</div>
          </div>
        </div>

        {/* SEO Score */}
        <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="flex items-center gap-1 text-green-600 dark:text-[#00FF9D] text-sm font-['Poppins']">
                <TrendingUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">87/100</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall SEO Score</div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Traffic Chart */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Traffic Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7B2CBF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7B2CBF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" className="dark:stroke-[#2a2a3a]" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #7B2CBF', borderRadius: '8px' }}
                  labelStyle={{ color: '#111827' }}
                  wrapperClassName="dark:[&>div]:!bg-[#1a1a2e] dark:[&>div]:!border-[#7B2CBF]"
                />
                <Area type="monotone" dataKey="visitors" stroke="#7B2CBF" fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Page Views Chart */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Engagement Metrics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" className="dark:stroke-[#2a2a3a]" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #4361EE', borderRadius: '8px' }}
                  labelStyle={{ color: '#111827' }}
                  wrapperClassName="dark:[&>div]:!bg-[#1a1a2e] dark:[&>div]:!border-[#4361EE]"
                />
                <Line type="monotone" dataKey="pageviews" stroke="#4361EE" strokeWidth={3} dot={{ fill: '#4361EE', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
        <div className="relative">
          <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-4">AI Agent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Published 3 optimized articles', time: '2 hours ago', status: 'success' },
              { action: 'Fixed 12 broken internal links', time: '5 hours ago', status: 'success' },
              { action: 'Generated 8 new keyword opportunities', time: '1 day ago', status: 'info' },
              { action: 'Updated meta descriptions for 15 pages', time: '2 days ago', status: 'success' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-blue-500 dark:bg-blue-400'}`}></div>
                  <span className="text-gray-900 dark:text-white">{item.action}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-['Poppins']">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}