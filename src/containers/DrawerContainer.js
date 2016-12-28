import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import { setDrawer } from '../actions';

const mapStateToProps = (state) => {
  return {
      docked: false,
      open: state.ui.drawerOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestChange: open => dispatch((setDrawer(open)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
