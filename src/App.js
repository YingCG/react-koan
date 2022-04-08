import logo from './logo.svg';
import './App.css';
// import Button from './Component/Button/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <h1 className='problems'>Replace this line: Please import the button component</h1>
        {/* <Button /> */}
      </header>
    </div>
  );
}

export default App;
