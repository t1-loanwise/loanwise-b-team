import React from 'react'
import FilledBtn from '../../../../components/Button/FilledBtn'
import TransparentBtn from '../../../../components/Button/TransparentBtn'
import Icon2 from '../../../../Images/Dashboard/sort.svg'


const DashSearch = () => {
  return (
    <div className="dash__titleSearch">
      <div className='dash__title'>
        <h2>Welcome Tosin,</h2>
        <p>Explore insightful analyses and risk assessment to make informed lending decisions.</p>
      </div>
      <div className="dash__searchFilterDate">
        <div className="dash__searchFilter">
          <fieldset className='dash__search'>
            <input type="text" placeholder='Search  for Loans' />
            <FilledBtn title={'Search'} />
          </fieldset>
          <TransparentBtn title={'Filter'} icon2={Icon2} />
          <div className="btnzz">
            <FilledBtn title={'Search'} />
            <TransparentBtn title={'Filter'} icon2={Icon2} />
          </div>
        </div>
        <div className="dash__date">calender</div>
      </div>
    </div>
  )
}

export default DashSearch