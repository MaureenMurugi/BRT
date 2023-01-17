import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import MainDash from '../Components/MainDash/MainDash'
import RightSide from '../Components/RightSide/RightSide'
import './AdminSide.css'

function AdminSide() {
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