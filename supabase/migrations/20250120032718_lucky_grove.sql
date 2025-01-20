/*
  # Initial Schema Setup for Job Recruitment Platform

  1. Tables
    - users (extends auth.users)
      - role (employer/jobseeker)
      - profile information
    - jobs
      - job listing details
      - employer information
    - applications
      - job applications
      - status tracking
  
  2. Security
    - RLS policies for each table
    - Secure access patterns
*/

-- Users table extending auth.users
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  role text NOT NULL CHECK (role IN ('employer', 'jobseeker')),
  full_name text,
  company_name text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Jobs table
CREATE TABLE IF NOT EXISTS public.jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  requirements text NOT NULL,
  salary_range text,
  employer_id uuid REFERENCES public.users(id),
  created_at timestamptz DEFAULT now(),
  industry text NOT NULL,
  employment_type text NOT NULL CHECK (employment_type IN ('full-time', 'part-time', 'contract', 'internship'))
);

-- Applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES public.jobs(id),
  user_id uuid REFERENCES public.users(id),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now(),
  resume_url text,
  cover_letter text
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON public.users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Jobs policies
CREATE POLICY "Anyone can view jobs"
  ON public.jobs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Employers can create jobs"
  ON public.jobs
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND role = 'employer'
    )
  );

CREATE POLICY "Employers can update own jobs"
  ON public.jobs
  FOR UPDATE
  TO authenticated
  USING (employer_id = auth.uid());

-- Applications policies
CREATE POLICY "Job seekers can create applications"
  ON public.applications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND role = 'jobseeker'
    )
  );

CREATE POLICY "Users can view own applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM public.jobs
      WHERE jobs.id = applications.job_id
      AND jobs.employer_id = auth.uid()
    )
  );