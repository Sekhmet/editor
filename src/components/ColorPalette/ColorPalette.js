import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';

import './ColorPalette.css';

const ColorPalette = ({presetColors, color, onColorChange, onColorSet}) => {
  return (
    <div className="color-palette">
      <SketchPicker
        disableAlpha={true}
        presetColors={presetColors}
        color={color}
        onChangeComplete={(color) => onColorChange(color)}
      />
      <RaisedButton
        style={{marginTop: '8px'}}
        fullWidth={true}
        label="Set colors"
        onClick={() => onColorSet()} />
    </div>
  );
};

export default ColorPalette;
