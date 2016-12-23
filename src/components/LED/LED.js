import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite, fullBlack} from 'material-ui/styles/colors';
import Color from 'color';
import './LED.css';

const style = {
  display: 'inline',
  margin: '8px'
};

const LED = ({color, selected, onClick}) => {
  const handleClick = () => {
    if(onClick) {
      onClick();
    }
  };

  const isColorDark = Color(color).dark();
  const darkerColor = Color(color).darken(0.3).string();

  return (
    <div style={style}>
      <FlatButton
        onClick={() => {handleClick()}}
        backgroundColor={selected ? darkerColor : color}
        hoverColor={darkerColor}
        icon={<LightbulbOutline color={isColorDark ? fullWhite : fullBlack} />}
      />
    </div>
  );
};

export default LED;
