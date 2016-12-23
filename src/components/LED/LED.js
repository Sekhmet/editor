import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite, fullBlack} from 'material-ui/styles/colors';
import Color from 'color';
import './LED.css';

const LED = ({color, onClick}) => {
  const handleClick = () => {
    if(onClick) {
      onClick();
    }
  };

  return (
    <div>
      <FlatButton
        onClick={() => {handleClick()}}
        backgroundColor={color}
        hoverColor={Color(color).darken(0.3).string()}
        icon={<LightbulbOutline color={Color(color).dark() ? fullWhite : fullBlack} />}
      />
    </div>
  );
};

export default LED;
