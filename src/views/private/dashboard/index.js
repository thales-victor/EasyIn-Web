import React from 'react';
import MenuButton from '../../../components/menuButton';
import HelpIcon from '@material-ui/icons/HelpOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';

import './styles.scss';

const DashboardPage = () => {
  const fontSize = 'large';

  return (
    <>
      <div className="dashboardContainer">
        <div className="group">
          <MenuButton alt="Credentials" href="credentials" margin>
            <VpnKeyIcon fontSize={fontSize}/>
          </MenuButton>
          <MenuButton alt="Profile" href="profile" >
            <PersonIcon fontSize={fontSize} />
          </MenuButton>
        </div>
        <div className="group">
          <MenuButton alt="History" href="history" margin >
            <HistoryIcon fontSize={fontSize} />
          </MenuButton>
          <MenuButton alt="Help" href="help" >
            <HelpIcon fontSize={fontSize} />
          </MenuButton>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;