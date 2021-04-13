import React, { useEffect, useState } from 'react';
import "../../../assets/css/style.css"
import User from '../../../components/layout/partials/User';
import classNames from 'classnames';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../components/elements/Button';
import SetInputValueByName from '../../../utils/SetInputValue';
import { GetUserInfo, UpdateUser } from '../../../services/api/user';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

function ProfilePage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

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
      setIsChangingPassword(false);
      setInputValues(result);
    }
  }

  function handleClickChangePassword() {
    setIsChangingPassword(true);
  }

  return (

    <section className={outerClasses}>
      <div className="card" >
        <h2 className="titulo">Editar perfil</h2>
        <div className="profileCard">
          Foto
        </div>

        <div className="form">

          <div>
            <Form onSubmit={handleSubmit}>
              <Input name="name" type="text" placeholder="Nome" />
              <br />
              <br />
              <Input name="email" type="email" placeholder="E-mail" />
              <br />
              <br />
              {
                !isChangingPassword ? (
                  <Button tag="a" color="dark" className="botao" onClick={handleClickChangePassword}>
                    Alterar senha
                  </Button>
                ) : (
                  <>
                    <Input name="oldPassword" type="password" placeholder="Senha antiga" />
                    <br />
                    <br />
                    <Input name="newPassword" type="password" placeholder="Nova senha" />
                    <br />
                    <br />
                    <Input name="confirmNewPassword" type="password" placeholder="Confirmar nova senha" />
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;