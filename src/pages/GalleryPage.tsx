import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const galleryImages = [
  {
    id: '1',
    title: 'Piano Masterclass Session',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Students learning advanced piano techniques from Dr. Kwame Boateng.',
  },
  {
    id: '2',
    title: 'Sunday Worship Service',
    category: 'worship',
    image_url: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Our students leading worship at a local church.',
  },
  {
    id: '3',
    title: 'Guitar Practice Room',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'One-on-one guitar lessons in our practice rooms.',
  },
  {
    id: '4',
    title: 'Annual Gospel Concert',
    category: 'concert',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Students performing at our annual gospel concert at the National Theatre.',
  },
  {
    id: '5',
    title: 'Drum Workshop',
    category: 'workshop',
    image_url: 'https://images.pexels.com/photos/174630/pexels-photo-174630.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Interactive drum workshop with Master Drummer Nana Yaw.',
  },
  {
    id: '6',
    title: 'Graduation Ceremony 2025',
    category: 'graduation',
    image_url: 'https://images.pexels.com/photos/267554/pexels-photo-267554.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Celebrating our graduating class of 2025.',
  },
  {
    id: '7',
    title: 'Group Piano Session',
    category: 'classroom',
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Students practicing in our digital piano lab.',
  },
  {
    id: '8',
    title: 'Live Performance Night',
    category: 'performance',
    image_url: 'https://images.pexels.com/photos/1672735/pexels-photo-1672735.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Students showcasing their talents at our monthly performance night.',
  },
  {
    id: '9',
    title: 'Recording Studio Session',
    category: 'workshop',
    image_url: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Music production students recording their first single.',
  },
  {
    id: '10',
    title: 'Choir Practice',
    category: 'worship',
    image_url: 'https://images.pexels.com/photos/1199816/pexels-photo-1199816.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Our worship choir preparing for Easter service.',
  },
  {
    id: '11',
    title: 'Bass Guitar Masterclass',
    category: 'workshop',
    image_url: 'https://images.pexels.com/photos/169441/pexels-photo-169441.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Guest artist conducting a bass guitar masterclass.',
  },
  {
    id: '12',
    title: 'Student Awards Ceremony',
    category: 'graduation',
    image_url: 'https://images.pexels.com/photos/267554/pexels-photo-267554.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Recognizing outstanding achievements by our students.',
  },
];

const categories = ['all', 'classroom', 'performance', 'graduation', 'workshop', 'worship', 'concert'];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

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
              Our <span className="text-gold-400">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Explore moments of musical excellence, student performances, workshops, and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
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
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.image_url}
                  alt={image.title}
                  className={`w-full ${
                    [0, 3, 6].includes(index) ? 'aspect-video' : [1, 4].includes(index) ? 'aspect-[3/4]' : 'aspect-square'
                  } object-cover group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold mb-1">{image.title}</p>
                    <p className="text-white/70 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Image className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-600 dark:text-gray-400">No images in this category.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-4 flex flex-col items-center">
            <img
              src={filteredImages[currentIndex].image_url}
              alt={filteredImages[currentIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl">{filteredImages[currentIndex].title}</p>
              <p className="text-white/70 mt-2">{filteredImages[currentIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
