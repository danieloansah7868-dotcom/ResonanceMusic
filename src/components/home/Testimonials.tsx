import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    student_name: 'Kwame Asante',
    course: 'Piano & Keyboard',
    testimonial: 'Resonance Music Institute transformed my musical journey. The instructors are incredibly patient and skilled. I went from knowing nothing about piano to playing in my church within 6 months!',
    rating: 5,
    image_url: 'https://images.pexels.com/photos/2379005/body-bokeh-close-up-person-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    id: '2',
    student_name: 'Ama Serwaa',
    course: 'Vocal Training',
    testimonial: 'The vocal training program helped me discover my true voice. My confidence has skyrocketed, and I now lead worship at my church. Best decision I ever made!',
    rating: 5,
    image_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    id: '3',
    student_name: 'Kofi Mensah',
    course: 'Guitar',
    testimonial: 'I love the flexible class schedules and the small class sizes. My instructor took time to understand my goals and tailored the lessons accordingly. Highly recommend!',
    rating: 5,
    image_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    id: '4',
    student_name: 'Adwoa Agyeman',
    course: 'Music Production',
    testimonial: 'The music production course opened up a whole new world for me. I have already produced songs for local artists and started my own studio business.',
    rating: 4,
    image_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    id: '5',
    student_name: 'Yaw Osei',
    course: 'Drums',
    testimonial: 'From complete beginner to playing in a band in 8 months! The drum program here is exceptional. The practice rooms are well-equipped too.',
    rating: 5,
    image_url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    id: '6',
    student_name: 'Efua Darko',
    course: 'Music Theory',
    testimonial: 'I thought music theory would be boring, but the way it is taught here makes it so engaging. It has improved my overall musicianship tremendously.',
    rating: 5,
    image_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-900 relative overflow-hidden" ref={ref}>
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            What Our <span className="text-gold-400">Students</span> Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from our students who have transformed their musical abilities and achieved their dreams.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.slice(currentIndex * 2, currentIndex * 2 + 2).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                >
                  <Quote className="w-10 h-10 text-primary-200 dark:text-primary-800 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image_url}
                        alt={testimonial.student_name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.student_name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold-500 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
