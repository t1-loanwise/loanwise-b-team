import React from 'react'


const Team = (props) => {
  console.log(props)
  return (
    <div className ="hero-2">
        <h2>{props.heading}</h2>
        <h2>{props.heading2}</h2>
        <p className = 'team-statement'>{props.content}</p>
      </div>
  )
}

export default Team