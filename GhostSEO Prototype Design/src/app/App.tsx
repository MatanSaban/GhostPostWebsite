import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/app/context/theme-context';
import { LandingPage } from '@/app/components/landing-page';
import { PricingPage } from '@/app/components/pages/pricing-page';
import { FeaturesPage } from '@/app/components/pages/features-page';
import { HowItWorks } from '@/app/components/pages/how-it-works';
import { BlogPage } from '@/app/components/blog-page';
import { BlogPost } from '@/app/components/blog-post';
import { SinglePage } from '@/app/components/single-page';
import { Dashboard } from '@/app/components/pages/dashboard';
import { SiteInterview } from '@/app/components/pages/site-interview';
import { ContentPlanner } from '@/app/components/content-planner';
import { AIContentWizard } from '@/app/components/pages/ai-content-wizard';
import { Automations } from '@/app/components/pages/automations';
import { LinkBuilding } from '@/app/components/pages/link-building';
import { Redirections } from '@/app/components/pages/redirections';
import { SEOFrontend } from '@/app/components/pages/seo-frontend';
import { SEOBackend } from '@/app/components/pages/seo-backend';
import { SiteAudit } from '@/app/components/pages/site-audit';
import { KeywordStrategy } from '@/app/components/pages/keyword-strategy';
import { Settings } from '@/app/components/pages/settings';
import { FAQPage } from '@/app/components/faq-page';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppContent() {
  const navigate = useNavigate();
  const [selectedPostId, setSelectedPostId] = useState<number>(1);

  const handleNavigate = (page: string, id?: number) => {
    if (id) setSelectedPostId(id);
    navigate(`/${page === 'landing' ? '' : page}`);
  };

  return (
    <div className="size-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
        <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
        <Route path="/how-it-works" element={<HowItWorks onNavigate={handleNavigate} />} />
        <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
        <Route path="/blog-post" element={<BlogPost postId={selectedPostId} onNavigate={handleNavigate} />} />
        <Route path="/about" element={<SinglePage pageType="about" onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<SinglePage pageType="contact" onNavigate={handleNavigate} />} />
        <Route path="/faq" element={<FAQPage onNavigate={handleNavigate} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/site-interview" element={<SiteInterview />} />
        <Route path="/content-planner" element={<ContentPlanner />} />
        <Route path="/ai-content-wizard" element={<AIContentWizard />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/link-building" element={<LinkBuilding />} />
        <Route path="/redirections" element={<Redirections />} />
        <Route path="/seo-frontend" element={<SEOFrontend />} />
        <Route path="/seo-backend" element={<SEOBackend />} />
        <Route path="/site-audit" element={<SiteAudit />} />
        <Route path="/keyword-strategy" element={<KeywordStrategy />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}