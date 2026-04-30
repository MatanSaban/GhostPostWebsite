import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Zap, Clock, CheckCircle2, Pause, Settings as SettingsIcon } from 'lucide-react';

export function Automations() {
  const automations = [
    {
      name: 'Auto-Publish SEO Content',
      description: 'Automatically publish AI-generated articles after review',
      status: 'active',
      lastRun: '2 hours ago',
      frequency: 'Daily',
      actions: 24
    },
    {
      name: 'Internal Link Builder',
      description: 'Scan content and add relevant internal links automatically',
      status: 'active',
      lastRun: '5 hours ago',
      frequency: 'Every 6 hours',
      actions: 156
    },
    {
      name: 'Meta Description Optimizer',
      description: 'Update and optimize meta descriptions for better CTR',
      status: 'active',
      lastRun: '1 day ago',
      frequency: 'Weekly',
      actions: 89
    },
    {
      name: 'Broken Link Monitor',
      description: 'Detect and fix broken internal/external links',
      status: 'active',
      lastRun: '3 hours ago',
      frequency: 'Every 12 hours',
      actions: 42
    },
    {
      name: 'Image Alt Text Generator',
      description: 'Generate SEO-optimized alt text for images',
      status: 'paused',
      lastRun: '3 days ago',
      frequency: 'Daily',
      actions: 234
    },
    {
      name: 'Keyword Rank Tracker',
      description: 'Monitor keyword rankings and send alerts',
      status: 'active',
      lastRun: '1 hour ago',
      frequency: 'Hourly',
      actions: 1847
    },
  ];

  return (
    <DashboardLayout title="Automations" breadcrumb="Automations" agentContext="Automations">
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Automations</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">2,392</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Actions This Month</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">127hrs</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Time Saved</div>
            </div>
          </div>
        </div>

        {/* Automation List */}
        <div className="space-y-4">
          {automations.map((automation, index) => (
            <div key={index} className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">{automation.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-['Poppins'] ${
                        automation.status === 'active'
                          ? 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30'
                          : 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-500/30'
                      }`}>
                        {automation.status === 'active' ? (
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-[#00FF9D] animate-pulse"></div>
                            Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Pause className="w-3 h-3" />
                            Paused
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{automation.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">Last run: {automation.lastRun}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">Frequency: {automation.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">{automation.actions} actions</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-600/30 transition-all">
                      <SettingsIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </button>
                    {automation.status === 'active' ? (
                      <button className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-600/20 border border-gray-300 dark:border-gray-500/30 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600/30 transition-all">
                        <Pause className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    ) : (
                      <button className="w-10 h-10 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center hover:bg-green-200 dark:hover:bg-[#00FF9D]/30 transition-all">
                        <Zap className="w-5 h-5 text-green-600 dark:text-[#00FF9D]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create New Automation */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-500/20 border-dashed p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-2">Create New Automation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Let Ghost Agent handle repetitive SEO tasks automatically</p>
            <button className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all hover:scale-105 inline-flex items-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative text-white font-['Poppins'] font-semibold">
                Configure Automation
              </span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}