import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentBtn = createContext();
export const useBooking = () => useContext(AppointmentBtn);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Load from localStorage on initial mount
  useEffect(() => {
    const stored = localStorage.getItem('bookings');
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (doctor) => {
    const exists = bookings.some(d => d.name === doctor.name);
    if (exists) return { success: false, message: 'Appointment already booked' };
    const updated = [...bookings, doctor];
    setBookings(updated);
    return { success: true, message: 'Booked Appointment' };
  };

  const cancelBooking = (name) => {
    const updated = bookings.filter(d => d.name !== name);
    setBookings(updated);
  };

  return (
    <AppointmentBtn.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </AppointmentBtn.Provider>
  );
};
