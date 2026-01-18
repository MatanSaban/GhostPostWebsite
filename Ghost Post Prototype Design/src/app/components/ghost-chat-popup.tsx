import { useState } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface GhostChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GhostChatPopup({ isOpen, onClose }: GhostChatPopupProps) {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      text: "👋 Hi! I'm Ghost, your AI SEO assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages([...messages, { type: 'user', text: userMessage }]);
    setInput('');
    
    // Simulate AI response based on keywords
    setTimeout(() => {
      let response = '';
      const lowerInput = userMessage.toLowerCase();
      
      if (lowerInput.includes('pricing') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        response = "Our pricing starts at $99/month for the Starter plan, which includes automated SEO optimization, content generation, and technical fixes. Would you like me to explain the different plans in detail?";
      } else if (lowerInput.includes('how') && lowerInput.includes('work')) {
        response = "Ghost Post works autonomously by: 1) Analyzing your website 24/7, 2) Identifying SEO opportunities, 3) Creating optimized content, 4) Fixing technical issues, and 5) Building quality backlinks. All automatically while you focus on your business!";
      } else if (lowerInput.includes('trial') || lowerInput.includes('free')) {
        response = "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can test Ghost Post risk-free and see real results before committing.";
      } else if (lowerInput.includes('content') || lowerInput.includes('write') || lowerInput.includes('blog')) {
        response = "Ghost creates SEO-optimized content including blog posts, product descriptions, meta tags, and more. The AI understands your brand voice and creates high-quality, engaging content that ranks well in search engines.";
      } else if (lowerInput.includes('integrate') || lowerInput.includes('cms') || lowerInput.includes('wordpress') || lowerInput.includes('shopify')) {
        response = "Ghost Post integrates seamlessly with WordPress, Shopify, Wix, Webflow, and most custom platforms. Setup takes just a few minutes, and we'll help you through the entire process!";
      } else if (lowerInput.includes('result') || lowerInput.includes('long')) {
        response = "Most clients see improvements within 2-4 weeks, with significant traffic increases after 2-3 months. SEO is a long-term strategy, but Ghost's AI-powered approach accelerates results considerably!";
      } else if (lowerInput.includes('safe') || lowerInput.includes('penalty') || lowerInput.includes('google')) {
        response = "Absolutely! Ghost Post only uses white-hat, Google-approved SEO techniques. We follow all guidelines strictly to ensure your site stays safe and penalty-free while improving rankings.";
      } else if (lowerInput.includes('support') || lowerInput.includes('help')) {
        response = "We offer 24/7 support through chat, email, and our knowledge base. Our team is always ready to help you get the most out of Ghost Post!";
      } else {
        response = "That's a great question! Ghost Post is designed to handle all aspects of SEO automatically. Would you like to know more about our pricing, features, or how it works? Feel free to ask anything!";
      }
      
      setMessages(prev => [...prev, {
        type: 'agent',
        text: response
      }]);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Chat Popup */}
      <div className="fixed left-0 top-0 bottom-0 w-full md:w-[450px] bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-[#0A0A0A] dark:via-[#0f0f1a] dark:to-[#1a0f2e] border-r border-purple-200 dark:border-purple-500/20 shadow-2xl z-50 flex flex-col animate-slide-in-left">
        {/* Header */}
        <div className="p-6 border-b border-purple-200/30 dark:border-purple-500/10 flex items-center justify-between bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center shadow-lg shadow-[#00FF9D]/20">
                <div className="w-3 h-3 rounded-full bg-black"></div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00FF9D] border-2 border-white dark:border-black animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-['Poppins'] font-bold text-gray-900 dark:text-white text-lg">Ghost AI Assistant</h3>
              <p className="text-xs text-[#00FF9D] font-['Poppins']">Online & Ready to Help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-white/5 hover:bg-purple-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white'
                }`}
              >
                <p className="text-sm font-['Poppins'] leading-relaxed">
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Questions (only show initially) */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 font-['Poppins']">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'How does Ghost Post work?',
                'Pricing plans',
                'Free trial available?',
                'Integration options'
              ].map((question) => (
                <button
                  key={question}
                  onClick={() => {
                    setInput(question);
                    setTimeout(() => {
                      const btn = document.getElementById('ghost-send-btn');
                      if (btn) btn.click();
                    }, 100);
                  }}
                  className="px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-gray-700 dark:text-gray-300 text-xs font-['Poppins'] hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-purple-200/30 dark:border-purple-500/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about Ghost Post..."
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-['Poppins'] text-sm"
            />
            <button
              id="ghost-send-btn"
              onClick={handleSend}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#00FF9D]/20"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
