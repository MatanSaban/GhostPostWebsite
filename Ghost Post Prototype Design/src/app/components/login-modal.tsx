import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export function LoginModal({ isOpen, onClose, initialMode = 'login' }: LoginModalProps) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-sm transition-colors duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-md"
      >
        {/* Glassmorphism Card */}
        <div className="relative rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#0f0f1a] dark:to-[#0A0A0A] backdrop-blur-xl border border-gray-300 dark:border-purple-500/30 p-8 shadow-2xl transition-colors duration-300">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <div className="mb-8">
            <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {mode === 'login' ? 'System Access' : 'Create Account'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {mode === 'login' 
                ? 'Connect to your Ghost Post workspace' 
                : 'Join Ghost Post and automate your SEO'}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-200 dark:bg-black/60 rounded-lg border border-gray-300 dark:border-purple-500/30 transition-colors duration-300">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 px-4 rounded-md font-['Poppins'] text-sm font-semibold transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-pressed={mode === 'login'}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 py-2 px-4 rounded-md font-['Poppins'] text-sm font-semibold transition-all ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-pressed={mode === 'register'}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Register only) */}
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-[#00FF9D] focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20 transition-all font-['Poppins']"
                  aria-required="true"
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={mode === 'login' ? 'demo@ghostpost.ai' : ''}
                placeholder={mode === 'register' ? 'your@email.com' : ''}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-[#00FF9D] focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20 transition-all font-['Poppins']"
                readOnly={mode === 'login'}
                aria-required="true"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                defaultValue={mode === 'login' ? '••••••••' : ''}
                placeholder={mode === 'register' ? 'Create a strong password' : ''}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-[#00FF9D] focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20 transition-all font-['Poppins']"
                readOnly={mode === 'login'}
                aria-required="true"
              />
            </div>

            {/* Confirm Password Field (Register only) */}
            {mode === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-[#00FF9D] focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20 transition-all font-['Poppins']"
                  aria-required="true"
                />
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {mode === 'login' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-[#00FF9D] transition-colors font-['Poppins']"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms (Register only) */}
            {mode === 'register' && (
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-gray-300 dark:border-purple-500/30 bg-white dark:bg-black/40 text-purple-600 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20 transition-colors duration-300"
                  aria-required="true"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 font-['Poppins']">
                  I agree to the{' '}
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-[#00FF9D] transition-colors">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-[#00FF9D] transition-colors">Privacy Policy</a>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full group relative px-6 py-3 rounded-lg overflow-hidden transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-[#00FF9D] dark:focus:ring-offset-[#0A0A0A]"
              aria-label={mode === 'login' ? 'Login to account' : 'Create new account'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-600 dark:to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative text-white font-['Poppins'] font-semibold flex items-center justify-center gap-2">
                {mode === 'login' ? 'Connect' : 'Create Account'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-purple-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#0f0f1a] dark:to-[#0A0A0A] text-gray-500 dark:text-gray-400 font-['Poppins']">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 hover:bg-gray-200 dark:hover:bg-black/60 dark:hover:border-purple-500/50 transition-all text-gray-900 dark:text-white font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20"
              aria-label="Login with Google"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              <span className="text-sm">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 hover:bg-gray-200 dark:hover:bg-black/60 dark:hover:border-purple-500/50 transition-all text-gray-900 dark:text-white font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-[#00FF9D]/20"
              aria-label="Login with GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </button>
          </div>

          {/* Decorative Glow - Enhanced for both themes */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-600/30 dark:to-blue-600/30 rounded-2xl blur-xl -z-10 opacity-50 dark:opacity-70 transition-opacity duration-300"></div>
        </div>
      </motion.div>
    </div>
  );
}