import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, BriefcaseIcon, BuildingIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with top employers and discover opportunities that match your skills and aspirations.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/jobs"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
          >
            Browse Jobs
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <SearchIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Job Search</h3>
          <p className="text-gray-600">
            Find the perfect job with our advanced search and filtering system.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <BriefcaseIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Apply with Ease</h3>
          <p className="text-gray-600">
            One-click applications and profile management make job hunting simple.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <BuildingIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Top Companies</h3>
          <p className="text-gray-600">
            Connect with leading companies and exciting startups.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">For Employers</h2>
        <p className="text-gray-600 mb-6">
          Post jobs and find the perfect candidates for your company.
        </p>
        <Link
          to="/post-job"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
        >
          Post a Job
        </Link>
      </section>
    </div>
  );
}