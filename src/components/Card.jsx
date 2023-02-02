import React from 'react'

import '../styles/general.css'

function Card(props) {
  return (
    <div className='card' key={props.key}>
      <div className='card-profile'>
        <img src={props.profile} alt={props.name} />
      </div>
      <div className='card-information'>
        <h1>{props.name}</h1>
        <h4>{props.sekbid}</h4>
      </div>
    </div>
  )
}

export default Card