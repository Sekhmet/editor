import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import _ from 'underscore';
import Layer from './components/Layer';
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

    const framesList = [];

    for (let i = 0; i < this.state.frameCount; i++) {
      framesList.push(
        <MenuItem key={i} value={i} primaryText={"Frame " + (i + 1)} />
      );
    }

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
          <SelectField
            floatingLabelText="Current frame"
            onChange={this.handleFrameChange}
            value={this.state.currentFrame}>
            {framesList}
            <Divider />
            <MenuItem value={-1} primaryText="Create frame" />
            <MenuItem value={-2} primaryText="Duplicate frame" />
          </SelectField>
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
