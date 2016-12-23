import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';
import _ from 'underscore';
import Layer from './components/Layer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      colors: [],
      currentColor: '#a4c639',
      presetColors: []
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
    //TODO: Limit presetColors to some amount.
    if(!_.contains(this.state.presetColors, this.state.currentColor)) {
      this.setState({
        presetColors: [
          ...this.state.presetColors,
          this.state.currentColor
        ]
      });
    }

    if(this.state.selectedIndexes.length === 0) {
      return;
    }

    let that = this;
    let colors = [];

    _.each(this.state.colors, function(element, index) {
      colors[index] = element;
    });

    _.each(this.state.selectedIndexes, function(id) {
      colors[id] = that.state.currentColor;
    });

    this.setState({
      colors: colors,
      selectedIndexes: []
    });
  }

  handleChangeColor(color) {
    this.setState({
      currentColor: color.hex
    });
  }

  render() {
    return (
      <div>
        <AppBar
          style={{
            position: 'fixed'
          }}
          title="Kuubik"
        />
        <div className="container">
          <div style={{
            position: 'fixed',
            top: '80px',
            right: '16px'
          }}>
            <SketchPicker
              disableAlpha={true}
              presetColors={this.state.presetColors}
              color={this.state.currentColor}
              onChangeComplete={(color) => this.handleChangeColor(color)}
            />
            <RaisedButton
              style={{marginTop: '8px'}}
              fullWidth={true}
              label="Set colors"
              onClick={() => this.handleSetColor()} />
          </div>
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
