import React from 'react';
import Drawer from 'material-ui/Drawer';

const EditorDrawer = ({open, onRequestChange}) => (
  <Drawer
    docked={false}
    width={200}
    open={open}
    onRequestChange={onRequestChange}
  />
);

export default EditorDrawer;
