import React from 'react';
import MenuButton from '../../../components/menuButton';
import fotoSenha from '../../../assets/images/Senha.png';
import fotoPerfil from '../../../assets/images/Perfil.png';
import fotoHistorico from '../../../assets/images/Historico.png';
import fotoAjuda from '../../../assets/images/Ajuda.png';
import './styles.scss';
import Image from '../../../components/elements/Image';

const DashboardPage = ({className, width, height,...props}) => {
  return (
    <>
      <div className="dashboardContainer">

        <div className="group">
      <a href="credentials" className="MenuButtonContainer">
        <Image
            src={fotoSenha}
            alt="Open"
            width={width || 50}
            height={height || 50}
           />
        </a>
        
         
        <a href="Profile" className="MenuButtonContainer">
        <Image
            src={fotoPerfil}
            alt="Open"
            width={width || 50}
            height={height || 50}
           />
        </a>
         
        </div>
        <div className="group">
        <a href="History" className="MenuButtonContainer">
        <Image
            src={fotoHistorico}
            alt="Open"
            width={width || 50}
            height={height || 50}
           />
        </a>
        <a href="Help" className="MenuButtonContainer">
        <Image
            src={fotoAjuda}
            alt="Open"
            width={width || 50}
            height={height || 50}
           />
        </a>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;