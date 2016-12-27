import { connect } from 'react-redux';

import ColorPalette from '../components/ColorPalette';

import { setCurrentColor } from '../actions';

// <ColorPalette
//   presetColors={this.state.presetColors}
//   color={this.state.currentColor}
//   onColorChange={(color) => this.handleColorChange(color)}
//   onColorSet={() => this.handleColorSet()}
// />

// TODO: add preset colors
// NOTE: color should belong to component state
const mapStateToProps = (state) => {
  return {
    color: state.currentColor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onColorChange: (color) => {
      dispatch(setCurrentColor(color));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
