import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import UserImage from './../../../assets/images/User.jpg';

const User = ({className, width, height,...props}) => {


  const classes = classNames(
    'user',
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
            src={UserImage}
            alt="Open"
            width={width || 105}
            height={height || 80} />
        </Link>
      </h1>
    </div>
  );
}

export default User;