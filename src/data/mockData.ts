import { User, Job, Application } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    role: 'jobseeker',
    fullName: 'John Doe',
    bio: 'Experienced software developer'
  },
  {
    id: '2',
    email: 'tech@company.com',
    role: 'employer',
    companyName: 'Tech Corp',
    bio: 'Leading technology company'
  },
  {
    id: '3',
    email: 'jane.doe@email.com',
    role: 'jobseeker',
    fullName: 'Jane Doe',
    bio: 'Creative UI/UX designer with 5 years experience'
  },
  {
    id: '4',
    email: 'hr@designhub.com',
    role: 'employer',
    companyName: 'Design Hub',
    bio: 'Innovative design solutions provider'
  },
  {
    id: '5',
    email: 'mark.dev@example.com',
    role: 'jobseeker',
    fullName: 'Mark Johnson',
    bio: 'Full Stack Developer with expertise in MERN stack'
  },
  {
    id: '6',
    email: 'recruitment@fintech.com',
    role: 'employer',
    companyName: 'FinTech Solutions',
    bio: 'FinTech startup revolutionizing banking'
  },
  {
    id: '7',
    email: 'emma.writer@email.com',
    role: 'jobseeker',
    fullName: 'Emma Smith',
    bio: 'Content writer with SEO specialization'
  },
  {
    id: '8',
    email: 'careers@healthcare.com',
    role: 'employer',
    companyName: 'Healthcare Ltd',
    bio: 'Pioneering healthcare technology solutions'
  },
  {
    id: '9',
    email: 'alex.analytics@email.com',
    role: 'jobseeker',
    fullName: 'Alex Brown',
    bio: 'Data analyst with Python and SQL skills'
  },
  {
    id: '10',
    email: 'jobs@ecommerce.com',
    role: 'employer',
    companyName: 'E-Commerce Inc',
    bio: 'Global leader in e-commerce solutions'
  },
  {
    id: '11',
    email: 'sara.pm@email.com',
    role: 'jobseeker',
    fullName: 'Sara Wilson',
    bio: 'Project manager with Agile certifications'
  },
  {
    id: '12',
    email: 'info@educationplus.com',
    role: 'employer',
    companyName: 'Education Plus',
    bio: 'Transforming education with technology'
  },
  {
    id: '13',
    email: 'kevin.coder@email.com',
    role: 'jobseeker',
    fullName: 'Kevin Lee',
    bio: 'Passionate frontend developer skilled in ReactJS'
  },
  {
    id: '14',
    email: 'careers@cybersec.com',
    role: 'employer',
    companyName: 'CyberSec Solutions',
    bio: 'Experts in cybersecurity and data protection'
  },
  {
    id: '15',
    email: 'lisa.marketing@email.com',
    role: 'jobseeker',
    fullName: 'Lisa Adams',
    bio: 'Marketing specialist focused on digital strategies'
  }
]
;

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    description: 'We are looking for an experienced React developer to join our team.',
    requirements: '5+ years of experience with React, TypeScript, and modern web development.',
    salaryRange: '$120,000 - $160,000',
    employerId: '2',
    industry: 'Technology',
    employmentType: 'full-time'
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "Join our creative team as a UX Designer.",
    requirements: "3+ years of experience in UX design, proficiency in Figma.",
    salaryRange: "$90,000 - $120,000",
    employerId: 3,
    industry: "Design",
    employmentType: "full-time"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "New York, NY",
    description: "Seeking a skilled Frontend Developer to join our growing team.",
    requirements: "2+ years of experience in React.js, proficiency in HTML/CSS/JS.",
    salaryRange: "$80,000 - $110,000",
    employerId: 4,
    industry: "Technology",
    employmentType: "full-time"
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Innovative Labs",
    location: "San Francisco, CA",
    description: "Looking for an experienced Backend Developer to build scalable APIs.",
    requirements: "3+ years of experience in Node.js and MongoDB.",
    salaryRange: "$95,000 - $130,000",
    employerId: 5,
    industry: "Software",
    employmentType: "full-time"
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "NextGen Tech",
    location: "Remote",
    description: "Join us as a Full Stack Developer and work on cutting-edge projects.",
    requirements: "4+ years experience with MERN stack.",
    salaryRange: "$100,000 - $140,000",
    employerId: 6,
    industry: "Technology",
    employmentType: "full-time"
  },
  {
    id: 6,
    title: "Graphic Designer",
    company: "Creative Minds",
    location: "Los Angeles, CA",
    description: "We are looking for a creative Graphic Designer.",
    requirements: "2+ years experience with Adobe Suite and branding.",
    salaryRange: "$65,000 - $85,000",
    employerId: 7,
    industry: "Design",
    employmentType: "contract"
  },
  {
    id: 7,
    title: "Project Manager",
    company: "Agile Solutions",
    location: "Chicago, IL",
    description: "Seeking an experienced Project Manager to oversee Agile teams.",
    requirements: "5+ years in project management, Agile certifications preferred.",
    salaryRange: "$95,000 - $125,000",
    employerId: 8,
    industry: "Management",
    employmentType: "full-time"
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Big Data Corp",
    location: "Remote",
    description: "Join our data team as a Data Scientist.",
    requirements: "3+ years of experience in Python, SQL, and machine learning.",
    salaryRange: "$110,000 - $150,000",
    employerId: 9,
    industry: "Data Science",
    employmentType: "full-time"
  },
  {
    id: 9,
    title: "Marketing Manager",
    company: "BrandBoost",
    location: "Miami, FL",
    description: "Looking for a Marketing Manager to lead campaigns.",
    requirements: "4+ years of marketing experience, strong analytical skills.",
    salaryRange: "$85,000 - $110,000",
    employerId: 10,
    industry: "Marketing",
    employmentType: "full-time"
  },
  {
    id: 10,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    description: "Hiring a DevOps Engineer to manage cloud infrastructure.",
    requirements: "3+ years experience in AWS, Docker, and Kubernetes.",
    salaryRange: "$100,000 - $130,000",
    employerId: 11,
    industry: "Cloud Computing",
    employmentType: "full-time"
  },
  {
    id: 11,
    title: "Business Analyst",
    company: "Insight Analytics",
    location: "Boston, MA",
    description: "Seeking a Business Analyst to drive data-driven decisions.",
    requirements: "2+ years of experience in business analysis and reporting.",
    salaryRange: "$75,000 - $95,000",
    employerId: 12,
    industry: "Finance",
    employmentType: "full-time"
  },
  {
    id: 12,
    title: "Cybersecurity Specialist",
    company: "SecureTech",
    location: "Austin, TX",
    description: "Protect our systems as a Cybersecurity Specialist.",
    requirements: "3+ years experience in security audits and risk management.",
    salaryRange: "$90,000 - $120,000",
    employerId: 13,
    industry: "Cybersecurity",
    employmentType: "full-time"
  },
  {
    id: 13,
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Denver, CO",
    description: "We are looking for an HR Manager to oversee talent acquisition.",
    requirements: "5+ years of HR experience, SHRM certification preferred.",
    salaryRange: "$80,000 - $100,000",
    employerId: 14,
    industry: "Human Resources",
    employmentType: "full-time"
  },
  {
    id: 14,
    title: "Software Engineer",
    company: "CodeCrafters",
    location: "Remote",
    description: "Looking for a Software Engineer to develop innovative solutions.",
    requirements: "3+ years experience in Python and Django.",
    salaryRange: "$90,000 - $120,000",
    employerId: 15,
    industry: "Software",
    employmentType: "full-time"
  },
  {
    id: 15,
    title: "Content Writer",
    company: "MediaFlow",
    location: "Remote",
    description: "Hiring a creative Content Writer for blog and social media.",
    requirements: "2+ years experience in content creation and SEO.",
    salaryRange: "$50,000 - $70,000",
    employerId: 16,
    industry: "Media",
    employmentType: "part-time"
  }
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    userId: '1',
    status: 'pending',
    coverLetter: 'I am very interested in this position...'
  },
  {
    id: '2',
    jobId: '2',
    userId: '3',
    status: 'reviewed',
    coverLetter: 'My skills align perfectly with the job requirements...'
  },
  {
    id: '3',
    jobId: '3',
    userId: '5',
    status: 'rejected',
    coverLetter: 'I bring 5 years of relevant experience to this role...'
  },
  {
    id: '4',
    jobId: '1',
    userId: '7',
    status: 'pending',
    coverLetter: 'Excited about the opportunity to contribute to your team...'
  },
  {
    id: '5',
    jobId: '4',
    userId: '9',
    status: 'approved',
    coverLetter: 'I believe my background in development fits this role...'
  },
  {
    id: '6',
    jobId: '2',
    userId: '11',
    status: 'reviewed',
    coverLetter: 'Passionate about creating user-friendly interfaces...'
  },
  {
    id: '7',
    jobId: '5',
    userId: '13',
    status: 'pending',
    coverLetter: 'Looking forward to the chance to work in this exciting role...'
  },
  {
    id: '8',
    jobId: '3',
    userId: '15',
    status: 'approved',
    coverLetter: 'With my extensive experience in project management...'
  },
  {
    id: '9',
    jobId: '6',
    userId: '4',
    status: 'rejected',
    coverLetter: 'I am confident that my skills will contribute significantly...'
  },
  {
    id: '10',
    jobId: '7',
    userId: '6',
    status: 'pending',
    coverLetter: 'Eager to bring my technical skills to your team...'
  },
  {
    id: '11',
    jobId: '8',
    userId: '8',
    status: 'reviewed',
    coverLetter: 'I have a strong background in data analysis and insights...'
  },
  {
    id: '12',
    jobId: '9',
    userId: '10',
    status: 'approved',
    coverLetter: 'Marketing is my passion, and I am excited about this role...'
  },
  {
    id: '13',
    jobId: '10',
    userId: '12',
    status: 'rejected',
    coverLetter: 'My cloud engineering experience aligns with your needs...'
  },
  {
    id: '14',
    jobId: '11',
    userId: '14',
    status: 'pending',
    coverLetter: 'With my expertise in business analysis, I am a great fit...'
  },
  {
    id: '15',
    jobId: '12',
    userId: '2',
    status: 'reviewed',
    coverLetter: 'I am eager to apply my cybersecurity knowledge to your company...'
  }
]
