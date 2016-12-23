import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LED from './components/LED';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  selectLED() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Kuubik"
        />
        <div className="container">
          <h1>Frame 1</h1>
          <LED color="#a4c639"
            selected={this.state.selected}
            onClick={() => this.selectLED()} />
        </div>
      </div>
    );
  }
}

export default App;
