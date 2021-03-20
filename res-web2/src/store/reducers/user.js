import { userAct } from '../actions';

const initialState = {
  usuario: false,
  usuarioToken: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAct.LOG_IN:
      return Object.assign({}, state, {
        usuario: action.payload,
      });
    case userAct.LOG_OUT:
      return Object.assign({}, state, {
        usuario: false,
        usuarioToken: false,
      });
    case userAct.GET_TOKEN:
      return Object.assign({}, state, {
        usuarioToken: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;
