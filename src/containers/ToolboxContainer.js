import { connect } from 'react-redux';
import Toolbox from '../components/Toolbox';
import { setCurrentColor, addColorToPresets, setColors } from '../actions';

const mapStateToProps = (state) => {
  return {
    color: state.editor.present.currentColor,
    presetColors: state.editor.present.presetColors
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
