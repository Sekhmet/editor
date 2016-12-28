import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const CreateProjectDialog = ({open, onCancelClick, onCreateClick}) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={onCancelClick}
    />,
    <FlatButton
      label="Create"
      primary={true}
      onTouchTap={onCreateClick}
    />
  ];

  return (
    <Dialog
      title="Create new project"
      actions={actions}
      modal={true}
      open={open}
    >
      If you continue all unsaved data will be lost.
    </Dialog>
  )
};
CreateProjectDialog.propTypes = {
  open: React.PropTypes.bool,
  onCancelClick: React.PropTypes.func,
  onCreateClick: React.PropTypes.func
};

export default CreateProjectDialog;
