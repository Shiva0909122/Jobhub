export interface User {
  id: string;
  email: string;
  role: 'employer' | 'jobseeker';
  fullName?: string;
  companyName?: string;
  bio?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  salaryRange?: string;
  employerId: string;
  industry: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship';
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  resumeUrl?: string;
  coverLetter?: string;
}