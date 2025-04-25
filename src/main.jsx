import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import { BookingProvider } from './pages/AppointmentBtn.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  </StrictMode>,
)
