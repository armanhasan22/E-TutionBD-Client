import React from 'react';
import { Outlet } from 'react-router';
import AuthImg from '../assets/AuthImage/teaching.jpg'
import { Link } from 'lucide-react';
import Logo from '../Components/Logo/Logo';

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
      <Logo></Logo>
            <div className='flex items-center'>
                <div className='flex-1'>
<Outlet></Outlet>
                </div>
              <div className='flex-1 flex justify-center items-center'>




<img src={AuthImg} className="w-64 h-64 rounded-tl-3xl rounded-br-3xl object-cover border-2 border-blue-800" />















</div>
            </div>
        </div>
    );
};

export default AuthLayout;