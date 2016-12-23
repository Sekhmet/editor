import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import _ from 'underscore';
import Layer from './components/Layer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      colors: []
    };
  }

  handleClick(index) {
    if(_.contains(this.state.selectedIndexes, index)) {
      this.setState({
        selectedIndexes: _.without(this.state.selectedIndexes, index)
      });
    } else {
      this.setState({
        selectedIndexes: [
          ...this.state.selectedIndexes,
          index
        ]
      });
    }
  }

  handleSetColor() {
    let colors = [];
    _.each(this.state.selectedIndexes, function(id) {
      colors[id] = "red";
    });

    console.log(this.state.selectedIndexes);
    console.log(colors);

    this.setState({
      colors: [
        ...this.state.colors,
        ...colors
      ],
      selectedIndexes: []
    });


  }

  render() {
    return (
      <div>
        <AppBar
          title="Kuubik"
        />
        <div className="container">
          <FlatButton label="Default" onClick={() => this.handleSetColor()} />
          <h1>Frame 1</h1>
          <Layer
            colors={this.state.colors}
            selectedIndexes={this.state.selectedIndexes}
            cols={5}
            rows={5}
            layers={5}
            onClick={(index) => this.handleClick(index)}/>
        </div>
      </div>
    );
  }
}

export default App;
