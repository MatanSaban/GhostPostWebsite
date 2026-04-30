import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-purple-600/20 dark:bg-purple-600/20 border border-purple-500/30 dark:border-purple-500/30 hover:bg-purple-600/30 dark:hover:bg-purple-600/30 transition-all flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-purple-400 dark:text-purple-400 group-hover:text-purple-300 dark:group-hover:text-purple-300 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
      )}
    </button>
  );
}
