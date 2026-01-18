import { WebsiteLayout } from '@/app/components/website-layout';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Twitter, Facebook, Linkedin, Tag } from 'lucide-react';
import logoIcon from 'figma:asset/d7d7c553500bdb2c1ae9324cd780f218f43d0d0a.png';

export function BlogPost({ postId, onNavigate }: { postId: number; onNavigate?: (page: string, id?: number) => void }) {
  // In a real app, you'd fetch this data based on postId
  const post = {
    id: postId,
    title: 'How AI is Revolutionizing SEO in 2026',
    category: 'AI & Automation',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Head of SEO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    tags: ['AI', 'SEO', 'Automation', 'Future'],
    content: `
      <p>The SEO landscape has undergone a dramatic transformation in recent years, and 2026 marks a pivotal moment in this evolution. Autonomous AI agents are no longer a futuristic concept—they're here, and they're fundamentally changing how businesses approach search engine optimization.</p>

      <h2>The Rise of Autonomous SEO Agents</h2>
      <p>Traditional SEO required constant manual effort: keyword research, content creation, technical audits, link building, and monitoring. It was time-consuming, expensive, and required specialized expertise. Enter AI agents—sophisticated systems that can handle all these tasks autonomously, continuously learning and adapting to algorithm changes.</p>

      <p>These AI agents operate 24/7, analyzing millions of data points to make informed decisions about your SEO strategy. They can:</p>
      <ul>
        <li>Identify emerging keyword opportunities before your competitors</li>
        <li>Generate and optimize content at scale while maintaining quality</li>
        <li>Automatically fix technical SEO issues as they arise</li>
        <li>Build high-quality backlinks through strategic outreach</li>
        <li>Adapt strategies in real-time based on performance data</li>
      </ul>

      <h2>The Impact on Content Creation</h2>
      <p>One of the most significant changes has been in content creation. AI agents can now produce high-quality, SEO-optimized content that rivals human-written articles. But it's not just about quantity—these systems understand context, user intent, and semantic relationships in ways that were impossible just a few years ago.</p>

      <blockquote>
        "The future of SEO isn't about replacing humans—it's about augmenting human creativity with AI efficiency. The best results come from this symbiotic relationship."
      </blockquote>

      <h2>Technical SEO Automation</h2>
      <p>Technical SEO has always been one of the most complex aspects of optimization. Issues like site speed, mobile responsiveness, structured data, and crawlability require constant attention. AI agents excel at this, continuously monitoring your site and automatically implementing fixes.</p>

      <p>For example, if an agent detects that a recent update has slowed down your page load times, it can automatically optimize images, implement better caching strategies, or adjust resource loading priorities—all without human intervention.</p>

      <h2>The Human Element Still Matters</h2>
      <p>Despite all these advancements, human oversight remains crucial. AI agents are tools that amplify human expertise, not replace it. The most successful SEO strategies in 2026 combine AI automation with human creativity, strategic thinking, and brand understanding.</p>

      <h2>What This Means for Your Business</h2>
      <p>If you're not leveraging AI for SEO yet, you're likely falling behind competitors who are. The gap between AI-powered and manual SEO strategies is widening every day. Businesses using autonomous AI agents are seeing:</p>
      <ul>
        <li>200-400% increases in organic traffic within 6-12 months</li>
        <li>50-70% reduction in SEO-related costs</li>
        <li>Faster time-to-market for new content and campaigns</li>
        <li>More consistent rankings across search engines</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we move further into 2026 and beyond, AI's role in SEO will only grow. We're seeing early signs of even more advanced capabilities: predictive SEO that anticipates algorithm changes, cross-platform optimization that spans search engines and social media, and personalized content that adapts to individual user preferences.</p>

      <p>The question isn't whether to adopt AI for SEO—it's how quickly you can integrate these tools into your strategy. The sooner you start, the bigger your competitive advantage.</p>

      <h2>Conclusion</h2>
      <p>AI is revolutionizing SEO by making it more efficient, effective, and accessible. Autonomous agents handle the heavy lifting while humans focus on strategy and creativity. This partnership between human expertise and AI capability is defining the future of digital marketing.</p>

      <p>The businesses that thrive in this new era will be those that embrace these tools while maintaining the human touch that makes their brand unique. It's an exciting time to be in SEO, and we're just getting started.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: '10 SEO Mistakes That Are Killing Your Rankings',
      category: 'SEO Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    },
    {
      id: 3,
      title: 'The Complete Guide to Technical SEO Audits',
      category: 'Technical SEO',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
    },
    {
      id: 4,
      title: 'Content Marketing Strategies That Actually Work',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80'
    }
  ];

  return (
    <WebsiteLayout currentPage="blog-post" onNavigate={onNavigate}>
      {/* Back Button */}
      <div className="container mx-auto max-w-4xl px-6 pt-8">
        <button
          onClick={() => onNavigate?.('blog')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-['Poppins']">Back to Blog</span>
        </button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto max-w-4xl px-6 py-12">
        {/* Category & Meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>

        {/* Author & Actions */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-purple-200 dark:border-purple-500/20">
          <div className="flex items-center gap-4">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 dark:border-purple-500/20"
            />
            <div>
              <div className="font-['Poppins'] font-semibold text-gray-900 dark:text-white">{post.author.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 flex items-center justify-center transition-colors">
              <Bookmark className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 flex items-center justify-center transition-colors">
              <Share2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur opacity-50"></div>
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-['Poppins'] prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-ul:my-6 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic
            prose-blockquote:bg-purple-50 dark:prose-blockquote:bg-purple-900/10 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
            prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-purple-200 dark:border-purple-500/20">
          <div className="flex items-center gap-3 flex-wrap">
            <Tag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-['Poppins']"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20">
          <h3 className="font-['Poppins'] font-semibold text-gray-900 dark:text-white mb-4">Share this article</h3>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="text-sm font-semibold">Twitter</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-semibold">Facebook</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-semibold">LinkedIn</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto max-w-4xl px-6 py-12 border-t border-purple-200 dark:border-purple-500/20">
        <h2 className="font-['Poppins'] text-3xl font-bold mb-8 text-gray-900 dark:text-white">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <article 
              key={relatedPost.id}
              onClick={() => onNavigate?.('blog-post', relatedPost.id)}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/5 border border-purple-200 dark:border-purple-500/20 h-full overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-['Poppins'] font-bold mt-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </WebsiteLayout>
  );
}