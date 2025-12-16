import React from 'react';

const Footer = () => {
    return (
<div className="bg-linear-to-br from-[#152139] to-[#020617] text-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-14">

    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl">
            🎓
          </div>
          <h2 className="text-xl font-semibold text-white">E-TutionBD</h2>
        </div>
        <p className="text-sm leading-relaxed">
          Bangladesh's leading tuition management platform connecting students
          with verified, qualified tutors. Making education accessible and transparent.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Find Tuitions</a></li>
          <li><a href="#" className="hover:text-white">Find Tutors</a></li>
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* For Users */}
      <div>
        <h3 className="text-white font-semibold mb-4">For Users</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Become a Tutor</a></li>
          <li><a href="#" className="hover:text-white">Post Tuition</a></li>
          <li><a href="#" className="hover:text-white">Login</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 items-start">
            <span>📍</span>
            <span>
              House 12, Road 7, Dhanmondi<br />
              Dhaka 1205, Bangladesh
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span>📞</span>
            <span>+880 1700-000000</span>
          </li>
          <li className="flex gap-3 items-center">
            <span>✉️</span>
            <span>info@etuitionbd.com</span>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600">f</a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600">𝕏</a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600">in</a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600">📸</a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row items-center md:justify-between gap-3 text-sm text-center md:text-left">
      <p>© 2025 eTuitionBd. All rights reserved.</p>
      <p>Developed with care for Bangladesh's education system</p>
    </div>

  </div>
</div>



    );
};

export default Footer;
 