import React from 'react'
import "./button.scss"
export default function CustomButton({btnTxt,imgEle,btnType="button"}) {
  return (
    <button type={btnType} className="BtnComponent">{btnTxt}
    <span>{imgEle}</span>
    </button>
  )
}
