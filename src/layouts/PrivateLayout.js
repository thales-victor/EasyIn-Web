import React, { useEffect } from 'react';
import Toolbar from '../components/layout/toolbar';
import { GetAuthentication } from '../services/localStorage/LocalStorageService';
import { useHistory } from "react-router-dom";

function PrivateLayout({ children }) {
  
  const history = useHistory();

  useEffect(() => {
    const token = GetAuthentication();
    if (!token) {
      //  history.push("/login");
    }
  })

  return (
    <>
      <Toolbar />
      {
        children
      }
    </>
  );
}

export default PrivateLayout;