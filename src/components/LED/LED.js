import React from 'react';
import Color from 'color';

import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite, fullBlack} from 'material-ui/styles/colors';

import './LED.css';

const style = {
  display: 'inline',
  margin: '8px'
};

const LED = ({color = '#cccccc', selected, onClick, index}) => {
  const isColorDark = Color(color).dark();
  const selectedColor = Color(color).darken(0.3).string();

  return (
    <div style={style}>
      <FlatButton
        onClick={() => onClick(index)}
        backgroundColor={selected ? selectedColor : color}
        hoverColor={selectedColor}
        icon={<LightbulbOutline color={isColorDark ? fullWhite : fullBlack} />}
      />
    </div>
  );
};

export default LED;
