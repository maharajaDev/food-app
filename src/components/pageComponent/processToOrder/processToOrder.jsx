import React from 'react';
import "./processToOrder.scss";
import CustomButton from '../../global/button/button';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ImageComponent from '../../ui/image';

export default function ProcessToOrder() {
    return (
        <section className='processToOrderPart'>
                
            <div className="contentPart">
                <h2>
                    Best deals <span>Crispy Sandwiches</span>
                </h2>
                <p>
                Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.
                </p>
                <CustomButton btnTxt={"PROCEED TO ORDER"} imgEle={<MdOutlineKeyboardArrowRight/>}/>
            </div>

            <div className='imgPart'>
                <ImageComponent src={"orderImg.png"} alt={"orderImg"}/>
            </div>
        </section>
    )
}
