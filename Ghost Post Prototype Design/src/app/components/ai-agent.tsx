import { useState } from 'react';
import { Send, X, AlertCircle } from 'lucide-react';

export function AIAgent() {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      text: "I've detected 3 new 404 errors. Should I redirect them to Home?",
      actions: ['Fix All', 'Ignore']
    }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'agent',
        text: 'Processing your request...'
      }]);
    }, 500);
  };

  const handleAction = (action: string) => {
    setMessages([...messages, { 
      type: 'user', 
      text: action 
    }, {
      type: 'agent',
      text: action === 'Fix All' 
        ? '✓ All 404 errors have been redirected successfully!' 
        : '✓ Noted. I will monitor these URLs.'
    }]);
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center shadow-2xl shadow-[#00FF9D]/20 hover:scale-110 transition-transform z-50"
      >
        <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
      </button>
    );
  }

  return (
    <aside className="w-96 border-l border-white/5 bg-black/20 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00FF9D] border-2 border-black animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-['Poppins'] font-bold text-white">Ghost Agent</h3>
            <p className="text-xs text-[#00FF9D] font-['Poppins']">Active</p>
          </div>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-4 ${
                message.type === 'user'
                  ? 'bg-[#7B2CBF]/20 border border-[#7B2CBF]/30'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <p className="text-sm text-white font-['Poppins'] leading-relaxed">
                {message.text}
              </p>
              
              {message.actions && (
                <div className="flex gap-2 mt-3">
                  {message.actions.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleAction(action)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        action === 'Fix All'
                          ? 'bg-[#00FF9D] text-black hover:bg-[#00CC7D]'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Alert Box */}
      <div className="mx-4 mb-4 p-3 rounded-lg bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#7B2CBF] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-white font-medium mb-1">Optimization Suggestion</p>
          <p className="text-xs text-gray-400 font-['Poppins']">
            Add schema markup to product pages for better search visibility
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Command the ghost..."
            className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF9D]/50 focus:ring-2 focus:ring-[#00FF9D]/20 transition-all font-['Poppins'] text-sm"
          />
          <button
            onClick={handleSend}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Send className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </aside>
  );
}
