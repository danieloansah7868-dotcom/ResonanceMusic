import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rbknmkpnhbhdkowjdqlt.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJia25ta3BuaGJoZGtvd2pkcWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2MTI2OTcsImV4cCI6MjA5ODE4ODY5N30.mnC8lezFFrDGsEyxt96l9YAib6FQpAioNxHd6faxRL4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Database = {
  public: {
    Tables: {
      students: {
        Row: {
          id: string;
          user_id: string;
          full_name: string;
          email: string;
          phone: string;
          date_of_birth: string;
          address: string;
          parent_guardian: string | null;
          program: string;
          previous_experience: string;
          passport_photo_url: string | null;
          id_document_url: string | null;
          status: 'pending' | 'approved' | 'rejected' | 'graduated';
          enrollment_date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          full_name: string;
          email: string;
          phone: string;
          date_of_birth: string;
          address: string;
          parent_guardian?: string | null;
          program: string;
          previous_experience?: string;
          passport_photo_url?: string | null;
          id_document_url?: string | null;
          status?: 'pending' | 'approved' | 'rejected' | 'graduated';
          enrollment_date?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          date_of_birth?: string;
          address?: string;
          parent_guardian?: string | null;
          program?: string;
          previous_experience?: string;
          passport_photo_url?: string | null;
          id_document_url?: string | null;
          status?: 'pending' | 'approved' | 'rejected' | 'graduated';
          enrollment_date?: string;
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          duration_weeks: number;
          level: 'beginner' | 'intermediate' | 'advanced';
          price: number;
          certificate_offered: boolean;
          image_url: string | null;
          instructor_id: string | null;
          featured: boolean;
          capacity: number;
          enrolled_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          duration_weeks: number;
          level: 'beginner' | 'intermediate' | 'advanced';
          price: number;
          certificate_offered?: boolean;
          image_url?: string | null;
          instructor_id?: string | null;
          featured?: boolean;
          capacity?: number;
          enrolled_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string;
          duration_weeks?: number;
          level?: 'beginner' | 'intermediate' | 'advanced';
          price?: number;
          certificate_offered?: boolean;
          image_url?: string | null;
          instructor_id?: string | null;
          featured?: boolean;
          capacity?: number;
          enrolled_count?: number;
          updated_at?: string;
        };
      };
      instructors: {
        Row: {
          id: string;
          name: string;
          title: string;
          bio: string;
          specialization: string[];
          image_url: string | null;
          email: string;
          phone: string;
          years_experience: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          title: string;
          bio: string;
          specialization: string[];
          image_url?: string | null;
          email: string;
          phone: string;
          years_experience: number;
          created_at?: string;
        };
        Update: {
          name?: string;
          title?: string;
          bio?: string;
          specialization?: string[];
          image_url?: string | null;
          email?: string;
          phone?: string;
          years_experience?: number;
        };
      };
      enrollments: {
        Row: {
          id: string;
          student_id: string;
          course_id: string;
          status: 'active' | 'completed' | 'dropped';
          progress_percent: number;
          enrolled_at: string;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          student_id: string;
          course_id: string;
          status?: 'active' | 'completed' | 'dropped';
          progress_percent?: number;
          enrolled_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          status?: 'active' | 'completed' | 'dropped';
          progress_percent?: number;
          completed_at?: string | null;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          event_date: string;
          event_time: string;
          location: string;
          image_url: string | null;
          event_type: 'workshop' | 'concert' | 'graduation' | 'masterclass' | 'audition' | 'other';
          is_featured: boolean;
          max_attendees: number | null;
          registered_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          event_date: string;
          event_time: string;
          location: string;
          image_url?: string | null;
          event_type?: 'workshop' | 'concert' | 'graduation' | 'masterclass' | 'audition' | 'other';
          is_featured?: boolean;
          max_attendees?: number | null;
          registered_count?: number;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string;
          event_date?: string;
          event_time?: string;
          location?: string;
          image_url?: string | null;
          event_type?: 'workshop' | 'concert' | 'graduation' | 'masterclass' | 'audition' | 'other';
          is_featured?: boolean;
          max_attendees?: number | null;
          registered_count?: number;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: string;
          tags: string[];
          image_url: string | null;
          author_id: string | null;
          author_name: string;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: string;
          tags?: string[];
          image_url?: string | null;
          author_id?: string | null;
          author_name: string;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          category?: string;
          tags?: string[];
          image_url?: string | null;
          author_id?: string | null;
          author_name?: string;
          published?: boolean;
          published_at?: string | null;
          updated_at?: string;
        };
      };
      gallery_images: {
        Row: {
          id: string;
          title: string;
          category: 'classroom' | 'performance' | 'graduation' | 'workshop' | 'worship' | 'concert';
          image_url: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: 'classroom' | 'performance' | 'graduation' | 'workshop' | 'worship' | 'concert';
          image_url: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          category?: 'classroom' | 'performance' | 'graduation' | 'workshop' | 'worship' | 'concert';
          image_url?: string;
          description?: string | null;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          price: number;
          category: 'book' | 'instrument' | 'accessory' | 'apparel' | 'material';
          image_url: string | null;
          stock: number;
          is_digital: boolean;
          digital_file_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          price: number;
          category: 'book' | 'instrument' | 'accessory' | 'apparel' | 'material';
          image_url?: string | null;
          stock?: number;
          is_digital?: boolean;
          digital_file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string;
          price?: number;
          category?: 'book' | 'instrument' | 'accessory' | 'apparel' | 'material';
          image_url?: string | null;
          stock?: number;
          is_digital?: boolean;
          digital_file_url?: string | null;
          updated_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          student_name: string;
          course: string;
          testimonial: string;
          rating: number;
          image_url: string | null;
          is_featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          student_name: string;
          course: string;
          testimonial: string;
          rating: number;
          image_url?: string | null;
          is_featured?: boolean;
          created_at?: string;
        };
        Update: {
          student_name?: string;
          course?: string;
          testimonial?: string;
          rating?: number;
          image_url?: string | null;
          is_featured?: boolean;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          is_read?: boolean;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          is_active: boolean;
          subscribed_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          is_active?: boolean;
          subscribed_at?: string;
        };
        Update: {
          is_active?: boolean;
        };
      };
    };
  };
};
