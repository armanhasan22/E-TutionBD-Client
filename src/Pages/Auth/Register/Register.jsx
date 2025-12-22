// import { Link } from 'react-router';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import useAuth from '../../../hooks/useAuth';
// import { useNavigate } from 'react-router';
// import axios from 'axios';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useLocation } from 'react-router';

// const Register = () => {

// const {register,handleSubmit,formState:{errors}}= useForm();
// const {registerUser }= useAuth();
// const navigate = useNavigate();
// const location = useLocation();


// const handleRegistration =(data)=>{
//     const profileImg = data.photo[0];
//     console.log( 'after register',  data);
//     registerUser(data.email,data.password)
//     .then(result => { 

// const image_API_URL=`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_host_key}`

// // 1. store the image in form data
//  const formData = new FormData();
//  formData.append('image', profileImg);


//  axios.post(image_API_URL,  formData)
//  .then(res=>{
//     // const photoURL=res.data.data.url;
//     console.log('after image upload',res);
//     // update user profile to firebase
//                         const userProfile = {
//                             displayName: data.name,
//                             photoURL: res.data.data.url
//                         }
//         updateUserProfile(userProfile)
//         .then(()=>{
//             console.log('user profilr update ');
//         })
//         .catch(error=>console.log(error))
//  })
//  navigate('/')
//  .catch(error => console.log(error))
//     })
// }

//     return (
//         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
//             <h3 className="text-3xl text-center">Welcome to E-tutionBD</h3>
//             <p className='text-center'>Please Register</p>
//             <form className="card-body"
//              onSubmit={handleSubmit(handleRegistration)
//             }
//              >
//                 <fieldset className="fieldset">
//                     {/* name field */}
//                     <label className="label">Name</label>
//                     <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
//                     {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}

//                     {/* photo image field */}
//                     <label className="label">Photo</label>

//                     <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

//                     {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}

//                     {/* email field */}
//                     <label className="label">Email</label>
//                     <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
//                     {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

//                     {/* password */}
//                     <label className="label">Password</label>
//                     <input type="password" {...register('password', {
//                         required: true,
//                         minLength: 6,
//                         pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
//                     })} className="input" placeholder="Password" />
//                     {
//                         errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
//                     }
//                     {
//                         errors.password?.type === 'minLength' && <p className='text-red-500'>
//                             Password must be 6 characters or longer
//                         </p>
//                     }
//                     {
//                         errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
//                     }

//                     <div><a className="link link-hover">Forgot password?</a></div>
//                     <button className="btn btn-neutral mt-4">Register</button>
//                 </fieldset>
//                 <p>Already have an account <Link
//                     state={location.state}
//                     className='text-blue-400 underline'
//                     to="/login">Login</Link></p>
//             </form>
//             <SocialLogin>

//             </SocialLogin>
//         </div>
//     );
// };

// export default Register;

// real

// import React from 'react';
// import { Link, useNavigate, useLocation } from 'react-router';
// import { useForm } from 'react-hook-form';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import useAuth from '../../../hooks/useAuth';
// import axios from 'axios';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const Register = () => {

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // ✅ FIX: include updateUserProfile
//   const { registerUser, updateUserProfile } = useAuth();

//   const navigate = useNavigate();
//   const location = useLocation();
//   const axiosSecure=useAxiosSecure();

//   const handleRegistration = (data) => {
//     const profileImg = data.photo[0];
//     console.log('after register', data);

//     registerUser(data.email, data.password)
//       .then(result => {

//         const image_API_URL = `https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_host_key}`;

//         // store image in form data
//         const formData = new FormData();
//         formData.append('image', profileImg);

//           axios.post(image_API_URL, formData)
//                     .then(res => {
//                         const photoURL = res.data.data.url;

//                         // create user in the database
//                         const userInfo = {
//                             email: data.email,
//                             displayName: data.name,
//                             photoURL: photoURL
//                         };
//                         axiosSecure.post('/users', userInfo)
//                             .then(res => {
//                                 if (res.data.insertedId) {
//                                     console.log('user created in the database');
//                                 }
//                             })

//             updateUserProfile(updateUserProfile)
//               .then(() => {
//                 console.log('user profile updated');
//                 navigate('/');
//               })
//               .catch(error => console.log(error));
//           })
//           .catch(error => console.log(error));
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
//       <h3 className="text-3xl text-center">Welcome to E-tutionBD</h3>
//       <p className='text-center'>Please Register</p>

//       <form
//         className="card-body"
//         onSubmit={handleSubmit(handleRegistration)}
//       >
//         <fieldset className="fieldset">

//           {/* Name */}
//           <label className="label">Name</label>
//           <input
//             type="text"
//             {...register('name', { required: true })}
//             className="input"
//             placeholder="Your Name"
//           />
//           {errors.name && <p className='text-red-500'>Name is required.</p>}

//           {/* Photo */}
//           <label className="label">Photo</label>
//           <input
//             type="file"
//             {...register('photo', { required: true })}
//             className="file-input"
//           />
//           {errors.photo && <p className='text-red-500'>Photo is required.</p>}

//           {/* Email */}
//           <label className="label">Email</label>
//           <input
//             type="email"
//             {...register('email', { required: true })}
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email && <p className='text-red-500'>Email is required.</p>}

//           {/* Password */}
//           <label className="label">Password</label>
//           <input
//             type="password"
//             {...register('password', {
//               required: true,
//               minLength: 6,
//               pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
//             })}
//             className="input"
//             placeholder="Password"
//           />

//           {errors.password?.type === 'required' &&
//             <p className='text-red-500'>Password is required.</p>
//           }

//           {errors.password?.type === 'minLength' &&
//             <p className='text-red-500'>Password must be at least 6 characters.</p>
//           }

//           {errors.password?.type === 'pattern' &&
//             <p className='text-red-500'>
//               Must include uppercase, lowercase, number & special character
//             </p>
//           }

//           <button className="btn btn-neutral mt-4">Register</button>
//         </fieldset>

//         <p className="text-center">
//           Already have an account?{' '}
//           <Link
//             to="/login"
//             state={location.state}
//             className="text-blue-400 underline"
//           >
//             Login
//           </Link>
//         </p>
//       </form>

//       <SocialLogin />
//     </div>
//   );
// };

// export default Register;

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        const formData = new FormData();
        formData.append('image', profileImg);

        axios.post(image_API_URL, formData)
          .then(res => {
            const photoURL = res.data.data.url;

            // ✅ user info with role
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL,
              role: data.role || "user",
              createdAt: new Date()
            };

            // save user in DB
            axiosSecure.post('/users', userInfo)
              .then(() => {

                // ✅ FIXED: update profile correctly
                updateUserProfile(data.name, photoURL)
                  .then(() => {
                    navigate('/');
                  })
                  .catch(error => console.log(error));

              });
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <h3 className="text-3xl text-center">Welcome to E-tutionBD</h3>
      <p className='text-center'>Please Register</p>

      <form
        className="card-body"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <fieldset className="fieldset">

          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name && <p className='text-red-500'>Name is required</p>}

          {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register('photo', { required: true })}
            className="file-input"
          />
          {errors.photo && <p className='text-red-500'>Photo is required</p>}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className='text-red-500'>Email is required</p>}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
            })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === 'required' &&
            <p className='text-red-500'>Password is required</p>
          }
          {errors.password?.type === 'minLength' &&
            <p className='text-red-500'>Minimum 6 characters</p>
          }
          {errors.password?.type === 'pattern' &&
            <p className='text-red-500'>
              Must include upper, lower, number & special character
            </p>
          }

          {/* ✅ Register As */}
          <label className="label mt-3 font-semibold text-center">Register As</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="user"
                {...register("role")}
                defaultChecked
              />
              User
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="tutor"
                {...register("role")}
              />
              Tutor
            </label>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>

        <p className="text-center">
          Already have an account?{' '}
          <Link
            to="/login"
            state={location.state}
            className="text-blue-400 underline"
          >
            Login
          </Link>
        </p>
      </form>

      <SocialLogin />
    </div>
  );
};

export default Register;



