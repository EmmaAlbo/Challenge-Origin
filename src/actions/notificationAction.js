import { ActionNotification } from '../type/accion-type';

export const showNotification = (payload) => {
  return {
    type: ActionNotification.SHOW_NOTIFICATION,
    payload,
  };
};

export const showNotificationAccion = (show,message,type) => {
  return showNotification({show,message,type});
};


