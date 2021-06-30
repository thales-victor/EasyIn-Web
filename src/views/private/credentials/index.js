import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { GetAllCredentials } from '../../../services/api/credential';
import "../../../assets/css/style.css"
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import './styles.scss';
import { DeleteCredentialById } from '../../../services/api/credential';
import Button from '../../../components/elements/Button';
import toast from '../../../components/alert';
import SimpleCard from '../../../components/card';
import DefaultTable from '../../../components/table';
import Container from '../../../components/layout/container';




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
      toast.success('Credencial removida');
      setCredentials(credentials.filter(c => c.id != id));
    }
  }

  return (
   
      <Container>
      <SimpleCard title="Senhas" >
        
        <a className="link" href={'/credentials/0'} style={{ position: 'absolute', top: '175px', right: '320px' }}>
          <BiPlusCircle size={40} />
        </a>
          <DefaultTable>
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
          </DefaultTable>
      </SimpleCard>
      </Container>
  

  );
}

export default CredentialsPage;