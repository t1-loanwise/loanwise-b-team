import React from 'react'
import FilledBtn from '../Button/FilledBtn'
import './Comming.css'
import image from '../../Images/socials/background.svg'

export const Comming = () => {
  return (
    <div className='Comming' style={{ backgroundImage:`url(${image})`}}>
       <h1>C O M M I N G    S O O N</h1>
       <p>We are working hard to get this up and running</p>
       <p>We will be here soon</p>

      <div className="side">
        <input  className="side-btn" type='text' placeholder='Enter email address'></input>
        <FilledBtn title={"Notify Me"} />
      </div>
        
       
     
    </div>
  )
}
