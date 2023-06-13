import React, { useState } from 'react'
import './overview.css'


const SearchBar = ({ handleSearch }) => {
    
    const [searchItems, setSearchItems] = useState('')

    const handleChange = (event) => {
        setSearchItems(event.target.value);
       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchItems)
        console.log(searchItems)
    }


  return (
      <div className='overview-form-wrapper'>
          <form onSubmit={handleSubmit}>
              <div className='overview-input'>
                  <input type='text' placeholder='Search for Loans' value={searchItems} onChange={handleChange}  />
              </div>
              <button type='submit'>Search</button>
            </form>
        </div>
  )
}

export default SearchBar