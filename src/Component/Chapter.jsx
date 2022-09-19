import React from 'react'

function Chapter(props) {
  return (
    <div>
        <h3>{props.id}</h3>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Chapter