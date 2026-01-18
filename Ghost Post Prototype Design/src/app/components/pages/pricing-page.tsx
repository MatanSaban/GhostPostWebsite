import { useState } from 'react';
import { Check, ArrowRight, Zap, HelpCircle, Sparkles, MessageCircle, DollarSign, Users, Building2 } from 'lucide-react';
import { WebsiteLayout } from '@/app/components/website-layout';
import { GhostChatPopup } from '@/app/components/ghost-chat-popup';

export function PricingPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Starter',
      icon: DollarSign,
      monthlyPrice: 99,
      annualPrice: 948, // 20% discount
      description: 'Perfect for small businesses and startups',
      idealFor: 'Blogs, personal websites, small business sites',
      features: [
        'Up to 10,000 monthly visitors',
        '5 AI-generated content pieces per month',
        'Basic keyword tracking (50 keywords)',
        'Technical SEO automation',
        'Meta tag optimization',
        'Schema markup implementation',
        'Sitemap & robots.txt management',
        'Image SEO optimization',
        'Basic competitor analysis',
        'Email support',
        'Ghost AI agent included'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      icon: Users,
      monthlyPrice: 299,
      annualPrice: 2870,
      description: 'For growing businesses serious about SEO',
      idealFor: 'E-commerce, agencies, medium-sized businesses',
      features: [
        'Up to 100,000 monthly visitors',
        '20 AI-generated content pieces per month',
        'Advanced keyword strategy (200 keywords)',
        'Full SEO automation suite',
        'Link building assistance & outreach',
        'Advanced competitor analysis',
        'Internal linking automation',
        'Content gap analysis',
        'Core Web Vitals optimization',
        'Redirect management',
        'Weekly performance reports',
        'Priority support (24h response)',
        'Ghost AI agent included'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building2,
      monthlyPrice: null,
      annualPrice: null,
      description: 'For large organizations with complex needs',
      idealFor: 'Large enterprises, agencies with multiple clients',
      features: [
        'Unlimited traffic',
        'Unlimited AI-generated content',
        'Unlimited keywords',
        'Multi-site support (up to 10 sites)',
        'White-label reporting',
        'Custom integrations & workflows',
        'API access with high rate limits',
        'Advanced analytics & reporting',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 priority phone support',
        'Custom SLA',
        'Quarterly strategy reviews',
        'Ghost AI agent included'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Content & Publishing',
      features: [
        { name: 'AI content generation', starter: '5/month', pro: '20/month', enterprise: 'Unlimited' },
        { name: 'Content optimization', starter: true, pro: true, enterprise: true },
        { name: 'Auto-publishing', starter: true, pro: true, enterprise: true },
        { name: 'Content gap analysis', starter: false, pro: true, enterprise: true },
        { name: 'Custom content templates', starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Keywords & Research',
      features: [
        { name: 'Keyword tracking', starter: '50', pro: '200', enterprise: 'Unlimited' },
        { name: 'Keyword research', starter: true, pro: true, enterprise: true },
        { name: 'Competitor keywords', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
        { name: 'Search intent analysis', starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Technical SEO',
      features: [
        { name: 'Meta tag optimization', starter: true, pro: true, enterprise: true },
        { name: 'Schema markup', starter: true, pro: true, enterprise: true },
        { name: 'Core Web Vitals', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
        { name: 'Custom redirects', starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Link Building',
      features: [
        { name: 'Internal linking', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
        { name: 'Backlink monitoring', starter: true, pro: true, enterprise: true },
        { name: 'Outreach automation', starter: false, pro: true, enterprise: true },
        { name: 'Link quality analysis', starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Email support', starter: true, pro: true, enterprise: true },
        { name: 'Priority support', starter: false, pro: '24h', enterprise: '1h' },
        { name: 'Phone support', starter: false, pro: false, enterprise: '24/7' },
        { name: 'Dedicated manager', starter: false, pro: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial on any plan. No credit card required. Experience the full power of Ghost Post with all features unlocked. You can cancel anytime during the trial period with no charges.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle, and you keep access to your current plan features until then.'
    },
    {
      question: 'What happens if I exceed my visitor limit?',
      answer: 'We\'ll send you a notification when you\'re approaching 80% of your limit. You can either upgrade to the next tier or continue on your current plan with a small overage fee of $0.10 per 1,000 extra visitors. We\'ll never cut off your service.'
    },
    {
      question: 'Is Ghost Post safe for my website?',
      answer: 'Absolutely. Ghost follows all Google Webmaster Guidelines and uses only white-hat, approved SEO techniques. Our AI is trained on best practices and will never implement tactics that could result in penalties. We also have safeguards to prevent over-optimization.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all plans. If you\'re not satisfied for any reason, we\'ll refund your payment in full, no questions asked. This gives you risk-free time to see the value Ghost Post brings.'
    },
    {
      question: 'Can Ghost Post work with any CMS?',
      answer: 'Yes! Ghost integrates seamlessly with WordPress, Shopify, Webflow, Wix, Squarespace, and most major platforms through plugins or our universal JavaScript snippet. For custom setups, we also offer a comprehensive REST API with detailed documentation.'
    },
    {
      question: 'How is pricing calculated for annual plans?',
      answer: 'Annual plans give you a 20% discount compared to monthly billing. For example, the Professional plan is $299/month or $2,870/year (equivalent to $239/month). You save $718 per year! Payment is made once annually.'
    },
    {
      question: 'What counts as a "monthly visitor"?',
      answer: 'A monthly visitor is a unique person who visits your website within a calendar month. We use cookies to track unique visitors, so the same person visiting multiple times only counts once. This is measured using standard analytics.'
    },
    {
      question: 'Can I add more sites to my plan?',
      answer: 'The Starter and Professional plans are designed for single sites. If you need to manage multiple sites, the Enterprise plan supports up to 10 sites. For agencies managing more than 10 sites, we offer custom pricing with volume discounts.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and ACH bank transfers for annual plans. Enterprise customers can also pay via wire transfer or invoice with Net 30 terms.'
    }
  ];

  return (
    <WebsiteLayout currentPage="pricing" onNavigate={onNavigate}>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-100 dark:bg-purple-600/10 backdrop-blur-sm">
            <span className="text-sm font-['Poppins'] text-purple-700 dark:text-purple-300">14-Day Free Trial</span>
          </div>
          <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Choose the plan that fits your business. No hidden fees, cancel anytime.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            All plans include full access to Ghost AI agent and 30-day money-back guarantee
          </p>

          {/* Annual Toggle */}
          <div className="inline-flex items-center gap-3 bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 rounded-full p-1 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isAnnual
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isAnnual
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-[#00FF9D]/20 text-[#00FF9D] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={index}
                  className={`relative rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border p-8 shadow-xl transition-transform hover:scale-105 ${
                    plan.popular ? 'border-purple-500/50 dark:border-purple-500/50 scale-105 md:scale-110' : 'border-purple-200 dark:border-purple-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold text-white">
                      <Zap className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-50"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{plan.description}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-6 italic">{plan.idealFor}</p>
                    <div className="mb-6">
                      {plan.monthlyPrice ? (
                        <>
                          <span className="font-['Poppins'] text-5xl font-bold text-gray-900 dark:text-white">
                            ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">/month</span>
                          {isAnnual && (
                            <div className="text-sm text-[#00FF9D] mt-1">
                              ${plan.annualPrice}/year (save ${(plan.monthlyPrice * 12) - plan.annualPrice})
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="font-['Poppins'] text-5xl font-bold text-gray-900 dark:text-white">Custom</span>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8 max-h-96 overflow-y-auto pr-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#00FF9D] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => onNavigate?.('landing')}
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
                          : 'bg-white dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-600/30'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Detailed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="space-y-8">
            {comparisonFeatures.map((category, catIndex) => (
              <div key={catIndex} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6">
                  <h3 className="font-['Poppins'] text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="grid grid-cols-4 gap-4 items-center border-b border-purple-200 dark:border-purple-500/10 pb-3 last:border-0">
                        <div className="col-span-1 text-gray-700 dark:text-gray-300 text-sm">
                          {feature.name}
                        </div>
                        <div className="text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-[#00FF9D] mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{feature.starter}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-[#00FF9D] mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{feature.pro}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-[#00FF9D] mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{feature.enterprise}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-['Poppins'] text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">FAQ</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur opacity-50"></div>
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}</div>
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
                Still have questions?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Chat with our AI assistant or schedule a call with our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask the Ghost
                </button>
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="px-8 py-4 rounded-lg bg-white dark:bg-black/40 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center justify-center gap-2"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
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