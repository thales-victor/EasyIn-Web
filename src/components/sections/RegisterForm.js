import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Form, Input } from '@rocketseat/unform';

import { Register } from '../../services/api/login';
import { useHistory } from 'react-router-dom';

const outerClasses = classNames(
  'hero section center-content',
  // topOuterDivider && 'has-top-divider',
  // bottomOuterDivider && 'has-bottom-divider',
  // hasBgColor && 'has-bg-color',
  // invertColor && 'invert-color',
  // className
);

const innerClasses = classNames(
  'hero-inner section-inner',
  // topDivider && 'has-top-divider',
  // bottomDivider && 'has-bottom-divider'
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
      // {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom" data-reveal-delay="200">

            <h1 className="mt-0 mb-16">
              Cadastro
            </h1>
            <Form onSubmit={HandleSubmit}>

              <div className="container-xs mt-16">
                <p className="" >
                  Nome
              </p>
              </div>
              <Input name="name" type="text" placeholder="Nome" className="" />

              <div className="container-xs mt-32">
                <p className="" >
                  Email
              </p>
              </div>
              <Input name="email" type="email" placeholder="E-mail" className="" />


              <div className="container-xs mt-32">
                <p className="" >
                  Senha
              </p>
              </div>
              <Input name="senha" type="password" placeholder="Senha" className="" />

              <div className="container-xs mt-32">
                <p className="" >
                  Confirmar senha
              </p>
              </div>
              <Input name="confirmarSenha" type="password" placeholder="Confirmar senha" className="" />


              <div className="mt-32" >
                <button type="submit" color="primary" wideMobile >
                  Login
                </button>
                {/* <Button tag="a" color="primary" wideMobile href="">
                      Concluir cadastro
                </Button> */}
              </div>

            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginForm;