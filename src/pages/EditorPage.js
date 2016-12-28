import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ToolboxContainer from '../containers/ToolboxContainer';
import FrameSelectorContainer from '../containers/FrameSelectorContainer';
import LayerContainer from '../containers/LayerContainer';

const FAB = styled(FloatingActionButton)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const EditorPage = () => (
  <div>
    <ToolboxContainer />
    <FrameSelectorContainer />
    <LayerContainer />
    <FAB>
      <ContentAdd />
    </FAB>
  </div>
);

export default EditorPage;
