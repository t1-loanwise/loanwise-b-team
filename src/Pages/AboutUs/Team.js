import React from 'react'


const Team = (props) => {
  console.log(props)
  return (
    <div className ="hero-2">
        <h2>{props.heading}</h2>
        <p className = 'team-statement'>{props.content}</p>
        <img  alt="" src={props.imageUrl} />
      </div>
  )
}

export default Team