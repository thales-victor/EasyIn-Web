import React from 'react';
import Image from '../elements/Image';

import './styles.scss';

function MenuButton({ image, alt, href, margin }) {
  return (
    <div className={`MenuButtonContainer ${margin && "margin"}`}>
      <a className="link" href={href}>
        <Image
          src={image}
          alt={alt}
          width={50}
          height={50}
        />
      </a>
    </div>
  );
}

export default MenuButton;