import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState({
    hello: " Get Your Coffee Ready! ",
    task1: 'Above is a hardcoded... To dynamic render information, we can use an OnClick event!',
    task2: ''
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        <p> {content.hello}</p>
        <h3 className='problems'>{content.task1}</h3>
        <button onClick={() => {
            setContent( (info) => {
                return { 
                  ...info, 
                  hello: 'Today we are making React Sandwich', 
                  task1: 'When you click, above line shall change to --> Today we are making React Sandwich',
                  task2: 'You can now replace the button with Button component'
                }
              })
            }
          }
        >Let's Do It!</button>
      </header>
    </div>
  );
}

export default App;