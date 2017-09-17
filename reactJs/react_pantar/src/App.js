import React, { Component } from 'react';
import './App.css';
import GetData from './components/GetData';

class App extends Component {
  render() {
    return (
      <div>
        This is pantar app
        <GetData />
      </div>
    );
  }
}

export default App;
