import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <h3 className='text-3xl font-bold tracking-wide text-black'>
        E-Tution<span className='text-blue-900'>BD</span>
       
      </h3>
     
    </Link>
  );
};

export default Logo;
