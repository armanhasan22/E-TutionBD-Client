import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Shared/Footer/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;