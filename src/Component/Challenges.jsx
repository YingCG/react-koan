import React from 'react'
import learningModules from '../data/courseModules'
import ChallengePage from './ChallengePage';


function Challenges(props) {
    const module = learningModules.filter(x => x.id === props.page)[0];

  return (
    <div>
          {module && <ChallengePage {...module}/>}
    </div>
  )
}

export default Challenges
