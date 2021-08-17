import React from 'react'

function Time({time, title}){
  return(
    <article>
      <div className="data-time">
        <h2>{time > 9 ? time : `0${time}`}</h2>
      </div>
      <p>{title}</p>
    </article>
  )
}

export default Time