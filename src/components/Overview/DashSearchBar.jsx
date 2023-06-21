import React from 'react'

const DashSearchBar = () => {
  return (
    <div>
                
          <fieldset className="dash__search">
            <input type="text" placeholder="Search  for Loans" />
            <FilledBtn title={"Search"} />
          </fieldset>
    </div>
  )
}

export default DashSearchBar