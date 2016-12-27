import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import ColorPaletteContainer from './containers/ColorPaletteContainer';
import FrameSelectorContainer from './containers/FrameSelectorContainer';
import LayerContainer from './containers/LayerContainer';

import './App.css';

class App extends Component {
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
