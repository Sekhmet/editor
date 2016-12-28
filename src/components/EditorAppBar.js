import React from 'react';
import AppBar from 'material-ui/AppBar';

const EditorAppBar = ({onLeftIconButtonTouchTap}) => (
  <AppBar
    title="Kuubik"
    style={{
      position: 'fixed'
    }}
    onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
  />
);
EditorAppBar.propTypes = {
  onLeftIconButtonTouchTap: React.PropTypes.func
};

export default EditorAppBar;
