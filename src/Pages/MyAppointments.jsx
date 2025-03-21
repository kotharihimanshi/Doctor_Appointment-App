import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  const [appointments, setAppointments] = useState(doctors.slice(0, 2));

  // Handle Payment (Simulated)
  const handlePayment = (doctor) => {
    alert(`Processing payment for Dr. ${doctor.name}`);
    // Integrate Razorpay/Stripe payment logic here
  };

  // Handle Appointment Cancellation
  const handleCancel = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div>
      <p className='pb-3 mt-12 font-semibold text-zinc-700 border-b'>My Appointments</p>
      <div>
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div 
              className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' 
              key={index}
            >
              {/* Doctor Image */}
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt={item.name} />
              </div>

              {/* Doctor Info */}
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-[14px] mt-1'>
                  <span className='text-sm text-neutral-700 font-semibold'>Date & Time:</span> 
                  25th July, 2025 | 4:00 PM
                </p>
              </div>

              {/* Actions */}
              <div className='flex flex-col gap-2 justify-end'>
                <button 
                  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded 
                  hover:bg-blue-500 transition-all duration-300 hover:text-white' 
                  onClick={() => handlePayment(item)}
                >
                  Pay Online
                </button>
                <button 
                  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded 
                  hover:bg-red-500 transition-all duration-300 hover:text-white' 
                  onClick={() => handleCancel(index)}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 py-4'>No upcoming appointments.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
