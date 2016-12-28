import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionInfo from 'material-ui/svg-icons/action/info';

const Jumbotron = styled.div`
  padding: 64px 0;
  text-align: center
`;

const Header = styled.h1`
  font-size: 48px;
  font-weight: 300;
`;

const IndexButton = styled(RaisedButton)`
  margin: 0 4px;
`;

const IndexPage = () => (
  <Jumbotron>
    <Header>Kuubik</Header>
    <Link to="/editor">
      <IndexButton
        label="Go to Editor"
        primary={true}
        icon={<ActionBuild />}
      />
    </Link>
    <Link to="/about">
      <IndexButton
        label="About"
        secondary={true}
        icon={<ActionInfo />}
      />
    </Link>
  </Jumbotron>
);

export default IndexPage;
