import React from 'react'
import './Sidebar.css'
import avatar from '../../Images/avatar.png'
import { useState } from 'react';

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";


const Sidebar = () => {

    const [selected, setSelected] = useState(0)


  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={avatar} alt=''></img>
            <span>
                B<span>T</span>S
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index) => {
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}>
                        

                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
                )
            })}
            
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar