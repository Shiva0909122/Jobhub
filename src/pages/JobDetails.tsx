import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockJobs } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { MapPinIcon, BriefcaseIcon, BuildingIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Job not found</h2>
        <button
          onClick={() => navigate('/jobs')}
          className="mt-4 text-blue-600 hover:text-blue-500"
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  const handleApply = () => {
    if (!user) {
      toast.error('Please login to apply for jobs');
      navigate('/login');
      return;
    }
    if (user.role !== 'jobseeker') {
      toast.error('Only job seekers can apply for jobs');
      return;
    }
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-2 space-y-2">
              <p className="flex items-center text-gray-600">
                <BuildingIcon className="h-5 w-5 mr-2" />
                {job.company}
              </p>
              <p className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {job.location}
              </p>
              <p className="flex items-center text-gray-600">
                <BriefcaseIcon className="h-5 w-5 mr-2" />
                {job.employmentType.replace('-', ' ')}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-900">{job.salaryRange}</div>
            <div className="mt-2 text-sm text-gray-600">{job.industry}</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
          <p className="text-gray-600 whitespace-pre-line">{job.requirements}</p>
        </section>

        <div className="pt-6 border-t">
          <button
            onClick={handleApply}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}