import React from "react";
import { createBrowserRouter } from 'react-router'
import MainLayout from "../layouts/MainLayout";

import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs'
import FAQs from '../pages/FAQs'
import MyBookings from '../pages/MyBookings'
import DoctorDetails from '../pages/DoctorDetails'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
        {
            path: '/',
            Component: Home, 
            hydrateFallbackElement: <p>Loading... please wait</p>,
            loader: () => fetch('../doctors.json'),  
          },
          
          {
            path: '/faq',
            Component: FAQs ,     
          },
          {
            path: '/bookings',
            Component: MyBookings ,     
          },
          {
            path: '/doctor-details/:index',
            Component: DoctorDetails , 
            loader: () => fetch('../doctors.json'),   
            action: async ({request, params}) => {
              const data = await fetch('../doctors.json').then(res => res.json())
              const doctor = data[parseInt(params.index)]
              const formData =await request.formData()

              const intent = formData.get('intent')
              return {intent, doctor};
            }
          },
    ]
  },
  
])

export default router