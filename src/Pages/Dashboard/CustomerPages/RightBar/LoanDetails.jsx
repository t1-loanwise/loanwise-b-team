import React from 'react'
import RightNav from './RightNav'

const LoanDetails = ({request, disbursed, duration, repayment, interest, due, status, late, refund, risk}) => {
  return (
    <div>
      <RightNav />
      <div className='flex'><h4>Requested Loan Amount:  </h4>
    <p>{request}</p>
    </div>
    <div className='flex'><h4>Disbursed Loan Amount </h4>
    <p>{disbursed}</p>
    </div>
    <div className='flex'><h4>Loan Duration: </h4>
    <p>{duration}</p>
    </div>
    <div className='flex'><h4>Repayment Method </h4>
    <p>{repayment}</p>
    </div>
    <div className='flex'><h4>Interest Rate: </h4>
    <p>{interest}</p>
    </div>
    <div className='flex'><h4>Due Date: </h4>
    <p>{due}</p>
    </div>
    <div className='flex'><h4>Loan Status: </h4>
    <p>{status}</p>
    </div>
    <div className='flex'><h4>Late Fee: </h4>
    <p>{late}</p>
    </div>
    <div className='flex'><h4>Amount Refunded: </h4>
    <p>{refund}</p>
    </div>
    <div className='flex'><h4>Calculated default Risk: </h4>
    <p>{risk}</p>
    </div>
    </div>
  )
}

export default LoanDetails