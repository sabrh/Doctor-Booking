import React from 'react';
import { useBooking } from './AppointmentBtn'
import toast from 'react-hot-toast';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#F9F871'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const MyBookings = () => {
    const {bookings,cancelBooking} = useBooking()

    const handleCancel = (name) => {
        cancelBooking(name)
        toast.success('Appointment Cancelled')
    }

    const chartData = bookings.map((doc) => ({
        name: doc.name,
        fees: parseInt(doc.fees || '0'), 
      }));

    return (
        <div className=' justify-center text-center '>
            <h1 className='font-bold text-2xl mb-2'>My Today's Appointments</h1>
            {bookings.length === 0 ? (
                <p className='text-gray-600 px-20 mb-2 font-bold text-2xl'>No Appointments Booked Yet.</p>
            ) : (
                <>
                <p className='px-20 mb-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                <div className="w-full h-80 mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="fees" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>

                <ul className='rounded-lg bg-white'>
                    {bookings.map((doctors, index) => (
                        <li key={index} className='shadow-md'>
                <div className='flex justify-between rounded-lg bg-white px-10 py-3.5 mt-4'>
                    <div className='space-y-2'>
                    <h2 className='text-xl font-semibold'>{doctors.name}</h2>
                    <p className='text-sm text-gray-600'>Availability: {doctors.qualification}</p>
                    <p className='text-sm text-gray-600'>Availability: {doctors.availability}</p>
                    </div>
                    <p className='text-sm text-gray-600'>Appointment Fees: Tk. {doctors.fees} + VAT</p>
        
                </div>
                <button className='btn btn-sm btn-error btn-outline w-2/3 rounded-full mb-2.5' onClick={() => handleCancel(doctors.name)} >Cancel Appointment
                </button>
                        </li>
                    ))}
                </ul>
                </>
            )}
        </div>
        
    );
};

export default MyBookings;