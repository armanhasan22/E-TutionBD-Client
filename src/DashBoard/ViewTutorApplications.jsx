// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router";

// // const ViewTutorApplications = ({ tuitionId }) => {
// //   const [applications, setApplications] = useState([]);
// //   const navigate = useNavigate();

// //   // Fetch tutor applications
// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:9000/applications/tuition/${tuitionId}`)
// //       .then(res => setApplications(res.data))
// //       .catch(err => console.log(err));
// //   }, [tuitionId]);

// //   // Reject tutor
// //   const handleReject = (id) => {
// //     axios
// //       .patch(`http://localhost:9000/applications/reject/${id}`)
// //       .then(() => {
// //         setApplications(prev =>
// //           prev.map(app =>
// //             app._id === id ? { ...app, status: "Rejected" } : app
// //           )
// //         );
// //       });
// //   };

// //   // Approve tutor → redirect to payment
// //   const handleApprove = (application) => {
// //     navigate("/checkout", {
// //       state: {
// //         applicationId: application._id,
// //         amount: application.expectedSalary,
// //         tutorName: application.tutorName,
// //       }
// //     });
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto p-4">
// //       <h2 className="text-2xl font-bold mb-4">Tutor Applications</h2>

// //       {applications.length === 0 && (
// //         <p>No tutor has applied yet.</p>
// //       )}

// //       <div className="grid md:grid-cols-2 gap-4">
// //         {applications.map(app => (
// //           <div key={app._id} className="border p-4 rounded shadow">
            
// //             <div className="flex items-center gap-3">
// //               <img
// //                 src={app.profileImage}
// //                 alt="Tutor"
// //                 className="w-12 h-12 rounded-full"
// //               />
// //               <h3 className="font-semibold">{app.tutorName}</h3>
// //             </div>

// //             <p className="mt-2"><b>Qualification:</b> {app.qualifications}</p>
// //             <p><b>Experience:</b> {app.experience}</p>
// //             <p><b>Expected Salary:</b> {app.expectedSalary} BDT</p>
// //             <p className="mt-1">
// //               <b>Status:</b>{" "}
// //               <span className={
// //                 app.status === "Pending"
// //                   ? "text-yellow-600"
// //                   : app.status === "Approved"
// //                   ? "text-green-600"
// //                   : "text-red-600"
// //               }>
// //                 {app.status}
// //               </span>
// //             </p>

// //             {app.status === "Pending" && (
// //               <div className="flex gap-2 mt-3">
// //                 <button
// //                   onClick={() => handleApprove(app)}
// //                   className="bg-green-600 text-white px-3 py-1 rounded"
// //                 >
// //                   Accept
// //                 </button>

// //                 <button
// //                   onClick={() => handleReject(app._id)}
// //                   className="bg-red-600 text-white px-3 py-1 rounded"
// //                 >
// //                   Reject
// //                 </button>
// //               </div>
// //             )}

// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewTutorApplications;
// import { useParams } from 'react-router';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import Swal from 'sweetalert2';

// const ViewTutorApplications = () => {
//   const { tuitionId } = useParams(); // get from URL
//   const [applications, setApplications] = useState([]);
//   const navigate = useNavigate();

//   // Fetch tutor applications
//   useEffect(() => {
//     axios
//       .get(`http://localhost:9000/applications/tuition/${tuitionId}`)
//       .then(res => setApplications(res.data))
//       .catch(err => console.log(err));
//   }, [tuitionId]);

//   // Reject tutor
//   const handleReject = (id) => {
//     axios
//       .patch(`http://localhost:9000/applications/reject/${id}`)
//       .then(() => {
//         setApplications(prev =>
//           prev.map(app =>
//             app._id === id ? { ...app, status: "Rejected" } : app
//           )
//         );
//       });
//   };

//   // Approve tutor → redirect to payment
//   const handleApprove = (application) => {
//     navigate("/checkout", {
//       state: {
//         applicationId: application._id,
//         amount: application.expectedSalary,
//         tutorName: application.tutorName,
//       }
//     });
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Tutor Applications</h2>

//       {applications.length === 0 && (
//         <p>No tutor has applied yet.</p>
//       )}

//       <div className="grid md:grid-cols-2 gap-4">
//         {applications.map(app => (
//           <div key={app._id} className="border p-4 rounded shadow">
//             <div className="flex items-center gap-3">
//               <img
//                 src={app.profileImage}
//                 alt="Tutor"
//                 className="w-12 h-12 rounded-full"
//               />
//               <h3 className="font-semibold">{app.tutorName}</h3>
//             </div>

//             <p className="mt-2"><b>Qualification:</b> {app.qualifications}</p>
//             <p><b>Experience:</b> {app.experience}</p>
//             <p><b>Expected Salary:</b> {app.expectedSalary} BDT</p>
//             <p className="mt-1">
//               <b>Status:</b>{" "}
//               <span className={app.status === "Pending"
//                 ? "text-yellow-600"
//                 : app.status === "Approved"
//                 ? "text-green-600"
//                 : "text-red-600"
//               }>
//                 {app.status}
//               </span>
//             </p>

//             {app.status === "Pending" && (
//               <div className="flex gap-2 mt-3">
//                 <button
//                   onClick={() => handleApprove(app)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   Accept
//                 </button>

//                 <button
//                   onClick={() => handleReject(app._id)}
//                   className="bg-red-600 text-white px-3 py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewTutorApplications;

// import { useParams } from 'react-router';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';

// const ViewTutorApplications = () => {
//   const { tuitionId } = useParams(); // get tuition ID from URL
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true); // loading state
//   const navigate = useNavigate();

//   // Fetch tutor applications from backend
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:9000/applications/tuition/${tuitionId}`)
//       .then(res => {
//         setApplications(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching tutors:", err);
//         setLoading(false);
//       });
//   }, [tuitionId]);

//   // Reject tutor
//   const handleReject = (id) => {
//     axios
//       .patch(`http://localhost:9000/applications/reject/${id}`)
//       .then(() => {
//         setApplications(prev =>
//           prev.map(app =>
//             app._id === id ? { ...app, status: "Rejected" } : app
//           )
//         );
//       })
//       .catch(err => console.error("Error rejecting tutor:", err));
//   };

//   // Approve tutor → redirect to payment
//   const handleApprove = (application) => {
//     navigate("/checkout", {
//       state: {
//         applicationId: application._id,
//         amount: application.expectedSalary,
//         tutorName: application.tutorName,
//       }
//     });
//   };

//   if (loading) return <p className="text-center mt-10">Loading tutors...</p>;
//   if (!applications.length) return <p className="text-center mt-10">No tutors applied yet.</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Tutor Applications</h2>

//       <div className="grid md:grid-cols-2 gap-4">
//         {applications.map(app => (
//           <div key={app._id} className="border p-4 rounded shadow">
//             <div className="flex items-center gap-3 mb-2">
//               <img
//                 src={app.profileImage || 'https://via.placeholder.com/50'}
//                 alt={app.tutorName}
//                 className="w-12 h-12 rounded-full"
//               />
//               <h3 className="font-semibold">{app.tutorName}</h3>
//             </div>

//             <p><b>Qualification:</b> {app.qualifications}</p>
//             <p><b>Experience:</b> {app.experience}</p>
//             <p><b>Expected Salary:</b> {app.expectedSalary} BDT</p>
//             <p>
//               <b>Status:</b>{" "}
//               <span className={
//                 app.status === "Pending" ? "text-yellow-600"
//                 : app.status === "Approved" ? "text-green-600"
//                 : "text-red-600"
//               }>
//                 {app.status}
//               </span>
//             </p>

//             {app.status === "Pending" && (
//               <div className="flex gap-2 mt-3">
//                 <button
//                   onClick={() => handleApprove(app)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   Accept
//                 </button>

//                 <button
//                   onClick={() => handleReject(app._id)}
//                   className="bg-red-600 text-white px-3 py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewTutorApplications;


import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTutorApplications = () => {
  const { tuitionId } = useParams();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:9000/applications/tuition/${tuitionId}`)
      .then(res => {
        setTutors(res.data); // set tutors from backend
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [tuitionId]);

  if (loading) return <p className="text-center mt-10">Loading tutors...</p>;
  if (tutors.length === 0) return <p className="text-center mt-10">No tutors found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Tutors Applied</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {tutors.map(tutor => (
          <div key={tutor._id} className="border p-4 rounded shadow">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={tutor.profileImage || 'https://via.placeholder.com/50'}
                alt={tutor.tutorName}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="font-semibold">{tutor.tutorName}</h3>
            </div>

            <p><b>Qualification:</b> {tutor.qualifications}</p>
            <p><b>Experience:</b> {tutor.experience}</p>
            <p><b>Expected Salary:</b> {tutor.expectedSalary} BDT</p>
            <p><b>Status:</b> {tutor.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTutorApplications;
