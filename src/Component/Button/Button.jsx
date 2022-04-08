import React , {useState} from 'react'


function Button(){
    const [value, setValue] = useState('Click Here')
    const [isClicked, setIsClicked] = useState(false);

    function dummyFunction (){
    setValue("Let's create a route to connect to Home Page")
    setIsClicked(true)
    }

    // function renderConditionally(){
    //     if (isClicked === false) {
    //         return (
    //         <>
    //          <h1>When I clicked, I wish this line to be hidden</h1>
    //          <button className='dummyButton' onClick={dummyFunction}>
    //     {value}
    //     </button>
    //     </>
    //     )
    //     } else{
    //         return (
    //             <>
    //             <h1>Hello</h1>
    //              <button className='dummyButton' onClick={dummyFunction}>
    //     {value}
    //     </button>
    //     </>
    //             )
    //     }
    // }
    
    return (
        <>
        <div className='problems'>{
            isClicked === false ? <h1>When I clicked, I wish this line to be hidden</h1> : <h1></h1>
        }</div>
            <button className='dummyButton' onClick={dummyFunction}>{value}</button>
        </>
    )
}

export default Button