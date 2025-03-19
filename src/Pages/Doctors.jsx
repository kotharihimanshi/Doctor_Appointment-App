import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const doctors = () => {

  const navigate = useNavigate()

  const { speciality } = useParams()
  const [filterDoc, setfilterDoc] = useState([])
  const [showFilter , setShowfilter] = useState(false)

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setfilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600 font-semibold'>Specialized Doctors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-500 text-white' : ''}`} onClick={() => setShowfilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-black ${speciality === "General Physician" ? 'bg-indigo-50 text-black' : "General Physician"}`}>General Physician</p>
          <p onClick={() => speciality === 'Gynaecologist' ? navigate('/doctors') : navigate('/doctors/Gynaecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-black ${speciality === "Gynaecologist" ? 'bg-indigo-50 text-black' : "Gynaecologist"}`}>Gynaecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-black ${speciality === "Dermatologist" ? 'bg-indigo-50 text-black' : "Dermatologist"}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  hover:border-black ${speciality === "Pediatrician" ? 'bg-indigo-50 text-black' : "Pediatrician"}`}>Pediatrician</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-black ${speciality === "Neurologist" ? 'bg-indigo-50 text-black' : "Neurologist"}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-black ${speciality === "Gastroenterologist" ? 'bg-indigo-50 text-black' : "Gastroenterologist"}`}>Gasteroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className='border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500'
            >
              {/* Image Wrapper with Fixed Aspect Ratio */}
              <div className="w-full h-72 relative">
                <img
                  className='absolute inset-0 w-full h-full object-cover bg-blue-50'
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Content Section */}
              <div className='p-4'>
                <div className='flex items-center gap-2 text-center text-sm text-green-500'>
                  <p className='w-2 h-2 rounded-full bg-green-500'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>

  )
}

export default doctors
