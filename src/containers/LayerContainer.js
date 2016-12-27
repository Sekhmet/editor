import { connect } from 'react-redux';
import Layer from '../components/Layer';

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    currentFrame: state.currentFrame,
    selectedIndexes: state.selectedIndexes,
    cols: 5,
    rows: 5,
    layers: 5
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      // TODO: Handle selection
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layer);
