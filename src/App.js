import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import _ from 'underscore';
import Layer from './components/Layer';
import FrameSelector from './components/FrameSelector';
import ColorPalette from './components/ColorPalette';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      colors: [],
      currentColor: '#a4c639',
      presetColors: [],
      currentFrame: 0,
      frameCount: 1
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

    //TODO: Make offset flexible
    //FIXME: This shouldn't look like this. But it works.
    _.each(this.state.selectedIndexes, function(id) {
      colors.push({
        id: id + (that.state.currentFrame * 125),
        color: that.state.currentColor
      });
    });

    this.setState({
      colors: this.state.colors.concat(colors),
      selectedIndexes: []
    });
  }

  handleChangeColor(color) {
    this.setState({
      currentColor: color.hex
    });
  }

  handleFrameChange = (event, index, value) => {
    switch (value) {
      case -1:
        this.setState({
          frameCount: this.state.frameCount + 1,
          currentFrame: this.state.frameCount
        });
        break;
      case -2:
        //TODO: Duplicate frame
        console.log('Not implemented');
        break;
      default:
        if (value >= 0) {
          this.setState({
            currentFrame: value
          });
        }
    }
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
          <ColorPalette
            presetColors={this.state.presetColors}
            color={this.state.currentColor}
            onColorChange={(color) => this.handleChangeColor(color)}
            onColorSet={() => this.handleSetColor()}
          />
          <FrameSelector
            currentFrame={this.state.currentFrame}
            frameCount={this.state.frameCount}
            onChange={this.handleFrameChange}
          />
          <Layer
            colors={this.state.colors}
            currentFrame={this.state.currentFrame}
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
