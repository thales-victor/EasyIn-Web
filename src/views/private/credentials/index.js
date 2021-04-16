import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import User from '../../../components/layout/partials/User';
import Button from '../../../components/elements/Button';
import SetInputValueByName from '../../../utils/SetInputValue';
import { GetAllCredentials } from '../../../services/api/credential';
import { Form, Input } from '@rocketseat/unform';
import "../../../assets/css/style.css"
import fotoAcesso from '../../../assets/images/Acesso.png';
import MenuButton from '../../../components/menuButton';
import Image from '../../../components/elements/Image';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);


function CredentialsPage() {

  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    getAllCredentials();
  }, []);

  async function getAllCredentials() {

    //const result = await GetAllCredentials();
    const result = [{ id: 1, username: 'ana teste', platform: 'twitter' }, { id: 2, username: 'ana teste', platform: 'twitter' }]
    if (result) {
      setCredentials(result);
    }
  }

  function setInputValues(data) {
    SetInputValueByName('name', data.username);
  }

  return (
    <section className={outerClasses}>
      <div className="card" >
        <h2 className="titulo">Senhas</h2>


        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Plataforma</th>
                <th></th>
                <th></th>


              </tr>
            </thead>
            <tbody>
              {
                credentials.map(item => {
                  return (
                    <tr key={item.id}>
                      <th>
                        <label name="name">{item.username}</label>
                      </th>
                      <th>
                        <label name="name">{item.platform}</label>
                      </th>
                      <th></th>

                      <th>
                        <a className="link" href={'/credentials/' + item.id}>
                          <Image src={fotoAcesso} alt={"Acessar"} />
                        </a>
                      </th>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>

        </div>
      </div>
    </section>

  );
}

export default CredentialsPage;