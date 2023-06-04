// export const loanAmount = [
//     {
//         image: '',
//         amount: 1200,
//         description: 
//     },
//     {
//         image: '',
//         amount: ,
//         description: 'Total Number of Loans'
//     },
//     {
//         image: '',
//         amount: 350,
//         description: 'Number of Loans in Default'
//     },
//     {
//         image: '',
//         amount: ,
//         description: 
//     },
//     {
//         image: '',
//         amount: ,
//         description: 
//     },
//     {
//         image: '',
//         amount: 'N6,000,000.00',
//         description: 'Interest Earnings'
//     }
// ]

import React from 'react'
import '../dashboard.css'

const LoanAmountComponent = ({ image, amount, description }) => {
    return (
        <div className='loanAmountWrapper'>
            <div className="loanAmount">
                <div className="loanAmountIcon"><img src={image} alt="" /></div>
                <h3>{amount}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default LoanAmountComponent