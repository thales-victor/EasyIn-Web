import React from 'react';
import MenuButton from '../../../components/menuButton';
import fotoSenha from '../../../assets/images/Senha.png';
import fotoPerfil from '../../../assets/images/Perfil.png';
import fotoHistorico from '../../../assets/images/Historico.png';
import fotoAjuda from '../../../assets/images/Ajuda.png';
import './styles.scss';

const DashboardPage = () => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="group">
          <MenuButton image={fotoSenha} alt="Credentials" href="credentials" margin />
          <MenuButton image={fotoPerfil} alt="Profile" href="profile" />
        </div>
        <div className="group">
          <MenuButton image={fotoHistorico} alt="History" href="history" margin />
          <MenuButton image={fotoAjuda} alt="Help" href="help" />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;