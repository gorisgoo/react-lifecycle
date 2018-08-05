import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    console.log("render");
    return (

      <div className="App">
        <h1> Its H1 </h1>
      </div>
    );
  }
}

export default App;
