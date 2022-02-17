import { ActionNotification} from '../type/accion-type';

const initialState = {};

export const notificationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionNotification.SHOW_NOTIFICATION:
      return { ...state, payload };
    default:
      return state;
  }
};
