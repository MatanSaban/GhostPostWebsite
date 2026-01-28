'use client';

import { ThemeToggle } from '@/app/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/app/components/ui/language-switcher';

export function HeaderActions() {
  return (
    <>
      <LanguageSwitcher variant="compact" />
      <ThemeToggle />
    </>
  );
}
