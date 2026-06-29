import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap,
  Users,
  Award,
  Clock,
  Music,
  Mic,
  Video,
  BookOpen,
  Headphones,
  Palette,
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from seasoned professionals with decades of performance and teaching experience.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Personalized attention with a maximum of 8 students per class for optimal learning.',
    color: 'from-gold-500 to-gold-600',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Earn internationally recognized certificates upon successful completion of courses.',
    color: 'from-success-500 to-success-600',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Morning, afternoon, evening, and weekend classes to fit your busy lifestyle.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Video,
    title: 'Modern Equipment',
    description: 'Practice on professional-grade instruments and recording equipment.',
    color: 'from-warning-500 to-warning-600',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'From foundational theory to advanced performance techniques and music production.',
    color: 'from-primary-500 to-gold-500',
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="section-heading mb-6">
            Excellence in <span className="gradient-text">Music Education</span>
          </h2>
          <p className="section-subheading">
            At Resonance Music Institute, we combine passion, expertise, and modern teaching methods
            to deliver an unmatched musical education experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-hover p-8 h-full group">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
