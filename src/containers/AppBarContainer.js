import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { setDrawer } from '../actions';

const mapStateToProps = (state) => {
  return {
    title: 'Kuubik',
    style: {
      position: 'fixed'
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftIconButtonTouchTap: () => dispatch(setDrawer(true))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
