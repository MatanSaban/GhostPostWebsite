import { useState } from 'react';
import { DashboardLayout } from '@/app/components/dashboard-layout';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Zap, 
  Users,
  CreditCard,
  Link as LinkIcon,
  Search,
  Calendar,
  Sparkles,
  Code,
  Image as ImageIcon,
  Sliders,
  CheckCircle2,
  Clock,
  Mail,
  Key,
  Trash2,
  Plus,
  Edit,
  Copy,
  ExternalLink,
  PlayCircle,
  PauseCircle,
  AlertCircle,
  Download,
  Upload,
  ChevronRight
} from 'lucide-react';

type SettingCategory = 
  | 'general' 
  | 'ai-configuration' 
  | 'scheduling' 
  | 'notifications' 
  | 'seo' 
  | 'integrations' 
  | 'team' 
  | 'subscription' 
  | 'account';

export function Settings() {
  const [activeCategory, setActiveCategory] = useState<SettingCategory>('ai-configuration');
  
  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteUrl: 'https://my-shop.co.il',
    siteName: 'My Shop',
    language: 'en',
    timezone: 'Asia/Jerusalem',
    pluginConnected: true,
    maintenanceMode: false,
  });

  // AI Settings
  const [aiSettings, setAiSettings] = useState({
    textModel: 'gpt-4o',
    imageModel: 'dall-e-3',
    maxMonthlyTokens: 1000000,
    creativityTemperature: 0.7,
    textPrompt: `You are an SEO expert specializing in e-commerce and content marketing. Your role is to create high-quality, engaging content that:

- Ranks well in search engines
- Provides genuine value to readers
- Uses natural language and conversational tone
- Includes relevant keywords without keyword stuffing
- Follows best practices for on-page SEO
- Maintains brand voice consistency

Always prioritize user experience and helpfulness over optimization tricks.`,
    imagePrompt: 'Photorealistic, 4k resolution, professional lighting, clean composition, e-commerce style',
    autoOptimization: true,
    contentSafety: true,
  });

  // Scheduling Settings
  const [schedulingSettings, setSchedulingSettings] = useState({
    contentGenerationCron: '0 2 * * *',
    seoAuditCron: '0 3 * * 0',
    queueConcurrency: 3,
    retryAttempts: 3,
    cronEnabled: true,
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    seoAlerts: true,
    agentSummaries: true,
    weeklyReports: true,
    rankingChanges: false,
    backlinkNotifications: true,
    notificationEmail: 'demo@ghostpost.ai',
    slackWebhook: '',
    slackEnabled: false,
  });

  // SEO Settings
  const [seoSettings, setSeoSettings] = useState({
    siteName: 'My Shop',
    siteDescription: 'Vintage fashion and sustainable clothing',
    defaultMetaImage: 'https://my-shop.co.il/og-image.jpg',
    twitterHandle: '@myshop',
    googleAnalyticsId: 'G-XXXXXXXXXX',
    googleSearchConsole: true,
    sitemapEnabled: true,
    robotsTxtEnabled: true,
    schemaMarkup: true,
  });

  // Integration Settings
  const [integrations, setIntegrations] = useState({
    wordpressUrl: 'https://my-shop.co.il',
    wordpressKey: 'wp_xxxxxxxxxxxxx',
    shopifyDomain: '',
    shopifyToken: '',
    googleApiKey: 'AIza*********************',
    openaiKey: 'sk-proj-*********************',
  });

  // Team Settings
  const [teamMembers] = useState([
    { id: 1, name: 'Demo Account', email: 'demo@ghostpost.ai', role: 'Owner', status: 'Active' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@ghostpost.ai', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Mike Rodriguez', email: 'mike@ghostpost.ai', role: 'Editor', status: 'Active' },
  ]);

  // Subscription Settings
  const [subscription] = useState({
    plan: 'Professional',
    status: 'Active',
    billingCycle: 'Monthly',
    amount: 99,
    nextBillingDate: '2026-02-17',
    tokensUsed: 742000,
    tokensLimit: 1000000,
  });

  const settingsCategories = [
    { id: 'general', name: 'General', icon: SettingsIcon, description: 'Site URL, Language, Plugin Connect' },
    { id: 'ai-configuration', name: 'AI Configuration', icon: Sparkles, description: 'Models, Prompts, Limits' },
    { id: 'scheduling', name: 'Scheduling', icon: Calendar, description: 'Cron Jobs, Queue Management' },
    { id: 'notifications', name: 'Notifications & Emails', icon: Bell, description: 'Email Settings, Alerts' },
    { id: 'seo', name: 'SEO Preferences', icon: Search, description: 'Meta Tags, Sitemaps' },
    { id: 'integrations', name: 'Integrations', icon: LinkIcon, description: 'APIs, Third-party Services' },
    { id: 'team', name: 'Team & Users', icon: Users, description: 'User Management, Roles' },
    { id: 'subscription', name: 'Subscription', icon: CreditCard, description: 'Billing, Plans' },
    { id: 'account', name: 'Account', icon: User, description: 'Profile, Security' },
  ];

  const cronJobs = [
    { id: 1, name: 'Content Generation', schedule: '0 2 * * *', description: 'Daily at 2:00 AM', active: true },
    { id: 2, name: 'SEO Audit', schedule: '0 3 * * 0', description: 'Weekly on Sunday at 3:00 AM', active: true },
    { id: 3, name: 'Sitemap Update', schedule: '0 4 * * *', description: 'Daily at 4:00 AM', active: true },
    { id: 4, name: 'Backlink Check', schedule: '0 */6 * * *', description: 'Every 6 hours', active: false },
  ];

  return (
    <DashboardLayout 
      title="Settings" 
      breadcrumb={`Home > Settings > ${settingsCategories.find(c => c.id === activeCategory)?.name}`}
      agentContext="Settings Configuration"
    >
      <div className="space-y-6">
        {/* Top Navigation - Tabs */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-2 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex gap-1 flex-wrap">
              {settingsCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id as SettingCategory)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                        : 'hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${
                      isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                    }`} />
                    <span className={`font-['Poppins'] font-semibold text-xs ${
                      isActive ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="overflow-y-auto">
          <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-8 shadow-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              
              {/* GENERAL SETTINGS */}
              {activeCategory === 'general' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <SettingsIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">General Settings</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configure basic site settings and preferences</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Site URL
                        </label>
                        <input
                          type="url"
                          value={generalSettings.siteUrl}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, siteUrl: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Site Name
                        </label>
                        <input
                          type="text"
                          value={generalSettings.siteName}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Language
                        </label>
                        <select
                          value={generalSettings.language}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, language: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        >
                          <option value="en">English</option>
                          <option value="he">עברית (Hebrew)</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Timezone
                        </label>
                        <select
                          value={generalSettings.timezone}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        >
                          <option value="Asia/Jerusalem">Asia/Jerusalem (GMT+2)</option>
                          <option value="America/New_York">America/New York (GMT-5)</option>
                          <option value="Europe/London">Europe/London (GMT+0)</option>
                          <option value="America/Los_Angeles">America/Los Angeles (GMT-8)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white mb-4">WordPress Plugin</h3>
                      <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-500/20">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${generalSettings.pluginConnected ? 'bg-green-500 dark:bg-[#00FF9D] animate-pulse' : 'bg-gray-400'}`}></div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {generalSettings.pluginConnected ? 'Plugin Connected' : 'Plugin Not Connected'}
                            </span>
                          </div>
                          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all">
                            <Download className="w-4 h-4 inline mr-2" />
                            Download Plugin
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Install the Ghost Post plugin on your WordPress site to enable seamless content synchronization and AI-powered publishing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/20">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <div>
                          <span className="text-gray-900 dark:text-white font-semibold block">Maintenance Mode</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Temporarily disable AI operations</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setGeneralSettings({ ...generalSettings, maintenanceMode: !generalSettings.maintenanceMode })}
                        className={`relative w-12 h-6 rounded-full transition-all ${
                          generalSettings.maintenanceMode ? 'bg-orange-500' : 'bg-gray-400 dark:bg-gray-600'
                        }`}
                      >
                        <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                          generalSettings.maintenanceMode ? 'right-0.5' : 'left-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* AI CONFIGURATION */}
              {activeCategory === 'ai-configuration' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">AI Configuration</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configure AI models, prompts, and safety limits</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Model Selection
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                          Default Text Model
                        </label>
                        <select
                          value={aiSettings.textModel}
                          onChange={(e) => setAiSettings({ ...aiSettings, textModel: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100/80 dark:bg-black/60 backdrop-blur-sm border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        >
                          <option value="gpt-4o">GPT-4o (OpenAI)</option>
                          <option value="claude-3.5-sonnet">Claude 3.5 Sonnet (Anthropic)</option>
                          <option value="gpt-4-turbo">GPT-4 Turbo (OpenAI)</option>
                          <option value="claude-3-opus">Claude 3 Opus (Anthropic)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                          Default Image Model
                        </label>
                        <select
                          value={aiSettings.imageModel}
                          onChange={(e) => setAiSettings({ ...aiSettings, imageModel: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100/80 dark:bg-black/60 backdrop-blur-sm border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                        >
                          <option value="dall-e-3">DALL-E 3 (OpenAI)</option>
                          <option value="midjourney-v6">Midjourney v6</option>
                          <option value="stable-diffusion-xl">Stable Diffusion XL</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Safety & Limits
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                          Max Monthly Tokens
                        </label>
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 font-mono">
                          {aiSettings.maxMonthlyTokens.toLocaleString()}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="5000000"
                        step="100000"
                        value={aiSettings.maxMonthlyTokens}
                        onChange={(e) => setAiSettings({ ...aiSettings, maxMonthlyTokens: parseInt(e.target.value) })}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                          Creativity Temperature
                        </label>
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 font-mono">
                          {aiSettings.creativityTemperature.toFixed(2)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={aiSettings.creativityTemperature}
                        onChange={(e) => setAiSettings({ ...aiSettings, creativityTemperature: parseFloat(e.target.value) })}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                      />
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Factual</span>
                        <span>Balanced</span>
                        <span>Creative</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <div>
                            <span className="text-gray-900 dark:text-white font-semibold block text-sm">Auto Optimization</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">SEO auto-tuning</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setAiSettings({ ...aiSettings, autoOptimization: !aiSettings.autoOptimization })}
                          className={`relative w-12 h-6 rounded-full transition-all ${
                            aiSettings.autoOptimization 
                              ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg shadow-green-500/50 dark:shadow-[#00FF9D]/50' 
                              : 'bg-gray-400 dark:bg-gray-600'
                          }`}
                        >
                          <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                            aiSettings.autoOptimization ? 'right-0.5' : 'left-0.5'
                          }`}></div>
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <div>
                            <span className="text-gray-900 dark:text-white font-semibold block text-sm">Content Safety</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Filter harmful content</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setAiSettings({ ...aiSettings, contentSafety: !aiSettings.contentSafety })}
                          className={`relative w-12 h-6 rounded-full transition-all ${
                            aiSettings.contentSafety 
                              ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg shadow-green-500/50 dark:shadow-[#00FF9D]/50' 
                              : 'bg-gray-400 dark:bg-gray-600'
                          }`}
                        >
                          <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                            aiSettings.contentSafety ? 'right-0.5' : 'left-0.5'
                          }`}></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      System Prompts (The Brain)
                    </h3>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                        Default Text Generation Prompt
                      </label>
                      <textarea
                        value={aiSettings.textPrompt}
                        onChange={(e) => setAiSettings({ ...aiSettings, textPrompt: e.target.value })}
                        rows={10}
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 dark:bg-black/80 backdrop-blur-sm border border-gray-600 dark:border-purple-500/30 text-green-400 dark:text-[#00FF9D] font-mono text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all leading-relaxed"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Poppins']">
                        Default Image Generation Style
                      </label>
                      <textarea
                        value={aiSettings.imagePrompt}
                        onChange={(e) => setAiSettings({ ...aiSettings, imagePrompt: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 dark:bg-black/80 backdrop-blur-sm border border-gray-600 dark:border-purple-500/30 text-green-400 dark:text-[#00FF9D] font-mono text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="group relative px-8 py-3 rounded-lg overflow-hidden transition-all hover:scale-[1.02] flex items-center gap-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 dark:from-[#00FF9D] dark:to-green-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                      <CheckCircle2 className="relative w-5 h-5 text-white" />
                      <span className="relative text-white font-['Poppins'] font-bold">Save Configuration</span>
                    </button>

                    <button className="px-8 py-3 rounded-lg bg-transparent border-2 border-purple-500 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-['Poppins'] font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Test Agent Response
                    </button>
                  </div>
                </div>
              )}

              {/* SCHEDULING */}
              {activeCategory === 'scheduling' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Scheduling</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manage cron jobs and task queue settings</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Automated Tasks</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${schedulingSettings.cronEnabled ? 'text-green-600 dark:text-[#00FF9D]' : 'text-gray-500'}`}>
                          {schedulingSettings.cronEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                        <button
                          onClick={() => setSchedulingSettings({ ...schedulingSettings, cronEnabled: !schedulingSettings.cronEnabled })}
                          className={`relative w-12 h-6 rounded-full transition-all ${
                            schedulingSettings.cronEnabled 
                              ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg' 
                              : 'bg-gray-400 dark:bg-gray-600'
                          }`}
                        >
                          <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                            schedulingSettings.cronEnabled ? 'right-0.5' : 'left-0.5'
                          }`}></div>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {cronJobs.map((job) => (
                        <div key={job.id} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                job.active 
                                  ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-500/30'
                                  : 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600'
                              }`}>
                                {job.active ? (
                                  <PlayCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                ) : (
                                  <PauseCircle className="w-5 h-5 text-gray-500" />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white">{job.name}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.description}
                                  </span>
                                  <span className="font-mono text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                                    {job.schedule}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all text-sm font-semibold">
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center justify-center gap-2 font-semibold">
                      <Plus className="w-5 h-5" />
                      Add New Cron Job
                    </button>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Queue Settings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Queue Concurrency
                        </label>
                        <select
                          value={schedulingSettings.queueConcurrency}
                          onChange={(e) => setSchedulingSettings({ ...schedulingSettings, queueConcurrency: parseInt(e.target.value) })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        >
                          <option value="1">1 (Sequential)</option>
                          <option value="3">3 (Balanced)</option>
                          <option value="5">5 (Aggressive)</option>
                          <option value="10">10 (Maximum)</option>
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Number of tasks processed simultaneously
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Retry Attempts
                        </label>
                        <select
                          value={schedulingSettings.retryAttempts}
                          onChange={(e) => setSchedulingSettings({ ...schedulingSettings, retryAttempts: parseInt(e.target.value) })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        >
                          <option value="1">1 time</option>
                          <option value="3">3 times</option>
                          <option value="5">5 times</option>
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Retry failed tasks before giving up
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* NOTIFICATIONS & EMAILS */}
              {activeCategory === 'notifications' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Bell className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Notifications & Emails</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configure email alerts and notification preferences</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                        Notification Email Address
                      </label>
                      <input
                        type="email"
                        value={notificationSettings.notificationEmail}
                        onChange={(e) => setNotificationSettings({ ...notificationSettings, notificationEmail: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Email Preferences</h3>
                      
                      {[
                        { key: 'emailAlerts', label: 'Email notifications for critical alerts', enabled: notificationSettings.emailAlerts },
                        { key: 'seoAlerts', label: 'SEO issue alerts', enabled: notificationSettings.seoAlerts },
                        { key: 'agentSummaries', label: 'AI Agent activity summaries', enabled: notificationSettings.agentSummaries },
                        { key: 'weeklyReports', label: 'Weekly performance reports', enabled: notificationSettings.weeklyReports },
                        { key: 'rankingChanges', label: 'Keyword ranking changes', enabled: notificationSettings.rankingChanges },
                        { key: 'backlinkNotifications', label: 'New backlink notifications', enabled: notificationSettings.backlinkNotifications },
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <span className="text-gray-900 dark:text-white font-semibold">{setting.label}</span>
                          </div>
                          <button
                            onClick={() => setNotificationSettings({ ...notificationSettings, [setting.key]: !setting.enabled })}
                            className={`relative w-12 h-6 rounded-full transition-all ${
                              setting.enabled 
                                ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg' 
                                : 'bg-gray-400 dark:bg-gray-600'
                            }`}
                          >
                            <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                              setting.enabled ? 'right-0.5' : 'left-0.5'
                            }`}></div>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Slack Integration</h3>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Slack Webhook URL
                        </label>
                        <input
                          type="url"
                          value={notificationSettings.slackWebhook}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, slackWebhook: e.target.value })}
                          placeholder="https://hooks.slack.com/services/..."
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                        <span className="text-gray-900 dark:text-white font-semibold">Enable Slack Notifications</span>
                        <button
                          onClick={() => setNotificationSettings({ ...notificationSettings, slackEnabled: !notificationSettings.slackEnabled })}
                          className={`relative w-12 h-6 rounded-full transition-all ${
                            notificationSettings.slackEnabled 
                              ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg' 
                              : 'bg-gray-400 dark:bg-gray-600'
                          }`}
                        >
                          <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                            notificationSettings.slackEnabled ? 'right-0.5' : 'left-0.5'
                          }`}></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* SEO PREFERENCES */}
              {activeCategory === 'seo' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">SEO Preferences</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configure default SEO settings and metadata</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Site Name (for SEO)
                        </label>
                        <input
                          type="text"
                          value={seoSettings.siteName}
                          onChange={(e) => setSeoSettings({ ...seoSettings, siteName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Default Meta Description
                        </label>
                        <textarea
                          value={seoSettings.siteDescription}
                          onChange={(e) => setSeoSettings({ ...seoSettings, siteDescription: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Default OG Image URL
                        </label>
                        <input
                          type="url"
                          value={seoSettings.defaultMetaImage}
                          onChange={(e) => setSeoSettings({ ...seoSettings, defaultMetaImage: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            Twitter Handle
                          </label>
                          <input
                            type="text"
                            value={seoSettings.twitterHandle}
                            onChange={(e) => setSeoSettings({ ...seoSettings, twitterHandle: e.target.value })}
                            placeholder="@myshop"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            Google Analytics ID
                          </label>
                          <input
                            type="text"
                            value={seoSettings.googleAnalyticsId}
                            onChange={(e) => setSeoSettings({ ...seoSettings, googleAnalyticsId: e.target.value })}
                            placeholder="G-XXXXXXXXXX"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Technical SEO</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { key: 'googleSearchConsole', label: 'Google Search Console', icon: Search },
                          { key: 'sitemapEnabled', label: 'Auto-generate Sitemap', icon: Globe },
                          { key: 'robotsTxtEnabled', label: 'Auto-generate Robots.txt', icon: Shield },
                          { key: 'schemaMarkup', label: 'Schema.org Markup', icon: Code },
                        ].map((setting) => {
                          const Icon = setting.icon;
                          return (
                            <div key={setting.key} className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                              <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <span className="text-gray-900 dark:text-white font-semibold text-sm">{setting.label}</span>
                              </div>
                              <button
                                onClick={() => setSeoSettings({ ...seoSettings, [setting.key]: !seoSettings[setting.key as keyof typeof seoSettings] })}
                                className={`relative w-12 h-6 rounded-full transition-all ${
                                  seoSettings[setting.key as keyof typeof seoSettings]
                                    ? 'bg-green-500 dark:bg-[#00FF9D] shadow-lg' 
                                    : 'bg-gray-400 dark:bg-gray-600'
                                }`}
                              >
                                <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                                  seoSettings[setting.key as keyof typeof seoSettings] ? 'right-0.5' : 'left-0.5'
                                }`}></div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* INTEGRATIONS */}
              {activeCategory === 'integrations' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <LinkIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Integrations</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Connect with third-party services and APIs</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">WordPress</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            WordPress Site URL
                          </label>
                          <input
                            type="url"
                            value={integrations.wordpressUrl}
                            onChange={(e) => setIntegrations({ ...integrations, wordpressUrl: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            Application Password / API Key
                          </label>
                          <div className="relative">
                            <input
                              type="password"
                              value={integrations.wordpressKey}
                              onChange={(e) => setIntegrations({ ...integrations, wordpressKey: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all pr-12"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                              <Copy className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Shopify (Optional)</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            Shopify Store Domain
                          </label>
                          <input
                            type="text"
                            value={integrations.shopifyDomain}
                            onChange={(e) => setIntegrations({ ...integrations, shopifyDomain: e.target.value })}
                            placeholder="my-shop.myshopify.com"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                            Access Token
                          </label>
                          <input
                            type="password"
                            value={integrations.shopifyToken}
                            onChange={(e) => setIntegrations({ ...integrations, shopifyToken: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">API Keys</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Google API Key</span>
                            <div className={`w-3 h-3 rounded-full ${integrations.googleApiKey ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400'}`}></div>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="password"
                              value={integrations.googleApiKey}
                              onChange={(e) => setIntegrations({ ...integrations, googleApiKey: e.target.value })}
                              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-mono text-sm"
                            />
                            <button className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">OpenAI API Key</span>
                            <div className={`w-3 h-3 rounded-full ${integrations.openaiKey ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400'}`}></div>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="password"
                              value={integrations.openaiKey}
                              onChange={(e) => setIntegrations({ ...integrations, openaiKey: e.target.value })}
                              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-mono text-sm"
                            />
                            <button className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* TEAM & USERS */}
              {activeCategory === 'team' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Team & Users</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manage team members and access control</p>
                    </div>
                    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Invite User
                    </button>
                  </div>

                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white">{member.name}</h4>
                              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span>{member.email}</span>
                                <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                                  {member.role}
                                </span>
                                <span className={`flex items-center gap-1 ${member.status === 'Active' ? 'text-green-600 dark:text-[#00FF9D]' : 'text-gray-500'}`}>
                                  <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400'}`}></div>
                                  {member.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all">
                              <Edit className="w-4 h-4" />
                            </button>
                            {member.role !== 'Owner' && (
                              <button className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30 transition-all">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white mb-4">Role Permissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { role: 'Owner', permissions: 'Full access to all features' },
                        { role: 'Admin', permissions: 'Manage content, settings, and users' },
                        { role: 'Editor', permissions: 'Create and edit content only' },
                      ].map((role) => (
                        <div key={role.role} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{role.role}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{role.permissions}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUBSCRIPTION */}
              {activeCategory === 'subscription' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Subscription & Billing</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manage your plan and billing details</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-500/20">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white">{subscription.plan} Plan</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            subscription.status === 'Active'
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                          }`}>
                            {subscription.status}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Billed {subscription.billingCycle}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">${subscription.amount}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">per month</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Next billing date</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{subscription.nextBillingDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Tokens used this month</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {subscription.tokensUsed.toLocaleString()} / {subscription.tokensLimit.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(subscription.tokensUsed / subscription.tokensLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="px-6 py-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all text-left">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Update Payment Method</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Change your credit card</p>
                        </div>
                      </div>
                    </button>

                    <button className="px-6 py-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all text-left">
                      <div className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Download Invoices</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">View billing history</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
                      Upgrade Plan
                    </button>
                    <button className="ml-4 px-6 py-3 rounded-lg bg-transparent border border-red-500 text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              )}

              {/* ACCOUNT */}
              {activeCategory === 'account' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-purple-500/20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Account Settings</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manage your profile and security</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Demo Account"
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="demo@ghostpost.ai"
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Company Name
                        </label>
                        <input
                          type="text"
                          defaultValue="My Shop"
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+972-XX-XXX-XXXX"
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20 space-y-4">
                      <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Security</h3>
                      
                      <div className="space-y-3">
                        <button className="w-full px-6 py-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all text-left flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                            <Key className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Change Password</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Update your account password</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                        </button>

                        <button className="w-full px-6 py-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all text-left flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-purple-500/20">
                      <h3 className="font-['Poppins'] text-lg font-bold text-red-600 dark:text-red-400 mb-4">Danger Zone</h3>
                      <button className="px-6 py-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400 font-semibold hover:bg-red-100 dark:hover:bg-red-900/30 transition-all flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-purple-500/20">
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-['Poppins'] font-bold hover:opacity-90 transition-opacity">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7B2CBF 0%, #4361EE 100%);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(123, 44, 191, 0.4);
          transition: all 0.2s;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(123, 44, 191, 0.6);
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7B2CBF 0%, #4361EE 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(123, 44, 191, 0.4);
          transition: all 0.2s;
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(123, 44, 191, 0.6);
        }
      `}</style>
    </DashboardLayout>
  );
}
