import { ReactNode, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Calendar, 
  Zap, 
  Link2, 
  RotateCcw,
  Monitor,
  Server,
  Activity,
  Search,
  Settings,
  ChevronDown,
  Bell,
  MessageSquare,
  LogOut
} from 'lucide-react';
import { ContentAgentPanel } from '@/app/components/content-agent-panel';
import { ThemeToggle } from '@/app/components/theme-toggle';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumb: string;
  agentContext?: string;
}

export function DashboardLayout({ children, title, breadcrumb, agentContext }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSite] = useState('My-Shop.co.il');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Site Interview', path: '/site-interview' },
    { icon: Calendar, label: 'Content Planner', path: '/content-planner' },
    { icon: Zap, label: 'Automations', path: '/automations' },
    { icon: Link2, label: 'Link Building', path: '/link-building' },
    { icon: RotateCcw, label: 'Redirections', path: '/redirections' },
    { icon: Monitor, label: 'SEO Health - Frontend', path: '/seo-frontend' },
    { icon: Server, label: 'SEO Health - Backend', path: '/seo-backend' },
    { icon: Activity, label: 'Site Audit & Vitals', path: '/site-audit' },
    { icon: Search, label: 'Keyword Strategy', path: '/keyword-strategy' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white flex transition-colors duration-300">
      {/* Left Sidebar */}
      <aside className="w-72 h-screen sticky top-0 border-r border-gray-200 dark:border-purple-500/10 bg-white dark:bg-gradient-to-b dark:from-[#0f0f1a] dark:to-[#0A0A0A] p-4 flex flex-col transition-colors duration-300 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <img src={logoIcon} alt="Ghost Post" className="w-10 h-10 object-contain" />
          <span className="font-['Poppins'] text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ghost Post</span>
        </div>

        {/* Site Selector */}
        <div className="mb-6 px-2">
          <label className="block text-xs font-['Poppins'] text-gray-500 dark:text-gray-400 mb-2">ACTIVE SITE</label>
          <button className="w-full px-3 py-2.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-left flex items-center justify-between hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all group">
            <span className="font-['Poppins'] text-sm text-gray-900 dark:text-white truncate">{selectedSite}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 shadow-lg shadow-purple-200/50 dark:shadow-purple-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-sm font-medium truncate w-full">{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-purple-500/10">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border hover:border-red-200 dark:hover:border-red-500/30"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-sm font-medium truncate w-full">Logout</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 dark:border-purple-500/10 bg-white dark:bg-gradient-to-r dark:from-[#0A0A0A] dark:to-[#0f0f1a] px-6 py-4 transition-colors duration-300">
          <div className="flex items-center justify-between">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-['Poppins']">
              <span className="text-gray-500 dark:text-gray-400">Home</span>
              <span className="text-gray-400 dark:text-gray-600">/</span>
              <span className="text-purple-600 dark:text-purple-300">{breadcrumb}</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-500 border-2 border-white dark:border-[#0A0A0A]"></div>
              </button>

              {/* User Avatar */}
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                  DA
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="font-['Poppins'] text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </main>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-900/30 hover:scale-110 transition-transform z-50 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <img src={logoIcon} alt="Agent" className="relative w-8 h-8 object-contain z-10" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#00FF9D] border-2 border-white animate-pulse shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
        </button>
      )}

      {/* Chat Popup Modal */}
      {isChatOpen && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-[5px] z-40"
            onClick={() => setIsChatOpen(false)}
          ></div>
          
          {/* Chat Panel */}
          <div className="fixed right-0 top-0 h-full w-[90rem] max-w-[95vw] z-50 animate-slide-in">
            <ContentAgentPanel context={agentContext} onClose={() => setIsChatOpen(false)} isPopup />
          </div>
        </>
      )}
    </div>
  );
}