import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag, ChevronRight, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '5 Essential Practice Techniques for Piano Beginners',
    slug: 'piano-practice-techniques',
    excerpt: 'Master the art of effective piano practice with these proven techniques that will accelerate your learning journey.',
    content: `Learning to play the piano is a rewarding journey, but without proper practice techniques, progress can be slow and frustrating. Here are five essential practice techniques that every beginner should know...\n\n1. **Slow Practice**\nAlways start by practicing slowly. This allows your brain to process each note and movement correctly...\n\n2. **Section by Section**\nBreak your piece into smaller sections and master each before moving on...`,
    category: 'Piano Tips',
    tags: ['piano', 'practice', 'beginners', 'techniques'],
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Dr. Kwame Boateng',
    published_at: '2026-06-20',
    read_time: '5 min read',
  },
  {
    id: '2',
    title: 'Finding Your Unique Voice in Gospel Music',
    slug: 'gospel-music-voice',
    excerpt: 'Learn how to develop your distinctive sound and style in gospel music while staying true to the tradition.',
    content: `Gospel music has a rich heritage that spans generations. As a musician, finding your unique voice within this tradition requires both respect for the past and creative innovation...\n\nThe key is to first master the fundamentals of gospel music theory and practice...`,
    category: 'Worship Music',
    tags: ['gospel', 'worship', 'voice', 'style'],
    image_url: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Samuel Addo',
    published_at: '2026-06-15',
    read_time: '7 min read',
  },
  {
    id: '3',
    title: 'Understanding Music Theory: A Beginner\'s Guide',
    slug: 'music-theory-guide',
    excerpt: 'Demystify music theory with this comprehensive guide designed for complete beginners.',
    content: `Music theory often seems intimidating, but it doesn't have to be. At its core, music theory is simply the language we use to describe and understand music...\n\nLet's start with the basics: notes, scales, and intervals...`,
    category: 'Music Theory',
    tags: ['theory', 'beginners', 'fundamentals', 'scales'],
    image_url: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Efua Darko',
    published_at: '2026-06-10',
    read_time: '10 min read',
  },
  {
    id: '4',
    title: 'From Student to Studio: A Graduate\'s Success Story',
    slug: 'student-success-story',
    excerpt: 'Read how Kwame Asante transformed his passion for music into a flourishing career after graduating from Resonance.',
    content: `When Kwame Asante enrolled at Resonance Music Institute in 2018, he had no idea his journey would lead to opening his own recording studio...\n\n"My time at Resonance gave me the skills and confidence I needed..."`,
    category: 'Success Stories',
    tags: ['success', 'graduates', 'inspiration', 'career'],
    image_url: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Editorial Team',
    published_at: '2026-06-05',
    read_time: '6 min read',
  },
  {
    id: '5',
    title: 'Drumming for Worship: Rhythm in Gospel Services',
    slug: 'drumming-worship',
    excerpt: 'Discover the role of drums in modern gospel services and how to play with sensitivity and power.',
    content: `Drums in worship music require a unique approach. Unlike secular performances, worship drumming is about serving the congregation and enhancing the spiritual atmosphere...\n\nHere are key principles for worship drummers...`,
    category: 'Drums',
    tags: ['drums', 'worship', 'rhythm', 'gospel'],
    image_url: 'https://images.pexels.com/photos/174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Nana Yaw Osei',
    published_at: '2026-05-28',
    read_time: '8 min read',
  },
  {
    id: '6',
    title: 'The Art of Live Performance: Tips from the Stage',
    slug: 'live-performance-tips',
    excerpt: 'Get expert advice on overcoming stage fright and delivering memorable live performances.',
    content: `Performing live is one of the most rewarding aspects of being a musician. However, even seasoned performers can struggle with stage fright...\n\nHere are proven strategies to help you shine on stage...`,
    category: 'Performance',
    tags: ['performance', 'stage', 'confidence', 'tips'],
    image_url: 'https://images.pexels.com/photos/1672735/pexels-photo-1672735.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    author_name: 'Ama Asantewaa',
    published_at: '2026-05-20',
    read_time: '6 min read',
  },
];

const categories = ['All', 'Piano Tips', 'Worship Music', 'Music Theory', 'Success Stories', 'Drums', 'Performance'];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-gold-400">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Insights, tips, and stories from the world of music education.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="card-hover overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-gray-900 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span>{post.read_time}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{post.author_name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogPostPage() {
  const post = blogPosts[0];

  return (
    <div className="pt-20">
      <article className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="px-3 py-1 bg-gold-500 text-gray-900 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <span>{post.read_time}</span>
            </div>

            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            />

            <div className="prose dark:prose-invert prose-lg max-w-none">
              {post.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                <Tag className="w-5 h-5 text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
