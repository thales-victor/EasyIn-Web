import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import NotificationType from '../enums/NotificationType';

const SystemNotifications = ({ type, title, message }) => {

  function create() {
    switch (type) {
      case NotificationType.INFO:
        NotificationManager.info(message, title, 5000);
        break;
      case NotificationType.SUCCESS:
        NotificationManager.success(message, title, 5000);
        break;
      case NotificationType.WARNING:
        NotificationManager.warning(message, title, 5000);
        break;
      case NotificationType.ERROR:
        NotificationManager.error(message, title, 5000);
        break;
    }
  }

  return (
    <>
      {create()}
      <NotificationContainer />
    </>
  )
}

export default SystemNotifications;