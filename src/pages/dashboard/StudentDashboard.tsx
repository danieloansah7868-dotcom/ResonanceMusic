import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Clock,
  Award,
  Calendar,
  Bell,
  Play,
  Download,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  FileText,
  CreditCard,
} from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'courses', label: 'My Courses' },
  { id: 'materials', label: 'Materials' },
  { id: 'assignments', label: 'Assignments' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'payments', label: 'Payments' },
];

const mockStudentData = {
  name: 'Kwame Asante',
  email: 'kwame@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  stats: {
    coursesInProgress: 3,
    coursesCompleted: 2,
    certificates: 2,
    totalHours: 124,
  },
  progress: [
    {
      course: 'Piano & Keyboard',
      progress: 75,
      nextLesson: 'Advanced Chord Progressions',
      image: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    },
    {
      course: 'Music Theory',
      progress: 50,
      nextLesson: 'Circle of Fifths',
      image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    },
    {
      course: 'Vocal Training',
      progress: 30,
      nextLesson: 'Breathing Techniques',
      image: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    },
  ],
  upcomingLessons: [
    { title: 'Piano - Lesson 15', date: 'Today, 4:00 PM', instructor: 'Dr. Kwame Boateng' },
    { title: 'Voice - Practice Session', date: 'Tomorrow, 10:00 AM', instructor: 'Ama Asantewaa' },
    { title: 'Theory - Group Class', date: 'Wed, 2:00 PM', instructor: 'Efua Darko' },
  ],
  assignments: [
    { title: 'Piano Practice Log', due: '2026-07-01', status: 'pending' },
    { title: 'Music Theory Quiz', due: '2026-06-30', status: 'submitted' },
    { title: 'Vocal Recording', due: '2026-07-05', status: 'pending' },
  ],
  certificates: [
    { name: 'Guitar Fundamentals', date: '2026-03-15', id: 'CERT-2026-001' },
    { name: 'Music Theory Level 1', date: '2026-05-20', id: 'CERT-2026-002' },
  ],
  payments: [
    { date: '2026-06-15', amount: 1500, description: 'Piano & Keyboard - Full Course', status: 'completed' },
    { date: '2026-05-01', amount: 800, description: 'Vocal Training - Full Course', status: 'completed' },
    { date: '2026-04-10', amount: 600, description: 'Music Theory - Full Course', status: 'completed' },
  ],
};

export function StudentDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 py-6">
              <img
                src={mockStudentData.avatar}
                alt={mockStudentData.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  Welcome back, {mockStudentData.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">{mockStudentData.email}</p>
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: BookOpen, label: 'In Progress', value: mockStudentData.stats.coursesInProgress },
                    { icon: CheckCircle, label: 'Completed', value: mockStudentData.stats.coursesCompleted },
                    { icon: Award, label: 'Certificates', value: mockStudentData.stats.certificates },
                    { icon: Clock, label: 'Hours', value: mockStudentData.stats.totalHours },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="card p-4 text-center"
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="card p-6">
                  <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">
                    Continue Learning
                  </h2>
                  <div className="space-y-4">
                    {mockStudentData.progress.map((course, index) => (
                      <motion.div
                        key={course.course}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                      >
                        <img src={course.image} alt={course.course} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{course.course}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Next: {course.nextLesson}</p>
                          <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary-500 to-gold-500"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {course.progress}%
                        </span>
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Upcoming Lessons
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {mockStudentData.upcomingLessons.map((lesson, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{lesson.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.date}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.instructor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card p-6">
                  <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                      <p className="text-sm font-medium text-primary-600 dark:text-primary-400">New Assignment</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Piano Practice Log due July 1</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Course Update</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">New video added to Music Theory</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {mockStudentData.progress.map((course, index) => (
                <motion.div
                  key={course.course}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex gap-6">
                    <img src={course.image} alt={course.course} className="w-32 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                        {course.course}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Next: {course.nextLesson}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-gold-500"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{course.progress}%</span>
                      </div>
                    </div>
                    <Button variant="primary" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="card">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white">Assignments</h2>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockStudentData.assignments.map((assignment, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        assignment.status === 'submitted' ? 'bg-success-100 dark:bg-success-900/30' : 'bg-warning-100 dark:bg-warning-900/30'
                      }`}>
                        <FileText className={`w-5 h-5 ${
                          assignment.status === 'submitted' ? 'text-success-600' : 'text-warning-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{assignment.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Due: {assignment.due}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      assignment.status === 'submitted'
                        ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                        : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 gap-6">
              {mockStudentData.certificates.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="card p-6 text-center bg-gradient-to-br from-primary-50 to-gold-50 dark:from-primary-900/20 dark:to-gold-900/20"
                >
                  <Award className="w-16 h-16 mx-auto mb-4 text-gold-500" />
                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Issued: {cert.date}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">ID: {cert.id}</p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">Share</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="card">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white">Payment History</h2>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockStudentData.payments.map((payment, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-success-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{payment.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{payment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">GHS {payment.amount.toLocaleString()}</p>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400">
                        {payment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
