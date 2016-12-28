import { connect } from 'react-redux';
import Toolbox from '../components/Toolbox';
import { setCurrentColor, addColorToPresets, setColors } from '../actions';

const mapStateToProps = (state) => {
  return {
    color: state.editor.currentColor,
    presetColors: state.editor.presetColors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onColorChange: (color) => {
      dispatch(setCurrentColor(color.hex));
    },
    onColorSet: () => {
      dispatch(addColorToPresets());
      dispatch(setColors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
