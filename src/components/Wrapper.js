import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

const Container = styled.section`
  padding: 72px 72px;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = ({children}) => (
  <div>
    <AppBar
      style={{
        position: 'fixed'
      }}
      title="Kuubik"
    />
    <Container>
      {children}
    </Container>
  </div>
);

export default Wrapper;
