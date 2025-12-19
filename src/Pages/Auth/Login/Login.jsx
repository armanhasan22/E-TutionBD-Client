import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useLocation } from 'react-router';



const Login = () => {
 const{register,handleSubmit,formState:{ errors} } = useForm();
 const{ signInUser} = useAuth();
 const location = useLocation();
 const navigate = useNavigate();

const handleLogin =(data)=>{
    console.log('form data',data);
    signInUser(data.email,data.password)
    .then (result=>{
        console.log(result.user);
navigate(location?.state || '/')
    })
     .catch(error => {
                console.log(error)
            })
}

    return (

       <div className="min-h-screen grid grid-cols-1 lg:grid-cols-1 items-center">
<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold text-blue-950"> Welcome Back </h3>
            <p className='text-center font-semibold'> Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
            {/* Email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })}   className="input" placeholder="Email" />

{

errors.email?.type === 'required'&&
            <p className="text-red-950">Email is Required</p>
}


             {/* Password filed */}
          <label className="label">Password</label>
       
          <input type="password" {...register('password', { required: true ,minLength: 8 ,
             pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

            })}
            className="input"
            placeholder="Password"
       
          />

          {/* Password Error Messages */}
          {errors.password?.type === 'required' && (
            <p className="text-red-950">Password is Required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-red-950">Password must be at least 8 characters</p>
          )}

          
          
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='text-blue-400 font-semibold'> New to E-TutionBD → <Link to ="/register" className='text-blue-900 underline'> Register </Link></p>
      </form>
   <SocialLogin></SocialLogin>
    </div>
    </div>
    );
};

export default Login;