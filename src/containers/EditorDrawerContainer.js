import { connect } from 'react-redux';
import EditorDrawer from '../components/EditorDrawer';
import { setDrawer } from '../actions';

const mapStateToProps = (state) => {
  return {
      open: state.ui.drawerOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestChange: open => dispatch((setDrawer(open)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorDrawer);
