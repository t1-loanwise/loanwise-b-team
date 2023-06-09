import React from 'react'
import bye from '../../../Images/socials/bye.svg';
import './LogOut.css'

const LogOut = () => {
  return (
    
    <div className='Log'>
      <img className='bye' src={bye} alt="" width="px"/>
      <h2 className='log-h2'>Oops! are you sure about this?</h2>

      <button className='logout-btn'><a href='Login'>Log Out</a></button>
    </div>
  )
}

export default LogOut