import { Sparkles } from 'lucide-react';

const calendarData = [
  { day: 1, empty: true },
  { day: 2, empty: true },
  { day: 3, empty: true },
  { day: 4, empty: true },
  { day: 5, empty: true },
  { day: 6, title: 'Summer Fashion Tips', status: 'published', color: 'green' },
  { day: 7, empty: false },
  { day: 8, empty: false },
  { day: 9, title: '5 Summer Trends', status: 'draft', color: 'yellow', isToday: true },
  { day: 10, empty: false },
  { day: 11, empty: false },
  { day: 12, empty: false },
  { day: 13, empty: false },
  { day: 14, title: 'How to choose jeans', status: 'scheduled', color: 'green', aiGenerated: true },
  { day: 15, empty: false },
  { day: 16, empty: false },
  { day: 17, empty: false },
  { day: 18, empty: false },
  { day: 19, title: 'Accessories Guide', status: 'idea', color: 'gray' },
  { day: 20, empty: false },
  { day: 21, empty: false },
  { day: 22, empty: false },
  { day: 23, title: 'Vintage Style Essentials', status: 'scheduled', color: 'green', aiGenerated: true },
  { day: 24, empty: false },
  { day: 25, empty: false },
  { day: 26, empty: false },
  { day: 27, empty: false },
  { day: 28, empty: false },
  { day: 29, empty: false },
  { day: 30, empty: false },
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarView() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border-green-300 dark:border-[#00FF9D]/30';
      case 'scheduled':
        return 'bg-green-100 dark:bg-[#00FF9D]/20 text-green-700 dark:text-[#00FF9D] border-green-300 dark:border-[#00FF9D]/30';
      case 'draft':
        return 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/30';
      case 'idea':
        return 'bg-gray-100 dark:bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-500/30 border-dashed';
      default:
        return 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30';
    }
  };

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
      {/* Ambient Glow - Dark mode only */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 rounded-xl blur opacity-50 dark:opacity-50"></div>
      
      <div className="relative">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 dark:text-white">January 2026</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all">
              Next
            </button>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm font-['Poppins'] text-gray-600 dark:text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarData.map((item, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg border transition-all ${
                item.empty
                  ? 'bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5'
                  : item.isToday
                  ? 'bg-purple-100 dark:bg-purple-600/20 border-purple-400 dark:border-purple-500/40 ring-2 ring-purple-400 dark:ring-purple-500/30'
                  : 'bg-white dark:bg-black/40 border-purple-200 dark:border-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/30'
              }`}
            >
              <div className="h-full p-2 flex flex-col">
                {/* Day Number */}
                <div className={`text-xs mb-1 ${item.isToday ? 'text-purple-700 dark:text-purple-300 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                  {item.day}
                </div>

                {/* Content */}
                {item.title && (
                  <div className="flex-1 flex flex-col">
                    <div className={`text-xs px-2 py-1 rounded border mb-1 ${getStatusBadge(item.status)}`}>
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-['Poppins'] truncate text-[10px]">
                          {item.status}
                        </span>
                        {item.aiGenerated && (
                          <Sparkles className="w-2.5 h-2.5 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-800 dark:text-white/90 leading-tight line-clamp-3">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-purple-200 dark:border-purple-500/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-yellow-200 dark:bg-yellow-500/30 border border-yellow-400 dark:border-yellow-500/50"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-['Poppins']">Draft</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-200 dark:bg-[#00FF9D]/30 border border-green-400 dark:border-[#00FF9D]/50"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-['Poppins']">Scheduled/Published</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-200 dark:bg-gray-500/20 border border-dashed border-gray-400 dark:border-gray-500/50"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-['Poppins']">Idea Placeholder</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-['Poppins']">AI Generated</span>
          </div>
        </div>
      </div>
    </div>
  );
}