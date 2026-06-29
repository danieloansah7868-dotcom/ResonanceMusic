import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  ShieldCheck,
  Truck,
  Clock,
} from 'lucide-react';
import { GraduationCap } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Events', path: '/events' },
  { name: 'Blog', path: '/blog' },
];

const courseLinks = [
  { name: 'Piano & Keyboard', path: '/courses?category=piano' },
  { name: 'Guitar', path: '/courses?category=guitar' },
  { name: 'Drums', path: '/courses?category=drums' },
  { name: 'Vocal Training', path: '/courses?category=vocal' },
  { name: 'Music Production', path: '/courses?category=production' },
  { name: 'Music Theory', path: '/courses?category=theory' },
];

const resourceLinks = [
  { name: 'Student Portal', path: '/login' },
  { name: 'Teacher Portal', path: '/login' },
  { name: 'Download Prospectus', path: '/prospectus.pdf' },
  { name: 'FAQs', path: '/about#faqs' },
  { name: 'Academic Calendar', path: '/admissions#calendar' },
  { name: 'Certificates', path: '/certificates' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

const paymentMethods = [
  { name: 'MTN Mobile Money', icon: '📱' },
  { name: 'Telecel Cash', icon: '📱' },
  { name: 'VISA', icon: '💳' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'Paystack', icon: '💳' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-primary-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3 flex-wrap">
              <CreditCard className="w-5 h-5 text-gold-400" />
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <Truck className="w-5 h-5 text-gold-400" />
              <span className="text-white text-sm">Secure payments | Verified certificates | Fast enrollment</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {paymentMethods.map((method) => (
                <span key={method.name} className="text-sm bg-white/10 px-3 py-1 rounded-lg" title={method.name}>
                  {method.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-white">Resonance</h2>
                <p className="text-xs text-gray-400 -mt-1">Music Institute</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Ghana's premier music education institution, nurturing talent and inspiring musical excellence since 2015.
              Join us and unlock your musical potential with world-class instruction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+233 53 848 0868</span>
                  <span>+233 54 245 1578</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>info@resonancemusicinstitute.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Resonance Music Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
