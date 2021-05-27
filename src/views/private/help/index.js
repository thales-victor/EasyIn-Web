import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { CreateQrCodeLogin } from '../../../services/api/qrCode';
import { useHistory } from 'react-router-dom';

function HelpPage() {
  const [result, setResult] = useState();
  const [isReady, setIsReady] = useState(true);
  const history = useHistory();

  function handleScan(data) {
    if (data) {
      setIsReady(false);
      setResult(data);
      let json = JSON.parse(data);
      let result = CreateQrCodeLogin(json.platformId, json.browserToken);
      if (result) {

        history.push("/home");
      } else {
        setTimeout(() => {
          setIsReady(true);
        }, 5000);
      }
    }
  }

  function handleError(err) {
    console.error(err)
  }

  return (
    isReady && (
      <div style={{ marginTop: 150 }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </div>
    )
  );
}

export default HelpPage;