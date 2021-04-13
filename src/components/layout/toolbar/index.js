import React from 'react';
import Logo from '../partials/Logo'

import './styles.scss';

function Toolbar() {
  return (
    <header className="toolbar">
      <Logo width="150" height="75" link="home" />
    </header>
  );
}

export default Toolbar;