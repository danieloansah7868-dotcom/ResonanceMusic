import { Hero } from '../components/home/Hero';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { Testimonials } from '../components/home/Testimonials';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { Statistics } from '../components/home/Statistics';
import { CallToAction } from '../components/home/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCourses />
      <Testimonials />
      <Statistics />
      <UpcomingEvents />
      <GalleryPreview />
      <CallToAction />
    </>
  );
}
