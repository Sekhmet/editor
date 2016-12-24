import React from 'react';
import _ from 'underscore';

import LED from '../LED';

const LEDGrid = ({rows, cols, layers, colors, selectedIndexes, currentFrame, onClick}) => {
  let leds = [];

  for (let i = 0; i < cols * rows * layers; i++) {
    if (i % (cols * rows) === 0) {
      let layerNum = i / (cols * rows);
      leds.push(<h5 key={"layer-" + layerNum}>Layer {layerNum + 1}</h5>);
    }

    if (i % cols === 0 && i !== 0) {
      let separatorNum = i / cols;
      leds.push(<div key={"separator-" + (separatorNum - 1)} style={{
        height: 8
      }}></div>);
    }

    let currentColor = _.findWhere(colors, { id: i + (currentFrame * 125) });
    let rawColor;

    if (_.has(currentColor, 'color')) {
      rawColor = currentColor.color;
    }

    leds.push(
      <LED
        key={i}
        index={i}
        selected={_.contains(selectedIndexes, i)}
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

export default LEDGrid;
