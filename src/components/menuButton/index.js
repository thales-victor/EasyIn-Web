import React from 'react';
import Image from '../elements/Image';

import './styles.scss';

function MenuButton({ image, alt, href, margin, children }) {
  return (
    <div className={`MenuButtonContainer ${margin && "margin"}`}>
      <a className="link" href={href}>
        {
          children
        }
      </a>
    </div>
  );
}

export default MenuButton;