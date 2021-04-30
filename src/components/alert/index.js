import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'

const position = 'topRight';

const toast = {
  error: (message, title = 'Erro') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: position
    });
  },
  success: (message, title = 'Successo') => {
    return iZtoast.success({
      title: title,
      message: message,
      position: position
    });
  },
  warning: (message, title = 'Atenção') => {
    return iZtoast.warning({
      title: title,
      message: message,
      position: position
    });
  },
  info: (message, title = 'Informação') => {
    return iZtoast.info({
      title: title,
      message: message,
      position: position
    });
  }
};

export default toast;