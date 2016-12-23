import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Layer from './components/Layer';
import './App.css';

class App extends Component {
  handleClick(index) {
    console.log(index);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Kuubik"
        />
        <div className="container">
          <h1>Frame 1</h1>
          <Layer defaultColor="#a4c639" cols={5} rows={5} layers={5} onClick={(index) => this.handleClick(index)}/>
        </div>
      </div>
    );
  }
}

export default App;
