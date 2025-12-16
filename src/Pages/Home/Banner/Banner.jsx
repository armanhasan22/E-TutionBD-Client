// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router';
// import bannerImage1 from "../../../assets/Banner/stydy-1.jpg";
// import bannerImage2 from "../../../assets/Banner/national-cancer-institute-N_aihp118p8-unsplash.jpg"
// import bannerImage3 from "../../../assets/Banner/Stydy-3.jpg"

// const BannerImg= [ bannerImage1,bannerImage2,bannerImage3];
// const Banner = () => {
//     return (
//         <div>
//              <section className="bg-linear-to-r from-gray-900  to-blue-900">
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div className="text-white space-y-6">
//           <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm">
//             🎓 Trusted Tuition Platform
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Learn Better. Learn Smarter.
//           </h1>

//           <p className="text-lg text-white/90">
//             Find expert tutors, post tuition jobs, and manage everything
//             from one powerful platform designed for students and tutors.
//           </p>

//           <div className="flex gap-4 flex-wrap">
//             <Link
//               to="/tuitions"
//               className="btn bg-white text-teal-600 hover:bg-gray-100"
//             >
//               Explore Tuitions
//             </Link>

//             <Link
//               to="/register"
//               className="btn btn-outline text-white border-white hover:bg-white hover:text-teal-600"
//             >
//               Join Now
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT IMAGE CAROUSEL */}
//         <Carousel
//           autoPlay ={true}
//             infiniteLoop= {true}
//             interval={3000}
//         >
//         <div className="rounded-2xl overflow-hidden shadow-2xl">
//           <div className=" w-full h-87.5 md:h-105">
//             {bannerImage1.map((img, index) => (
//               <div
//                 key={index}
//                 id={`banner-slide-${index}`}
//                 className="carousel-item relative max-w-full"
//               >
//                 <img
//                   src={img}
//                   alt={`Banner ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Navigation */}
//                 <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 -translate-y-1/2">
//                   <a
//                     href={`#banner-slide-${index === 0 ? bannerImage2.length - 1 : index - 1}`}
//                     className="btn btn-circle"
//                   >
//                     ❮
//                   </a>
//                   <a
//                     href={`#banner-slide-${index === bannerImage3.length - 1 ? 0 : index + 1}`}
//                     className="btn btn-circle"
//                   >
//                     ❯
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
// </Carousel>

//       </div>
//     </section>
//         </div>
//     );
// };

// export default Banner;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";

import bannerImage1 from "../../../assets/Banner/stydy-1.jpg";
import bannerImage2 from "../../../assets/Banner/national-cancer-institute-N_aihp118p8-unsplash.jpg";
import bannerImage3 from "../../../assets/Banner/Stydy-3.jpg";

const BannerImg = [bannerImage1, bannerImage2, bannerImage3];

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-gray-900 to-blue-900">
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
        <Carousel
          autoPlay
          infiniteLoop
          swipeable
          emulateTouch
        >
          {BannerImg.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden  w-full h-87.5 md:h-105"
            >
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default Banner;
