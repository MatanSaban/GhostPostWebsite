import { useState } from 'react';
import { WebsiteLayout } from '@/app/components/website-layout';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export function BlogPage({ onNavigate }: { onNavigate?: (page: string, id?: number) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'SEO Strategy', 'Content Marketing', 'Technical SEO', 'AI & Automation', 'Case Studies'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How AI is Revolutionizing SEO in 2026',
      excerpt: 'Discover how autonomous AI agents are transforming the SEO landscape and what it means for your business growth strategy.',
      category: 'AI & Automation',
      date: 'Jan 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['AI', 'SEO', 'Automation'],
      featured: true
    },
    {
      id: 2,
      title: '10 SEO Mistakes That Are Killing Your Rankings',
      excerpt: 'Learn about the most common SEO mistakes that could be preventing your website from reaching the top of search results.',
      category: 'SEO Strategy',
      date: 'Jan 12, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['SEO', 'Rankings', 'Strategy']
    },
    {
      id: 3,
      title: 'The Complete Guide to Technical SEO Audits',
      excerpt: 'A comprehensive walkthrough of performing technical SEO audits to identify and fix critical issues on your website.',
      category: 'Technical SEO',
      date: 'Jan 10, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Technical SEO', 'Audit', 'Guide']
    },
    {
      id: 4,
      title: 'Content Marketing Strategies That Actually Work',
      excerpt: 'Proven content marketing strategies that drive traffic, engagement, and conversions in today\'s competitive digital landscape.',
      category: 'Content Marketing',
      date: 'Jan 8, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tags: ['Content', 'Marketing', 'Strategy']
    },
    {
      id: 5,
      title: 'Case Study: 300% Traffic Increase in 6 Months',
      excerpt: 'How we helped a e-commerce client achieve a 300% increase in organic traffic using Ghost Post\'s AI-powered SEO automation.',
      category: 'Case Studies',
      date: 'Jan 5, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Case Study', 'Success Story', 'Results'],
      featured: true
    },
    {
      id: 6,
      title: 'Understanding Core Web Vitals and Page Speed',
      excerpt: 'Everything you need to know about Core Web Vitals and how to optimize your website for better performance and rankings.',
      category: 'Technical SEO',
      date: 'Jan 3, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
      tags: ['Performance', 'Core Web Vitals', 'Speed']
    },
    {
      id: 7,
      title: 'Link Building Strategies for 2026',
      excerpt: 'Modern link building strategies that work in 2026, including white-hat techniques and automation tools.',
      category: 'SEO Strategy',
      date: 'Dec 28, 2025',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      tags: ['Link Building', 'Backlinks', 'SEO']
    },
    {
      id: 8,
      title: 'How to Create SEO-Optimized Content at Scale',
      excerpt: 'Learn how to produce high-quality, SEO-optimized content at scale using AI tools and proven content frameworks.',
      category: 'Content Marketing',
      date: 'Dec 25, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80',
      tags: ['Content', 'AI', 'Scale']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <WebsiteLayout currentPage="blog" onNavigate={onNavigate}>
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-6 border-b border-purple-200/30 dark:border-purple-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                Ghost Post
              </span>{' '}
              Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Insights, strategies, and stories about AI-powered SEO and autonomous marketing automation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-['Poppins']"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-[73px] z-40 backdrop-blur-md bg-white/80 dark:bg-black/40 border-b border-purple-200/30 dark:border-purple-500/10 py-4 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-['Poppins'] whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-purple-100 dark:bg-purple-900/20 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && !searchQuery && (
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer" onClick={() => onNavigate?.('blog-post', featuredPost.id)}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h2 className="font-['Poppins'] text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All' || searchQuery).map((post) => (
              <article 
                key={post.id}
                onClick={() => onNavigate?.('blog-post', post.id)}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-['Poppins'] text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 pt-4 border-t border-purple-200 dark:border-purple-500/20">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </main>
    </WebsiteLayout>
  );
}