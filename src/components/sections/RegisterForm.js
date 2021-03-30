import React from 'react';
import classNames from 'classnames';
import { Form, Input } from '@rocketseat/unform';
import { Register } from '../../services/api/login';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../elements/Button';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

const LoginForm = () => {

  const history = useHistory();

  async function HandleSubmit(data) {
    var result = await Register(data.name, data.email, data.senha, data.confirmarSenha);
    if (result) {
      history.push("/login");
    }
  }

  return (
    <section
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom" data-reveal-delay="200">
            <h1 className="mt-0 mb-16">
              Cadastro
            </h1>
            <br />
            <br />
            <Form onSubmit={HandleSubmit}>
              <Input name="name" type="text" placeholder="Nome" className="" />
              <br />
              <br />
              <Input name="email" type="email" placeholder="E-mail" className="" />
              <br />
              <br />
              <Input name="senha" type="password" placeholder="Senha" className="" />
              <br />
              <br />
              <Input name="confirmarSenha" type="password" placeholder="Confirmar senha" className="" />
              <div className="mt-32">
                <Button type="submit" tag="a" className="button button-primary button-wide-mobile">
                  Cadastrar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginForm;