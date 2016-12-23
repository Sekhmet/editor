import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import {fullWhite, fullBlack} from 'material-ui/styles/colors';
import Color from 'color';
import './LED.css';


class LED extends Component {
  handleClick() {
    if(this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div>
        <FlatButton
          onClick={() => {this.handleClick()}}
          backgroundColor={this.props.color}
          hoverColor={Color(this.props.color).darken(0.3).string()}
          icon={<LightbulbOutline color={Color(this.props.color).dark() ? fullWhite : fullBlack} />}
        />
      </div>
    );
  }
}

export default LED;
