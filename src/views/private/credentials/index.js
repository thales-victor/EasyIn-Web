import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { GetAllCredentials } from '../../../services/api/credential';
import "../../../assets/css/style.css"
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import './styles.scss';
import { DeleteCredentialById } from '../../../services/api/credential';
import Button from '../../../components/elements/Button';

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
    const result = await GetAllCredentials();
    if (result) {
      setCredentials(result);
    }
  }

  
  async function handleClickDelete(id) {
    const result = await DeleteCredentialById(id); 
    if (result) {
      setCredentials(credentials.filter(c => c.id != id));
    }
  }

  return (
    <section className={outerClasses}>
      <div className="card" >
        <h2 className="titulo">Senhas</h2>
        <a className="link" href={'/credentials/0'} style={{ position: 'absolute', top: '175px', right: '320px' }}>
          <BiPlusCircle size={40} />
        </a>

        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Plataforma</th>
                <th className="alignCenter">Ações</th>
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

                      <th className="credentialActions">
                        <a className="link" href={'/credentials/' + item.id}>
                          <BiEdit size={25} />
                        </a>
                        <a href="#" onClick={() => handleClickDelete(item.id)}>
                          <BiTrash size={25}/>
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