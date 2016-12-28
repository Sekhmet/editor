import React from 'react';
import ToolboxContainer from '../containers/ToolboxContainer';
import FrameSelectorContainer from '../containers/FrameSelectorContainer';
import LayerContainer from '../containers/LayerContainer';
import ActionButtonContainer from '../containers/ActionButtonContainer';
import CreateProjectDialogContainer from '../containers/CreateProjectDialogContainer';

const EditorPage = () => (
  <div>
    <ToolboxContainer />
    <FrameSelectorContainer />
    <LayerContainer />
    <ActionButtonContainer />
    <CreateProjectDialogContainer />
  </div>
);

export default EditorPage;
