import React from 'react'
import logo from "../../../Images/logo.svg";
import "./SuccessfulPage.css"
import  wave from "../../../Images/watermark.png"
import check from "../../../Images/Check.svg"


const SuccessfulPage = () => {
  return (
      <div className='successful-wrapper'>
          
		  <div className='successful-logo'>
              <img src={logo} alt='succesful logo' />
          </div>
      		
		  	
		  <div className='successful-content'>
			  	<div className='successful-checker'>
			  		<img src ={check} alt='checkmark Logo' />
			  </div>
			  <h2>Congratulations!!!</h2>
			  		<p>You are set to explore <span>LoanWise </span> to make safe and easy credit decisions</p>
			  			<button>Continues</button>






			</div>

			<div className="successful-wave">
				<img src={wave} alt='wave' />
       		 </div>

   		 </div>
  )
}

export default SuccessfulPage