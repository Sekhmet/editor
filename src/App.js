import React, { Component } from 'react';
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';

import ColorPaletteContainer from './containers/ColorPaletteContainer';
import FrameSelector from './components/FrameSelector';
import LayerContainer from './containers/LayerContainer';

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

  handleColorSet() {
    //TODO: Limit presetColors to some amount.
    if (!_.contains(this.state.presetColors, this.state.currentColor)) {
      this.setState({
        presetColors: [
          ...this.state.presetColors,
          this.state.currentColor
        ]
      });
    }

    if (this.state.selectedIndexes.length === 0) {
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

  handleFrameChange = (value) => {
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
          <ColorPaletteContainer />
          <FrameSelector
            currentFrame={this.state.currentFrame}
            frameCount={this.state.frameCount}
            onChange={(frame) => this.handleFrameChange(frame)}
          />
          <LayerContainer />
        </div>
      </div>
    );
  }
}

export default App;
