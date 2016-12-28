import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';

const ColorPaletteWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 16px;
`;

const ColorPalette = ({presetColors, color, onColorChange, onColorSet}) => {
  return (
    <ColorPaletteWrapper>
      <SketchPicker
        disableAlpha={true}
        presetColors={presetColors}
        color={color}
        onChangeComplete={(color) => onColorChange(color)}
      />
      <RaisedButton
        style={{marginTop: '8px'}}
        secondary={true}
        fullWidth={true}
        label="Set colors"
        onClick={() => onColorSet()} />
    </ColorPaletteWrapper>
  );
};

export default ColorPalette;
