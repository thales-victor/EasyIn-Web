import React, { useEffect, useState } from 'react';
import "../../../assets/css/style.css"
import classNames from 'classnames';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../components/elements/Button';
import { SetInputValueByName } from '../../../utils/SetInputValue';
import { GetUserInfo, UpdateUser } from '../../../services/api/user';
import toast from '../../../components/alert';
import SimpleCard from '../../../components/card';
import Container from '../../../components/layout/container';
import TextFields from '../../../components/textField';



function ProfilePage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  useEffect(() => {
    getUserInfo();
  });

  async function getUserInfo() {

    const result = await GetUserInfo();
    if (result) {
      setInputValues(result);
    }
  }

  function setInputValues(data) {
    SetInputValueByName('name', data.username);
    SetInputValueByName('email', data.email);
  }

  async function handleSubmit(data) {
    if (!isChangingPassword) {
      data.oldPassword = null;
      data.newPassword = null;
      data.confirmNewPassword = null;
    }

    const result = await UpdateUser(data.name, data.email, data.oldPassword, data.newPassword, data.confirmNewPassword);
    if (result) {
      toast.success('Perfil atualizado')
      setIsChangingPassword(false);
      setInputValues(result);
    }
  }

  function handleClickChangePassword() {
    setIsChangingPassword(true);
  }

  return (

    <Container>
      <SimpleCard title="Editar perfil">
        <br></br>
      
            <Form onSubmit={handleSubmit}>
              <TextFields name="name" type="text" label="Nome"/>
              <br />
              <br />
              <TextFields name="email" type="email" label="E-mail" />
              <br />
              <br />
              {
                !isChangingPassword ? (
                  <Button tag="a" color="dark" onClick={handleClickChangePassword}>
                    Alterar senha
                  </Button>
                ) : (
                  <>
                    <TextFields name="oldPassword" type="password" label="Senha antiga" autoComplete="new-password" />
                    <br />
                    <br />
                    <TextFields name="newPassword" type="password" label="Nova senha" autoComplete="new-password" />
                    <br />
                    <br />
                    <TextFields name="confirmNewPassword" type="password" label="Confirmar nova senha" autoComplete="new-password" />
                    <br />
                    <br />
                  </>
                )
              }

              <div className="mt-32">
                <Button tag="a" color="dark" className="botao" wideMobile href="home">
                  Voltar
                </Button>
                <Button type="submit" className="button button-primary button-wide-mobile">
                  Salvar
                </Button>
              </div>
            </Form>
      
      </SimpleCard>
      </Container>
  );
}

export default ProfilePage;