import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';
import { Login } from '../../services/api/login';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';

// const propTypes = {
//   ...SectionProps.types
// }

// const defaultProps = {
//   ...SectionProps.defaults
// }


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

const loginStage = [
  {id: 0, value: ""},
  {id: 1, value: "."},
  {id: 2, value: ". ."},
  {id: 3, value: ". . ."},
]

const LoginForm = () => {
  const [loading, setLoading] = useState(loginStage[0]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoading){
      setTimeout(() => {
        let index = (loading.id + 1) % 4;
        setLoading(loginStage[index]);
      }, 250);
    } else if (loading.id !== 0){
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

            <Form onSubmit={HandleSubmit}>
              <div className="container-xs mt-32">
                <p className="" >
                  Email
                </p>
              </div>
              <Input name="email" id="email" type="email" placeholder="E-mail" className="" />


              <div className="container-xs mt-32">
                <p className="">
                  Senha
                </p>
              </div>
              <Input name="senha" id="senha" type="password" placeholder="Senha" className="" />

              <div className="mt-32" >
                <button type="submit" color="primary" wideMobile disabled={isLoading} >
                  {
                    'Login ' + loading.value
                  }
                </button>
              </div>
            </Form>


            <div className="container-xs">
              <p className="m-0 mb-32 mt-32" >
                Esqueceu sua senha?
              </p>
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