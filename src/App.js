import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LED from './components/LED';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Kuubik"
        />
        <div className="container">
          <h1>Frame 1</h1>
          <LED />
        </div>
      </div>
    );
  }
}

export default App;
