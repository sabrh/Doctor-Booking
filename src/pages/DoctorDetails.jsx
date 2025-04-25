import React, { useEffect } from 'react';
import { useLoaderData, useParams,useFetcher } from 'react-router';
import {useBooking} from './AppointmentBtn'
import toast from 'react-hot-toast';

const DoctorDetails = () => {
    const data=useLoaderData()
    const {index}=useParams()
    const selectDoctor=data[parseInt(index)]
    const {image, name,availability,qualification,hospital,fees,registration} = selectDoctor || {}

const {addBooking}=useBooking()
const fetcher=useFetcher()

useEffect(() => {
    console.log("Fetcher Data:", fetcher.data)
    if (fetcher.data?.intent === 'book') {
        const result= addBooking(selectDoctor)
        toast[result.success ? 'success' : 'error'](result.message)
    }
}, [fetcher.data, addBooking, selectDoctor])

    return (
        <>
        <div className='rounded-lg justify-center text-center bg-white p-3'>
            <h1 className='font-bold text-2xl mb-2'>Doctor’s Profile Details</h1>
            <p className='px-20 mb-2'>Get to know your doctor — from their qualifications and experience to their specialties and patient care philosophy. </p>
        </div>
        <div className='rounded-lg bg-white p-6 mt-4 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-md'>
            <img src={image} alt={name} className='w-60 h-60 object-cover rounded-lg' />
            <div className='text-left space-y-2'>
                <h2 className='text-2xl font-bold text-gray-800'>{name}</h2>
                <p className='text-gray-500 font-medium'>{qualification}</p>
                <p className='text-gray-500 font-medium'>Working at</p>
                <p className='font-medium'>{hospital}</p>
                <p className='text-gray-600'>Reg No: {registration}</p>
                <p className='font-medium'>Available <span className='bg-yellow-100 rounded-full text-yellow-700 border-yellow-900 p-1'>{availability}</span></p>
                <p className='text-sm font-medium'>Consultation fees <span className='font-bold text-blue-600'>Tk. {fees}</span> (inc. VAT) <span className='text-blue-500'>per Consultation</span></p>   
            </div>
         </div>
         <div className='rounded-lg justify-center text-center bg-white p-6 mt-4 space-y-4'>
            <h1 className='font-bold text-xl mb-2'>Book an Appointment</h1>
            <div className='flex justify-between'>
                <p className='font-bold'>Availability</p>
                <p className='bg-green-100 rounded-full text-green-700 border-green-900 p-1'>{availability}</p>
            </div>
            <p className='bg-yellow-100 rounded-full text-yellow-700 border-yellow-900 p-1'>[!] Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            
            <fetcher.Form method='post'>
                <input type='hidden' name='intent' value='book' />
                <button className='btn btn-primary rounded-full w-2/3'>Book Appointment Now</button>
            </fetcher.Form>
        </div>
        <div className='bg-gray-200 p-2 mt-4'>
        
        </div>
        </>
    );
};

export default DoctorDetails;