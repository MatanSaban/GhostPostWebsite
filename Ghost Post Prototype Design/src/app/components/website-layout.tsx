import { ReactNode, useState } from 'react';
import { ThemeToggle } from '@/app/components/theme-toggle';
import { LoginModal } from '@/app/components/login-modal';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

interface WebsiteLayoutProps {
  children: ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function WebsiteLayout({ children, currentPage = 'landing', onNavigate }: WebsiteLayoutProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginMode, setLoginMode] = useState<'login' | 'register'>('login');

  const openLogin = () => {
    setLoginMode('login');
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setLoginMode('register');
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-[#0A0A0A] dark:via-[#0f0f1a] dark:to-[#1a0f2e] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/40 border-b border-purple-200/30 dark:border-purple-500/10 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate?.('landing')}>
            <img src={logoIcon} alt="Ghost Post" className="w-10 h-10 object-contain" />
            <span className="font-['Poppins'] text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ghost Post</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              onClick={() => onNavigate?.('landing')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'landing' 
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Home
            </a>
            <a 
              onClick={() => onNavigate?.('features')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'features'
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Features
            </a>
            <a 
              onClick={() => onNavigate?.('pricing')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'pricing'
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Pricing
            </a>
            <a 
              onClick={() => onNavigate?.('how-it-works')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'how-it-works'
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              How It Works
            </a>
            <a 
              onClick={() => onNavigate?.('blog')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Blog
            </a>
            <a 
              onClick={() => onNavigate?.('about')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'about' 
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              About
            </a>
            <a 
              onClick={() => onNavigate?.('contact')} 
              className={`text-sm transition-colors cursor-pointer ${
                currentPage === 'contact' 
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Contact
            </a>
            <ThemeToggle />
            <button 
              onClick={openLogin}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
            >
              Login
            </button>
            <button 
              onClick={openRegister}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </nav>
          <div className="flex md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-purple-200 dark:border-purple-500/10 bg-purple-50/50 dark:bg-black/40 backdrop-blur-sm py-12 px-6 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoIcon} alt="Ghost Post" className="w-8 h-8 object-contain" />
                <span className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">Ghost Post</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Autonomous AI-powered SEO platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate?.('features')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Features</button></li>
                <li><button onClick={() => onNavigate?.('pricing')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Pricing</button></li>
                <li><button onClick={() => onNavigate?.('how-it-works')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">How It Works</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate?.('about')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">About</button></li>
                <li><button onClick={() => onNavigate?.('blog')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Blog</button></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate?.('faq')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">FAQ</button></li>
                <li><button onClick={() => onNavigate?.('contact')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Contact</button></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-200 dark:border-purple-500/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2026 Ghost Post. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} initialMode={loginMode} />
    </div>
  );
}