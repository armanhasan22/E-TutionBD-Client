import React from "react";
import { ShieldCheck, Search, TrendingUp, Award } from "lucide-react";

const Service = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose eTuitionBd?
          </h2>
          <p className="mt-4 text-gray-600">
            We provide a comprehensive platform that makes finding and managing
            tuition easier than ever before.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Verified Tutors
            </h3>
            <p className="text-gray-600 text-sm">
              All tutors are verified with proper credentials and background
              checks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-pink-500 flex items-center justify-center text-white mb-6">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Easy Search
            </h3>
            <p className="text-gray-600 text-sm">
              Find tutors based on subject, location, budget, and availability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-sky-500 flex items-center justify-center text-white mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Track Progress
            </h3>
            <p className="text-gray-600 text-sm">
              Monitor your learning progress and manage payments transparently.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quality Assured
            </h3>
            <p className="text-gray-600 text-sm">
              Admin-monitored platform ensuring quality education for everyone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
