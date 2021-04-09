import React from 'react';
import "../../../assets/css/style.css"
import User from '../../../components/layout/partials/User';
import classNames from 'classnames';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../components/elements/Button';
import { useHistory } from 'react-router-dom';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

function ProfilePage() {
  return (

    <section
      className={outerClasses}
    >
      
      <div className="card" >
      <h2 className="titulo">Editar perfil</h2>
        <div className="profileCard">
          Foto
        </div>
        
        <div className="form">
          
          <div className="" data-reveal-delay="200">
            <Form >
              <Input name="name" type="text" placeholder="Nome" className="" />
              <br />
              <br />
              <Input name="email" type="email" placeholder="E-mail" className="" />
              <br />
              <br />
              <Input name="senha" type="password" placeholder="Senha" className="" />
              <br />
              <br />
              
              <div className="mt-32">
              <Button tag="a" color="dark" className="botao" wideMobile href="home">
                Voltar
              </Button>
                <Button type="submit" tag="a" className="button button-primary button-wide-mobile">
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