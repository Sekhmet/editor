import { connect } from 'react-redux';
import Layer from '../components/Layer';
import { toggleSelection, selectLayer, deselectLayer } from '../actions';

const mapStateToProps = (state) => {
  return {
    colors: state.editor.present.colors.filter(color => {
      return color.frame === state.editor.present.currentFrame
    }),
    selectedIndexes: state.editor.present.selectedIndexes,
    cols: 5,
    rows: 5,
    layers: 5
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleSelection(id));
    },
    onSelectAllClick: (id) => {
      dispatch(selectLayer(id));
    },
    onSelectNoneClick: (id) => {
      dispatch(deselectLayer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layer);
