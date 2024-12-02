import React, { useState } from 'react'
import "./navbar.scss";
import { FaHamburger } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";

export default function Navbar() {
    const [isToggle,setIsToggle]=useState(false);
    return (
        <div className={`navbarComponent ${isToggle?"isActive":""}`}>
            <div>
                <div className='leftPart'>
                    <div className='logoPart'>
                        <FaHamburger />
                        <h2>FoodwanGon</h2>
                    </div>
                    <div className='locationPart'>
                        <p>Deliver to:</p>
                        <button>
                            <IoLocationSharp />
                            <span>Current Location </span>
                        </button>
                        <p>Mirpur 1 Bus Stand, Dhaka</p>
                    </div>
                </div>
                <div className='rightPart'>
                    <div className="searchInput">
                        <button>
                            <IoSearch />
                        </button>
                        <input type="search" placeholder='search food' />
                    </div>
                    <div className="loginBtn">
                        <button>
                            <FaUser />
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </div>
            <button className="toogleBtn" onClick={()=>setIsToggle(!isToggle)}>
                <TbMenu2 />
            </button>
        </div>
    )
}
