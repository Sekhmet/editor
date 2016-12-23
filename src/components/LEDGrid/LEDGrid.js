import React from 'react';
import LED from '../LED';

const LEDGrid = ({rows, cols, layers, defaultColor}) => {
  let leds = [];

  for (let i = 0; i < cols * rows * layers; i++) {
    if(i % (cols * rows) === 0) {
      leds.push(<h3>Layer</h3>);
    }

    if(i % 5 === 0 && i !== 0) {
      leds.push(<div key={"separator" + i} style={{
        height: 8
      }}></div>);
    }
    leds.push(<LED key={i} color={defaultColor} />);
  }

  return (
    <div>
      {leds}
    </div>
  );
};

export default LEDGrid;
