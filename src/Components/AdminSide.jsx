import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import MainDash from '../Components/MainDash/MainDash'
import RightSide from '../Components/RightSide/RightSide'
import { useNavigate } from 'react-router-dom'
import './AdminSide.css'

function AdminSide() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!window.localStorage.getItem('is_admin')){
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="App">
    <div className='AppGlass'>
     <Sidebar/>
     <MainDash/>
     <RightSide/>


    </div>

  </div>
  )
}

export default AdminSide
