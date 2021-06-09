import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { CreateQrCodeLogin } from '../../../services/api/qrCode';
import { useHistory } from 'react-router-dom';
import toast from '../../../components/alert';
import Button from '../../../components/elements/Button';

function HelpPage() {
  const [isReady, setIsReady] = useState(true);
  const [showCredentialOptions, setShowCredentialOptions] = useState(false);
  const [credentialOptions, setCredentialOptions] = useState([]);
  const [qrCodeData, setQrCodeData] = useState({});
  const history = useHistory();

  function handleScan(data) {
    if (data) {
      setIsReady(false);
      let json = JSON.parse(data);
      setQrCodeData(json);
      createQrCodeLogin(json.platformId, json.browserToken);
    }
  }

  function handleSelectCredentialOption(credentialId){
    setIsReady(false);
    createQrCodeLogin(qrCodeData.platformId, qrCodeData.browserToken, credentialId);
  }

  async function createQrCodeLogin(platformId, browserToken, credentialId){
    let result = await CreateQrCodeLogin(platformId, browserToken, credentialId);
    if (result) {
      if (result.credentials !== null && result.credentials.length > 0) {
        setIsReady(true);
        setCredentialOptions(result.credentials);
        setShowCredentialOptions(true);
      } else {
        history.push("/home");
      }
    } else {
      toast.error('Não foi possível realizar o login. Tente novamente')
      setIsReady(true);
    }
  }


  function handleError(err) {
    console.error(err)
  }

  return (
    isReady && (
      !showCredentialOptions ? (
        <div style={{ marginTop: 150 }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
      ) : (
        <section>
          <div className="card" >
            <h2 className="titulo">Escolha uma opção</h2>
            <div className="content">
            {/* <Select name="platform" value={platformId} onChange={handleChangePlatform} disabled={!isNew}>
                {
                  credentialOptions.map((item) => {
                    return <option key={item.id} value={item.id}>{item.username}</option>
                  })
                }
              </Select>
              <Button>
                Escolher
              </Button> */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Usuário/Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    credentialOptions.map(item => {
                      return (
                        <tr onClick={() => handleSelectCredentialOption(item.id)} key={item.id}>
                          <th>
                            <label name="name">{item.username}</label>
                          </th>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>

            </div>
          </div>
        </section>
      )
    )
  );
}

export default HelpPage;