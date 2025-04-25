import React, { useState } from 'react';
import BannerImg from '../assets/banner-img-1.png'
import BannerImg2 from '../assets/doctors-banner2.jpg'

const Hero = ({handleSearch}) => {
    const [searchText, setSearchText] = useState('')
    
    return (
        <div className='py-10 rounded-lg justify-center text-center'>
            <h1 className='font-bold text-3xl mb-2'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='px-20 mb-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <form onSubmit={(e)=> handleSearch(e, searchText)}>
                <input
                value={searchText}
                onChange={e =>setSearchText(e.target.value)}
                type="text" placeholder="Search any Doctor..." className="input input-md rounded-full mr-2 w-1/2 focus:outline-none focus:shadow-none" />
                <button type='submit' className="btn btn-primary rounded-full">Search Now</button>
            </form>

            <div className='flex mt-6 w-1/2 space-x-4'>
                <img src={BannerImg} alt="banner doctor image" />
                <img src={BannerImg2} className='rounded-lg' alt="banner doctor image" />
            </div>
        </div>
    );
};

export default Hero;