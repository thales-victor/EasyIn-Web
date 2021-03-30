import React from 'react';

import './styles.scss';

function MenuButton({ name, href, margin }) {
  return (
    <div className={`MenuButtonContainer ${margin && "margin"}` }>
      <a className="link" href={href}>
        {name}
      </a>
    </div>
  );
}

export default MenuButton;