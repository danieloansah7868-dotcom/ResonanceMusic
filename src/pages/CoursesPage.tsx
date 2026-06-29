import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Clock, Star, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const courses = [
  {
    id: '1',
    name: 'Piano & Keyboard',
    slug: 'piano-keyboard',
    description: 'Master the piano from basics to advanced performance. Learn classical, contemporary, and worship styles with comprehensive curriculum.',
    full_description: 'Our Piano & Keyboard program is designed to take you from complete beginner to confident performer. You will learn proper technique, music reading, chord progressions, and performance skills. The curriculum covers classical, contemporary, gospel, and worship music styles.',
    duration_weeks: 24,
    level: 'beginner' as const,
    price: 1500,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 45,
    rating: 4.9,
    features: ['One-on-one lessons', 'Practice room access', 'Certificate upon completion', 'Recording opportunities', 'Performance workshops'],
  },
  {
    id: '2',
    name: 'Guitar Mastery',
    slug: 'guitar',
    description: 'From acoustic to electric, learn chords, scales, fingerpicking, and lead guitar techniques for various genres.',
    full_description: 'Whether you want to strum acoustic songs or shred on electric guitar, this comprehensive program covers it all. Learn chords, scales, music theory, fingerpicking, and lead techniques.',
    duration_weeks: 20,
    level: 'intermediate' as const,
    price: 1200,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 38,
    rating: 4.8,
    features: ['Acoustic & Electric techniques', 'Group jam sessions', 'Performance training', 'Songwriting basics', 'Certificate upon completion'],
  },
  {
    id: '3',
    name: 'Drum Performance',
    slug: 'drums',
    description: 'Learn rhythm patterns, fills, and techniques for various genres including gospel, jazz, and contemporary music.',
    full_description: 'Drum Performance covers fundamental rhythm concepts, stick control, and coordination. Learn to play gospel, jazz, contemporary, and traditional African rhythms.',
    duration_weeks: 16,
    level: 'beginner' as const,
    price: 1000,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 32,
    rating: 4.7,
    features: ['Professional drum kits', 'Practice pads provided', 'Play-along tracks', 'Band integration', 'Certificate upon completion'],
  },
  {
    id: '4',
    name: 'Vocal Training',
    slug: 'vocal',
    description: 'Develop your voice, breathing techniques, pitch accuracy, and performance confidence.',
    full_description: 'Our Vocal Training program helps you discover and develop your unique voice. Learn proper breathing, pitch control, vocal exercises, and performance techniques.',
    duration_weeks: 12,
    level: 'beginner' as const,
    price: 800,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 56,
    rating: 4.9,
    features: ['Breathing techniques', 'Vocal exercises', 'Song interpretation', 'Stage presence', 'Certificate upon completion'],
  },
  {
    id: '5',
    name: 'Music Theory',
    slug: 'music-theory',
    description: 'Understand the building blocks of music including scales, intervals, chords, and harmony.',
    full_description: 'Music Theory provides the foundation for all musical understanding. Learn to read and write music, understand chord progressions, and analyze musical compositions.',
    duration_weeks: 12,
    level: 'beginner' as const,
    price: 600,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 28,
    rating: 4.6,
    features: ['Music notation', 'Harmony analysis', 'Ear training', 'Composition basics', 'Certificate upon completion'],
  },
  {
    id: '6',
    name: 'Music Production',
    slug: 'music-production',
    description: 'Learn to produce professional-quality music using industry-standard software and equipment.',
    full_description: 'Music Production teaches you to create, record, mix, and master music using professional digital audio workstations. Learn sound design, mixing techniques, and music business basics.',
    duration_weeks: 20,
    level: 'intermediate' as const,
    price: 2000,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 35,
    rating: 4.8,
    features: ['DAW training', 'Mixing & Mastering', 'Sound design', 'Studio access', 'Certificate upon completion'],
  },
  {
    id: '7',
    name: 'Bass Guitar',
    slug: 'bass-guitar',
    description: 'Master the fundamentals of bass playing including technique, theory, and groove.',
    full_description: 'Bass Guitar program covers proper technique, finger style and pick playing, groove and timing, and music theory specifically for bassists.',
    duration_weeks: 16,
    level: 'beginner' as const,
    price: 1000,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/169441/pexels-photo-169441.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 22,
    rating: 4.7,
    features: ['Technique Mastery', 'Groove training', 'Theory application', 'Band workshops', 'Certificate upon completion'],
  },
  {
    id: '8',
    name: 'Church Music',
    slug: 'church-music',
    description: 'Specialized training for worship musicians including song leading, arrangement, and ministry.',
    full_description: 'Church Music program prepares you for music ministry. Learn worship leading, song arrangement, choir direction, and practical ministry skills.',
    duration_weeks: 16,
    level: 'intermediate' as const,
    price: 1200,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 48,
    rating: 4.9,
    features: ['Worship leading', 'Song arrangement', 'Choir direction', 'Ministry ethics', 'Certificate upon completion'],
  },
  {
    id: '9',
    name: 'Ear Training',
    slug: 'ear-training',
    description: 'Develop your ability to identify pitches, intervals, chords, and rhythms by ear.',
    full_description: 'Ear Training develops your musical hearing. Learn to identify intervals, chords, scales, and rhythms. Essential skill for all musicians.',
    duration_weeks: 8,
    level: 'beginner' as const,
    price: 500,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 42,
    rating: 4.6,
    features: ['Interval recognition', 'Chord identification', 'Rhythm training', 'Dictation practice', 'Certificate upon completion'],
  },
  {
    id: '10',
    name: 'Sight Reading',
    slug: 'sight-reading',
    description: 'Learn to read and perform music at first sight with speed and accuracy.',
    full_description: 'Sight Reading teaches you to read and perform music notation fluently. Essential for session musicians and ensemble players.',
    duration_weeks: 8,
    level: 'intermediate' as const,
    price: 500,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 30,
    rating: 4.5,
    features: ['Note reading', 'Rhythm reading', 'Key signatures', 'Practice materials', 'Certificate upon completion'],
  },
  {
    id: '11',
    name: 'Song Writing',
    slug: 'songwriting',
    description: 'Learn the art and craft of writing memorable songs including lyrics, melody, and structure.',
    full_description: 'Song Writing covers lyric composition, melody creation, song structure, and the creative process. Turn your ideas into complete songs.',
    duration_weeks: 12,
    level: 'intermediate' as const,
    price: 800,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1672735/pexels-photo-1672735.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 25,
    rating: 4.8,
    features: ['Lyric writing', 'Melody creation', 'Song structure', 'Copyright basics', 'Certificate upon completion'],
  },
  {
    id: '12',
    name: 'Band Training',
    slug: 'band-training',
    description: 'Learn to play effectively in a band setting, including communication, arrangement, and performance.',
    full_description: 'Band Training prepares you for real-world ensemble playing. Learn communication, arrangement, rehearsal techniques, and live performance.',
    duration_weeks: 12,
    level: 'intermediate' as const,
    price: 1000,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1672735/pexels-photo-1672735.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 20,
    rating: 4.7,
    features: ['Ensemble playing', 'Communication', 'Arrangement', 'Live performance', 'Certificate upon completion'],
  },
];

const levels = ['all', 'beginner', 'intermediate', 'advanced'];
const sortOptions = ['popular', 'price-low', 'price-high', 'duration'];

const levelColors: Record<string, string> = {
  beginner: 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400',
  intermediate: 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400',
  advanced: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
};

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'duration':
          return a.duration_weeks - b.duration_weeks;
        default:
          return b.enrolled_count - a.enrolled_count;
      }
    });

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
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
              Our <span className="text-gold-400">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Discover your perfect program from our comprehensive selection of music courses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Levels</option>
                  {levels.slice(1).map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>

              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">No courses found matching your criteria.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link to={`/courses/${course.slug}`} className="group block h-full">
                    <div className="card-hover overflow-hidden h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={course.image_url}
                          alt={course.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>
                            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                          </span>
                        </div>
                        {course.certificate_offered && (
                          <div className="absolute top-4 right-4">
                            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration_weeks} weeks
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.enrolled_count}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-gold-600 dark:text-gold-400 font-bold text-lg">
                            GHS {course.price.toLocaleString()}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                            <span className="font-medium text-gray-900 dark:text-white">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link to={`/courses/${course.slug}`} className="group block">
                    <div className="card-hover overflow-hidden flex flex-col md:flex-row">
                      <div className="relative md:w-72 flex-shrink-0">
                        <img
                          src={course.image_url}
                          alt={course.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>
                              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                            </span>
                            {course.certificate_offered && (
                              <span className="flex items-center gap-1 text-xs text-gold-600 dark:text-gold-400">
                                <Award className="w-3 h-3" /> Certificate
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {course.description}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {course.duration_weeks} weeks
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {course.enrolled_count} students
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                              {course.rating}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-right">
                          <p className="text-gold-600 dark:text-gold-400 font-bold text-2xl mb-4">
                            GHS {course.price.toLocaleString()}
                          </p>
                          <Button variant="primary" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function CourseDetailPage() {
  const course = courses[0];

  return (
    <div className="pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={course.image_url}
                alt={course.name}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
              />

              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {course.name}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[course.level]}`}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <span className="text-gray-500">{course.enrolled_count} students enrolled</span>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-400">{course.full_description}</p>
              </div>

              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {course.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <p className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-4">
                  GHS {course.price.toLocaleString()}
                </p>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {course.duration_weeks} weeks program
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4" />
                    Certificate offered
                  </div>
                </div>
                <Link to="/admissions">
                  <Button variant="gold" className="w-full mb-3">
                    Enroll Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
