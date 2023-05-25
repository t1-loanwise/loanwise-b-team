import React from 'react'
import GetStarted from './GetStarted'

const Mission = () => {
  return (
    <div className = 'vision-section' id='mission'>
        <div className = 'frame'>
            <div className='loan-analysis' id = 'loan-overview'>
                <img src = '/images/loan-overview.png' alt = 'loan analysis' />
            </div>
            <div class= 'risk-prediction'>
                {/* <img src= '/images/risk-prediction.png'  alt = 'annaul revenue'/>
                <img  src= '/images/risk-prediction.png' alt = 'annual revenue' /> */}
            </div>
        </div>
        <GetStarted  title = {'Our Mission'} content = {'Our mission at Loan Default Prediction App is to revolutionize the lending industry by providing an innovative solution that simplifies and streamlines the loan application process while reducing the risk of loan default. We believe in making the lending process simpler and more transparent for both financial institutions and borrowers. We are committed to leveraging data-driven insights to help our clients make more informed lending decisions and minimize risk exposure.'} />
    </div>
  )
}

export default Mission