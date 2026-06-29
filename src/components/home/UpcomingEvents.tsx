import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const events = [
  {
    id: '1',
    title: 'Keyboard Masterclass',
    description: 'A special workshop with renowned pianist Dr. Kwame Boateng. Learn advanced techniques and performance tips.',
    event_date: '2026-07-15',
    event_time: '14:00',
    location: 'Main Auditorium, Resonance Campus',
    event_type: 'masterclass',
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 50,
    registered_count: 32,
  },
  {
    id: '2',
    title: 'Gospel Music Concert',
    description: 'Celebrate the spirit of gospel music with our talented students and special guest artists.',
    event_date: '2026-07-22',
    event_time: '18:00',
    location: 'National Theatre, Accra',
    event_type: 'concert',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 500,
    registered_count: 245,
  },
  {
    id: '3',
    title: 'Summer Graduation Ceremony',
    description: 'Celebrating the achievements of our graduating class. Join us for a memorable ceremony and performances.',
    event_date: '2026-08-05',
    event_time: '10:00',
    location: 'Resonance Campus Auditorium',
    event_type: 'graduation',
    image_url: 'https://images.pexels.com/photos/267554/pexels-photo-267554.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 200,
    registered_count: 89,
  },
];

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2">
      <div className="text-center px-2 py-1 bg-white/10 rounded-lg">
        <span className="text-lg font-bold text-gold-400">{timeLeft.days}</span>
        <span className="block text-xs text-white/70">Days</span>
      </div>
      <div className="text-center px-2 py-1 bg-white/10 rounded-lg">
        <span className="text-lg font-bold text-gold-400">{timeLeft.hours}</span>
        <span className="block text-xs text-white/70">Hrs</span>
      </div>
      <div className="text-center px-2 py-1 bg-white/10 rounded-lg">
        <span className="text-lg font-bold text-gold-400">{timeLeft.minutes}</span>
        <span className="block text-xs text-white/70">Min</span>
      </div>
    </div>
  );
}

export function UpcomingEvents() {
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
            Upcoming Events
          </span>
          <h2 className="section-heading mb-6">
            Join Our Musical <span className="gradient-text">Celebrations</span>
          </h2>
          <p className="section-subheading">
            Don't miss out on our exciting events, workshops, concerts, and graduation ceremonies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-hover overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <CountdownTimer targetDate={event.event_date} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.event_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.event_time} GMT
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.registered_count}/{event.max_attendees}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/events">
            <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
