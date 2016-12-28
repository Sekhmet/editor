import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FAB = styled(FloatingActionButton)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const ActionButton = ({onClick}) => (
  <FAB onClick={onClick}>
    <ContentAdd />
  </FAB>
);

export default ActionButton;
