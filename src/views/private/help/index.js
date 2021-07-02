import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { CreateQrCodeLogin } from '../../../services/api/qrCode';
import { useHistory } from 'react-router-dom';
import toast from '../../../components/alert';
import SimpleAccordion from '../../../components/accordion';
import Container from '../../../components/layout/container';
import SimpleCard from '../../../components/card';

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

    <Container>
          <SimpleCard title="FAQ">
            
            <SimpleAccordion title="É possível armazenar todas as minhas senhas no EasyIn?">Sim, basta cadastrá-las no seu perfil.</SimpleAccordion>
            <SimpleAccordion title="Para cadastrar uma senha de rede social, ela tem que ter integração com a EasyIn?">Não, é possível cadastrar todas as senhas mesmo que somente para consulta.</SimpleAccordion>
            <SimpleAccordion title="É seguro guardar minhas senhas no EasyIn?">Sem dúvidas! Todas as senhas são criptografadas no momento do armazenamento no banco. </SimpleAccordion>
            <SimpleAccordion title="Como gerar senhas aleatórias?">No menu de editar senhas, clique no botão "Gerar senha".</SimpleAccordion>
            <SimpleAccordion title="Como utilizar o EasyIn para fazer login?">No momento do login, basta acessar o app EasyIn pelo seu aparelho celular e apontar a camera para o QR Code na tela</SimpleAccordion>
            
            </SimpleCard>
        </Container>
      )

}

export default HelpPage;