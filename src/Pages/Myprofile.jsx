import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {

  const [userData, setUserdata] = useState({
    name: 'Himanshi Kothari',
    image: assets.profile_pic,
    email: 'Himanshi@gmail.com',
    phone: '+91 9999999999',
    address: {
      line1: '123 Street',
      line2: 'City, State, Country',
      zip: '12345'
    },
    dob: '26/01/2005',
    gender: 'Female',
  })

  const [isEdit, setisEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Email Id: </p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' onChange={(e) => setUserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.lin21} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-70'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserdata(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Preferrednottosay">Preferred Not To Say</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-medium'>DOB:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-20' type="date" onChange={(e) => setUserdata(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10 '>
        {
          isEdit
            ? <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all' onClick={() => setisEdit(false)}>Save</button>
            : <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all' onClick={() => setisEdit(true)}>Edit</button>
        }
      </div>
    </div>

  )
}

export default Myprofile
