import React from 'react'
import {  buttonStyle } from "./styles.jsx";

const Submitform = ({placeholder, type}) => {
  return (
    <div>
        <input style={ buttonStyle}  type={type} placeholder={placeholder} />
       
    </div>
  )
}


export default Submitform