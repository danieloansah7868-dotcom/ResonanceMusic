import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter, Star, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';

const events = [
  {
    id: '1',
    title: 'Keyboard Masterclass',
    description: 'A special workshop with renowned pianist Dr. Kwame Boateng. Learn advanced techniques, improvisation, and performance tips.',
    event_date: '2026-07-15',
    event_time: '14:00',
    location: 'Main Auditorium, Resonance Campus',
    event_type: 'masterclass',
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 50,
    registered_count: 32,
    registration_fee: 150,
    is_featured: true,
  },
  {
    id: '2',
    title: 'Gospel Music Concert',
    description: 'Celebrate the spirit of gospel music with our talented students and special guest artists. A night of praise and worship.',
    event_date: '2026-07-22',
    event_time: '18:00',
    location: 'National Theatre, Accra',
    event_type: 'concert',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 500,
    registered_count: 245,
    registration_fee: 100,
    is_featured: true,
  },
  {
    id: '3',
    title: 'Summer Graduation Ceremony',
    description: 'Celebrating the achievements of our graduating class. Join us for a memorable ceremony featuring student performances.',
    event_date: '2026-08-05',
    event_time: '10:00',
    location: 'Resonance Campus Auditorium',
    event_type: 'graduation',
    image_url: 'https://images.pexels.com/photos/267554/pexels-photo-267554.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 200,
    registered_count: 89,
    registration_fee: 0,
    is_featured: true,
  },
  {
    id: '4',
    title: 'Guitar Workshop',
    description: 'Interactive session covering fingerpicking, solo techniques, and chord progressions. For intermediate players.',
    event_date: '2026-08-12',
    event_time: '15:00',
    location: 'Guitar Lab, Resonance Campus',
    event_type: 'workshop',
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 25,
    registered_count: 18,
    registration_fee: 120,
    is_featured: false,
  },
  {
    id: '5',
    title: 'Choir Auditions',
    description: 'Open auditions for our worship choir. Open to all skill levels. Preparation required.',
    event_date: '2026-09-02',
    event_time: '09:00',
    location: 'Choir Room, Resonance Campus',
    event_type: 'audition',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 100,
    registered_count: 45,
    registration_fee: 0,
    is_featured: false,
  },
  {
    id: '6',
    title: 'Drum Clinic with Nana Yaw',
    description: 'Special drum clinic with Master Drummer Nana Yaw Osei. Learn traditional and contemporary drumming techniques.',
    event_date: '2026-09-15',
    event_time: '14:00',
    location: 'Drum Studio, Resonance Campus',
    event_type: 'masterclass',
    image_url: 'https://images.pexels.com/photos/174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    max_attendees: 30,
    registered_count: 12,
    registration_fee: 200,
    is_featured: false,
  },
];

const eventTypes = ['all', 'workshop', 'concert', 'graduation', 'masterclass', 'audition'];

interface CountdownTimerProps {
  targetDate: string;
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
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
      <div className="text-center px-3 py-2 bg-primary-600 rounded-lg">
        <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
        <span className="block text-xs text-white/70">Days</span>
      </div>
      <div className="text-center px-3 py-2 bg-primary-600 rounded-lg">
        <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
        <span className="block text-xs text-white/70">Hrs</span>
      </div>
      <div className="text-center px-3 py-2 bg-primary-600 rounded-lg">
        <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
        <span className="block text-xs text-white/70">Min</span>
      </div>
      <div className="text-center px-3 py-2 bg-primary-600 rounded-lg">
        <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
        <span className="block text-xs text-white/70">Sec</span>
      </div>
    </div>
  );
}

export function EventsPage() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredEvents = selectedType === 'all'
    ? events
    : events.filter((event) => event.event_type === selectedType);

  const featuredEvents = events.filter((event) => event.is_featured);
  const upcomingEvent = featuredEvents.length > 0 ? featuredEvents[0] : null;

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
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
              Upcoming <span className="text-gold-400">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Join us for workshops, concerts, masterclasses, and special celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {upcomingEvent && (
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <img
                    src={upcomingEvent.image_url}
                    alt={upcomingEvent.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-gray-900 rounded-full text-sm font-semibold">
                      Featured Event
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase">Next Event</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {upcomingEvent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{upcomingEvent.description}</p>

                  <div className="mb-6">
                    <CountdownTimer targetDate={upcomingEvent.event_date} />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span>
                        {new Date(upcomingEvent.event_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span>{upcomingEvent.event_time} GMT</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>{upcomingEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Users className="w-5 h-5 text-primary-600" />
                      <span>{upcomingEvent.registered_count} / {upcomingEvent.max_attendees} spots filled</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button variant="gold" size="lg">
                      Register Now
                    </Button>
                    {upcomingEvent.registration_fee > 0 && (
                      <span className="text-xl font-bold text-gold-600">
                        GHS {upcomingEvent.registration_fee}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="card-hover overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold capitalize">
                        {event.event_type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-primary-600 rounded-full text-xs font-semibold text-white">
                        {new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.event_time} GMT
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        {event.registered_count}/{event.max_attendees}
                      </span>
                      {event.registration_fee > 0 ? (
                        <span className="text-gold-600 font-bold">GHS {event.registration_fee}</span>
                      ) : (
                        <span className="text-success-600 font-bold">Free</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
