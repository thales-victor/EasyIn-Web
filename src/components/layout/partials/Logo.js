import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import LogoImage from './../../../assets/images/Logo_ativo.png';

const Logo = ({className, width, height,...props}) => {


  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={LogoImage}
            alt="Open"
            width={width || 105}
            height={height || 53} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;