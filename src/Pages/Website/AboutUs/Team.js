import React from 'react'


const Team = (props) => {
  console.log(props)
  return (
    <div className ="hero-2">
        <h2>{props.heading}</h2>
        <p className = 'team-statement'>{props.content}</p>

        {/* <img  src={props.imageUrl} alt='a team ' /> */}

       
      </div>
  )
}

export default Team