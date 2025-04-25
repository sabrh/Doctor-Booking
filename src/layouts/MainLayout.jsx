import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
        <Navbar/>
            {/* Placeholder Component */}
            <div className='bg-gray-200 min-h-[calc(100vh-301px)]'>
                <div className='mx-auto px-8 md:px-12 lg:px-20 lg:mx-10'>
                <Toaster position='top-right' />
                    <Outlet/>
                </div>
            </div>
        <Footer/>  
        </>
    );
};

export default MainLayout;