import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite, fullBlack} from 'material-ui/styles/colors';
import Color from 'color';
import './LED.css';


class LED extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#795548'
    };
  }

  render() {
    return (
      <div>
        <FlatButton
          backgroundColor={this.state.color}
          hoverColor={Color(this.state.color).darken(0.3).string()}
          icon={<LightbulbOutline color={Color(this.state.color).dark() ? fullWhite : fullBlack} />}
        />
      </div>
    );
  }
}

export default LED;
