import React from 'react';

import './styles.scss';

function Container({ children }) {
  return (
    <div className="paddingContainer">
      {children}
    </div>
  );
}

export default Container;