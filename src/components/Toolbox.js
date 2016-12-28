import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import { SketchPicker } from 'react-color';

const ToolboxWrapper = styled.div`
  width: 220px;
  position: fixed;
  top: 80px;
  right: 16px;
`;

const ToolboxButton = styled(RaisedButton)`
  margin: 4px 0;
`;

const Toolbox = ({presetColors, color, onColorChange, onColorSet}) => {
  return (
    <ToolboxWrapper>
      <SketchPicker
        style={{width: '100%'}}
        disableAlpha={true}
        presetColors={presetColors}
        color={color}
        onChangeComplete={(color) => onColorChange(color)}
      />
      <ToolboxButton
        secondary={true}
        fullWidth={true}
        label="Set colors"
        onClick={() => onColorSet()}
      />
      <ToolboxButton
        icon={<ContentUndo />}
        fullWidth={true}
        label="Undo"
      />
      <ToolboxButton
        icon={<ContentRedo />}
        fullWidth={true}
        label="Redo"
      />
    </ToolboxWrapper>
  );
};

export default Toolbox;
