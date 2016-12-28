import React from 'react';
import styled from 'styled-components';
import EditorAppBarContainer from '../containers/EditorAppBarContainer';
import EditorDrawerContainer from '../containers/EditorDrawerContainer';

const Container = styled.section`
  padding: 72px 72px;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = ({children}) => (
  <div>
    <EditorAppBarContainer />
    <EditorDrawerContainer />
    <Container>
      {children}
    </Container>
  </div>
);

export default Wrapper;
