// import React, { useEffect } from 'react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import './Conference.css';
// import Swiper from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';

// const ConferenceSection = () => {
//   useEffect(() => {
//     new Swiper('.progress-slide-carousel', {
//       modules: [Autoplay, Pagination],
//       loop: true,
//       autoplay: {
//         delay: 2400,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: '.progress-slide-carousel .swiper-pagination',
//         type: 'progressbar',
//       },
//     });
//   }, []);

//   return (
//     <>
//       {/* <h2>Welcome To ConferenceSection</h2> */}
//       <div className="w-full relative">
//         <div className="swiper progress-slide-carousel swiper-container relative">
//           <div className="swiper-wrapper">

//             <div className="swiper-slide">
//               <div className="bg-indigo-50 rounded-2xl h-96 flex flex-col justify-center items-center p-6 shadow-md">
//                 <h2 className="text-2xl font-bold text-indigo-600 mb-2">Next Conference</h2>
//                 <p className="text-lg text-gray-700">
//                   <strong>Location:</strong> Nairobi, Kenya
//                 </p>
//                 <p className="text-lg text-gray-700">
//                   <strong>Date:</strong> March 10th, 2025
//                 </p>
//                 <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//                 <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//                 <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ConferenceSection;

import React, { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./Conference.css";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const ConferenceSection = () => {
  useEffect(() => {
    new Swiper(".progress-slide-carousel", {
      modules: [Autoplay, Pagination],
      loop: true,
      speed: 1000, // Transition speed in milliseconds (1 second)
      autoplay: {
        delay: 3000, // Time before the next slide (3 seconds)
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
    });
  }, []);

  return (
    <>
      <div className="w-full  bg-indigo-50 py-8 relative">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            Conferences and Workshops
          </h1>
        </div>
        <div className="swiper progress-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            {/* Slide 1: Next Conference Card */}
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <div className="bg-white max-w-md w-3/4 p-6 shadow-md rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                    Pre-Conference Workshop
                  </h2>
                  <p className="text-lg text-gray-700">
                    <strong>Location:</strong> Virtual, Entire world
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Date:</strong> March 3rd, 2025
                  </p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
                    <a
                      href="https://climatehealthcafe.org/conference-workshop-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Explore More
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            {/* <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
              </div>
            </div> */}
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <div className="bg-white max-w-md w-3/4 p-6 shadow-md rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                    Pre-Conference Workshop
                  </h2>
                  <p className="text-lg text-gray-700">
                    <strong>Location:</strong> Virtual, Entire world
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Date:</strong> March 3rd, 2025
                  </p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
                    <a
                      href="https://climatehealthcafe.org/conference-workshop-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Explore More
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            {/* <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
              </div>
            </div> */}
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <div className="bg-white max-w-md w-3/4 p-6 shadow-md rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                    Pre-Conference Workshop
                  </h2>
                  <p className="text-lg text-gray-700">
                    <strong>Location:</strong> Virtual, Entire world
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Date:</strong> March 3rd, 2025
                  </p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
                    <a
                      href="https://climatehealthcafe.org/conference-workshop-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Explore More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
        </div>
      </div>
    </>
  );
};

export default ConferenceSection;
