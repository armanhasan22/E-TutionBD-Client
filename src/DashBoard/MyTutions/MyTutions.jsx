import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const MyTutions = () => {

const {user}= useAuth();
const axiosSecure= useAxiosSecure();

const { data: tutions = [], refetch } = useQuery({
  queryKey: ['my-tutions', user?.email],
  // enabled: !!user?.email,
  queryFn: async () => {
    const res = await axiosSecure.get(`/tutions?email=${user.email}`);
    return res.data;
  }
});




const handleTutionDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/tutions/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch(); // refresh the tutions list
            Swal.fire("Deleted!", "Your Tuition has been deleted.", "success");
          }
        })
        .catch(err => console.error(err));
    }
  });
};






    return (
        <div className=''>
                    <h2 className="text-2xl gap-2 mb-4 text-center font-extrabold text-blue-950 p-3"> My Tuitions : {tutions.length}</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {tutions.map((tution) => (
    <div
      key={tution._id}
      className="rounded-xl  bg-white shadow-md overflow-hidden"
    >
        
      {/* Top Gradient */}
      <div className="h-2 bg-linear-to-r from-teal-400 via-blue-400 to-purple-400"></div>

      <div className="p-5 space-y-3">
        {/* Title & Status */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
        {tution.subject}
          </h3>
          <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
            {tution.status}
          </span>
        </div>

        {/* Subject & Class */}
        <p className="text-gray-600 flex items-center gap-2">
          📘 Class {tution.class} – {tution.subject}
        </p>

        {/* Location */}
        <p className="text-gray-600 flex items-center gap-2">
          📍 {tution.district}
        </p>

        {/* Schedule (static like image) */}
        <p className="text-gray-600 flex items-center gap-2">
          📅 Monday, Wednesday, Friday
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            ৳ {tution.budget}/month
          </span>
          <Link to={`/dashboard/tutor-applications/${tution._id}`}>
  View Tutor Applications
</Link>

          <button
            onClick={() => handleTutionDelete(tution._id)}
            className="bg-red-800 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
    );
};

export default MyTutions;