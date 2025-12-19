import React from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
const axiosSecure = axios.create({
    baseURL:'http://localhost:9000'
    

})

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     // intercept request
    //     const reqInterceptor = axiosSecure.interceptors.request.use(config => {
    //         config.headers.Authorization = `Bearer ${token}`
    //         return config
    //     })

    //     // interceptor response
    //     const resInterceptor = axiosSecure.interceptors.response.use((response) => {
    //         return response;
    //     }, (error) => {
    //         console.log(error);

    //         const statusCode = error.status;
    //         if (statusCode === 401 || statusCode === 403) {
    //             logOut()
    //                 .then(() => {
    //                     navigate('/login')
    //                 })
    //         }


    //         return Promise.reject(error);
    //     })

    //     return () => {
    //         axiosSecure.interceptors.request.eject(reqInterceptor);
    //         axiosSecure.interceptors.response.eject(resInterceptor);
    //     }

    // }, 
    
    // [user, logOut, navigate])

useEffect(() => {
  const reqInterceptor = axiosSecure.interceptors.request.use(
    async (config) => {
      if (user) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  );

  const resInterceptor = axiosSecure.interceptors.response.use(
    res => res,
    error => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        logOut().then(() => navigate('/login'));
      }
      return Promise.reject(error);
    }
  );

  return () => {
    axiosSecure.interceptors.request.eject(reqInterceptor);
    axiosSecure.interceptors.response.eject(resInterceptor);
  };
}, [user, logOut, navigate]);



    return axiosSecure;
};

export default useAxiosSecure;