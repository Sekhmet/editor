import { connect } from 'react-redux';
import { setCreateProjectDialog } from '../actions';
import ActionButton from '../components/ActionButton';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(setCreateProjectDialog(true))
  };
};

export default connect(null, mapDispatchToProps)(ActionButton);
