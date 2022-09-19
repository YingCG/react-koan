import React, { useEffect } from 'react'
import { useState } from 'react'
import Chapter from './Chapter';


function Chapters() {
    
    const [content, setContent] = useState(loadContent())

    function loadContent (){
        let learningModules = 0;
        {learningModules.map((pageContent=> (
            <Chapter />
        )))}

        setContent(content.learningModules + 1)

    }

    useEffect(() => {
        document.title = content +1
    },)


  return (
    <div>
        <div>{content}</div>
        <button onClick={loadContent}>1</button>
        <button onClick={loadContent}>2</button>
        <button onClick={loadContent}>3</button>
    </div>
  )
}

export default Chapters