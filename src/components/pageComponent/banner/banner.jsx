import React from 'react'
import "./banner.scss";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import CustomButton from '../../global/button/button';
import ImagePart from '../../ui/image';
import ImageComponent from '../../ui/image';

export default function Banner() {
    return (
        <section className='bannerSeaction'>
            <div className='leftPart'>
                <div className='contentPart'>
                    <h2>
                        Are you starving?
                    </h2>
                    <p>Within a few clicks, find meals thatare accessible near you</p>
                </div>
                <div className="findFoodPart">
                    <ul>
                        <li>
                            <button className='active'>
                                <RiMotorbikeFill />
                                <span>Delivery</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaBagShopping />
                                <span>Pickup</span>
                            </button>
                        </li>
                    </ul>

                    <div className="searchInput">
                        <div>

                            <button className='iconImg'>
                                <MdLocationOn />
                            </button>
                            <input type="search" placeholder='Enter Your Address' />
                        </div>
                        <CustomButton btnTxt={"Find Food"} />
                    </div>
                </div>
            </div>
            <div className='rightPart'>
                <ImageComponent src={"bannerImg.png"} alt={"banner"} />
            </div>
        </section>
    )
}
