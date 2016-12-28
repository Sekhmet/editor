import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';

const ToolboxWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 16px;
`;

const Toolbox = ({presetColors, color, onColorChange, onColorSet}) => {
  return (
    <ToolboxWrapper>
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
    </ToolboxWrapper>
  );
};

export default Toolbox;
