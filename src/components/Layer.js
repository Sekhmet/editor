import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import LED from './LED';

const LayerHeading = styled.h2`
  margin-top: 48px;
`;

const LayerActions = styled.section`
  margin: 16px 0;
`;

const ActionButton = styled(RaisedButton)`
  margin: 0 4px;
`;

const Separator = styled.div`
  height: 8px;
`;

const Layer = ({rows, cols, layers, colors, selectedIndexes, onClick, onSelectAllClick, onSelectNoneClick}) => {
  let leds = [];

  for (let i = 0; i < cols * rows * layers; i++) {
    if (i % (cols * rows) === 0) {
      let layerNum = i / (cols * rows);
      leds.push(
        <LayerHeading key={"layer-" + layerNum}>Layer {layerNum + 1}</LayerHeading>
      );
      leds.push(
        <LayerActions key={"action-" + layerNum}>
          <ActionButton
            label="Select all"
            onClick={() => onSelectAllClick(layerNum)}
          />
          <ActionButton
            label="Select none"
            onClick={() => onSelectNoneClick(layerNum)}
          />
        </LayerActions>
      );
    }

    if (i % cols === 0 && i !== 0) {
      let separatorNum = i / cols;
      leds.push(<Separator key={"separator-" + (separatorNum - 1)} />);
    }

    const currentColor = colors.find(color => color.id === i);
    let rawColor;
    if (currentColor) rawColor = currentColor.color;

    leds.push(
      <LED
        key={i}
        index={i}
        selected={selectedIndexes.indexOf(i) !== -1}
        color={rawColor}
        onClick={(index) => onClick(index)}
      />
    );
  }

  return (
    <div>
      {leds}
    </div>
  );
};
Layer.propTypes = {
  rows: React.PropTypes.number.isRequired,
  cols: React.PropTypes.number.isRequired,
  layers: React.PropTypes.number.isRequired,
  colors: React.PropTypes.array,
  selectedIndexes: React.PropTypes.array,
  onClick: React.PropTypes.func,
  onSelectAllClick: React.PropTypes.func,
  onSelectNoneClick: React.PropTypes.func
};

export default Layer;
