import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite} from 'material-ui/styles/colors';
import './LED.css';

const style = {
  margin: 12,
};

class LED extends Component {
    render() {
      return (
        <div>
          <FlatButton
            backgroundColor="#a4c639"
            icon={<LightbulbOutline color={fullWhite} />}
            style={style}
          />
        </div>
      );
    }
}

export default LED;
