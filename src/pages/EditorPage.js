import React from 'react';

import ToolboxContainer from '../containers/ToolboxContainer';
import FrameSelectorContainer from '../containers/FrameSelectorContainer';
import LayerContainer from '../containers/LayerContainer';

const EditorPage = () => (
  <div>
    <ToolboxContainer />
    <FrameSelectorContainer />
    <LayerContainer />
  </div>
);

export default EditorPage;
