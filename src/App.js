import logo from './logo.svg';
import './App.css';
import ChallengeTag from './component/ChallengeTag';
import { useEffect, useState } from 'react';
import learningModules from './data/courseModules'
import Challenges from './component/Challenges';

function App() {

  const task = 'React Sandwich'
  const [page, setPage] = useState(1);

  
  return (
    <div className="App">
      <div className="container">
      <div className="left-col">
      <div className="welcome-header">
      <h3 className='problems'>! Missing our logo here, please create a header component</h3>
      </div>
      <div className="welcome">
    	  <h1>Hello, world!</h1>
        <p>Today, we are making {task}</p>
        <h3 className='problems'> Replace Hello World with Dynamic greeting</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        </div>
    </div>
        <div className="right-col">
        <div className="right-header">
          <ChallengeTag page={page} setPage={setPage} />
        </div>
        <div className="welcome">
          <div className="right-content">
          <Challenges page={page}/>
      </div>
      </div> 
    </div>
    </div>
    </div>
  );
}

export default App;

        {/* <h1 className='title'>
          Using Embedding Expressions in JSX
          </h1>
          <p>
          we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
          </p>
        <h5 className='tips'>Example: </h5>
        <code>
          const task = 'React Sandwich';<br/> 
          const element = &#60;div&#62;Today, we are making 
          &#123;task&#125;&#60;/div&#62;
        </code> */}
        {/* <Button /> */}