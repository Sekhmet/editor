import { connect } from 'react-redux';
import Toolbox from '../components/Toolbox';
import { setCurrentColor, addColorToPresets, setColors } from '../actions';
import { ActionCreators } from 'redux-undo';

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
    },
    onUndoClick: () => dispatch(ActionCreators.undo()),
    onRedoClick: () => dispatch(ActionCreators.redo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
