import { useState } from 'react';
import { Send, X, Plus, Paperclip, Mic, Image as ImageIcon, Check, Search, MessageSquare, Trash2, Edit2, Sparkles, Zap, FileText, BarChart, Clock, ChevronDown } from 'lucide-react';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

interface ContentAgentPanelProps {
  context?: string;
  onClose?: () => void;
  isPopup?: boolean;
}

interface Message {
  type: 'agent' | 'user' | 'error' | 'success';
  text: string;
  timestamp?: string;
  actions?: string[];
  hasRetry?: boolean;
}

interface ChatItem {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  isActive: boolean;
}

export function ContentAgentPanel({ context = 'Content Planner', onClose, isPopup = false }: ContentAgentPanelProps) {
  const getContextualMessage = () => {
    switch (context) {
      case 'Dashboard Overview':
        return "Your site performance is up 24% this month. Should I analyze what's driving this growth?";
      case 'Site Interview':
        return "I noticed you haven't completed the technical details section. Shall I help gather that information?";
      case 'Content Planner':
        return "I can help you plan and organize content for your website. Want me to analyze trends and suggest article ideas?";
      case 'Automations':
        return "I can create a new automation to fix broken links automatically. Want me to set it up?";
      case 'Link Building':
        return "I found 12 new high-quality backlink opportunities. Should I draft outreach emails?";
      case 'Redirections':
        return "Detected 3 redirect chains that could impact SEO. Should I optimize them?";
      case 'Frontend SEO':
        return "12 images are missing alt text. I can generate optimized descriptions now. Proceed?";
      case 'Backend SEO':
        return "Your sitemap is missing 8 pages. Should I update it automatically?";
      case 'Site Audit':
        return "I can optimize 8 images to improve your LCP score by 0.3s. Want me to proceed?";
      case 'Keyword Strategy':
        return "Found 4 low-competition keywords with high potential. Should I create content briefs?";
      case 'Settings':
        return "Your automation settings look good. Need help configuring anything else?";
      default:
        return "I'm here to help with your SEO needs. What would you like to work on?";
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'agent',
      text: getContextualMessage(),
      timestamp: getCurrentTime(),
      actions: ['Start Analysis', 'Cancel']
    }
  ]);
  const [input, setInput] = useState('');
  const [chatSearch, setChatSearch] = useState('');
  const [selectedTextEngine, setSelectedTextEngine] = useState('gpt-4');
  const [selectedTextModel, setSelectedTextModel] = useState('gpt-4-turbo');
  const [selectedImageEngine, setSelectedImageEngine] = useState('dall-e');
  const [selectedImageModel, setSelectedImageModel] = useState('dall-e-3');
  const [isTextEngineOpen, setIsTextEngineOpen] = useState(false);
  const [isTextModelOpen, setIsTextModelOpen] = useState(false);
  const [isImageEngineOpen, setIsImageEngineOpen] = useState(false);
  const [isImageModelOpen, setIsImageModelOpen] = useState(false);

  const [chats] = useState<ChatItem[]>([
    {
      id: '1',
      title: 'SEO Strategy Discussion',
      preview: 'Your site performance is up 24%...',
      timestamp: '2m ago',
      isActive: true
    },
    {
      id: '2',
      title: 'Content Calendar Planning',
      preview: 'I analyzed current trends for...',
      timestamp: '1h ago',
      isActive: false
    },
    {
      id: '3',
      title: 'Keyword Research',
      preview: 'Found 4 low-competition keywords...',
      timestamp: '3h ago',
      isActive: false
    },
    {
      id: '4',
      title: 'Link Building Campaign',
      preview: 'I found 12 new high-quality...',
      timestamp: 'Yesterday',
      isActive: false
    },
    {
      id: '5',
      title: 'Technical SEO Audit',
      preview: 'Detected 3 redirect chains...',
      timestamp: 'Yesterday',
      isActive: false
    }
  ]);

  const textEngines = [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'claude', name: 'Claude' },
    { id: 'gemini', name: 'Gemini' },
    { id: 'llama', name: 'Llama' }
  ];

  const textModels = {
    'gpt-4': ['gpt-4-turbo', 'gpt-4', 'gpt-4-32k'],
    'claude': ['claude-3-opus', 'claude-3-sonnet', 'claude-3-haiku'],
    'gemini': ['gemini-pro', 'gemini-ultra'],
    'llama': ['llama-2-70b', 'llama-2-13b', 'llama-2-7b']
  };

  const imageEngines = [
    { id: 'dall-e', name: 'DALL-E' },
    { id: 'midjourney', name: 'Midjourney' },
    { id: 'stable-diffusion', name: 'Stable Diffusion' }
  ];

  const imageModels = {
    'dall-e': ['dall-e-3', 'dall-e-2'],
    'midjourney': ['v6', 'v5.2', 'v5.1'],
    'stable-diffusion': ['SDXL 1.0', 'SD 2.1', 'SD 1.5']
  };

  const quickActions = [
    { icon: Sparkles, label: 'Generate Content', color: 'purple' },
    { icon: Zap, label: 'Quick SEO Audit', color: 'blue' },
    { icon: FileText, label: 'Create Brief', color: 'green' },
    { icon: BarChart, label: 'Analytics Report', color: 'orange' }
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage: Message = {
      type: 'user',
      text: input,
      timestamp: getCurrentTime()
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'agent',
        text: 'Processing your request...',
        timestamp: getCurrentTime()
      }]);
    }, 500);
  };

  const handleAction = (action: string) => {
    const newMessages: Message[] = [
      {
        type: 'user',
        text: action,
        timestamp: getCurrentTime()
      }
    ];

    if (action === 'Start Analysis') {
      newMessages.push({
        type: 'success',
        text: 'Analysis started successfully',
        timestamp: getCurrentTime()
      });
    }

    setMessages([...messages, ...newMessages]);
  };

  if (!isPopup) {
    return null;
  }

  return (
    <div className="h-full w-full flex bg-[#1a1f37] dark:bg-[#0d111f] shadow-2xl rounded-l-2xl overflow-hidden">
      {/* Left Sidebar - Chat List */}
      <div className="w-72 border-r border-white/5 flex flex-col bg-[#1e2540] dark:bg-[#0f1321]">
        {/* Chat List Header */}
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-['Poppins'] font-semibold text-white text-sm">Conversations</h3>
            <button className="w-8 h-8 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 flex items-center justify-center transition-colors">
              <Plus className="w-4 h-4 text-purple-400" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={chatSearch}
              onChange={(e) => setChatSearch(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 font-['Poppins']"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`w-full p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group ${
                chat.isActive ? 'bg-purple-600/10' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-['Poppins'] text-sm font-medium text-white truncate pr-2 flex-1">
                  {chat.title}
                </h4>
                <span className="text-xs text-gray-500 flex-shrink-0">{chat.timestamp}</span>
              </div>
              <p className="text-xs text-gray-400 truncate font-['Poppins']">{chat.preview}</p>
              
              {/* Hover Actions */}
              <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="p-1.5 rounded hover:bg-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle edit
                  }}
                >
                  <Edit2 className="w-3 h-3 text-gray-400" />
                </button>
                <button 
                  className="p-1.5 rounded hover:bg-red-500/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle delete
                  }}
                >
                  <Trash2 className="w-3 h-3 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#1e2540] dark:bg-[#0f1321]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <img src={logoIcon} alt="Ghost" className="w-6 h-6 object-contain" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.8)] border-2 border-[#1e2540] dark:border-[#0f1321]"></div>
            </div>
            <div>
              <h3 className="font-['Poppins'] font-semibold text-white">Ghost Agent</h3>
              <p className="text-xs text-gray-400">Active & Learning</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="space-y-2">
              {/* Timestamp */}
              {message.timestamp && (
                <div className="text-xs text-gray-500 text-center font-['Poppins']">
                  {message.timestamp}
                </div>
              )}
              
              {/* Message Card */}
              {message.type === 'agent' && (
                <div className="bg-white dark:bg-white rounded-2xl p-5 shadow-lg max-w-[85%]">
                  <p className="font-['Poppins'] text-sm text-gray-800 leading-relaxed">
                    {message.text}
                  </p>
                  
                  {message.actions && (
                    <div className="flex gap-2 mt-4">
                      {message.actions.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => handleAction(action)}
                          className={`px-4 py-2 rounded-lg font-['Poppins'] text-sm font-medium transition-all ${
                            i === 0
                              ? 'bg-[#00b67a] hover:bg-[#00a169] text-white flex items-center gap-2'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                        >
                          {i === 0 && <Check className="w-4 h-4" />}
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {message.type === 'user' && (
                <div className="flex justify-end">
                  <div className="bg-purple-600/20 dark:bg-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-5 py-3 max-w-[85%]">
                    <p className="font-['Poppins'] text-sm text-white leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </div>
              )}

              {message.type === 'error' && (
                <div className="bg-red-900/30 dark:bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 max-w-[85%]">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-['Poppins'] text-sm text-red-200 leading-relaxed flex-1">
                      {message.text}
                    </p>
                    <button className="flex-shrink-0 p-1 hover:bg-red-500/20 rounded transition-colors">
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                  {message.hasRetry && (
                    <button className="mt-3 px-4 py-2 bg-red-600/40 hover:bg-red-600/50 rounded-lg text-sm text-white font-['Poppins'] transition-colors">
                      Retry
                    </button>
                  )}
                </div>
              )}

              {message.type === 'success' && (
                <div className="bg-[#00b67a]/20 dark:bg-[#00b67a]/10 backdrop-blur-sm border border-[#00b67a]/30 rounded-2xl px-5 py-3 max-w-[85%]">
                  <p className="font-['Poppins'] text-sm text-[#00FF9D] leading-relaxed flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    {message.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/5 bg-[#1e2540] dark:bg-[#0f1321]">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Write a message..."
                className="w-full px-4 py-3 pr-32 rounded-xl bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 font-['Poppins'] text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ImageIcon className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Mic className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Quick Actions & AI Settings */}
      <div className="w-80 border-l border-white/5 flex flex-col bg-[#1e2540] dark:bg-[#0f1321] overflow-y-auto">
        {/* Quick Actions */}
        <div className="p-4 border-b border-white/5">
          <h3 className="font-['Poppins'] font-semibold text-white text-sm mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`p-3 rounded-xl bg-${action.color}-600/10 hover:bg-${action.color}-600/20 border border-${action.color}-500/20 flex flex-col items-center gap-2 transition-all group`}
              >
                <action.icon className={`w-5 h-5 text-${action.color}-400`} />
                <span className="text-xs text-gray-300 font-['Poppins'] text-center leading-tight">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Settings */}
        <div className="p-4 space-y-4">
          <h3 className="font-['Poppins'] font-semibold text-white text-sm">AI Configuration</h3>
          
          {/* Text Generation */}
          <div className="space-y-2">
            <label className="block text-xs font-['Poppins'] text-gray-400">Text Generation</label>
            
            {/* Engine Select */}
            <div className="relative">
              <button
                onClick={() => setIsTextEngineOpen(!isTextEngineOpen)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white text-sm font-['Poppins'] flex items-center justify-between hover:border-purple-500/30 transition-colors"
              >
                <span>{textEngines.find(e => e.id === selectedTextEngine)?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTextEngineOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTextEngineOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#2a3150] dark:bg-[#151929] border border-white/10 rounded-lg shadow-xl z-10 overflow-hidden">
                  {textEngines.map((engine) => (
                    <button
                      key={engine.id}
                      onClick={() => {
                        setSelectedTextEngine(engine.id);
                        setSelectedTextModel(textModels[engine.id][0]);
                        setIsTextEngineOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-white hover:bg-purple-600/20 transition-colors font-['Poppins']"
                    >
                      {engine.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Model Select */}
            <div className="relative">
              <button
                onClick={() => setIsTextModelOpen(!isTextModelOpen)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white text-sm font-['Poppins'] flex items-center justify-between hover:border-purple-500/30 transition-colors"
              >
                <span>{selectedTextModel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTextModelOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTextModelOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#2a3150] dark:bg-[#151929] border border-white/10 rounded-lg shadow-xl z-10 overflow-hidden max-h-48 overflow-y-auto">
                  {textModels[selectedTextEngine]?.map((model) => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedTextModel(model);
                        setIsTextModelOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-white hover:bg-purple-600/20 transition-colors font-['Poppins']"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Image Generation */}
          <div className="space-y-2">
            <label className="block text-xs font-['Poppins'] text-gray-400">Image Generation</label>
            
            {/* Engine Select */}
            <div className="relative">
              <button
                onClick={() => setIsImageEngineOpen(!isImageEngineOpen)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white text-sm font-['Poppins'] flex items-center justify-between hover:border-purple-500/30 transition-colors"
              >
                <span>{imageEngines.find(e => e.id === selectedImageEngine)?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isImageEngineOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isImageEngineOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#2a3150] dark:bg-[#151929] border border-white/10 rounded-lg shadow-xl z-10 overflow-hidden">
                  {imageEngines.map((engine) => (
                    <button
                      key={engine.id}
                      onClick={() => {
                        setSelectedImageEngine(engine.id);
                        setSelectedImageModel(imageModels[engine.id][0]);
                        setIsImageEngineOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-white hover:bg-purple-600/20 transition-colors font-['Poppins']"
                    >
                      {engine.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Model Select */}
            <div className="relative">
              <button
                onClick={() => setIsImageModelOpen(!isImageModelOpen)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#2a3150] dark:bg-[#151929] border border-white/5 text-white text-sm font-['Poppins'] flex items-center justify-between hover:border-purple-500/30 transition-colors"
              >
                <span>{selectedImageModel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isImageModelOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isImageModelOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#2a3150] dark:bg-[#151929] border border-white/10 rounded-lg shadow-xl z-10 overflow-hidden max-h-48 overflow-y-auto">
                  {imageModels[selectedImageEngine]?.map((model) => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedImageModel(model);
                        setIsImageModelOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-white hover:bg-purple-600/20 transition-colors font-['Poppins']"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status Info */}
          <div className="mt-6 p-3 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-['Poppins'] font-medium text-purple-300">Active Session</span>
            </div>
            <p className="text-xs text-gray-400 font-['Poppins']">
              Using {textEngines.find(e => e.id === selectedTextEngine)?.name} for responses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}