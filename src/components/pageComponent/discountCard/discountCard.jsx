import React from 'react'
import "./discountCard.scss";
import ImageComponent from '../../ui/image';
export default function DiscountCard() {
    return (
        <div className='discountCardParent'>
            <div className="imgPart">
                <ImageComponent src={"foodImg.png"} />
                <div className='tagText'>
                    <h3>15</h3>
                    <div>
                        <p>%</p>
                        <p>off</p>
                    </div>
                </div>
            </div>
            <div className='contentPart'>
                <h2>
                    flat hill slingblack
                </h2>
                <p>6 day remaning</p>
            </div>
        </div>
    )
}
