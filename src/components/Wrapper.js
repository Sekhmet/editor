import React from 'react';
import styled from 'styled-components';
import EditorAppBarContainer from '../containers/EditorAppBarContainer';
import DrawerContainer from '../containers/DrawerContainer';

const Container = styled.section`
  padding: 72px 72px;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = ({children}) => (
  <div>
    <EditorAppBarContainer />
    <DrawerContainer />
    <Container>
      {children}
    </Container>
  </div>
);

export default Wrapper;
