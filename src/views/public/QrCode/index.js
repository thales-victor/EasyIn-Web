import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import QrCode from 'react-qr-code';

import './styles.scss';

function QrCodePage() {
  const { platformId, browserToken } = useParams();
  const [value, setValue] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setValue({
      platformId: platformId,
      browserToken: browserToken
    });
  }, [])

  useEffect(() => {
    setIsReady(value?.platformId > 0)
  }, [value])

  return (
    isReady && (
      <div className="qrCodeContainer">
        <div className="qrCodeBorder">
          <QrCode value={JSON.stringify(value)} />
        </div>
      </div>
    )
  );
}

export default QrCodePage;
