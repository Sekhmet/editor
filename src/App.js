import React, { Component } from 'react';
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';

import ColorPaletteContainer from './containers/ColorPaletteContainer';
import FrameSelectorContainer from './containers/FrameSelectorContainer';
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
          <FrameSelectorContainer />
          <LayerContainer />
        </div>
      </div>
    );
  }
}

export default App;
