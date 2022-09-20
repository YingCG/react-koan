import React from 'react'

function ChallengePage(props) {
  return (
    <div>
       <div className="right-content">
            <h1>{props.id}</h1>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
       </div>
    </div>
  )
}

export default ChallengePage
