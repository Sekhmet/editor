import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LEDGrid from './components/LEDGrid';
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
          <LEDGrid defaultColor="#a4c639" cols={5} rows={5} layers={5} />
        </div>
      </div>
    );
  }
}

export default App;
