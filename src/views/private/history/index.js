import React, { useEffect, useState } from 'react';
import Container from '../../../components/layout/container';
import { GetLoginHistory } from '../../../services/api/history';
import RefreshIcon from '@material-ui/icons/Refresh';
import SimpleCard from '../../../components/card';
import DefaultTable from '../../../components/table';

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getLoginHistory();
  }, [])

  async function getLoginHistory() {
    let result = await GetLoginHistory();

    if (result) {
      setHistory(result);
    }
  }

  function getDateTime(dateTime) {

    const date = new Date(dateTime)

    const day = forceTwoDigits(date.getDate());
    const month = forceTwoDigits(date.getMonth() + 1)
    const year = date.getFullYear();
    const hour = forceTwoDigits(date.getHours());
    const minutes = forceTwoDigits(date.getMinutes());
    const seconds = forceTwoDigits(date.getSeconds());

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
  }

  function forceTwoDigits(number) {
    return ("0" + (number)).slice(-2);
  }

  return (
    
    <Container>
      
      <SimpleCard title="Histórico de logins">
      <RefreshIcon onClick={getLoginHistory} />
        <DefaultTable>
          <thead>
            <tr>
              <th>Plataforma</th>
              <th>Usuário/Email</th>
              <th>Data/Hora</th>
              <th>Realizou login</th>

            </tr>
          </thead>
          <tbody>
            {
              history.map(item => {
                return (
                  <tr key={item.id}>
                    <th>
                      <label name="name">{item.platform}</label>
                    </th>
                    <th>
                      <label name="name">{item.credential}</label>
                    </th>
                    <th>
                      <label name="name">{getDateTime(item.createdAt)}</label>
                    </th>
                    <th>
                      <label name="name">{item.loggedIn ? 'Sim' : 'Não'}</label>
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

export default HistoryPage;