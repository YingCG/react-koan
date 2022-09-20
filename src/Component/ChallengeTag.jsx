import React, { useState } from 'react'
import { useEffect } from 'react';
import learningModules from '../data/courseModules'

function ChallengeTag() {
  const [count, setCount] = useState(1);
  const [resource, setResource] = useState([])

 function handleChapter (e){
    const newChallenge = e.target.value
    if (isNaN(newChallenge)) return setCount(newChallenge)
}


  return (
    <>
    <div className='flex-element'>
        <div className="btn-pre" type="button" onClick={() => {
           if(count > 1) {
             setCount(count - 1)
           }
          }
        }>
          <div className="triangle"></div>
        </div>
        <div className="page-tag" onChange={handleChapter}>Challenge {count}</div>
        <div className="btn-next" type="button"  onClick={() => setCount(count + 1)} >
          <div className="triangle-rotate"></div>
        </div>
    </div>
    <div>{resource}</div>
    </>
  )
}

export default ChallengeTag;