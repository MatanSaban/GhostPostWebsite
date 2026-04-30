import { DashboardLayout } from '@/app/components/dashboard-layout';
import { CheckCircle2, Circle, Sparkles, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { InterviewWizard } from '@/app/components/interview-wizard';

export function SiteInterview() {
  const [showWizard, setShowWizard] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);

  const handleCompleteInterview = (data: any) => {
    console.log('Interview data:', data);
    setInterviewCompleted(true);
    setShowWizard(false);
    // Here you would typically save the data to your backend/state management
  };

  const sections = [
    {
      title: 'Business Information',
      status: 'complete',
      questions: [
        { q: 'What is your primary business?', a: 'E-commerce - Vintage Clothing' },
        { q: 'Who is your target audience?', a: 'Fashion enthusiasts aged 25-45, interested in sustainable and vintage fashion' },
        { q: 'What are your main products/services?', a: 'Vintage clothing, accessories, and styling consultations' },
      ]
    },
    {
      title: 'SEO Goals',
      status: 'complete',
      questions: [
        { q: 'What are your primary SEO objectives?', a: 'Increase organic traffic by 50%, rank for vintage clothing keywords' },
        { q: 'Target geographic regions?', a: 'Israel (primary), US and Europe (secondary)' },
        { q: 'Competitor websites?', a: 'vintagefashion.co.il, retrostyle.com, thriftcloset.co.il' },
      ]
    },
    {
      title: 'Content Strategy',
      status: 'in-progress',
      questions: [
        { q: 'Current content types?', a: 'Product descriptions, blog articles, styling guides' },
        { q: 'Publishing frequency?', a: '2-3 articles per week' },
        { q: 'Tone and voice?', a: 'Not yet defined', incomplete: true },
      ]
    },
    {
      title: 'Technical Details',
      status: 'pending',
      questions: [
        { q: 'CMS Platform?', a: 'Not answered', incomplete: true },
        { q: 'Hosting provider?', a: 'Not answered', incomplete: true },
        { q: 'Current site speed score?', a: 'Not answered', incomplete: true },
      ]
    }
  ];

  return (
    <DashboardLayout title="Site Interview & Persona" breadcrumb="Site Interview" agentContext="Site Interview">
      <div className="space-y-6">
        {/* Progress Overview */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-1">Interview Progress</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help Ghost Agent understand your site better</p>
              </div>
              <button 
                onClick={() => setShowWizard(true)}
                className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <Sparkles className="relative w-5 h-5 text-white" />
                <span className="relative text-white font-['Poppins'] font-semibold">
                  {interviewCompleted ? 'Retake Interview' : 'Start Interview'}
                </span>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400 font-['Poppins']">Completion</span>
                <span className="text-purple-700 dark:text-purple-300 font-['Poppins']">60%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* Status Pills */}
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30 text-xs font-['Poppins']">
                2 Sections Complete
              </div>
              <div className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-500/30 text-xs font-['Poppins']">
                1 In Progress
              </div>
              <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-500/30 text-xs font-['Poppins']">
                1 Pending
              </div>
            </div>
          </div>
        </div>

        {/* Interview Sections */}
        {sections.map((section, index) => (
          <div key={index} className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {section.status === 'complete' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
                  ) : section.status === 'in-progress' ? (
                    <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                  )}
                  <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-['Poppins'] ${
                  section.status === 'complete' 
                    ? 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border border-green-300 dark:border-[#00FF9D]/30'
                    : section.status === 'in-progress'
                    ? 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-500/30'
                    : 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-500/30'
                }`}>
                  {section.status === 'complete' ? 'Complete' : section.status === 'in-progress' ? 'In Progress' : 'Pending'}
                </span>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {section.questions.map((item, qIndex) => (
                  <div key={qIndex} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-['Poppins']">{item.q}</div>
                    <div className={`text-gray-900 dark:text-white ${item.incomplete ? 'italic text-gray-500 dark:text-gray-500' : ''}`}>
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* AI Insights */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 dark:text-white">AI Agent Insights</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Based on your interview answers</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-purple-100 dark:bg-purple-600/10 border border-purple-300 dark:border-purple-500/20">
                <p className="text-gray-900 dark:text-white text-sm">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">Strategy Recommendation:</span> Focus on long-tail keywords for vintage fashion. Your target audience suggests content around "sustainable vintage clothing" and "vintage styling tips".
                </p>
              </div>
              <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-600/10 border border-blue-300 dark:border-blue-500/20">
                <p className="text-gray-900 dark:text-white text-sm">
                  <span className="text-blue-700 dark:text-blue-400 font-semibold">Content Opportunity:</span> Your competitors are ranking for "vintage denim guide" and "how to authenticate vintage clothing" - I can create content to compete in these spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Wizard Modal */}
      {showWizard && (
        <InterviewWizard 
          onClose={() => setShowWizard(false)} 
          onComplete={handleCompleteInterview}
        />
      )}
    </DashboardLayout>
  );
}