import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionInfo from 'material-ui/svg-icons/action/info';

const EditorDrawer = ({open, onRequestChange}) => (
  <Drawer
    docked={false}
    open={open}
    onRequestChange={onRequestChange}
  >
    <MenuItem
      primaryText="Home"
      leftIcon={<ActionHome />}
      onTouchTap={() => onRequestChange(false)}
    />
    <MenuItem
      primaryText="Editor"
      leftIcon={<ActionBuild />}
      onTouchTap={() => onRequestChange(false)}
    />
    <MenuItem
      primaryText="About"
      leftIcon={<ActionInfo />}
      onTouchTap={() => onRequestChange(false)}
    />
  </Drawer>
);

export default EditorDrawer;
