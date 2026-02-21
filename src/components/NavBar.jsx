import React, { useContext } from 'react'
import {assets} from "../assets/assets"
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const {aToken, setAToken}  = useContext(AdminContext);


    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')

    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-2 border-b border-gray-200 bg-white '>
        <div className='flex  items-center gap-2 text-xs'>
            <img className='w-36 sm:w-40 inline-element cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ?  'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='py-2 px-10 bg-primary hover:text-gray-600 text-white text-sm rounded-full'> Logout </button>
       
    </div>
  )
}

export default NavBar
