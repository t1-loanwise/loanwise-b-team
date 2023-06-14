import React from 'react'

const LeftBarContent = ({image, id, name, address, email, phone, employment}) => {
  return (
    <div>
      <div className='img'>
      <img src={image} alt="" />
      </div>
    <div className='flex'><h4>Customer ID:  </h4>
    <p>{id}</p>
    </div>
    <div className='flex'><h4>Name </h4>
    <p>{name}</p>
    </div>
    <div className='flex'><h4>Address: </h4>
    <p>{address}</p>
    </div>
    <div className='flex'><h4>Email Address </h4>
    <p>{email}</p>
    </div>
    <div className='flex'><h4>Phone Number: </h4>
    <p>{phone}</p>
    </div>
    <div className='flex'><h4>Employment Status: </h4>
    <p>{employment}</p>
    </div>
    <div className='flex'><h4>Credit Score </h4>
    </div>

    </div>
  )
}

export default LeftBarContent
