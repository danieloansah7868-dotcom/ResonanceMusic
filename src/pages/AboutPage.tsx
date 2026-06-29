import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Music,
  Guitar,
  Piano,
  Drum,
  Mic,
  BookOpen,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const values = [
  {
    icon: Heart,
    title: 'Excellence',
    description: 'We strive for the highest standards in music education and performance.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive community of musicians who inspire each other.',
  },
  {
    icon: Music,
    title: 'Creativity',
    description: 'Encouraging innovation and artistic expression in every student.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Maintaining honesty and ethical standards in all our dealings.',
  },
];

const instructors = [
  {
    id: '1',
    name: 'Dr. Kwame Boateng',
    title: 'Director & Head of Piano Studies',
    bio: 'With over 25 years of experience, Dr. Boateng has trained hundreds of professional pianists. He holds a Doctorate in Music from the University of Ghana.',
    specialization: ['Classical Piano', 'Worship Music', 'Music Theory'],
    image_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 25,
  },
  {
    id: '2',
    name: 'Ama Asantewaa',
    title: 'Head of Vocal Training',
    bio: 'A professional vocalist with experience performing internationally. Ama specializes in contemporary gospel and traditional African music.',
    specialization: ['Vocal Technique', 'Gospel Music', 'Performance'],
    image_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 15,
  },
  {
    id: '3',
    name: 'Kofi Mensah',
    title: 'Head of Guitar Studies',
    bio: 'Kofi is a versatile guitarist proficient in classical, jazz, and contemporary styles. He has taught guitar for over 18 years.',
    specialization: ['Classical Guitar', 'Electric Guitar', 'Bass'],
    image_url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 18,
  },
  {
    id: '4',
    name: 'Nana Yaw Osei',
    title: 'Head of Percussion Studies',
    bio: 'A master drummer who has performed with top African artists. Nana Yaw brings traditional and modern drumming techniques to his teaching.',
    specialization: ['Drum Set', 'Traditional Percussion', 'Rhythm Theory'],
    image_url: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 20,
  },
  {
    id: '5',
    name: 'Efua Darko',
    title: 'Head of Music Production',
    bio: 'Efua is a certified audio engineer with experience in music production for film, television, and recording studios.',
    specialization: ['Music Production', 'Audio Engineering', 'Sound Design'],
    image_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 12,
  },
  {
    id: '6',
    name: 'Samuel Addo',
    title: 'Head of Worship Music',
    bio: 'Samuel has served as music director for major churches across Ghana and brings practical worship ministry experience to his teaching.',
    specialization: ['Worship Leading', 'Church Music', 'Choir Direction'],
    image_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    years_experience: 16,
  },
];

const facilities = [
  {
    name: 'Recording Studio',
    description: 'State-of-the-art recording facility with professional equipment for music production.',
    icon: Music,
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    name: 'Practice Rooms',
    description: '20 individual practice rooms equipped with pianos and soundproofing.',
    icon: Piano,
    image: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    name: 'Performance Hall',
    description: '300-seat auditorium with professional stage and sound system.',
    icon: Mic,
    image: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    name: 'Piano Lab',
    description: 'Digital piano lab with 15 workstations for group lessons.',
    icon: Piano,
    image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
];

const faqs = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer a wide range of courses including Piano & Keyboard, Guitar, Bass, Drums, Vocal Training, Music Theory, Ear Training, Sight Reading, Music Production, Church Music, Live Performance, Song Writing, Music Arrangement, and Band Training.',
  },
  {
    question: 'Do I need prior musical experience to enroll?',
    answer: 'No prior experience is required for beginner courses. Our programs are designed to accommodate students at all skill levels, from complete beginners to advanced musicians.',
  },
  {
    question: 'How long are the courses?',
    answer: 'Course duration varies by program. Most courses range from 12 to 24 weeks, with classes held once or twice per week. Flexible scheduling options are available.',
  },
  {
    question: 'Do you offer certificates?',
    answer: 'Yes, all our courses come with certificates upon successful completion. Certificates are recognized and can be verified online through our certificate verification system.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept Mobile Money (MTN, Telecel, AirtelTigo), VISA, Mastercard, Paystack, and bank transfers. Payment plans are available for longer courses.',
  },
  {
    question: 'Can I get a refund if I cannot complete a course?',
    answer: 'Refund policies vary by course. Generally, refunds are available within the first two weeks of enrollment. Please refer to our terms and conditions or contact our admissions office for specific details.',
  },
  {
    question: 'Do you offer online classes?',
    answer: 'Yes, we offer both in-person and online learning options. Our online platform includes video lessons, downloadable materials, and virtual one-on-one sessions with instructors.',
  },
  {
    question: 'How do I verify a certificate?',
    answer: 'Each certificate has a unique QR code and certificate ID. You can verify certificates by scanning the QR code or entering the ID on our verification page.',
  },
];

export function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              About <span className="text-gold-400">Resonance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80"
            >
              Ghana's premier music education institution, nurturing talent and
              inspiring musical excellence since 2018.
            </motion.p>
          </div>
        </div>
      </section>

      <section ref={storyRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="section-heading mb-6 text-left">
                From Humble Beginnings to Musical Excellence
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Resonance Music Institute was founded in 2018 by Dr. Kwame Boateng, a passionate
                  musician and educator with a vision to make quality music education accessible
                  to everyone in Ghana and across Africa.
                </p>
                <p>
                  What started as a small piano studio in Accra has grown into one of Ghana's
                  leading music education institutions. Our founders believed that every person
                  has the potential to create beautiful music, given the right guidance and
                  encouragement.
                </p>
                <p>
                  Today, we offer comprehensive programs in piano, keyboard, guitar, drums,
                  vocal training, music production, and worship music. Our graduates have gone
                  on to become professional musicians, worship leaders, music teachers, and
                  recording artists across the continent and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Music classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 rounded-2xl p-6 text-white shadow-xl">
                <p className="text-4xl font-bold">8+</p>
                <p className="text-white/80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Purpose
            </span>
            <h2 className="section-heading mb-12">Mission, Vision & Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-hover p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide world-class music education that empowers individuals to discover,
                develop, and deploy their musical talents for personal fulfillment and societal impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="card-hover p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading music education institution in Africa, recognized for producing
                exceptional musicians who transform the music industry and inspire communities.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-gold-500 flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Meet the Team
            </span>
            <h2 className="section-heading mb-6">Our Expert Instructors</h2>
            <p className="section-subheading">
              Learn from seasoned professionals with decades of combined experience in music performance and education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-hover overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image_url}
                    alt={instructor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {instructor.years_experience}+ years
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {instructor.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Facilities
            </span>
            <h2 className="section-heading mb-6">World-Class Learning Environment</h2>
            <p className="section-subheading">
              Our modern facilities provide the perfect setting for musical growth and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-hover overflow-hidden"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <facility.icon className="w-5 h-5 text-gold-500" />
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">
                      {facility.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              FAQs
            </span>
            <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Find answers to common questions about our programs, enrollment, and services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join Resonance Music Institute and take the first step towards achieving your musical dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button variant="gold" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
