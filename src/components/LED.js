import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import { fullWhite, fullBlack}  from 'material-ui/styles/colors';

const LEDWrapper = styled.section`
  display: inline;
  margin: 8px
`;

class LED extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.selected !== nextProps.selected || this.color !== nextProps.color;
  }

  render() {
    const { color, onClick, selected, index } = this.props;
    this.color = color;
    this.selected = selected;

    const isColorDark = Color(color).dark();
    const selectedColor = Color(color).darken(0.3).string();

    return (
      <LEDWrapper>
        <FlatButton
          onClick={() => onClick(index)}
          backgroundColor={selected ? selectedColor : color}
          hoverColor={selectedColor}
          icon={<LightbulbOutline color={isColorDark ? fullWhite : fullBlack} />}
        />
      </LEDWrapper>
    );
  }
}
LED.propTypes = {
  index: React.PropTypes.number.isRequired,
  color: React.PropTypes.string,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func
};
LED.defaultProps = {
  color: '#cccccc'
};

export default LED;
