import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Logo from '../Components/Logo/Logo';
import { useState } from 'react';
import classesData from '../../public/classesData.json'

const BrowseTutions = () => {
    const { user }= useAuth();
    const axiosSecure= useAxiosSecure();
    const navigate= useNavigate();

  const { register, handleSubmit, control } = useForm();
  const loaderData = useLoaderData(); // expects { cities, subjects }
  const { cities, subjects } = loaderData;
  const [selectedClass, setSelectedClass] = useState('');


  // regions
  const regionsDuplicate = cities.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const selectedRegion = useWatch({ control, name: 'region' });
  // districts by region
  const districtsByRegion = region => {
    const regionDistricts = cities.filter(c => c.region === region);
    return regionDistricts.map(d => d.district);
  };

const handleSearchTution = data => {
  console.log(data);
  const tutionData = {
    ...data,
    email: user.email,
    status: 'pending'
  };
  axiosSecure.post('/tutions', tutionData)
    .then(res => {
      if (res.data.insertedId) {
        navigate('/dashboard/my-tutions');
        Swal.fire('Success!', 'Tuition created', 'success');
      }
    });
};

  return (
//     <div>
//       <h2 className="text-4xl font-bold my-6 text-center ">Browse Tutions</h2>

//       <form  
//       onSubmit={handleSubmit(handleSearchTution)} className="p-4 items-center">
//         {/* subject */}
//         <fieldset className="fieldset mt-4">
//   <legend className="fieldset-legend">Class</legend>
//   <select
//     {...register('class', {
//       onChange: (e) => setSelectedClass(e.target.value),
//     })}
//     defaultValue=""
//     className="select"
//   >
//     <option value="">Select Class</option>
//     {[...new Set(classesData.map(item => item.className))].map(cls => (
//       <option key={cls} value={cls}>{cls}</option>
//     ))}
//   </select>
// </fieldset>

// <fieldset className="fieldset mt-4">
//   <legend className="fieldset-legend">Subject</legend>
//   <select
//     {...register('subject')}
//     value={selectedClass ? undefined : ""}
//     disabled={!selectedClass}
//     className="select"
//   >
//     <option value="">Select Subject</option>
//     {classesData
//       .filter(item => item.className === selectedClass)
//       .flatMap(item => item.subjects)
//       .map(subject => (
//         <option key={subject} value={subject}>{subject}</option>
//       ))
//     }
//   </select>
// </fieldset>


//         {/* Region */}
//         <fieldset className="fieldset mt-4">
//           <legend className="fieldset-legend">Region</legend>
//           <select
//             {...register('region')}
//             defaultValue="Pick a Region"
//             className="select"
//           >
//             <option disabled={true}>Pick a Region</option>
//             {regions.map((r, i) => (
//               <option key={i} value={r}>{r}</option>
//             ))}
//           </select>
//         </fieldset>

//         {/* District */}
//         <fieldset className="fieldset mt-4">
//           <legend className="fieldset-legend">District</legend>
//           <select
//             {...register('district')}
//             defaultValue="Pick a District"
//             className="select"
//           >
//             <option disabled={true}>Pick a District</option>
//             {
//               districtsByRegion(selectedRegion).map((d, i) => (
//                 <option key={i} value={d}>{d}</option>
//               ))
//             }
//           </select>
//         </fieldset>


//         {/* Submit */}
//         <input
//           type="submit"
//           value="Search Tutions"
//           className="btn btn-primary mt-6"
//         />

//       </form>
//     </div>

<div className="min-h-screen flex justify-center items-center bg-gray-50">
  <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
    
    <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
      Browse Tutions
    </h2>

    <form
      onSubmit={handleSubmit(handleSearchTution)}
      className="space-y-4"
    >

      {/* Class */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Class</legend>
        <select
          {...register('class', {
            onChange: (e) => setSelectedClass(e.target.value),
          })}
          defaultValue=""
          className="select select-bordered w-full"
        >
          <option value="">Select Class</option>
          {[...new Set(classesData.map(item => item.className))].map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </fieldset>

      {/* Subject */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Subject</legend>
        <select
          {...register('subject')}
          value={selectedClass ? undefined : ""}
          disabled={!selectedClass}
          className="select select-bordered w-full"
        >
          <option value="">Select Subject</option>
          {classesData
            .filter(item => item.className === selectedClass)
            .flatMap(item => item.subjects)
            .map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))
          }
        </select>
      </fieldset>

      {/* Region */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Region</legend>
        <select
          {...register('region')}
          defaultValue="Pick a Region"
          className="select select-bordered w-full"
        >
          <option disabled={true}>Pick a Region</option>
          {regions.map((r, i) => (
            <option key={i} value={r}>{r}</option>
          ))}
        </select>
      </fieldset>

      {/* District */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">District</legend>
        <select
          {...register('district')}
          defaultValue="Pick a District"
          className="select select-bordered w-full"
        >
          <option disabled={true}>Pick a District</option>
          {districtsByRegion(selectedRegion).map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>
      </fieldset>

      {/* Budget */}
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Budget</legend>
  <input
    type="number"
    {...register('budget')}
    placeholder="Enter your budget"
    className="input input-bordered w-full"
  />
</fieldset>


      {/* Submit */}
      <div className="pt-5">
        <input
          type="submit"
          value="Search Tutions"
          className="btn btn-primary w-full text-lg mb-"
        />
      </div>

    </form>
  </div>
</div>

  );
};

export default BrowseTutions;
