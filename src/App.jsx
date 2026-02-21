import React, { useContext } from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import {AdminContext} from './context/AdminContext.jsx'
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import { Routes,Route } from 'react-router-dom';
import DashBoard from './pages/Admin/DashBoard.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import DoctorsList from './pages/Admin/DoctorsList.jsx';
import AddDoctors from './pages/Admin/AddDoctors.jsx';

const App = () => {
  const {aToken} = useContext(AdminContext)
  return aToken ?  (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <NavBar/>
      <div className='flex items-start'>
        {/* <Dashboard/> */}
        <SideBar/>

        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<DashBoard />} />
          <Route path='/all-appointments' element={<AllAppointments/>} />
          <Route path='/add-doctors' element={<AddDoctors/>} />
          <Route path='/doctors-List' element={<DoctorsList/>} />

        </Routes>
        
      </div>
    </div>
  ):(
    <div>
      <ToastContainer/>
      <Login/>
    </div>
  )
}

export default App
