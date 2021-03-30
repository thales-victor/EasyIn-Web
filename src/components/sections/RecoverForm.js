import React from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';
import { RecoverPassword } from '../../services/api/login';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

const RecoverForm = () => {
  const history = useHistory();

  async function HandleSubmit(data) {
    var result = await RecoverPassword(data.email);
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
              Recuperar senha
            </h1>
            <br />
            <br />
            <Form onSubmit={HandleSubmit}>
              <Input name="email" id="email" type="email" placeholder="Email de recuperação" className="" />
              <div className="container-xs mt-32">
              </div>
              <div className="mt-32" >
                <Button type="submit" className="button button-primary button-wide-mobile">
                  Recuperar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecoverForm;