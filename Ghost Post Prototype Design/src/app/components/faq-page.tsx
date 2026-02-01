import { useState } from 'react';
import { WebsiteLayout } from '@/app/components/website-layout';
import { ChevronDown, Search, Sparkles, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const categories = ['All', 'Getting Started', 'Features', 'Pricing & Billing', 'Technical', 'Content & SEO'];

  const faqs: FAQItem[] = [
    {
      category: 'Getting Started',
      question: 'What is Ghost Post and how does it work?',
      answer: 'Ghost Post is an autonomous AI agent designed to manage your website\'s SEO automatically. It analyzes your site, identifies opportunities, creates optimized content, fixes technical issues, and monitors performance 24/7. Simply connect your website, and Ghost takes care of the rest while you focus on your business.'
    },
    {
      category: 'Getting Started',
      question: 'How long does it take to see results?',
      answer: 'Most clients start seeing improvements within 2-4 weeks, with significant traffic increases typically appearing after 2-3 months. SEO is a long-term strategy, but Ghost\'s AI-powered approach accelerates results by continuously optimizing your site and identifying quick-win opportunities.'
    },
    {
      category: 'Getting Started',
      question: 'Do I need technical knowledge to use Ghost Post?',
      answer: 'Not at all! Ghost Post is designed to be completely autonomous. Our AI handles all the technical aspects of SEO, from code optimization to content creation. You can monitor progress through our intuitive dashboard without needing any SEO or technical expertise.'
    },
    {
      category: 'Features',
      question: 'What types of content can Ghost Post create?',
      answer: 'Ghost can create various types of SEO-optimized content including blog posts, product descriptions, landing pages, meta descriptions, FAQ sections, and more. The AI understands your brand voice and target audience to produce high-quality, engaging content that ranks well in search engines.'
    },
    {
      category: 'Features',
      question: 'Can Ghost Post integrate with my existing CMS?',
      answer: 'Yes! Ghost Post integrates with popular CMS platforms including WordPress, Shopify, Wix, Webflow, and custom solutions. Our API allows seamless integration with most content management systems. If you use a custom platform, we can work with your team to set up the integration.'
    },
    {
      category: 'Features',
      question: 'Does Ghost Post handle technical SEO?',
      answer: 'Absolutely! Ghost automatically handles technical SEO aspects including site speed optimization, mobile responsiveness, structured data implementation, XML sitemaps, robots.txt optimization, canonical tags, image optimization, and much more. It continuously monitors your site for technical issues and fixes them automatically.'
    },
    {
      category: 'Features',
      question: 'How does Ghost Post handle link building?',
      answer: 'Ghost Post uses ethical, white-hat link building strategies. It identifies relevant websites in your industry, creates valuable content that naturally attracts backlinks, and can automate outreach campaigns. The AI ensures all link building activities comply with Google\'s guidelines to avoid penalties.'
    },
    {
      category: 'Pricing & Billing',
      question: 'What\'s included in the free trial?',
      answer: 'Our 14-day free trial gives you full access to all features of your chosen plan. You can connect your website, let Ghost perform a complete audit, generate content, and see the AI in action. No credit card required, and you can cancel anytime during the trial with no obligations.'
    },
    {
      category: 'Pricing & Billing',
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle, and you keep your current features until then.'
    },
    {
      category: 'Pricing & Billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with Ghost Post for any reason within the first 30 days, contact our support team for a full refund. After 30 days, we don\'t provide refunds but you can cancel anytime and won\'t be charged for the next billing cycle.'
    },
    {
      category: 'Pricing & Billing',
      question: 'What happens if I exceed my plan limits?',
      answer: 'If you\'re approaching your plan limits, we\'ll notify you in advance. You can either upgrade to a higher plan or the AI will prioritize the most impactful optimizations within your current limits. We never charge overage fees without your explicit approval.'
    },
    {
      category: 'Technical',
      question: 'Is my data secure with Ghost Post?',
      answer: 'Absolutely! We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We\'re SOC 2 Type II certified and fully GDPR compliant. Your data is stored in secure data centers with regular backups, and we never share your information with third parties.'
    },
    {
      category: 'Technical',
      question: 'Will Ghost Post slow down my website?',
      answer: 'No! Ghost Post works primarily in the background and doesn\'t add any load to your website\'s frontend. In fact, our technical optimizations typically improve your site speed significantly. The AI continuously monitors and optimizes performance metrics like Core Web Vitals.'
    },
    {
      category: 'Technical',
      question: 'What if Ghost Post makes a mistake?',
      answer: 'Ghost Post includes safety mechanisms and human oversight options. You can review content before it\'s published, set approval workflows, and roll back any changes. Our AI is trained on millions of successful SEO campaigns and follows Google\'s guidelines strictly, minimizing the risk of errors.'
    },
    {
      category: 'Technical',
      question: 'Can I use Ghost Post on multiple websites?',
      answer: 'Yes! Our Professional plan supports up to 3 websites, and our Enterprise plan offers unlimited sites. Each website gets its own dedicated AI agent, custom strategy, and separate analytics dashboard. You can manage all your sites from a single account.'
    },
    {
      category: 'Content & SEO',
      question: 'How does Ghost Post ensure content quality?',
      answer: 'Ghost uses advanced AI models trained on high-quality content and SEO best practices. It analyzes your brand voice, understands your audience, checks for plagiarism, ensures proper grammar, and optimizes for readability. You can also set quality guidelines and review content before publishing.'
    },
    {
      category: 'Content & SEO',
      question: 'Will Ghost Post\'s content be detected as AI-generated?',
      answer: 'Ghost Post creates content that\'s indistinguishable from human writing. Our AI is trained to write naturally, vary sentence structure, use appropriate tone, and include unique insights. Google has stated they don\'t penalize AI content if it\'s helpful and high-quality—which is exactly what Ghost produces.'
    },
    {
      category: 'Content & SEO',
      question: 'Can I provide feedback on the AI\'s work?',
      answer: 'Absolutely! Ghost Post learns from your feedback. You can rate content, suggest improvements, and set preferences. The more feedback you provide, the better Ghost understands your needs and adapts its strategy. This creates a truly personalized SEO solution for your business.'
    },
    {
      category: 'Content & SEO',
      question: 'Does Ghost Post work for local SEO?',
      answer: 'Yes! Ghost Post excels at local SEO. It optimizes your Google Business Profile, creates location-specific content, manages local citations, monitors local rankings, and implements local schema markup. The AI understands the nuances of local search and tailors strategies for your geographic targets.'
    },
    {
      category: 'Content & SEO',
      question: 'What languages does Ghost Post support?',
      answer: 'Ghost Post currently supports over 50 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Hebrew, Arabic, Chinese, Japanese, Korean, and more. The AI can create multilingual content and implement hreflang tags for international SEO.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <WebsiteLayout currentPage="faq" onNavigate={onNavigate}>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Ghost Post and autonomous SEO. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins']"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[73px] z-40 backdrop-blur-md bg-white/80 dark:bg-black/40 border-y border-purple-200/30 dark:border-purple-500/10 py-4 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-['Poppins'] whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-purple-100 dark:bg-purple-900/20 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-100/50 dark:hover:bg-purple-900/10 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1 block">
                          {faq.category}
                        </span>
                        <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <div className="pt-4 border-t border-purple-200 dark:border-purple-500/20">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No FAQs found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 p-12 text-center">
              <MessageCircle className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h2 className="font-['Poppins'] text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you 24/7.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-['Poppins'] text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Quick Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started Guide',
                description: 'Step-by-step instructions to set up Ghost Post and launch your first campaign.',
                link: 'View Guide'
              },
              {
                title: 'Video Tutorials',
                description: 'Watch comprehensive video tutorials covering all features and best practices.',
                link: 'Watch Videos'
              },
              {
                title: 'API Documentation',
                description: 'Detailed technical documentation for developers and advanced integrations.',
                link: 'Read Docs'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                  <h3 className="font-['Poppins'] text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {item.description}
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                    {item.link} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
}
