import React , { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <h2>My Counter</h2>
      <Counter />
    </div>
  );
};
}

export default App;
