import React, { useState } from 'react';
import Hero from '../Components/Hero'
import BestDoctors from '../Components/BestDoctors'
import MedicalServices from '../Components/MedicalServices'
import { useLoaderData } from 'react-router';

const Home = () => {
    //Doctors data
    const data = useLoaderData()
    const [doctors, setDoctors] = useState(data)
    //console.log(data)

    const handleSearch = (e, text) => {
        e.preventDefault()
        const searchedDoctors = data.filter(
            doctor => 
            doctor.name.toLowerCase().includes(text.toLowerCase())
    )
    setDoctors(searchedDoctors)
    }

    return(
        <>
            <Hero handleSearch={handleSearch} />
            <BestDoctors doctors={doctors} />
            <MedicalServices />
        </>
    );
};

export default Home;