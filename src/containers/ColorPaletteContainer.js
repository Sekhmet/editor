import { connect } from 'react-redux';

import ColorPalette from '../components/ColorPalette';

import { setCurrentColor, addColorToPresets } from '../actions';

const mapStateToProps = (state) => {
  return {
    color: state.currentColor,
    presetColors: state.presetColors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onColorChange: (color) => {
      dispatch(setCurrentColor(color.hex));
    },
    onColorSet: () => {
      dispatch(addColorToPresets());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
