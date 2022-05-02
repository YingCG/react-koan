import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
constructor(){

  // function showNext(){
  //   this.setState('Replace the button to a Button Component')
  // }
super()

this.state = {
name: 'Dream Walker',
todayGoal: "Get Your Coffee Ready! ",
task1: 'This is a hardcoded... To dynamic render information, we can use an OnClick event! ',
task2: 'Replace the button to a Button Component '
}
}



render(){
return (
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p> Kiora, {this.state.name}</p>
    <p style={{color: '#28FFBF'}}> {this.state.todayGoal}</p>
    <h3 className='problems'>{this.state.task1}</h3>
    <button 
    // onClick={ ()=> {this.setState(
    //           () => { return {name: 'Coffee Head! ', todayGoal: 'Today we are making React Sandwich'}},
    //           () => console.log('Next!'))}
    //         }
    >Let's Do It!</button>
  </header>
</div>
);
}
}
export default App;