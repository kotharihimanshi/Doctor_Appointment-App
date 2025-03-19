import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Myprofile from './Pages/Myprofile'
import MyAppointments from './Pages/MyAppointments'
import About from './Pages/About'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {


  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/doctors' element= {<Doctors />}/>
        <Route path='/doctors/:speciality' element= {<Doctors />}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='Myprofile' element= {<Myprofile/>}/>
        <Route path='/MyAppointments' element= {<MyAppointments/>}/>
        <Route path='/Appointment/:docId' element= {<Appointment/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
