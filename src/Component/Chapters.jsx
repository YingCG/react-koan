import React, { useEffect } from 'react'
import { useState } from 'react'
import Chapter from './Chapter';
import learningModules from '../data/courseModules'

function Chapters() {
    const [selectContent, setSelectedContent] = useState(0)

    const module = learningModules.filter(x => x.id === selectContent)[0];

  return (
    <div>
        {
            module && <Chapter {...module} />
        }


        {learningModules.map((m) => <button onClick={() => setSelectedContent(m.id)}>{m.id}</button>)}
    </div>
  )
}

export default Chapters