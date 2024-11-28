import React from 'react'
import "./navbar.scss";
import { FaHamburger } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='navbarComponent'>
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
    )
}
