import React from 'react'
import "./button.scss"
export default function CustomButton({btnTxt}) {
  return (
    <button className="BtnComponent">{btnTxt}</button>
  )
}
