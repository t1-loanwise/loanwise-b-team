import React, { useState } from 'react'

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
      <div className='form-wrapper'>
          <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Search For Loans' value={searchItems} onChange={handleChange} />
              <button type='submit'>Search</button>
            </form>
        </div>
  )
}

export default SearchBar