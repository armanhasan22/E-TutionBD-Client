// // // import { useState } from "react";
// // // import axios from "axios";
// // // import useAuth from ".././src/hooks/useAuth";

// // // const BecomeTutor = () => {
// // //   const { user } = useAuth();
// // //   const [qualifications, setQualifications] = useState("");
// // //   const [experience, setExperience] = useState("");
// // //   const [expectedSalary, setExpectedSalary] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const application = {
// // //       tutorId: user._id,
// // //       tutorName: user.name,
// // //       tutorEmail: user.email,
// // //       profileImage: user.photoURL || "",
// // //       qualifications,
// // //       experience,
// // //       expectedSalary
// // //     };

// // //     try {
// // //       await axios.post("http://localhost:9000/applications", application);
// // //       alert("Tutor application submitted successfully!");
// // //       setQualifications("");
// // //       setExperience("");
// // //       setExpectedSalary("");
// // //     } catch (err) {
// // //       console.log(err);
// // //       alert(err.response?.data?.message || "Failed to submit application");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
// // //       <h2 className="text-xl font-bold mb-4">Apply as a Tutor</h2>
// // //       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
// // //         <input type="text" value={user?.name} readOnly className="border p-2 rounded" />
// // //         <input type="email" value={user?.email} readOnly className="border p-2 rounded" />
// // //         <input
// // //           type="text"
// // //           placeholder="Qualifications"
// // //           value={qualifications}
// // //           onChange={e => setQualifications(e.target.value)}
// // //           required
// // //           className="border p-2 rounded"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Experience"
// // //           value={experience}
// // //           onChange={e => setExperience(e.target.value)}
// // //           required
// // //           className="border p-2 rounded"
// // //         />
// // //         <input
// // //           type="number"
// // //           placeholder="Expected Salary"
// // //           value={expectedSalary}
// // //           onChange={e => setExpectedSalary(e.target.value)}
// // //           required
// // //           className="border p-2 rounded"
// // //         />
// // //         <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded mt-2">
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default BecomeTutor;

// // import { useState } from "react";
// // import axios from "axios";
// // import useAuth from "../src/hooks/useAuth";

// // const BecomeTutor = () => {
// //   const { user } = useAuth();
// //   const [qualifications, setQualifications] = useState("");
// //   const [experience, setExperience] = useState("");
// //   const [expectedSalary, setExpectedSalary] = useState("");
// //   const [submittedTutor, setSubmittedTutor] = useState(null); // store submitted data

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const application = {
// //       tutorId: user._id,
// //       tutorName:  user.name,
// //       tutorEmail: user.email,
// //       profileImage: user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`,
// //       qualifications,
// //       experience,
// //       expectedSalary
// //     };

// //     try {
// //       await axios.post("http://localhost:9000/applications", application);
// //       alert("Tutor application submitted successfully!");

// //       // show submitted data
// //       setSubmittedTutor(application);

// //       // reset form
// //       setQualifications("");
// //       setExperience("");
// //       setExpectedSalary("");
// //     } catch (err) {
// //       console.log(err);
// //       alert(err.response?.data?.message || "Failed to submit application");
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
// //         Apply as a Tutor
// //       </h2>

// //       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
// //         <div className="flex gap-4">
// //         <input
// //   type="text"
// //   placeholder="Full Name"
// //   value={name}
// //   onChange={(e) => setName(e.target.value)}
// //   required
// //   className="flex-1 border p-3 rounded shadow-sm"
// // />
// //           <input
// //             type="email"
// //             value={user?.email}
// //             readOnly
// //             className="flex-1 border p-3 rounded shadow-sm"
// //           />
// //         </div>

// //         <input
// //           type="text"
// //           placeholder="Qualifications"
// //           value={qualifications}
// //           onChange={(e) => setQualifications(e.target.value)}
// //           required
// //           className="border p-3 rounded shadow-sm"
// //         />
// //         <input
// //           type="text"
// //           placeholder="Experience"
// //           value={experience}
// //           onChange={(e) => setExperience(e.target.value)}
// //           required
// //           className="border p-3 rounded shadow-sm"
// //         />
// //         <input
// //           type="number"
// //           placeholder="Expected Salary (BDT)"
// //           value={expectedSalary}
// //           onChange={(e) => setExpectedSalary(e.target.value)}
// //           required
// //           className="border p-3 rounded shadow-sm"
// //         />

// //         <button
// //           type="submit"
// //           className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
// //         >
// //           Submit Application
// //         </button>
// //       </form>

// //       {/* Display submitted tutor details */}
// //       {submittedTutor && (
// //         <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
// //           <h3 className="text-xl font-semibold mb-4 text-green-700">
// //             Your Submitted Details
// //           </h3>
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={submittedTutor.profileImage}
// //               alt="Tutor"
// //               className="w-20 h-20 rounded-full border"
// //             />
// //             <div>
// //               <p><b>Name:</b> {submittedTutor.tutorName}</p>
// //               <p><b>Email:</b> {submittedTutor.tutorEmail}</p>
// //               <p><b>Qualifications:</b> {submittedTutor.qualifications}</p>
// //               <p><b>Experience:</b> {submittedTutor.experience}</p>
// //               <p><b>Expected Salary:</b> {submittedTutor.expectedSalary} BDT</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BecomeTutor;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import useAuth from "../src/hooks/useAuth";

// const BecomeTutor = () => {
//   const { user } = useAuth();
//     const [name, setName] = useState("");
//   const [qualifications, setQualifications] = useState("");
//   const [experience, setExperience] = useState("");
//   const [expectedSalary, setExpectedSalary] = useState("");
//   const [tutorDetails, setTutorDetails] = useState(null);

//   // Fetch tutor details from backend
//   useEffect(() => {
//     if (user?._id) {
//       axios
//         .get(`http://localhost:9000/applications/tutor/${user._id}`)
//         .then(res => {
//           if (res.data.length > 0) {
//             // take the latest application
//             setTutorDetails(res.data[res.data.length - 1]);
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const application = {
//       tutorId: user._id,
//       tutorName: user.name,
//       tutorEmail: user.email,
//       profileImage: user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`,
//       qualifications,
//       experience,
//       expectedSalary
//     };

//     try {
//       await axios.post("http://localhost:9000/applications", application);
//       alert("Tutor application submitted successfully!");
//       setTutorDetails(application); // show submitted data
//       setQualifications("");
//       setExperience("");
//       setExpectedSalary("");
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Failed to submit application");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//         Apply as a Tutor
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div className="flex gap-4">
//            <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="border p-3 rounded shadow-sm"
//         />
//           <input
//             type="email"
//             value={user?.email}
//             readOnly
//             className="flex-1 border p-3 rounded shadow-sm"
//           />
//         </div>

//         <input
//           type="text"
//           placeholder="Qualifications"
//           value={qualifications}
//           onChange={(e) => setQualifications(e.target.value)}
//           required
//           className="border p-3 rounded shadow-sm"
//         />
//         <input
//           type="text"
//           placeholder="Experience"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//           required
//           className="border p-3 rounded shadow-sm"
//         />
//         <input
//           type="number"
//           placeholder="Expected Salary (BDT)"
//           value={expectedSalary}
//           onChange={(e) => setExpectedSalary(e.target.value)}
//           required
//           className="border p-3 rounded shadow-sm"
//         />

//         <button
//           type="submit"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Submit Application
//         </button>
//       </form>

//       {/* Display tutor details fetched from backend */}
//       {tutorDetails && (
//         <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
//           <h3 className="text-xl font-semibold mb-4 text-green-700">
//             Your Tutor Details
//           </h3>
//           <div className="flex items-center gap-4">
//             <img
//               src={tutorDetails.profileImage}
//               alt="Tutor"
//               className="w-20 h-20 rounded-full border"
//             />
//             <div>
//               <p><b>Name:</b> {tutorDetails.tutorName}</p>
//               <p><b>Email:</b> {tutorDetails.tutorEmail}</p>
//               <p><b>Qualifications:</b> {tutorDetails.qualifications}</p>
//               <p><b>Experience:</b> {tutorDetails.experience}</p>
//               <p><b>Expected Salary:</b> {tutorDetails.expectedSalary} BDT</p>
//               <p><b>Status:</b> {tutorDetails.status || "Pending"}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BecomeTutor;

import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../src/hooks/useAuth";

const BecomeTutor = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [tutorDetails, setTutorDetails] = useState(null);

  useEffect(() => {
    if (user?._id) {
      axios
        .get(`http://localhost:9000/applications/tutor/${user._id}`)
        .then(res => {
          if (res.data.length > 0) {
            setTutorDetails(res.data[res.data.length - 1]);
          }
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const application = {
      tutorId: user._id,
      tutorName: name || user.name,
      tutorEmail: user.email,
      profileImage: user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`,
      qualifications,
      experience,
      expectedSalary
    };

    try {
      await axios.post("http://localhost:9000/applications", application);
      alert("Tutor application submitted successfully!");
      setTutorDetails(application);
      setQualifications("");
      setExperience("");
      setExpectedSalary("");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to submit application");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Apply as a Tutor
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-3 rounded shadow-sm"
          />
          <input
            type="email"
            value={user?.email}
            readOnly
            className="flex-1 border p-3 rounded shadow-sm"
          />
        </div>

        <input
          type="text"
          placeholder="Qualifications"
          value={qualifications}
          onChange={(e) => setQualifications(e.target.value)}
          required
          className="border p-3 rounded shadow-sm"
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
          className="border p-3 rounded shadow-sm"
        />
        <input
          type="number"
          placeholder="Expected Salary (BDT)"
          value={expectedSalary}
          onChange={(e) => setExpectedSalary(e.target.value)}
          required
          className="border p-3 rounded shadow-sm"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>

      {tutorDetails && (
        <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Your Tutor Details
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={tutorDetails.profileImage}
              alt="Tutor"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <p><b>Name:</b> {tutorDetails.tutorName}</p>
              <p><b>Email:</b> {tutorDetails.tutorEmail}</p>
              <p><b>Qualifications:</b> {tutorDetails.qualifications}</p>
              <p><b>Experience:</b> {tutorDetails.experience}</p>
              <p><b>Expected Salary:</b> {tutorDetails.expectedSalary} BDT</p>
              <p><b>Status:</b> {tutorDetails.status || "Pending"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeTutor; // <-- MUST BE at the bottom, outside any function
