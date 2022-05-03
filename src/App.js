import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('Above is a hardcoded... To dynamic render information, we can use onClick event!')
  const [hello, setHello] = useState('Get Your Coffee Ready!')
  const [showTips, setShowTips] = useState('')


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        <p> {hello}</p>

        <div className="main">

          <h3 className='problems'>{task}</h3>

          <div>{showTips}</div>

          <button onClick={() => { 
            if(hello === 'Today we are making React Sandwich'){
              setTask('You can now replace the button with Button component')
            }
            setHello("Today we are making React Sandwich")
            setShowTips("");
            }}>Let's Do It!</button>
          <button onClick={() => { setShowTips('When you click, above line shall change to --> Today we are making React Sandwich')}} >Show Tips</button>

        </div>
      </header>
    </div>
  );
}

export default App;