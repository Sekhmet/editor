import { connect } from 'react-redux';
import CreateProjectDialog from '../components/CreateProjectDialog';
import { setCreateProjectDialog } from '../actions';

const mapStateToProps = (state) => {
  return {
    open: state.ui.createProjectDialogOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelClick: () => {
      dispatch(setCreateProjectDialog(false));
    },
    onCreateClick: () => {

    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectDialog);
