import React from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';
import { Login } from '../../services/api/login';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

const LoginForm = () => {
  const history = useHistory();

  async function HandleSubmit(data) {
    var result = await Login(data.email, data.senha);
    if (result) {
      history.push("/home");
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
              Login
            </h1>
            <br />
            <br />
            <Form onSubmit={HandleSubmit}>
              <Input name="email" id="email" background-image="'./../../../assets/images/User.png" type="email" placeholder="Usuário" className="" />
              <div className="container-xs mt-32">
              </div>
              <Input name="senha" id="senha" type="password" placeholder="Senha" className="" />
              <div className="mt-32" >
                <Button type="submit" className="button button-primary button-wide-mobile">
                  Login
                </Button>
              </div>
            </Form>
            <br />
            <div className="container-xs">
              <a className="m-0 mb-32 mt-32" href="recover">
                Esqueceu sua senha?
              </a>
            </div>
            <div className="mt-32" >
              <Button tag="a" color="dark" wideMobile href="register">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;