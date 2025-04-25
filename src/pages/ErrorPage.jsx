import React from 'react';
import ErrorImg from '../assets/errorimg.jpg'
import { Link } from 'react-router';
import Navbar from '../Components/Navbar'

const ErrorPage = () => {
    return (
        <>
        <Navbar />
        <div className='py-10 flex flex-col items-center text-center'>
            <img src={ErrorImg} className='mb-2 max-w-sm' alt='page not found error image'/>
            <h1 className='text-red-400 font-bold text-3xl mb-2'>404! - Page Not Found</h1>
            <p className='px-20 mb-2'>Opps! The page you're looking for dosen't exist</p>
            <Link to='/'>
            <button className='btn btn-primary'>Go Back to Home</button>
            </Link>
        </div>
        </>
    );
};

export default ErrorPage;