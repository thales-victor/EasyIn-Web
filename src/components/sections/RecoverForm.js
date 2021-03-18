import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import { RecoverPassword } from '../../services/api/login';
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
            <br></br>
            <br></br>

            <Form onSubmit={HandleSubmit}>

              <Input name="email" id="email" type="email" placeholder="Email de recuperação" className="" />
            

              <div className="container-xs mt-32">

              </div>
            

              <div className="mt-32" >
                <Button type="submit" tag="a" className="button button-primary button-wide-mobile">
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