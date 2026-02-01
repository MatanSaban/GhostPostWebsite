import { useState } from 'react';
import { WebsiteLayout } from '@/app/components/website-layout';
import { GhostChatPopup } from '@/app/components/ghost-chat-popup';
import { 
  Brain, Zap, TrendingUp, Clock, Shield, Sparkles, 
  FileText, Link as LinkIcon, Image as ImageIcon, Search,
  BarChart, Settings, Globe, Cpu, ArrowRight, CheckCircle,
  Target, Code, Layers, MessageCircle, RefreshCw, Eye, Edit3
} from 'lucide-react';

export function FeaturesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const coreFeatures = [
    {
      category: 'content',
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Ghost analyzes your niche, competitors, and top-ranking content to automatically generate SEO-optimized articles, product descriptions, and landing pages that rank.',
      benefits: [
        'Natural language processing for human-quality content',
        'Keyword optimization based on search intent',
        'Automatic content scheduling and publishing',
        'Competitor content gap analysis',
        'Multi-format content (blogs, products, FAQs)',
        'Brand voice customization'
      ],
      stats: { value: '10,000+', label: 'Articles Generated Daily' }
    },
    {
      category: 'research',
      icon: Search,
      title: 'Intelligent Keyword Research',
      description: 'Discover high-value keywords with low competition. Ghost continuously monitors search trends and identifies new opportunities before your competitors do.',
      benefits: [
        'Real-time keyword difficulty analysis',
        'Long-tail keyword discovery',
        'Search intent classification (informational, commercial, transactional)',
        'Seasonal trend predictions',
        'Keyword clustering and grouping',
        'SERP feature opportunities'
      ],
      stats: { value: '50M+', label: 'Keywords Analyzed' }
    },
    {
      category: 'links',
      icon: LinkIcon,
      title: 'Automated Link Building',
      description: 'Ghost identifies link-building opportunities, reaches out to relevant websites, and secures high-quality backlinks for your site automatically.',
      benefits: [
        'AI-powered outreach email generation',
        'Broken link opportunity detection',
        'Internal linking optimization with anchor text diversity',
        'Backlink quality monitoring and toxic link detection',
        'Guest post opportunity finder',
        'Link reclamation for unlinked brand mentions'
      ],
      stats: { value: '100K+', label: 'Backlinks Built' }
    },
    {
      category: 'technical',
      icon: Settings,
      title: 'Technical SEO Automation',
      description: 'Automatically fix technical issues that hurt your rankings. Ghost handles meta tags, sitemaps, robots.txt, structured data, and more.',
      benefits: [
        'Auto-generated meta descriptions optimized for CTR',
        'Schema markup implementation (Product, Article, FAQ, etc.)',
        'XML sitemap automatic updates',
        'Page speed optimization suggestions',
        'Mobile usability fixes',
        'Canonical tag management'
      ],
      stats: { value: '99.9%', label: 'Issue Detection Rate' }
    },
    {
      category: 'media',
      icon: ImageIcon,
      title: 'Image & Media Optimization',
      description: 'Compress images, generate alt text, and optimize media files for faster loading and better SEO without manual intervention.',
      benefits: [
        'Automatic image compression (up to 70% size reduction)',
        'AI-generated alt text based on image content',
        'Lazy loading implementation',
        'WebP format conversion',
        'Responsive image sizing',
        'Image sitemap generation'
      ],
      stats: { value: '5M+', label: 'Images Optimized' }
    },
    {
      category: 'analytics',
      icon: BarChart,
      title: 'Advanced Analytics & Reporting',
      description: 'Track your SEO performance with detailed analytics, competitor comparisons, and actionable insights delivered to your inbox.',
      benefits: [
        'Real-time ranking tracking across all search engines',
        'Traffic source analysis and attribution',
        'ROI measurement with revenue tracking',
        'Custom report generation and white-labeling',
        'Competitor traffic estimation',
        'Conversion funnel analysis'
      ],
      stats: { value: '1B+', label: 'Data Points Tracked' }
    }
  ];

  const automations = [
    {
      category: 'Content',
      icon: FileText,
      title: 'Content Optimizer',
      description: 'Automatically updates and optimizes existing content based on ranking changes',
      features: ['Real-time optimization', 'Readability analysis', 'Keyword density balancing']
    },
    {
      category: 'Content',
      icon: Edit3,
      title: 'Content Publisher',
      description: 'Schedules and publishes AI-generated content at optimal times for engagement',
      features: ['Smart scheduling', 'Multi-platform publishing', 'Auto-categorization']
    },
    {
      category: 'Monitoring',
      icon: TrendingUp,
      title: 'Rank Tracker',
      description: 'Monitors keyword positions and alerts you to ranking changes in real-time',
      features: ['Daily updates', 'SERP feature tracking', 'Competitor tracking']
    },
    {
      category: 'Technical',
      icon: Shield,
      title: 'SEO Health Monitor',
      description: 'Scans your site daily for technical issues and automatically fixes common problems',
      features: ['404 detection', 'Broken link fixing', 'Speed monitoring']
    },
    {
      category: 'Technical',
      icon: RefreshCw,
      title: 'Redirect Manager',
      description: 'Automatically creates and manages 301 redirects for deleted or moved pages',
      features: ['Smart redirects', 'Chain prevention', 'Legacy URL handling']
    },
    {
      category: 'Performance',
      icon: Cpu,
      title: 'Core Web Vitals Optimizer',
      description: 'Monitors and improves loading speed, interactivity, and visual stability',
      features: ['LCP optimization', 'FID improvements', 'CLS fixes']
    },
    {
      category: 'Content',
      icon: Target,
      title: 'Meta Tag Generator',
      description: 'Creates compelling title tags and meta descriptions optimized for CTR',
      features: ['A/B testing', 'Character limits', 'Keyword placement']
    },
    {
      category: 'Links',
      icon: Eye,
      title: 'Backlink Monitor',
      description: 'Tracks new backlinks and alerts you to toxic or lost links',
      features: ['Toxic link detection', 'Disavow file creation', 'Link velocity tracking']
    },
    {
      category: 'Technical',
      icon: Code,
      title: 'Schema Markup',
      description: 'Implements structured data automatically for rich snippet eligibility',
      features: ['Auto-detection', 'JSON-LD format', 'Testing & validation']
    }
  ];

  const integrations = [
    { name: 'WordPress', description: 'One-click plugin installation', popular: true },
    { name: 'Shopify', description: 'Native app integration', popular: true },
    { name: 'Webflow', description: 'Code snippet integration', popular: true },
    { name: 'Wix', description: 'App marketplace integration', popular: false },
    { name: 'Squarespace', description: 'JavaScript integration', popular: false },
    { name: 'Ghost CMS', description: 'Native integration', popular: false },
    { name: 'Custom CMS', description: 'Universal API access', popular: true },
    { name: 'Headless CMS', description: 'REST API integration', popular: true }
  ];

  const categories = ['all', 'content', 'research', 'links', 'technical', 'media', 'analytics'];

  const filteredFeatures = activeCategory === 'all' 
    ? coreFeatures 
    : coreFeatures.filter(f => f.category === activeCategory);

  return (
    <WebsiteLayout currentPage="features" onNavigate={onNavigate}>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-100 dark:bg-purple-600/10 backdrop-blur-sm">
            <span className="text-sm font-['Poppins'] text-purple-700 dark:text-purple-300">100+ Automated Features</span>
          </div>
          <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">SEO Automation</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ghost Post combines cutting-edge AI with proven SEO strategies to automate every aspect of search engine optimization. 
            From content creation to technical fixes, we handle it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate?.('landing')}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-8 py-4 rounded-lg bg-white dark:bg-black/40 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Ask the Ghost
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-['Poppins'] font-semibold transition-all capitalize ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {filteredFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                            <div className="inline-block px-3 py-1 rounded-full bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold capitalize">
                              {feature.category}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                        <ul className="space-y-3 mb-6">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-[#00FF9D] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-purple-200 dark:border-purple-500/20">
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {feature.stats.value}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-80 h-80">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center">
                        <Icon className="w-40 h-40 text-purple-600 dark:text-purple-400/50" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Automations</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Set it and forget it. Ghost handles repetitive SEO tasks automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation, index) => {
              const Icon = automation.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6 h-full hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="inline-block px-2 py-1 rounded-full bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold">
                        {automation.category}
                      </div>
                    </div>
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white mb-2">{automation.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{automation.description}</p>
                    <ul className="space-y-2">
                      {automation.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-xs">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Works With Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Ghost Post integrates seamlessly with your existing tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((platform, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  {platform.popular && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#00FF9D] animate-pulse"></div>
                  )}
                  <Globe className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <span className="font-['Poppins'] font-bold text-gray-900 dark:text-white block mb-1">{platform.name}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{platform.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-12 text-center">
              <Sparkles className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
              <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Automate Your SEO?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses growing their organic traffic with Ghost Post
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate?.('landing')}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate?.('pricing')}
                  className="px-8 py-4 rounded-lg bg-white dark:bg-black/40 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GhostChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </WebsiteLayout>
  );
}
