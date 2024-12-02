import React from 'react'
import "./featuredCard.scss"
import ImageComponent from '../../ui/image';
import { FaTag } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function FeaturedCard() {
    return (
        <div className='featuredCard'>
            <div className="imgPart">
                <ImageComponent src={"featuredCardImg.png"} alt={"featured Restaurants"} />
                <div className='floatLabel'>
                    <ul>
                        <li>
                            <FaTag />
                            <span>20% off</span>
                        </li>
                        <li>
                            <MdAccessTimeFilled />
                            <span>Fast</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='detailPart'>
                <div className='hotelNamePart'>
                    <ImageComponent src={"hotelName.png"} alt={"hotel Name"} />
                    <div>
                        <h2>Food world</h2>
                        <p><FaStar /> 46</p>
                    </div>
                </div>
                <div className="statusPart">
                    <button className='openNow'>
                        Open Now
                    </button>
                </div>
            </div>

        </div>
    )
}
