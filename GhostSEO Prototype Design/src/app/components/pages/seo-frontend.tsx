import { DashboardLayout } from '@/app/components/dashboard-layout';
import { Monitor, CheckCircle2, AlertTriangle, XCircle, FileText, Image as ImageIcon } from 'lucide-react';

export function SEOFrontend() {
  const issues = [
    { category: 'Meta Tags', severity: 'high', count: 3, description: '3 pages missing meta descriptions' },
    { category: 'Images', severity: 'medium', count: 12, description: '12 images missing alt text' },
    { category: 'Headings', severity: 'low', count: 5, description: '5 pages with H1 tag issues' },
    { category: 'Links', severity: 'medium', count: 8, description: '8 broken internal links detected' },
  ];

  const pages = [
    { url: '/vintage-collection', title: 'Vintage Collection', metaDesc: true, h1: true, images: 8, altText: 7, score: 92 },
    { url: '/blog/summer-trends', title: '5 Summer Trends', metaDesc: true, h1: true, images: 5, altText: 5, score: 95 },
    { url: '/about', title: 'About Us', metaDesc: false, h1: true, images: 3, altText: 2, score: 74 },
    { url: '/contact', title: 'Contact', metaDesc: true, h1: true, images: 1, altText: 1, score: 88 },
    { url: '/blog/vintage-denim', title: 'Vintage Denim Guide', metaDesc: true, h1: false, images: 10, altText: 8, score: 81 },
  ];

  return (
    <DashboardLayout title="SEO Health - Frontend" breadcrumb="SEO Frontend" agentContext="Frontend SEO">
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-green-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-[#00FF9D]/20 border border-green-300 dark:border-[#00FF9D]/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-[#00FF9D]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-orange-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Critical Issues</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-yellow-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/5 to-amber-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">20</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Warnings</div>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-['Poppins'] mb-1">142</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pages Analyzed</div>
            </div>
          </div>
        </div>

        {/* Issue Categories */}
        <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white">Issue Categories</h3>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                Auto-Fix All
              </button>
            </div>

            <div className="space-y-3">
              {issues.map((issue, index) => (
                <div key={index} className="p-4 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        issue.severity === 'high' 
                          ? 'bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30'
                          : issue.severity === 'medium'
                          ? 'bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30'
                          : 'bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30'
                      }`}>
                        {issue.severity === 'high' ? (
                          <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        ) : (
                          <AlertTriangle className={`w-5 h-5 ${issue.severity === 'medium' ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-['Poppins'] font-bold text-gray-900 dark:text-white">{issue.category}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-['Poppins'] ${
                            issue.severity === 'high'
                              ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-500/30'
                              : issue.severity === 'medium'
                              ? 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-500/30'
                              : 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30'
                          }`}>
                            {issue.severity}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{issue.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white font-['Poppins']">{issue.count}</div>
                    </div>
                    <button className="ml-4 px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-600/30 transition-all text-sm font-semibold">
                      Fix
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page-by-Page Analysis */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-blue-200 dark:border-purple-500/20 p-6 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-6">Page Analysis</h3>
            
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 font-['Poppins'] border-b border-purple-200 dark:border-purple-500/10">
                <div className="col-span-3">Page</div>
                <div className="col-span-2 text-center">Meta Desc</div>
                <div className="col-span-2 text-center">H1 Tag</div>
                <div className="col-span-2 text-center">Images</div>
                <div className="col-span-2 text-center">Alt Text</div>
                <div className="col-span-1 text-right">Score</div>
              </div>

              {/* Rows */}
              {pages.map((page, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all"
                >
                  <div className="col-span-3 flex flex-col">
                    <span className="text-gray-900 dark:text-white text-sm font-medium">{page.title}</span>
                    <span className="text-gray-500 dark:text-gray-500 text-xs font-['Poppins']">{page.url}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    {page.metaDesc ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-[#00FF9D]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    )}
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    {page.h1 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-[#00FF9D]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    )}
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className="text-gray-900 dark:text-white font-['Poppins'] text-sm">{page.images}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`font-['Poppins'] text-sm ${
                      page.altText === page.images ? 'text-green-600 dark:text-[#00FF9D]' : 'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {page.altText}/{page.images}
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center justify-end">
                    <span className={`text-lg font-bold font-['Poppins'] ${
                      page.score >= 90 ? 'text-green-600 dark:text-[#00FF9D]' : page.score >= 75 ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {page.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}