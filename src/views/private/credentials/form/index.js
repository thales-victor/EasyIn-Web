import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../../components/elements/Button';
import Select from '../../../../components/elements/Select';
import { GetCredentialById } from '../../../../services/api/credential';
import { GetAllPlatforms } from '../../../../services/api/platform';

// import { Container } from './styles';

function CredentialsFormPage() {
  const { id } = useParams();

  const [isNew] = useState(id === 0);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    getCredential();
    getPlatforms();
  }, [])

  async function getCredential() {
    if (id === 0) {
      return;
    }

    const result = await GetCredentialById(id);
    if (result) {

    }
  }

  async function getPlatforms() {

    const choosePlatform = { id: 0, name: "Escolha a plataforma" }
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms([choosePlatform, ...result]);
    }
  }

  function handleSubmit(){
    alert('salvou');
  }

  return (

    <section>
      <div className="card" >
        <h2 className="titulo">{isNew ? 'Criar' : 'Editar'} senha</h2>
        <div className="form">
          <div>
            <Form onSubmit={handleSubmit}>
              {/* disabled={!isNew} */}
              <Select name="platform">
                {
                  platforms.map((platform) => {
                    return <option key={platform.id}>{platform.name}</option>
                  })
                }
              </Select>
              <br />
              <br />
              <Input name="username" type="text" placeholder="Usuário ou email" />
              <br />
              <br />
              <Input name="aa" type="text" placeholder="Senha" />

              <div className="mt-32">
                <Button tag="a" color="dark" className="botao" wideMobile href="home">
                  Voltar
                </Button>
                <Button type="submit" className="button button-primary button-wide-mobile">
                  Salvar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredentialsFormPage;