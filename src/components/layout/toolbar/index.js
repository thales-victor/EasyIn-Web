import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Logo from '../partials/Logo';
import { BiLogOut } from "react-icons/bi";

import './styles.scss';
import { GetAuthentication, RemoveAuthentication } from '../../../services/localStorage/LocalStorageService';

function Toolbar() {
  const history = useHistory();

  const [user, setUser] = useState('');

  useEffect(()=>{
    const result = GetAuthentication();
    if (result) {
      setUser(result.user.username);
    }
  },[])

  function handleClickLogout(){
    RemoveAuthentication();
    history.push("/login");
  }
  return (
    <header className="toolbar">
      <Logo width="150" height="75" link="home" />
      <div className="user">
        <span>{user}</span>
        <BiLogOut size={40} alt="Logout" onClick={handleClickLogout} />
      </div>
    </header>
  );
}

export default Toolbar;