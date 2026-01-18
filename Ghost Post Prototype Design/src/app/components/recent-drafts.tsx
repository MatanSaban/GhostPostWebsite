import { FileText, Clock, TrendingUp } from 'lucide-react';

const drafts = [
  {
    title: '5 Summer Trends to Watch in 2026',
    seoScore: 88,
    status: 'Draft',
    lastEdited: '2 hours ago',
    statusColor: 'yellow'
  },
  {
    title: 'The Complete Guide to Vintage Clothing',
    seoScore: 94,
    status: 'Ready to Publish',
    lastEdited: '1 day ago',
    statusColor: 'green'
  },
  {
    title: 'How to Style Denim for Every Season',
    seoScore: 76,
    status: 'Needs Optimization',
    lastEdited: '3 days ago',
    statusColor: 'orange'
  },
  {
    title: 'Sustainable Fashion: A Beginner\'s Guide',
    seoScore: 91,
    status: 'Review',
    lastEdited: '5 days ago',
    statusColor: 'blue'
  },
];

export function RecentDrafts() {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-[#00FF9D]';
    if (score >= 75) return 'text-blue-600 dark:text-blue-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border-green-300 dark:border-[#00FF9D]/30';
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/30';
      case 'orange':
        return 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-500/30';
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30';
      default:
        return 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30';
    }
  };

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
      {/* Ambient Glow - Dark mode only */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-['Poppins'] text-xl font-bold text-gray-900 dark:text-white mb-1">Recent Drafts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-['Poppins']">Your latest content work</p>
          </div>
          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-['Poppins']">
            View All →
          </button>
        </div>

        {/* Drafts Table */}
        <div className="space-y-3">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 font-['Poppins'] border-b border-purple-200 dark:border-purple-500/10">
            <div className="col-span-5">Title</div>
            <div className="col-span-2 text-center">SEO Score</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2 text-right">Last Edited</div>
          </div>

          {/* Table Rows */}
          {drafts.map((draft, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all group cursor-pointer"
            >
              {/* Title */}
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  {draft.title}
                </span>
              </div>

              {/* SEO Score */}
              <div className="col-span-2 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${getScoreColor(draft.seoScore)}`} />
                  <span className={`text-lg font-bold font-['Poppins'] ${getScoreColor(draft.seoScore)}`}>
                    {draft.seoScore}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">/100</span>
                </div>
              </div>

              {/* Status */}
              <div className="col-span-3 flex items-center">
                <span className={`px-3 py-1 rounded-md text-xs font-medium border ${getStatusColor(draft.statusColor)}`}>
                  {draft.status}
                </span>
              </div>

              {/* Last Edited */}
              <div className="col-span-2 flex items-center justify-end gap-2">
                <Clock className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-['Poppins']">
                  {draft.lastEdited}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}