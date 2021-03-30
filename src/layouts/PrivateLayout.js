import React from 'react';
import Toolbar from '../components/layout/toolbar';

function PrivateLayout({children}) {
  return (
    <>
      <Toolbar />
      {
        children
      }
    </>
  );
}

export default PrivateLayout;