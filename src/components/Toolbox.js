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

const Toolbox = ({presetColors, color, onColorChange, onColorSet, onUndoClick, onRedoClick}) => {
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
        onClick={() => onUndoClick()}
      />
      <ToolboxButton
        icon={<ContentRedo />}
        fullWidth={true}
        label="Redo"
        onClick={() => onRedoClick()}
      />
    </ToolboxWrapper>
  );
};
Toolbox.propTypes = {
  color: React.PropTypes.string,
  presetColors: React.PropTypes.array,
  onColorChange: React.PropTypes.func,
  onColorSet: React.PropTypes.func,
  onUndoClick: React.PropTypes.func,
  onRedoClick: React.PropTypes.func
};
Toolbox.defaultProps = {
  color: '#a4c639'
};


export default Toolbox;
