import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';

const ColorPalette = ({presetColors, color, onColorChange, onColorSet}) => {
  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '16px'
    }}>
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
