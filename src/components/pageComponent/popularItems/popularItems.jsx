import React from 'react';
import "./popularItem.scss";
import ImageComponent from '../../ui/image';
import { MdLocationOn } from "react-icons/md";
import CustomButton from '../../global/button/button';

export default function PopularItems() {
    return (
        <section className='popularItemCard'>
            <div className='imgPart'>
                <ImageComponent src={"popularFood.png"} alt={"popular Food"} />

            </div>
            <div className='detailPart'>
                    <h2>cheese burger</h2>
                    <a href='#'>
                        <MdLocationOn/>
                            Burger arena
                    </a>
                    <p>$3.88</p>
            </div>
            <CustomButton btnTxt={"Order Now"}/>
        </section>
    )
}
