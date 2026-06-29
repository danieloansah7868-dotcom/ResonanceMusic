import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

const galleryImages = [
  {
    id: '1',
    title: 'Piano Masterclass',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '2',
    title: 'Worship Session',
    category: 'worship',
    image_url: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '3',
    title: 'Guitar Practice',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '4',
    title: 'Live Concert',
    category: 'concert',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '5',
    title: 'Drum Workshop',
    category: 'workshop',
    image_url: 'https://images.pexels.com/photo-174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '6',
    title: 'Graduation Day',
    category: 'graduation',
    image_url: 'https://images.pexels.com/phots/267554/pexels-photo-267554.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '7',
    title: 'Vocal Training',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    id: '8',
    title: 'Student Performance',
    category: 'performance',
    image_url: 'https://images.pexels.com/photos/1672735/pexels-photo-1672735.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
];

export function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

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
            Our Gallery
          </span>
          <h2 className="section-heading mb-6">
            Moments of <span className="gradient-text">Musical Excellence</span>
          </h2>
          <p className="section-subheading">
            Experience the energy and passion of our students, instructors, and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`${index === 0 || index === 5 ? 'row-span-2 col-span-2' : ''} group cursor-pointer relative overflow-hidden rounded-2xl`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.image_url}
                alt={image.title}
                className={`w-full ${index === 0 || index === 5 ? 'h-80 md:h-full' : 'h-40 md:h-48'} object-cover group-hover:scale-110 transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-white/70 text-sm capitalize">{image.category}</p>
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
          <Link to="/gallery">
            <Button variant="secondary">View Full Gallery</Button>
          </Link>
        </motion.div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] px-4">
            <img
              src={galleryImages[currentIndex].image_url}
              alt={galleryImages[currentIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{galleryImages[currentIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
