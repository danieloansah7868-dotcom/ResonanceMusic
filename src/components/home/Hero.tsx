import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Music, Mic, Drum, Guitar, Piano } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 video-bg">
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <img
          src="https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Music students performing"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Music className="w-16 h-16 text-gold-400" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Piano className="w-20 h-20 text-white" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Guitar className="w-14 h-14 text-gold-400" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Mic className="w-12 h-12 text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Enrollment Now Open for 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Unlock Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Musical
            </span>{' '}
            Potential
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Learn Keyboard, Piano, Guitar, Drums, Voice Training, Music Theory, Production,
            and Worship Music from Experienced Professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/admissions">
              <Button size="lg" variant="gold" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Enroll Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="bg-transparent border-white text-white hover:bg-white/10">
                Explore Courses
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Play className="w-10 h-10 text-gold-400" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">100+</p>
                <p className="text-white/60 text-sm">Video Lessons</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Drum className="w-10 h-10 text-gold-400" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">14</p>
                <p className="text-white/60 text-sm">Course Programs</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Guitar className="w-10 h-10 text-gold-400" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">500+</p>
                <p className="text-white/60 text-sm">Students Trained</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20"></div>
    </section>
  );
}
