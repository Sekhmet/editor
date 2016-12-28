import { connect } from 'react-redux';
import EditorAppBar from '../components/EditorAppBar';
import { setDrawer } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftIconButtonTouchTap: () => dispatch(setDrawer(true))
  };
};

export default connect(null, mapDispatchToProps)(EditorAppBar);
