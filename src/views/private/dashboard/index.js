import React from 'react';
import MenuButton from '../../../components/menuButton';

import './styles.scss';

function DashboardPage() {
  return (
    <>
      <div className="dashboardContainer">
        <div className="group">
          <MenuButton name="Senhas" href="credentials" margin />
          <MenuButton name="Perfil" href="profile"/>
        </div>
        <div className="group">
          <MenuButton name="Histórico" href="history" margin/>
          <MenuButton name="Ajuda" href="help"/>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;