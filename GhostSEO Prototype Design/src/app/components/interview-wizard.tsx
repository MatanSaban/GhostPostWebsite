import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'agent' | 'user';
  content: string;
  timestamp: Date;
  options?: string[];
}

interface InterviewData {
  websiteUrl?: string;
  businessType?: string;
  targetAudience?: string;
  primaryProducts?: string;
  seoGoals?: string;
  targetRegions?: string;
  competitors?: string;
  contentTypes?: string;
  publishingFrequency?: string;
  toneVoice?: string;
  cmsplatform?: string;
  hostingProvider?: string;
  mainKeywords?: string;
  currentTraffic?: string;
}

const questions = [
  {
    id: 'welcome',
    question: "👋 Hi! I'm your Ghost AI Agent. I'll help you create a comprehensive SEO profile for your website. Let's start with the basics - what's your website URL?",
    field: 'websiteUrl',
    type: 'text'
  },
  {
    id: 'businessType',
    question: "Great! Now tell me about your business. What type of business do you run? (e.g., E-commerce, SaaS, Blog, Local Service, etc.)",
    field: 'businessType',
    type: 'text'
  },
  {
    id: 'primaryProducts',
    question: "Perfect! What are your main products or services? Describe what you offer to your customers.",
    field: 'primaryProducts',
    type: 'text'
  },
  {
    id: 'targetAudience',
    question: "Who is your target audience? Tell me about their demographics, interests, and behaviors.",
    field: 'targetAudience',
    type: 'text'
  },
  {
    id: 'mainKeywords',
    question: "What are the main keywords you want to rank for? List 5-10 primary keywords related to your business.",
    field: 'mainKeywords',
    type: 'text'
  },
  {
    id: 'competitors',
    question: "Who are your main competitors? Please provide 3-5 competitor website URLs.",
    field: 'competitors',
    type: 'text'
  },
  {
    id: 'targetRegions',
    question: "What geographic regions are you targeting? (e.g., Israel, US, Europe, Global, etc.)",
    field: 'targetRegions',
    type: 'text'
  },
  {
    id: 'seoGoals',
    question: "What are your primary SEO goals? (e.g., Increase organic traffic, improve rankings, generate leads, etc.)",
    field: 'seoGoals',
    type: 'text'
  },
  {
    id: 'currentTraffic',
    question: "What's your current monthly organic traffic? (Approximate number is fine)",
    field: 'currentTraffic',
    type: 'text'
  },
  {
    id: 'contentTypes',
    question: "What types of content do you currently publish? (e.g., Blog posts, product descriptions, guides, videos, etc.)",
    field: 'contentTypes',
    type: 'text'
  },
  {
    id: 'publishingFrequency',
    question: "How often do you publish new content? (e.g., Daily, weekly, monthly)",
    field: 'publishingFrequency',
    type: 'text'
  },
  {
    id: 'toneVoice',
    question: "What's your brand's tone and voice? (e.g., Professional, casual, friendly, authoritative, etc.)",
    field: 'toneVoice',
    type: 'text'
  },
  {
    id: 'cmsplatform',
    question: "What CMS platform do you use? (e.g., WordPress, Shopify, Wix, Custom, etc.)",
    field: 'cmsplatform',
    type: 'text'
  },
  {
    id: 'hostingProvider',
    question: "Who is your hosting provider? (e.g., AWS, GoDaddy, Bluehost, etc.)",
    field: 'hostingProvider',
    type: 'text'
  },
  {
    id: 'complete',
    question: "🎉 Excellent! I've collected all the information I need. I'm now analyzing your responses to create a personalized SEO strategy. This will take just a moment...",
    field: null,
    type: 'completion'
  }
];

export function InterviewWizard({ onClose, onComplete }: { onClose: () => void; onComplete: (data: InterviewData) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      type: 'agent',
      content: questions[0].question,
      timestamp: new Date()
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [interviewData, setInterviewData] = useState<InterviewData>({});
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentQuestionIndex]);

  const handleSubmit = (value?: string) => {
    const trimmedValue = (value || inputValue).trim();
    if (!trimmedValue || isTyping) return;

    const currentQuestion = questions[currentQuestionIndex];

    // Add user message
    const userMessage: Message = {
      id: messages.length,
      type: 'user',
      content: trimmedValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Save data
    if (currentQuestion.field) {
      setInterviewData(prev => ({
        ...prev,
        [currentQuestion.field!]: trimmedValue
      }));
    }

    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and move to next question
    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      
      if (nextIndex < questions.length) {
        const nextQuestion = questions[nextIndex];
        const agentMessage: Message = {
          id: messages.length + 1,
          type: 'agent',
          content: nextQuestion.question,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, agentMessage]);
        setCurrentQuestionIndex(nextIndex);
        setIsTyping(false);

        // If it's the completion message, finish the interview
        if (nextQuestion.type === 'completion') {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete({
                ...interviewData,
                [currentQuestion.field!]: trimmedValue
              });
            }, 2000);
          }, 2000);
        }
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl">
        {/* Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-50"></div>
        
        {/* Main Container */}
        <div className="relative flex flex-col h-full bg-gradient-to-br from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#121212] border border-purple-200 dark:border-purple-500/20">
          
          {/* Header */}
          <div className="relative px-6 py-4 border-b border-purple-200 dark:border-purple-500/20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">
                    Site Interview Wizard
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Question {Math.min(currentQuestionIndex + 1, questions.length)} of {questions.length}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-black/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    message.type === 'agent'
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}>
                    {message.type === 'agent' ? (
                      <Sparkles className="w-4 h-4 text-white" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900"></div>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`relative px-4 py-3 rounded-xl ${
                    message.type === 'agent'
                      ? 'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  }`}>
                    <p className={`text-sm font-['Poppins'] ${
                      message.type === 'agent' 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-white'
                    }`}>
                      {message.content}
                    </p>
                    <span className={`text-xs mt-1 block ${
                      message.type === 'agent'
                        ? 'text-gray-500 dark:text-gray-500'
                        : 'text-white/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/10 border border-purple-200 dark:border-purple-500/20">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Completion Message */}
            {isComplete && (
              <div className="flex justify-center">
                <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-500/20 p-6 text-center">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl blur opacity-50"></div>
                  <div className="relative">
                    <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-[#00FF9D] mx-auto mb-3" />
                    <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Interview Complete!
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Creating your personalized SEO strategy...
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {!isComplete && (
            <div className="relative p-4 border-t border-purple-200 dark:border-purple-500/20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                  placeholder="Type your answer..."
                  className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 font-['Poppins']"
                />
                <button
                  onClick={() => handleSubmit()}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
