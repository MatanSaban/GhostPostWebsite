import { useState } from 'react';
import { DashboardLayout } from '@/app/components/dashboard-layout';
import { 
  Sparkles, 
  Target, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  Settings as SettingsIcon,
  ChevronRight,
  Check,
  ArrowLeft,
  ArrowRight,
  Zap
} from 'lucide-react';

export function AIContentWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: '',
    keywords: '',
    contentType: 'blog-post',
    tone: 'professional',
    length: 'medium',
    targetAudience: '',
    publishDate: '',
    includeImages: true,
    seoOptimize: true,
    autoPublish: false,
  });

  const steps = [
    { id: 1, name: 'Topic & Keywords', icon: Target },
    { id: 2, name: 'Content Settings', icon: SettingsIcon },
    { id: 3, name: 'Scheduling', icon: Calendar },
    { id: 4, name: 'Review & Launch', icon: Sparkles },
  ];

  const contentTypes = [
    { id: 'blog-post', name: 'Blog Post', description: 'Long-form article optimized for SEO' },
    { id: 'product-page', name: 'Product Page', description: 'E-commerce product description' },
    { id: 'landing-page', name: 'Landing Page', description: 'Conversion-focused landing page' },
    { id: 'social-media', name: 'Social Media', description: 'Short-form social content' },
  ];

  const toneOptions = [
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
    { id: 'friendly', name: 'Friendly' },
    { id: 'authoritative', name: 'Authoritative' },
    { id: 'conversational', name: 'Conversational' },
  ];

  const lengthOptions = [
    { id: 'short', name: 'Short', words: '300-500 words' },
    { id: 'medium', name: 'Medium', words: '800-1,200 words' },
    { id: 'long', name: 'Long', words: '1,500-2,500 words' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting wizard:', formData);
    // Handle form submission
  };

  return (
    <DashboardLayout title="AI Content Wizard" breadcrumb="Content Wizard" agentContext="AI Content Creation">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Progress Steps */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      currentStep === step.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50'
                        : currentStep > step.id
                        ? 'bg-green-500 dark:bg-[#00FF9D] text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className={`text-sm font-['Poppins'] text-center ${
                      currentStep >= step.id
                        ? 'text-gray-900 dark:text-white font-semibold'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-4 rounded-full transition-all ${
                      currentStep > step.id
                        ? 'bg-green-500 dark:bg-[#00FF9D]'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-8 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative space-y-6">
            
            {/* Step 1: Topic & Keywords */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Topic & Keywords</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tell us what you want to write about</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                    Main Topic or Title
                  </label>
                  <input
                    type="text"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder="e.g., Complete Guide to Vintage Denim Care"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                    Target Keywords (comma separated)
                  </label>
                  <textarea
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="e.g., vintage denim, denim care, how to wash vintage jeans"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    💡 Tip: Include 3-5 relevant keywords for optimal SEO
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    placeholder="e.g., Vintage fashion enthusiasts, collectors"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Content Settings */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center">
                    <SettingsIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Content Settings</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Customize your content preferences</p>
                  </div>
                </div>

                {/* Content Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-['Poppins']">
                    Content Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contentTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData({ ...formData, contentType: type.id })}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.contentType === type.id
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-purple-500/20 bg-gray-50 dark:bg-black/40 hover:border-purple-300 dark:hover:border-purple-500/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className={`w-5 h-5 ${
                            formData.contentType === type.id
                              ? 'text-purple-600 dark:text-purple-400'
                              : 'text-gray-600 dark:text-gray-400'
                          }`} />
                          <span className={`font-semibold font-['Poppins'] ${
                            formData.contentType === type.id
                              ? 'text-purple-700 dark:text-purple-300'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {type.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-['Poppins']">
                    Writing Tone
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {toneOptions.map((tone) => (
                      <button
                        key={tone.id}
                        onClick={() => setFormData({ ...formData, tone: tone.id })}
                        className={`px-4 py-2 rounded-lg border transition-all font-['Poppins'] ${
                          formData.tone === tone.id
                            ? 'border-purple-500 bg-purple-500 text-white'
                            : 'border-gray-300 dark:border-purple-500/20 bg-gray-50 dark:bg-black/40 text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-500/40'
                        }`}
                      >
                        {tone.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-['Poppins']">
                    Content Length
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {lengthOptions.map((length) => (
                      <button
                        key={length.id}
                        onClick={() => setFormData({ ...formData, length: length.id })}
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          formData.length === length.id
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-purple-500/20 bg-gray-50 dark:bg-black/40 hover:border-purple-300 dark:hover:border-purple-500/40'
                        }`}
                      >
                        <div className={`font-semibold font-['Poppins'] mb-1 ${
                          formData.length === length.id
                            ? 'text-purple-700 dark:text-purple-300'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {length.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{length.words}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Scheduling */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Publishing Schedule</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">When should this content be published?</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-['Poppins']">
                    Publish Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.publishDate}
                    onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/60 border border-gray-300 dark:border-purple-500/20 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-500/20 transition-all font-['Poppins']"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Leave empty to create as draft
                  </p>
                </div>

                {/* Additional Options */}
                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-purple-500/20">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <div>
                        <span className="text-gray-900 dark:text-white font-semibold block">Generate AI Images</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Include relevant images in your content</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setFormData({ ...formData, includeImages: !formData.includeImages })}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        formData.includeImages ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                    >
                      <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                        formData.includeImages ? 'right-0.5' : 'left-0.5'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <div>
                        <span className="text-gray-900 dark:text-white font-semibold block">SEO Optimization</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Optimize for search engines automatically</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setFormData({ ...formData, seoOptimize: !formData.seoOptimize })}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        formData.seoOptimize ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                    >
                      <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                        formData.seoOptimize ? 'right-0.5' : 'left-0.5'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <div>
                        <span className="text-gray-900 dark:text-white font-semibold block">Auto-Publish</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Publish automatically when ready</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setFormData({ ...formData, autoPublish: !formData.autoPublish })}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        formData.autoPublish ? 'bg-green-500 dark:bg-[#00FF9D]' : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                    >
                      <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                        formData.autoPublish ? 'right-0.5' : 'left-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Launch */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">Review & Launch</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Confirm your settings and start creating</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Summary Cards */}
                  <div className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-['Poppins']">Topic & Keywords</h3>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Topic:</strong> {formData.topic || 'Not specified'}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Keywords:</strong> {formData.keywords || 'Not specified'}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Audience:</strong> {formData.targetAudience || 'Not specified'}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-black/40 border border-blue-200 dark:border-blue-500/10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-['Poppins']">Content Settings</h3>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Type:</strong> {contentTypes.find(t => t.id === formData.contentType)?.name}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Tone:</strong> {toneOptions.find(t => t.id === formData.tone)?.name}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Length:</strong> {lengthOptions.find(l => l.id === formData.length)?.name}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-green-50 dark:bg-black/40 border border-green-200 dark:border-green-500/10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-['Poppins']">Publishing Options</h3>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Publish Date:</strong> {formData.publishDate || 'Save as draft'}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-sm">
                        {formData.includeImages ? '✅' : '❌'} AI Images
                      </span>
                      <span className="text-sm">
                        {formData.seoOptimize ? '✅' : '❌'} SEO Optimization
                      </span>
                      <span className="text-sm">
                        {formData.autoPublish ? '✅' : '❌'} Auto-Publish
                      </span>
                    </div>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    className="w-full group relative px-8 py-4 rounded-lg overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <Sparkles className="relative w-6 h-6 text-white" />
                    <span className="relative text-white font-['Poppins'] text-lg font-bold">
                      Launch AI Content Creation
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 1
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-900/30'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          {currentStep < steps.length && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
