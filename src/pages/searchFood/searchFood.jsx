import React from 'react'
import "./searchFood.scss";
import ImageComponent from '../../components/ui/image';
export default function SearchFood() {
  return (
    <div className='searchFoodPart'>
        <ImageComponent src={"searchitem.png"} alt={"search food"}/>
        <p>
            Pizza
        </p>
    </div>
  )
}
