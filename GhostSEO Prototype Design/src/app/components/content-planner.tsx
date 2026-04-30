import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, List, CalendarDays, ChevronDown } from 'lucide-react';
import { DashboardLayout } from '@/app/components/dashboard-layout';
import { CalendarView } from '@/app/components/calendar-view';
import { RecentDrafts } from '@/app/components/recent-drafts';

export function ContentPlanner() {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Content & Editorial Calendar" breadcrumb="Content Planner" agentContext="Content Planner">
      <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your content strategy with AI assistance</p>

      {/* Top Action Bar */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        {/* AI Wizard Button */}
        <button 
          onClick={() => navigate('/ai-content-wizard')}
          className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <Sparkles className="relative w-5 h-5 text-white" />
          <span className="relative text-white font-['Poppins'] font-semibold">
            Launch AI Content Wizard
          </span>
        </button>

        <div className="flex-1"></div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 rounded-lg p-1">
          <button
            onClick={() => setViewMode('calendar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
              viewMode === 'calendar'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm font-medium">Calendar</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
              viewMode === 'list'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <List className="w-4 h-4" />
            <span className="text-sm font-medium">List</span>
          </button>
        </div>

        {/* Filter */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all">
          <span className="text-sm font-['Poppins']">Status: All</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Calendar/List View */}
      {viewMode === 'calendar' ? <CalendarView /> : <div className="text-gray-600 dark:text-gray-400">List view coming soon...</div>}

      {/* Recent Drafts */}
      <div className="mt-8">
        <RecentDrafts />
      </div>
    </DashboardLayout>
  );
}