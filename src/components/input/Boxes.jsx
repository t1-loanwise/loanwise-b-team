import React from 'react'
import './Boxes.css'
// import {FaAngleDown} from 'react-icons/fa';
export const Boxes = () => {
  return (
    <div className='inputflex'>
    <div>
        <input type='text' placeholder='Select customer ID'></input>
        
        
    </div>

    <div className='box'>
        <input type='text' placeholder='Select customer Category'></input>
        
    </div>

    </div>
  )
}
