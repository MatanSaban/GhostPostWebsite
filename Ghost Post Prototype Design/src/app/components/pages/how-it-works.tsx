import { useState } from 'react';
import { WebsiteLayout } from '@/app/components/website-layout';
import { GhostChatPopup } from '@/app/components/ghost-chat-popup';
import { 
  Scan, Brain, Zap, TrendingUp, CheckCircle, ArrowRight,
  Upload, Settings, Target, BarChart, Globe, Sparkles,
  Clock, Shield, Rocket, MessageCircle, FileText, Link as LinkIcon
} from 'lucide-react';

export function HowItWorks({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const workflowSteps = [
    {
      step: '01',
      icon: Upload,
      title: 'Connect Your Website',
      description: 'Simple one-click integration with your CMS or custom platform',
      details: [
        'Add a single line of code or install our plugin',
        'Ghost analyzes your entire site structure',
        'No coding knowledge required',
        'Takes less than 5 minutes to set up'
      ],
      duration: '5 min'
    },
    {
      step: '02',
      icon: Scan,
      title: 'Comprehensive Site Audit',
      description: 'Ghost performs a deep analysis of your website\'s SEO health',
      details: [
        'Scans all pages for technical issues',
        'Analyzes content quality and keyword usage',
        'Evaluates site speed and Core Web Vitals',
        'Checks for broken links and redirects',
        'Reviews mobile responsiveness'
      ],
      duration: '15-30 min'
    },
    {
      step: '03',
      icon: Target,
      title: 'Interview & Strategy',
      description: 'Our AI learns about your business, goals, and target audience',
      details: [
        'Answer 10-15 questions about your business',
        'Define your target audience and goals',
        'Identify your main competitors',
        'Set traffic and ranking targets',
        'Choose content topics and keywords'
      ],
      duration: '10 min'
    },
    {
      step: '04',
      icon: Brain,
      title: 'AI Optimization Plan',
      description: 'Ghost creates a custom SEO strategy tailored to your business',
      details: [
        'Prioritizes high-impact improvements',
        'Creates content calendar based on opportunities',
        'Identifies quick wins for immediate results',
        'Plans long-term keyword strategy',
        'Sets up automation rules'
      ],
      duration: '30 min'
    },
    {
      step: '05',
      icon: Zap,
      title: 'Automated Execution',
      description: 'Ghost starts working autonomously to improve your SEO',
      details: [
        'Fixes technical issues automatically',
        'Optimizes existing content and meta tags',
        'Generates new SEO-optimized content',
        'Builds internal linking structure',
        'Monitors and adapts to algorithm changes'
      ],
      duration: 'Ongoing 24/7'
    },
    {
      step: '06',
      icon: TrendingUp,
      title: 'Results & Reporting',
      description: 'Track your growth with real-time analytics and insights',
      details: [
        'Daily ranking updates',
        'Traffic growth reports',
        'Content performance metrics',
        'ROI calculations',
        'Competitor comparison'
      ],
      duration: 'Real-time'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Understands context and search intent to create content that ranks and converts'
    },
    {
      icon: Scan,
      title: 'Computer Vision',
      description: 'Analyzes images to generate descriptive alt text and optimize media files'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecasts trends and identifies opportunities before your competitors'
    },
    {
      icon: Shield,
      title: 'Anomaly Detection',
      description: 'Spots unusual ranking drops or traffic changes and takes corrective action'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Optimizes content in 50+ languages with cultural nuance understanding'
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description: 'Adjusts strategy based on algorithm updates and market changes'
    }
  ];

  const automations = [
    {
      category: 'Content Creation',
      icon: FileText,
      tasks: [
        'Blog post generation from keywords',
        'Product description writing',
        'Meta title & description optimization',
        'FAQ content creation',
        'Landing page copy'
      ]
    },
    {
      category: 'Technical SEO',
      icon: Settings,
      tasks: [
        'Schema markup implementation',
        'XML sitemap updates',
        'Robots.txt optimization',
        '404 error fixing',
        'Page speed improvements'
      ]
    },
    {
      category: 'Link Building',
      icon: LinkIcon,
      tasks: [
        'Backlink opportunity discovery',
        'Outreach email generation',
        'Internal link optimization',
        'Broken link fixing',
        'Anchor text diversification'
      ]
    },
    {
      category: 'Monitoring',
      icon: BarChart,
      tasks: [
        'Keyword ranking tracking',
        'Competitor analysis',
        'Traffic monitoring',
        'Conversion tracking',
        'Alert notifications'
      ]
    }
  ];

  return (
    <WebsiteLayout currentPage="how-it-works" onNavigate={onNavigate}>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-100 dark:bg-purple-600/10 backdrop-blur-sm">
            <span className="text-sm font-['Poppins'] text-purple-700 dark:text-purple-300">Your SEO, Automated</span>
          </div>
          <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 leading-tight">
            How Ghost Post{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
              Works
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From setup to success in 6 simple steps. Our AI agent handles everything autonomously, 
            so you can focus on running your business while your organic traffic grows.
          </p>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-100 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Ask the Ghost
          </button>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl font-bold text-purple-200 dark:text-purple-900/30 leading-none">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">
                                {step.title}
                              </h3>
                              <span className="px-3 py-1 rounded-full bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-[#00FF9D] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Icon Visualization */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-purple-600 dark:text-purple-400/50" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Powered by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Advanced AI
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Ghost uses cutting-edge machine learning models to understand, optimize, and grow your SEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Poppins'] text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {capability.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Ghost Automates */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Ghost{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Automates
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              100+ SEO tasks handled automatically, 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automations.map((automation, index) => {
              const Icon = automation.icon;
              return (
                <div key={index} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl blur opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">
                        {automation.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {automation.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{task}</span>
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

      {/* Timeline */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Expected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              What to expect as Ghost optimizes your site
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                time: 'Week 1-2',
                title: 'Quick Wins',
                description: 'Technical fixes implemented, meta tags optimized, low-hanging fruit captured',
                icon: Zap,
                color: 'from-yellow-600 to-orange-600'
              },
              {
                time: 'Week 3-4',
                title: 'Content Generation',
                description: 'First batch of optimized content published, internal linking improved',
                icon: FileText,
                color: 'from-blue-600 to-purple-600'
              },
              {
                time: 'Month 2-3',
                title: 'Ranking Improvements',
                description: 'Keywords start moving up in rankings, traffic begins to increase',
                icon: TrendingUp,
                color: 'from-purple-600 to-pink-600'
              },
              {
                time: 'Month 3+',
                title: 'Sustained Growth',
                description: 'Consistent traffic growth, authority building, compound effects',
                icon: Rocket,
                color: 'from-green-600 to-emerald-600'
              }
            ].map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold">
                            {milestone.time}
                          </span>
                          <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-12 text-center">
              <Sparkles className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
              <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses growing their organic traffic with Ghost Post's autonomous AI
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
