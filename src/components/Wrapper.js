import React from 'react';
import styled from 'styled-components';
import AppBarContainer from '../containers/AppBarContainer';
import DrawerContainer from '../containers/DrawerContainer';

const Container = styled.section`
  padding: 72px 72px;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = ({children}) => (
  <div>
    <AppBarContainer />
    <DrawerContainer />
    <Container>
      {children}
    </Container>
  </div>
);

export default Wrapper;
