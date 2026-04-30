import { CheckCircle, FileText, Edit3, Link } from 'lucide-react';

const actions = [
  {
    icon: FileText,
    title: 'Published Article',
    description: "Summer Trends 2026",
    time: '2 minutes ago',
    color: '#00FF9D'
  },
  {
    icon: Edit3,
    title: 'Optimized Meta Tags',
    description: 'About Page',
    time: '15 minutes ago',
    color: '#7B2CBF'
  },
  {
    icon: Link,
    title: 'Fixed Broken Link',
    description: '/products/old-item',
    time: '1 hour ago',
    color: '#00FF9D'
  },
  {
    icon: CheckCircle,
    title: 'Updated Sitemap',
    description: '342 pages indexed',
    time: '3 hours ago',
    color: '#7B2CBF'
  },
];

export function RecentActions() {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9D]/20 to-[#7B2CBF]/20 rounded-xl blur opacity-30"></div>
      
      <div className="relative">
        <div className="mb-6">
          <h3 className="font-['Poppins'] text-xl font-bold text-white mb-1">Recent Actions</h3>
          <p className="text-sm text-gray-400 font-['Poppins']">Automated tasks by Ghost Agent</p>
        </div>

        <div className="space-y-3">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-all group"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${action.color}15`, border: `1px solid ${action.color}30` }}
              >
                <action.icon className="w-5 h-5" style={{ color: action.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium mb-1 group-hover:text-[#00FF9D] transition-colors">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-400 font-['Poppins'] truncate">
                  {action.description}
                </p>
              </div>
              <span className="text-xs text-gray-500 font-['Poppins'] flex-shrink-0">
                {action.time}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all font-['Poppins']">
          View All Actions
        </button>
      </div>
    </div>
  );
}
