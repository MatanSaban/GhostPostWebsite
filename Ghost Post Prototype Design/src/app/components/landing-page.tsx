import { useState } from 'react';
import { LoginModal } from '@/app/components/login-modal';
import { ThemeToggle } from '@/app/components/theme-toggle';
import { Zap, Brain, TrendingUp, Clock, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

export function LandingPage() {
  const navigate = useNavigate();
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

  const features = [
    {
      icon: Brain,
      title: 'Autonomous AI Agent',
      description: 'Ghost works 24/7 analyzing, optimizing, and implementing SEO strategies without human intervention.',
      color: 'purple'
    },
    {
      icon: Sparkles,
      title: 'Content Generation',
      description: 'Automatically creates SEO-optimized content based on keyword research and competitor analysis.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Optimization',
      description: 'Continuously monitors rankings and adapts strategies to maintain top search positions.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Smart Automations',
      description: 'Automate meta tags, internal linking, image optimization, and technical SEO fixes.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Time Machine Mode',
      description: 'Set it and forget it. Ghost handles everything from keyword research to content publishing.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Safe & Compliant',
      description: 'Follows Google guidelines and best practices to ensure sustainable, penalty-free growth.',
      color: 'green'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 monthly visitors',
        '5 content pieces per month',
        'Basic keyword tracking',
        'Technical SEO automation',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing businesses serious about SEO',
      features: [
        'Up to 100,000 monthly visitors',
        '20 content pieces per month',
        'Advanced keyword strategy',
        'Full SEO automation',
        'Link building assistance',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited traffic',
        'Unlimited content',
        'Multi-site support',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-[#0A0A0A] dark:via-[#0f0f1a] dark:to-[#1a0f2e] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/40 border-b border-purple-200/30 dark:border-purple-500/10 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logoIcon} alt="Ghost Post" className="w-10 h-10 object-contain" />
            <span className="font-['Poppins'] text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ghost Post</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a onClick={() => navigate('/')} className="text-sm text-purple-600 dark:text-purple-400 font-semibold transition-colors cursor-pointer">Home</a>
            <a onClick={() => navigate('/features')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Features</a>
            <a onClick={() => navigate('/pricing')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Pricing</a>
            <a onClick={() => navigate('/how-it-works')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">How It Works</a>
            <a onClick={() => navigate('/blog')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Blog</a>
            <a onClick={() => navigate('/about')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">About</a>
            <a onClick={() => navigate('/contact')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Contact</a>
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

      {/* Hero Section */}
      <main className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite' }}></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 dark:bg-purple-500 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-6 py-3 rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-100 dark:bg-purple-600/10 backdrop-blur-sm">
                <span className="text-sm font-['Poppins'] font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.8)]"></span>
                  AI Agent Active • 24/7 SEO Automation
                </span>
              </div>
              
              <h1 className="font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block mb-2">SEO on</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                  Autopilot
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The first <span className="font-semibold text-purple-600 dark:text-purple-400">autonomous AI agent</span> that optimizes, writes, and manages your site's SEO while you sleep.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto lg:mx-0">
                {[
                  { value: '247%', label: 'Avg Traffic Increase' },
                  { value: '24/7', label: 'AI Monitoring' },
                  { value: '10min', label: 'Setup Time' }
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-['Poppins'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <button 
                  onClick={openRegister}
                  className="group relative px-8 py-4 text-lg font-['Poppins'] font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <span className="relative text-white flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={openLogin}
                  className="px-8 py-4 text-lg font-['Poppins'] font-semibold rounded-xl bg-white/80 dark:bg-black/40 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-600/10 backdrop-blur-sm transition-all"
                >
                  Watch Demo
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white dark:border-gray-900"></div>
                  ))}
                </div>
                <span>Join <span className="font-semibold text-gray-900 dark:text-white">500+</span> businesses growing with Ghost</span>
              </div>
            </div>

            {/* Right Column - Visualization */}
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Central AI Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                  
                  {/* Main logo container */}
                  <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-purple-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                    <img src={logoIcon} alt="Ghost" className="relative w-28 h-28 object-contain z-10" />
                    
                    {/* AI Active Eye */}
                    <div className="absolute bottom-10 right-10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#00FF9D] shadow-[0_0_20px_rgba(0,255,157,1)] animate-pulse z-20"></div>
                      <div className="absolute w-6 h-6 rounded-full bg-[#00FF9D]/30 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Orbital rings with data nodes */}
                  {[...Array(4)].map((_, i) => {
                    const size = 200 + i * 80;
                    const duration = 15 + i * 8;
                    const reverse = i % 2 === 0;
                    
                    return (
                      <div key={i}>
                        {/* Ring */}
                        <div
                          className="absolute top-1/2 left-1/2 rounded-full border border-purple-500/20 dark:border-purple-500/30"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            transform: 'translate(-50%, -50%)',
                            animation: `spin ${duration}s linear infinite ${reverse ? 'reverse' : ''}`
                          }}
                        >
                          {/* Data nodes on rings */}
                          {[...Array(i + 2)].map((_, nodeIndex) => {
                            const angle = (360 / (i + 2)) * nodeIndex;
                            const colors = ['bg-purple-500', 'bg-blue-500', 'bg-[#00FF9D]'];
                            const shadows = [
                              'shadow-[0_0_15px_rgba(123,44,191,0.6)]',
                              'shadow-[0_0_15px_rgba(67,97,238,0.6)]',
                              'shadow-[0_0_15px_rgba(0,255,157,0.6)]'
                            ];
                            const colorIndex = nodeIndex % 3;
                            
                            return (
                              <div
                                key={nodeIndex}
                                className={`absolute w-3 h-3 rounded-full ${colors[colorIndex]} ${shadows[colorIndex]}`}
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transform: `rotate(${angle}deg) translateX(${size / 2}px) translateY(-50%)`
                                }}
                              >
                                <div className={`absolute inset-0 ${colors[colorIndex]} rounded-full animate-ping opacity-75`}></div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Floating data cards */}
                  {[
                    { icon: TrendingUp, text: 'Rankings ↑ 127%', color: 'from-green-500 to-emerald-500', position: 'top-0 -left-32', duration: 4 },
                    { icon: Zap, text: 'Auto-Optimizing', color: 'from-purple-500 to-purple-600', position: 'top-20 -right-24', duration: 5 },
                    { icon: Brain, text: 'AI Analyzing', color: 'from-blue-500 to-blue-600', position: 'bottom-20 -left-28', duration: 6 },
                    { icon: Sparkles, text: 'Content Generated', color: 'from-purple-500 to-pink-500', position: 'bottom-0 -right-32', duration: 7 }
                  ].map((card, i) => {
                    const CardIcon = card.icon;
                    return (
                      <div
                        key={i}
                        className={`absolute ${card.position} px-4 py-3 rounded-xl bg-gradient-to-r ${card.color} shadow-2xl backdrop-blur-sm border border-white/20 hidden lg:flex items-center gap-2`}
                        style={{
                          animation: `float ${card.duration}s ease-in-out infinite`
                        }}
                      >
                        <CardIcon className="w-4 h-4 text-white" />
                        <span className="text-sm font-['Poppins'] font-semibold text-white whitespace-nowrap">{card.text}</span>
                      </div>
                    );
                  })}
                  
                  {/* Energy beam effects */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-transparent via-purple-500/50 to-transparent origin-bottom"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${45 * i}deg)`,
                        animation: `pulse ${2 + (i * 0.1)}s ease-in-out infinite`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/40 dark:bg-black/20 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Ghost Post</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features that work together to dominate search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                purple: 'from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-600/5 border-purple-200 dark:border-purple-500/20',
                blue: 'from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-600/5 border-blue-200 dark:border-blue-500/20',
                green: 'from-green-100 to-green-50 dark:from-[#00FF9D]/10 dark:to-purple-600/5 border-green-200 dark:border-[#00FF9D]/20'
              };
              const iconColorClasses = {
                purple: 'text-purple-600 dark:text-purple-400',
                blue: 'text-blue-600 dark:text-blue-400',
                green: 'text-green-600 dark:text-[#00FF9D]'
              };

              return (
                <div 
                  key={index}
                  className={`relative rounded-xl bg-gradient-to-br ${colorClasses[feature.color]} backdrop-blur-sm border p-6 shadow-xl hover:scale-105 transition-transform`}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur opacity-50"></div>
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-lg bg-white/80 dark:bg-black/40 flex items-center justify-center mb-4 ${iconColorClasses[feature.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-purple-50/30 dark:bg-black/20 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              How Ghost <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From setup to results, Ghost handles everything automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Site',
                description: 'Simple one-click integration with your website. Ghost analyzes your current SEO state and identifies opportunities.'
              },
              {
                step: '02',
                title: 'AI Takes Over',
                description: 'Ghost creates a comprehensive SEO strategy, generates optimized content, and implements technical fixes automatically.'
              },
              {
                step: '03',
                title: 'Watch Growth',
                description: 'Monitor your rankings improve in real-time. Ghost continuously optimizes based on performance data.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-['Poppins'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400/40 to-blue-400/40 mb-4">
                  {step.step}
                </div>
                <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-purple-400/50 dark:text-purple-500/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your business. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/30 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border p-8 shadow-xl ${
                  plan.popular ? 'border-purple-400 dark:border-purple-500/50 scale-105' : 'border-purple-200 dark:border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur opacity-50"></div>
                <div className="relative">
                  <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="font-['Poppins'] text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 dark:text-[#00FF9D] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setIsLoginOpen(true)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
                        : 'bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-600/30'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-12 text-center shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative">
              <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Automate Your SEO?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join hundreds of businesses growing their organic traffic with Ghost Post
              </p>
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="group relative px-8 py-4 text-lg font-['Poppins'] font-semibold rounded-xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <span className="relative text-white flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

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
                <li><button onClick={() => navigate('/features')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Features</button></li>
                <li><button onClick={() => navigate('/pricing')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Pricing</button></li>
                <li><button onClick={() => navigate('/how-it-works')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">How It Works</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/about')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">About</button></li>
                <li><button onClick={() => navigate('/blog')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Blog</button></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/faq')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">FAQ</button></li>
                <li><button onClick={() => navigate('/contact')} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm">Contact</button></li>
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

      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}