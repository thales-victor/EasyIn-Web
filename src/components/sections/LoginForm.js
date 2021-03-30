import React, { useEffect, useState } from 'react';
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

const loginStage = [
  { id: 0, value: "" },
  { id: 1, value: "." },
  { id: 2, value: ". ." },
  { id: 3, value: ". . ." },
]

const LoginForm = () => {
  const [loading, setLoading] = useState(loginStage[0]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        let index = (loading.id + 1) % 4;
        setLoading(loginStage[index]);
      }, 250);
    } else if (loading.id !== 0) {
      setLoading(loginStage[0]);
    }
  }, [loading, isLoading])

  async function HandleSubmit(data) {
    setIsLoading(true);
    var result = await Login(data.email, data.senha);
    setIsLoading(false);
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
                <Button type="submit" className="button button-primary button-wide-mobile" disabled={isLoading}>
                  {
                    'Login ' + loading.value
                  }
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