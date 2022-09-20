import React from 'react'
import learningModules from '../data/courseModules'

function ChallengeTag(props) {
  return (
    <>
      <div className='flex-element'>
        <div className="btn-pre" onClick={() => {
          if (props.page > 1) {
            props.setPage(props.page - 1)
          }
        }
        }>
          <div className="triangle"></div>
        </div>
        <div className="page-tag">Challenge {props.page}</div>
        <div className="btn-next" onClick={() => {
          if(props.page < learningModules.length) {
            props.setPage(props.page + 1)
          }
        }
        }>
          <div className="triangle-rotate"></div>
        </div>
      </div>
    </>
  )
}

export default ChallengeTag;