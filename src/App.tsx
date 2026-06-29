import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage, CourseDetailPage } from './pages/CoursesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { BlogPage, BlogPostPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/auth/LoginPage';
import { StudentDashboard } from './pages/dashboard/StudentDashboard';
import { ShopPage, CartPage, CheckoutPage } from './pages/shop/ShopPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                },
              }}
            />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <StudentDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/*"
                element={
                  <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/courses/:slug" element={<CourseDetailPage />} />
                        <Route path="/admissions" element={<AdmissionsPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<BlogPostPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/cart" element={<CartPage />} />
                        <Route path="/shop/checkout" element={<CheckoutPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                }
              />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default App;
