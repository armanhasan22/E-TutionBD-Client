import React from 'react';
import { Link } from 'react-router';
const bannerImages = [
  // 👉 add your images here (local or online)
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];
const Banner = () => {
    return (
        <div>
             <section className="bg-linear-to-r from-gray-900  to-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-6">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm">
            🎓 Trusted Tuition Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Better. Learn Smarter.
          </h1>

          <p className="text-lg text-white/90">
            Find expert tutors, post tuition jobs, and manage everything
            from one powerful platform designed for students and tutors.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/tuitions"
              className="btn bg-white text-teal-600 hover:bg-gray-100"
            >
              Explore Tuitions
            </Link>

            <Link
              to="/register"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-teal-600"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <div className="carousel w-full h-[350px] md:h-[420px]">
            {bannerImages.map((img, index) => (
              <div
                key={index}
                id={`banner-slide-${index}`}
                className="carousel-item relative w-full"
              >
                <img
                  src={img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation */}
                <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 -translate-y-1/2">
                  <a
                    href={`#banner-slide-${index === 0 ? bannerImages.length - 1 : index - 1}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#banner-slide-${index === bannerImages.length - 1 ? 0 : index + 1}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;