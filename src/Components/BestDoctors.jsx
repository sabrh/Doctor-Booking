import React, {useEffect, useState} from 'react';
import {Link} from 'react-router'

const BestDoctors = ({doctors}) => {
    const [displayDoctors, setDisplayDoctors] = useState([])
    const [viewAll, setViewAll] = useState(false)
    useEffect(() => {
        if (viewAll) {
            setDisplayDoctors(doctors)
        } else {
            setDisplayDoctors(doctors.slice(0,6))
        }
    }, [doctors, viewAll])
    return (
        <div className='py-10 rounded-lg justify-center text-center'>
            <h1 className='font-bold text-2xl mb-2'>Our Best Doctors</h1>
            <p className='px-20 mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {displayDoctors.map((doctor, index) => (
                    <div key={index} className="card bg-white shadow-sm py-8">
                        <figure><img src={doctor.image} alt={doctor.name} className='rounded-lg w-50 h-50 object-cover mb-4' /> </figure>
                        <div className='text-left space-y-2 ml-9'>
                            <small className='flex space-x-4'>
                                <p className='bg-green-100 rounded-full text-green-700 border-green-900 p-1'>{doctor.availability}</p>
                                <p className='bg-blue-100 rounded-full text-blue-700 border-blue-900 p-1'>{doctor.experience}+ Years Experience</p>
                            </small>
                            <h2 className='card-title'>{doctor.name}</h2>
                            <h4 className='text-gray-500'>{doctor.qualification}</h4>
                            <p className='text-gray-500'>Reg. No: {doctor.registration}</p>
                        </div>
                        <Link to={`/doctor-details/${index}`} className='mt-4'>
                            <button className='btn btn-outline btn-primary w-2/3 rounded-full'>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
            <button onClick={() => {
                setViewAll(!viewAll)
                if (viewAll) window.scrollTo(0,800)
            }} 
            className='btn btn-primary rounded-full'>{viewAll? 'View Less Doctors' : 'View All Doctors'}</button>
        </div>
    );
};

export default BestDoctors;