import React from 'react';
import LED from '../LED';

import './Layer.css';

const LEDGrid = ({rows, cols, layers, colors, selectedIndexes, currentFrame, onClick}) => {
  let leds = [];

  for (let i = 0; i < cols * rows * layers; i++) {
    if (i % (cols * rows) === 0) {
      let layerNum = i / (cols * rows);
      leds.push(
        <h5 key={"layer-" + layerNum}>Layer {layerNum + 1}</h5>
      );
    }

    if (i % cols === 0 && i !== 0) {
      let separatorNum = i / cols;
      leds.push(
        <div
          className="separator"
          key={"separator-" + (separatorNum - 1)}
        />
      );
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

export default LEDGrid;
