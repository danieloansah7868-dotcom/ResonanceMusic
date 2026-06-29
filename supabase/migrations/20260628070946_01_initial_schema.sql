/*
# Initial Schema for Resonance Music Institute

## Purpose
This migration establishes the complete database schema for the Resonance Music Institute
website, including courses, instructors, students, events, blog, gallery, shop, and more.

## Tables Created

### 1. courses
- Stores course information including name, description, duration, level, price, and certificates
- Links to instructors via instructor_id foreign key

### 2. instructors
- Contains instructor profiles with bio, specialization, and contact info

### 3. students
- Student records linked to auth.users via user_id
- Tracks enrollment status, program selection, and documentation

### 4. enrollments
- Junction table linking students to courses
- Tracks progress and completion status

### 5. events
- Event listings with dates, times, locations, and registration info
- Supports various event types (workshop, concert, graduation, masterclass, audition)

### 6. blog_posts
- Blog article content with categories, tags, and authorship
- Includes publishing workflow

### 7. gallery_images
- Image gallery with categories for classroom, performance, worship, etc.

### 8. products
- E-commerce products including books, instruments, accessories, apparel
- Supports both physical and digital products

### 9. testimonials
- Student testimonials with ratings and course references

### 10. contact_messages
- Contact form submissions with read/unread status

### 11. newsletter_subscribers
- Email newsletter subscription management

## Security
All tables have RLS enabled with appropriate policies for authenticated and anon users.
*/

-- Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text NOT NULL,
    full_description text,
    duration_weeks integer NOT NULL,
    level text NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
    price decimal(10,2) NOT NULL,
    certificate_offered boolean DEFAULT true,
    image_url text,
    instructor_id uuid,
    featured boolean DEFAULT false,
    capacity integer DEFAULT 20,
    enrolled_count integer DEFAULT 0,
    rating decimal(3,2) DEFAULT 4.5,
    features text[] DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Instructors Table
CREATE TABLE IF NOT EXISTS public.instructors (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    title text NOT NULL,
    bio text NOT NULL,
    specialization text[] NOT NULL DEFAULT '{}',
    image_url text,
    email text,
    phone text,
    years_experience integer NOT NULL DEFAULT 0,
    created_at timestamptz DEFAULT now()
);

-- Students Table
CREATE TABLE IF NOT EXISTS public.students (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    date_of_birth date NOT NULL,
    address text NOT NULL,
    parent_guardian text,
    program text NOT NULL,
    previous_experience text DEFAULT 'None',
    passport_photo_url text,
    id_document_url text,
    status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'graduated')),
    enrollment_date date DEFAULT CURRENT_DATE,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    UNIQUE(user_id)
);

-- Enrollments Table
CREATE TABLE IF NOT EXISTS public.enrollments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped')),
    progress_percent integer DEFAULT 0,
    enrolled_at timestamptz DEFAULT now(),
    completed_at timestamptz,
    created_at timestamptz DEFAULT now(),
    UNIQUE(student_id, course_id)
);

-- Events Table
CREATE TABLE IF NOT EXISTS public.events (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text NOT NULL,
    event_date date NOT NULL,
    event_time text NOT NULL,
    location text NOT NULL,
    image_url text,
    event_type text NOT NULL DEFAULT 'other' CHECK (event_type IN ('workshop', 'concert', 'graduation', 'masterclass', 'audition', 'other')),
    is_featured boolean DEFAULT false,
    max_attendees integer,
    registered_count integer DEFAULT 0,
    registration_fee decimal(10,2) DEFAULT 0,
    created_at timestamptz DEFAULT now()
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    slug text NOT NULL UNIQUE,
    excerpt text NOT NULL,
    content text NOT NULL,
    category text NOT NULL,
    tags text[] DEFAULT '{}',
    image_url text,
    author_id uuid REFERENCES public.instructors(id),
    author_name text NOT NULL,
    published boolean DEFAULT false,
    published_at timestamptz,
    read_time text DEFAULT '5 min read',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Gallery Images Table
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    category text NOT NULL CHECK (category IN ('classroom', 'performance', 'graduation', 'workshop', 'worship', 'concert')),
    image_url text NOT NULL,
    description text,
    created_at timestamptz DEFAULT now()
);

-- Products Table (Shop)
CREATE TABLE IF NOT EXISTS public.products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text NOT NULL,
    price decimal(10,2) NOT NULL,
    category text NOT NULL CHECK (category IN ('book', 'instrument', 'accessory', 'apparel', 'material')),
    image_url text,
    stock integer DEFAULT 10,
    is_digital boolean DEFAULT false,
    digital_file_url text,
    rating decimal(3,2) DEFAULT 4.5,
    reviews integer DEFAULT 0,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name text NOT NULL,
    course text NOT NULL,
    testimonial text NOT NULL,
    rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
    image_url text,
    is_featured boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    subject text NOT NULL,
    message text NOT NULL,
    is_read boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    is_active boolean DEFAULT true,
    subscribed_at timestamptz DEFAULT now()
);

-- Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    total_amount decimal(10,2) NOT NULL,
    status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
    delivery_method text NOT NULL CHECK (delivery_method IN ('pickup', 'delivery')),
    delivery_address text,
    payment_method text NOT NULL,
    payment_reference text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id uuid NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE SET NULL,
    quantity integer NOT NULL DEFAULT 1,
    unit_price decimal(10,2) NOT NULL,
    created_at timestamptz DEFAULT now()
);

-- Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    certificate_id text NOT NULL UNIQUE,
    issued_at timestamptz DEFAULT now(),
    verification_code text NOT NULL UNIQUE,
    UNIQUE(student_id, course_id)
);

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE Row Level Security;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (for anon and authenticated)
DROP POLICY IF EXISTS "public_read_courses" ON public.courses;
CREATE POLICY "public_read_courses" ON public.courses FOR SELECT
    TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_instructors" ON public.instructors;
CREATE POLICY "public_read_instructors" ON public.instructors FOR SELECT
    TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_events" ON public.events;
CREATE POLICY "public_read_events" ON public.events FOR SELECT
    TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_published_posts" ON public.blog_posts;
CREATE POLICY "public_read_published_posts" ON public.blog_posts FOR SELECT
    TO anon, authenticated USING (published = true);

DROP POLICY IF EXISTS "public_read_gallery" ON public.gallery_images;
CREATE POLICY "public_read_gallery" ON public.gallery_images FOR SELECT
    TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_products" ON public.products;
CREATE POLICY "public_read_products" ON public.products FOR SELECT
    TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_testimonials" ON public.testimonials;
CREATE POLICY "public_read_testimonials" ON public.testimonials FOR SELECT
    TO anon, authenticated USING (true);

-- Student policies (owner-scoped)
DROP POLICY IF EXISTS "students_read_own" ON public.students;
CREATE POLICY "students_read_own" ON public.students FOR SELECT
    TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "students_insert_own" ON public.students;
CREATE POLICY "students_insert_own" ON public.students FOR INSERT
    TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "students_update_own" ON public.students;
CREATE POLICY "students_update_own" ON public.students FOR UPDATE
    TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Enrollment policies
DROP POLICY IF EXISTS "enrollments_read_own" ON public.enrollments;
CREATE POLICY "enrollments_read_own" ON public.enrollments FOR SELECT
    TO authenticated USING (
        EXISTS (SELECT 1 FROM public.students WHERE id = student_id AND user_id = auth.uid())
    );

DROP POLICY IF EXISTS "enrollments_insert_own" ON public.enrollments;
CREATE POLICY "enrollments_insert_own" ON public.enrollments FOR INSERT
    TO authenticated WITH CHECK (
        EXISTS (SELECT 1 FROM public.students WHERE id = student_id AND user_id = auth.uid())
    );

-- Contact messages (public can insert)
DROP POLICY IF EXISTS "public_insert_contact" ON public.contact_messages;
CREATE POLICY "public_insert_contact" ON public.contact_messages FOR INSERT
    TO anon, authenticated WITH CHECK (true);

-- Newsletter (public can insert)
DROP POLICY IF EXISTS "public_subscribe_newsletter" ON public.newsletter_subscribers;
CREATE POLICY "public_subscribe_newsletter" ON public.newsletter_subscribers FOR INSERT
    TO anon, authenticated WITH CHECK (true);

-- Orders (owner-scoped)
DROP POLICY IF EXISTS "orders_read_own" ON public.orders;
CREATE POLICY "orders_read_own" ON public.orders FOR SELECT
    TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "orders_insert_own" ON public.orders;
CREATE POLICY "orders_insert_own" ON public.orders FOR INSERT
    TO authenticated WITH CHECK (auth.uid() = user_id);

-- Order items
DROP POLICY IF EXISTS "order_items_read_own" ON public.order_items;
CREATE POLICY "order_items_read_own" ON public.order_items FOR SELECT
    TO authenticated USING (
        EXISTS (SELECT 1 FROM public.orders WHERE id = order_id AND user_id = auth.uid())
    );

-- Certificates (owner-scoped and public verification)
DROP POLICY IF EXISTS "certificates_read_own" ON public.certificates;
CREATE POLICY "certificates_read_own" ON public.certificates FOR SELECT
    TO authenticated USING (
        EXISTS (SELECT 1 FROM public.students WHERE id = student_id AND user_id = auth.uid())
    );

DROP POLICY IF EXISTS "certificates_verify_public" ON public.certificates;
CREATE POLICY "certificates_verify_public" ON public.certificates FOR SELECT
    TO anon, authenticated USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_level ON public.courses(level);
CREATE INDEX IF NOT EXISTS idx_courses_featured ON public.courses(featured);
CREATE INDEX IF NOT EXISTS idx_students_user_id ON public.students(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON public.enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_events_date ON public.events(event_date);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_code ON public.certificates(verification_code);
