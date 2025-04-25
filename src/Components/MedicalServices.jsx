import React from 'react';
import IconDoc from '../assets/success-doctor.png'
import IconPatient from '../assets/success-patients.png'
import IconReview from '../assets/success-review.png'
import IconStaff from '../assets/success-staffs.png'
import CountUp from 'react-countup';

const MedicalServices = () => {
    return (
        <div className='py-10 rounded-lg justify-center text-center'>
            <h1 className='font-bold text-2xl mb-2'>We Provide Best Medical Services</h1>
            <p className='px-20 mb-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 my-8 justify-center text-center'>
                <div className='bg-white rounded-lg p-10'>
                    <img src={IconDoc} alt="Doctor Icon" />
                    <h1 className='text-4xl font-bold mt-2.5'><CountUp end={199} duration={10}/>+</h1>
                    <p className='text-gray-500'>Total Doctors</p>
                </div>
                <div className='bg-white rounded-lg p-10'>
                    <img src={IconReview} alt="Reviews Icon" />
                    <h1 className='text-4xl font-bold mt-2.5'><CountUp end={267} duration={10}/>+</h1>
                    <p className='text-gray-500'>Total Reviews</p>
                </div>
                <div className='bg-white rounded-lg p-10'>
                    <img src={IconPatient} alt="Patients Icon" />
                    <h1 className='text-4xl font-bold mt-2.5'><CountUp end={1900} duration={10}/>+</h1>
                    <p className='text-gray-500'>Total Patients</p>
                </div>
                <div className='bg-white rounded-lg p-10'>
                    <img src={IconStaff} alt="Staffs Icon" />
                    <h1 className='text-4xl font-bold mt-2.5'><CountUp end={300} duration={10}/>+</h1>
                    <p className='text-gray-500'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;