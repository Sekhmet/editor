import React from 'react';
import AppBar from 'material-ui/AppBar';
import './Wrapper.css';

const Wrapper = ({children}) => (
  <div>
    <AppBar
      style={{
        position: 'fixed'
      }}
      title="Kuubik"
    />
    <div className="container">
      {children}
    </div>
  </div>
);

export default Wrapper;
