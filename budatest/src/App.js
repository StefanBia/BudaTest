import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function penisLen(len){
  let s ='';
  if(len>20)
    len = 20;
  for(let i=0; i<len; i++)
    s+='=';
  return s;
}

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>
          PENIS B{penisLen(20)}D :::
        </h1>

        <p className="App-intro">
          To get fuck started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
