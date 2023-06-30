import React from 'react'
import '../Newportfolio.css'



const BurrowerDetail = () => {
  return (
      <>
          <form className='new-portfolio-form'>
              <div className='new-portfolio-wrapper'>
                  <h2>Personal Information</h2>
                  <div>
                      <label htmlFor='name' className='new-porfolio-label'> Full Name</label>
                      <div>
                          <input name='name'  id ='name'  type='text' placeholder='Enter full name' className='new-portfolio-input' />
                      </div>
                  </div>
                  <div>
                          <label htmlFor='residential address' className='new-porfolio-label'>  Residential Address</label>
                        <div>
                          <input name='residential address'  id ='residential address'  type='text' placeholder='Enter address' className='new-portfolio-input' />
                        </div>
                  </div>
                    <div>
                          <label htmlFor='email' className='new-porfolio-label'>Email Address</label>
                        <div>
                          <input name='email'  id ='email'  type='email' placeholder='Enter email address' className='new-portfolio-input' />
                        </div>
                  </div>
                  <div className='phone-number-wrapper'>
                      <div className='phone-cont'>
                          <label htmlFor='phone' className='new-porfolio-label'>Phone Number</label>
                            <div>
                             <input name='phone'  id ='phone'  type='phone' placeholder='Enter number' className='new-portfolio-input' />
                            </div>
                      </div>
                      <div className='phone-cont'>
                          <label htmlFor='phone' className='new-porfolio-label'> Alternative Phone Number</label>
                            <div>
                             <input name='phone'  id ='phone'  type='phone' placeholder='Enter number' className='new-portfolio-input' />
                            </div>
                        </div>
                  </div>
                  <div className='date-nin-wrapper'>
                      <div className='date-cont'>
                          <label htmlFor='dob' className='new-porfolio-label'>Date of Birth</label>
                            <div>
                             <input name='dob'  id ='dob'  type='date'  className='new-portfolio-input' />
                            </div>
                      </div>
                      <div className='date-cont'>
                          <label htmlFor='number' className='new-porfolio-label'> National Identity Number</label>
                            <div >
                             <input name='number'  id ='numer'  type='number' placeholder='Enter NiN' className='new-portfolio-input' />
                            </div>
                        </div>
                  </div>
                    <button type='submit' className="new-portfolio-button">Proceed</button>
                  
                  
              </div>
          </form>
      </>
  )
}
  
export default BurrowerDetail
 
            