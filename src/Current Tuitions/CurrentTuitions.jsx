
// import React from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import useRole from '../hooks/UseRole';
// ; // adjust path if needed

// const CurrentTuitions = () => {

//   const { role, roleLoading } = useRole();

//   const { data: tutions = [] } = useQuery({
//     queryKey: ['current-tutions'],
//     queryFn: async () => {
//       const res = await axios.get('http://localhost:9000/current-tutions');
//       return res.data;
//     }
//   });

//   if (roleLoading) {
//     return <p className="text-center">Loading...</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl mb-4 text-center font-extrabold text-blue-950 p-3">
//         Total Tuitions : {tutions.length}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {tutions.map((tution) => (
//           <div key={tution._id} className="rounded-xl bg-white shadow-md">
//             <div className="h-2 bg-linear-to-r from-teal-400 via-blue-400 to-purple-400"></div>

//             <div className="p-5 space-y-3">
//               <h3 className="text-lg font-semibold">{tution.subject}</h3>
//               <p>📘 Class {tution.class}</p>
//               <p>📍 {tution.district}</p>

//               <div className="pt-4 border-t flex justify-between items-center">
//                 <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
//                   ৳ {tution.budget}/month
//                 </span>

//                 {/* ✅ ONLY TUTOR CAN APPLY */}
//                 {role === 'tutor' ? (
//                   <button className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-blue-700">
//                     Apply
//                   </button>
//                 ) : (
//                   <span className="text-sm text-gray-400">
//                     Tutor only
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CurrentTuitions;


// real
// import React from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import useRole from '../hooks/UseRole';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router';

// const CurrentTuitions = () => {
//   const { role, roleLoading } = useRole();
//   const navigate = useNavigate();

//   const { data: tutions = [] } = useQuery({
//     queryKey: ['current-tutions'],
//     queryFn: async () => {
//       const res = await axios.get('http://localhost:9000/current-tutions');
//       return res.data;
//     }
//   });

//   if (roleLoading) {
//     return <p className="text-center">Loading...</p>;
//   }

// const handleApply = async (tutionId) => {
//   try {
//     const res = await axios.post(`http://localhost:9000/applications`, {
//       tuitionId
//     });

//     if (res.data.insertedId) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Applied!',
//         text: 'Your application has been submitted.',
//         timer: 1500,
//         showConfirmButton: false
//       });

//       setTimeout(() => {
//         navigate(`/tutor-applications/${tutionId}`);
//       }, 1500);
//     }
//   } catch (err) {
//     console.error(err);
//     Swal.fire('Error', 'Failed to apply. Try again later.', 'error');
//   }
// };


//   return (
//     <div>
//       <h2 className="text-2xl mb-4 text-center font-extrabold text-blue-950 p-3">
//         Total Tuitions : {tutions.length}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {tutions.map((tution) => (
//           <div key={tution._id} className="rounded-xl bg-white shadow-md">
//             <div className="h-2 bg-linear-to-r from-teal-400 via-blue-400 to-purple-400"></div>

//             <div className="p-5 space-y-3">
//               <h3 className="text-lg font-semibold">{tution.subject}</h3>
//               <p>📘 Class {tution.class}</p>
//               <p>📍 {tution.district}</p>

//               <div className="pt-4 border-t flex justify-between items-center">
//                 <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
//                   ৳ {tution.budget}/month
//                 </span>

//                 {role === 'tutor' ? (
//                   <button
//                     onClick={() => handleApply(tution._id)}
//                     className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-blue-700"
//                   >
//                     Apply
//                   </button>
//                 ) : (
//                   <span className="text-sm text-gray-400">
//                     Tutor only
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CurrentTuitions;

import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useRole from '../hooks/UseRole';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CurrentTuitions = () => {
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  const { data: tutions = [] } = useQuery({
    queryKey: ['current-tutions'],
    queryFn: async () => {
      const res = await axios.get('https://e-tution-bd-server-yr7n.vercel.app/current-tutions');
      return res.data;
    }
  });

  if (roleLoading) return <p className="text-center">Loading...</p>;

  const handleApply = async (tuitionId) => { // ✅ name matches everywhere
    try {
      const res = await axios.post(`https://e-tution-bd-server-yr7n.vercel.app/applications`, {
        tuitionId: tuitionId // ✅ use parameter
      });

      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Applied!',
          text: 'Your application has been submitted.',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          navigate(`/tutor-applications/${tuitionId}`);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Failed to apply. Try again later.', 'error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 text-center font-extrabold text-blue-950 p-3">
        Total Tuitions : {tutions.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutions.map((tution) => (
          <div key={tution._id} className="rounded-xl bg-white shadow-md">
            <div className="h-2 bg-linear-to-r from-teal-400 via-blue-400 to-purple-400"></div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">{tution.subject}</h3>
              <p>📘 Class {tution.class}</p>
              <p>📍 {tution.district}</p>

              <div className="pt-4 border-t flex justify-between items-center">
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                  ৳ {tution.budget}/month
                </span>

                {role === 'tutor' ? (
                  <button
                    onClick={() => handleApply(tution._id)} // ✅ pass _id here
                    className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-blue-700"
                  >
                    Apply
                  </button>
                ) : (
                  <span className="text-sm text-gray-400">
                    Tutor only
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTuitions;
