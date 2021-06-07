import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../../components/elements/Button';
import Select from '../../../../components/elements/Select';
import { CreateCredential, GetCredentialById, UpdateCredential } from '../../../../services/api/credential';
import { GetAllPlatforms } from '../../../../services/api/platform';
import { ChangeInputType, SetInputValueByName } from '../../../../utils/SetInputValue';
import toast from '../../../../components/alert';

// import { Container } from './styles';

function CredentialsFormPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isNew, setIsNew] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [platformId, setPlatformId] = useState(0);

  useEffect(() => {
    getCredential();
    getPlatforms();
  }, [])

  async function getCredential() {
    if (id == 0) {
      return;
    }
    setIsNew(false);

    const result = await GetCredentialById(id);
    if (result) {
      setInputValues(result);
    }
  }

  function setInputValues(data) {
    setPlatformId(data.platform.id);
    SetInputValueByName('username', data.username);
    SetInputValueByName('password', data.password);
  }

  async function getPlatforms() {

    const choosePlatform = { id: 0, name: "Escolha a plataforma" }
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms([choosePlatform, ...result]);
    }
  }

  function handleSubmit(data) {
    if (isNew) {
      create(data);
    } else {
      update(data);
    }
  }

  async function create(data) {
    const result = await CreateCredential(platformId, data.username, data.password, data.confirmPassword);
    if (result) {
      toast.success('Credencial criada');
      setIsNew(false);
      history.push('/credentials/' + result.id);
    }
  }

  async function update(data) {
    const result = await UpdateCredential(id, data.username, data.password);
    if (result) {
      toast.success('Credencial atualizada');
      setInputValues(result);
    }
  }

  function handleClickShowPassword() {
    ChangeInputType('password', showPassword ? 'text' : 'password');
    ChangeInputType('confirmPassword', showPassword ? 'text' : 'password');
    setShowPassword(!showPassword);
  }


  function handleChangePlatform(event) {
    setPlatformId(event.target.value)
  }

  return (

    <section>
      <div className="card" >
        <h2 className="titulo">{isNew ? 'Criar' : 'Editar'} senha</h2>
        <div className="form">
          <div>
            <Form onSubmit={handleSubmit}>
              <Select name="platform" value={platformId} onChange={handleChangePlatform} disabled={!isNew}>
                {
                  platforms.map((platform) => {
                    return <option key={platform.id} value={platform.id}>{platform.name}</option>
                  })
                }
              </Select>
              <br />
              <br />
              <Input name="username" type="text" placeholder="Usuário ou email" autoComplete="email" />
              <br />
              <br />
              <Input name="password" type="password" placeholder="Senha" autoComplete="new-password" />
              <br />
              <br />
              {
                isNew && (
                  <>
                    <Input name="confirmPassword" type="password" placeholder="Confirmar senha" />
                    <br />
                    <br />
                  </>
                )
              }
              {
                <Button type="button" onClick={handleClickShowPassword}>
                  {showPassword ? 'Mostrar' : 'Esconder'} senha
              </Button>

              }
              <div className="mt-32">
                <Button tag="a" color="dark" className="botao" href="/credentials">
                  Voltar
                </Button>
                <Button type="submit" className="button button-primary">
                  {isNew ? 'Criar' : 'Atualizar'}
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