import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  FileText,
  Download,
  Calendar,
  CreditCard,
  CheckCircle,
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import toast from 'react-hot-toast';

const requirements = [
  'Completed application form',
  '2 passport-sized photographs',
  'Copy of valid ID (National ID, Passport, or Driver\'s License)',
  'Previous academic certificates (if any)',
  'Application fee payment receipt',
];

const fees = [
  { program: 'Piano & Keyboard', beginner: 'GHS 1,500', intermediate: 'GHS 2,000', advanced: 'GHS 2,500' },
  { program: 'Guitar', beginner: 'GHS 1,200', intermediate: 'GHS 1,600', advanced: 'GHS 2,000' },
  { program: 'Drums', beginner: 'GHS 1,000', intermediate: 'GHS 1,400', advanced: 'GHS 1,800' },
  { program: 'Vocal Training', beginner: 'GHS 800', intermediate: 'GHS 1,200', advanced: 'GHS 1,500' },
  { program: 'Music Production', beginner: 'GHS 2,000', intermediate: 'GHS 2,800', advanced: 'GHS 3,500' },
];

const paymentMethods = [
  'MTN Mobile Money',
  'Telecel Cash',
  'AirtelTigo Money',
  'VISA Card',
  'Mastercard',
  'Paystack',
  'Bank Transfer',
];

const calendar = [
  { term: 'First Semester', dates: 'September 1 - December 15, 2026', status: 'upcoming' },
  { term: 'Second Semester', dates: 'January 10 - April 30, 2027', status: 'upcoming' },
  { term: 'Summer Intensive', dates: 'June 15 - August 15, 2027', status: 'upcoming' },
];

const programs = [
  { value: 'piano', label: 'Piano & Keyboard' },
  { value: 'guitar', label: 'Guitar' },
  { value: 'bass', label: 'Bass Guitar' },
  { value: 'drums', label: 'Drums' },
  { value: 'vocal', label: 'Vocal Training' },
  { value: 'theory', label: 'Music Theory' },
  { value: 'production', label: 'Music Production' },
  { value: 'worship', label: 'Church Music' },
];

export function AdmissionsPage() {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    parentGuardian: '',
    program: 'piano',
    previousExperience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Application submitted successfully! We will contact you shortly.');
      setFormData({
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: '',
        parentGuardian: '',
        program: 'piano',
        previousExperience: '',
      });
    } catch {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Join <span className="text-gold-400">Resonance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Begin your musical journey by applying to our programs. We welcome students of all skill levels.
            </p>
          </motion.div>
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
              Before You Apply
            </span>
            <h2 className="section-heading mb-6">Admission Requirements</h2>
            <p className="section-subheading">
              Please ensure you have the following documents ready before starting your application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Documents Required
              </h3>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Payment Methods
              </h3>
              <ul className="space-y-3">
                {paymentMethods.map((method) => (
                  <li key={method} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-success-500 to-success-600 flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Downloads
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Prospectus (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Application Form (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Fee Structure (PDF)
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-6">Fee Structure</h2>
            <p className="section-subheading mb-8">
              Course fees vary by program and level. All fees are inclusive of materials and practice room access.
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-20">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-4 text-left rounded-l-xl">Program</th>
                  <th className="px-6 py-4 text-center">Beginner</th>
                  <th className="px-6 py-4 text-center">Intermediate</th>
                  <th className="px-6 py-4 text-center rounded-r-xl">Advanced</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr
                    key={fee.program}
                    className={`border-b border-gray-100 dark:border-gray-800 ${
                      index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">{fee.program}</td>
                    <td className="px-6 py-4 text-center">{fee.beginner}</td>
                    <td className="px-6 py-4 text-center">{fee.intermediate}</td>
                    <td className="px-6 py-4 text-center">{fee.advanced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            id="calendar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-6">Academic Calendar</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {calendar.map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">{term.term}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{term.dates}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" ref={formRef} className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Apply Now
            </span>
            <h2 className="section-heading mb-6">Online Application Form</h2>
            <p className="section-subheading">
              Fill out the form below to begin your application process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    leftIcon={<User className="w-5 h-5" />}
                    required
                  />
                  <Input
                    label="Date of Birth *"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY"
                    type="date"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    leftIcon={<Mail className="w-5 h-5" />}
                    required
                  />
                  <Input
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+233 XX XXX XXXX"
                    leftIcon={<Phone className="w-5 h-5" />}
                    required
                  />
                </div>
                <Input
                  label="Address *"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  leftIcon={<MapPin className="w-5 h-5" />}
                  required
                />
                <Input
                  label="Parent/Guardian Name (if under 18)"
                  name="parentGuardian"
                  value={formData.parentGuardian}
                  onChange={handleChange}
                  placeholder="Parent or guardian name"
                />

                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Program Selection
                </h3>
                <Select
                  label="Select Program *"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  options={programs}
                />
                <Textarea
                  label="Previous Musical Experience"
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  placeholder="Describe any previous musical training or experience you have..."
                  rows={4}
                />

                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Upload Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Passport Photo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      ID Document
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="gold" size="lg" className="w-full" loading={isSubmitting}>
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
