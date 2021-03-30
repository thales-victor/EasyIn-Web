import React from 'react';
import Logo from '../partials/Logo'

import './styles.scss';

function Toolbar() {
  return (
    <header className="toolbar">
      <div><a href="home"><Logo width="150" height="75"/></a></div> 
   </header>
  );
}

export default Toolbar;