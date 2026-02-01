import { WebsiteLayout } from '@/app/components/website-layout';
import { GhostChatPopup } from '@/app/components/ghost-chat-popup';
import { Mail, MapPin, Phone, Send, Sparkles, Target, Users, Award, Zap, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

type PageType = 'about' | 'contact';

export function SinglePage({ pageType, onNavigate }: { pageType: PageType; onNavigate?: (page: string) => void }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const renderAboutContent = () => (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                Ghost Post
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're building the future of SEO with autonomous AI agents that work 24/7 to optimize your website and grow your organic traffic.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 p-12 text-center">
              <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
              <h2 className="font-['Poppins'] text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                To democratize enterprise-level SEO by making autonomous AI agents accessible to businesses of all sizes. 
                We believe that every website deserves the opportunity to rank well and grow organically, without requiring 
                a team of expensive SEO specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-['Poppins'] text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We measure success by your organic growth and ROI, not vanity metrics.'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'We\'re constantly pushing the boundaries of what\'s possible with AI and SEO.'
              },
              {
                icon: Users,
                title: 'Customer-Centric',
                description: 'Your success is our success. We build features based on real customer needs.'
              },
              {
                icon: Award,
                title: 'Quality Standards',
                description: 'We follow Google\'s guidelines and best practices for sustainable growth.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 p-6 rounded-xl h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Poppins'] text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-['Poppins'] text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A diverse team of AI researchers, SEO experts, and engineers dedicated to revolutionizing digital marketing.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Co-Founder',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
                bio: 'Former Head of SEO at a Fortune 500 company with 15+ years of experience.'
              },
              {
                name: 'David Park',
                role: 'CTO & Co-Founder',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                bio: 'AI researcher specializing in natural language processing and machine learning.'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Head of Product',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
                bio: 'Product leader with a track record of building user-loved SaaS platforms.'
              }
            ].map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Poppins'] text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 text-sm mb-3 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '500M+', label: 'Pages Optimized' },
              { value: '250%', label: 'Avg Traffic Increase' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-['Poppins'] text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-['Poppins']">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderContactContent = () => (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about Ghost Post? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8">
                <h2 className="font-['Poppins'] text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins']"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins']"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins']"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Poppins'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins'] resize-none"
                      placeholder="Tell us about your SEO needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-blue-200 dark:border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Our team is here to help you
                      </p>
                      <a href="mailto:hello@ghostpost.ai" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                        hello@ghostpost.ai
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Monday - Friday, 9am - 6pm EST
                      </p>
                      <a href="tel:+15551234567" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-green-200 dark:border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        Visit Us
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        123 AI Boulevard<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="relative mt-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 rounded-xl p-6 text-center">
                  <Sparkles className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <h3 className="font-['Poppins'] text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Have a quick question?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    Check out our FAQ or chat with our AI assistant
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => onNavigate?.('faq')}
                      className="flex-1 px-6 py-2 rounded-lg bg-white dark:bg-black/40 border border-purple-300 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                    >
                      View FAQ
                    </button>
                    <button 
                      onClick={() => setIsChatOpen(true)}
                      className="flex-1 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Ask the Ghost
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <WebsiteLayout currentPage={pageType} onNavigate={onNavigate}>
      {pageType === 'about' ? renderAboutContent() : renderContactContent()}
      <GhostChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </WebsiteLayout>
  );
}