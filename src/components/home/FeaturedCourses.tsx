import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Award, ArrowRight, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const courses = [
  {
    id: '1',
    name: 'Piano & Keyboard',
    slug: 'piano-keyboard',
    description: 'Master the piano from basics to advanced performance. Learn classical, contemporary, and worship styles.',
    duration_weeks: 24,
    level: 'beginner' as const,
    price: 1500,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 45,
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Guitar Mastery',
    slug: 'guitar',
    description: 'From acoustic to electric, learn chords, scales, fingerpicking, and lead guitar techniques.',
    duration_weeks: 20,
    level: 'intermediate' as const,
    price: 1200,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 38,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Drum Performance',
    slug: 'drums',
    description: 'Learn rhythm patterns, fills, and techniques for various genres including gospel, jazz, and contemporary.',
    duration_weeks: 16,
    level: 'beginner' as const,
    price: 1000,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 32,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Vocal Training',
    slug: 'vocal',
    description: 'Develop your voice, breathing techniques, pitch accuracy, and performance confidence.',
    duration_weeks: 12,
    level: 'beginner' as const,
    price: 800,
    certificate_offered: true,
    image_url: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    enrolled_count: 56,
    rating: 4.9,
  },
];

const levelColors: Record<string, string> = {
  beginner: 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400',
  intermediate: 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400',
  advanced: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
};

export function FeaturedCourses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Featured Courses
          </span>
          <h2 className="section-heading mb-6">
            Start Your <span className="gradient-text">Musical Journey</span>
          </h2>
          <p className="section-subheading">
            Explore our comprehensive course offerings designed to take you from beginner to professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/courses/${course.slug}`} className="group block">
                <div className="card-hover overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image_url}
                      alt={course.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>
                        {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                      </span>
                    </div>
                    {course.certificate_offered && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
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
                      <div>
                        <p className="text-gold-600 dark:text-gold-400 font-bold text-lg">GHS {course.price.toLocaleString()}</p>
                      </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/courses">
            <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Courses
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
