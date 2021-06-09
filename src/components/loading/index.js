import React from 'react';

import './styles.scss';

function Loading({ open }) {

  const [show, setShow] = useState(false);

  return (
    <Backdrop
      className="backdrop"
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;