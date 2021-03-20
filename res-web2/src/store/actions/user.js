import { makeRequest } from '../../utils/API';
import { insertarBitacora } from "../../utils/utils";

export const LOG_IN = 'LOG_IN';
export const GET_TOKEN = 'GET_TOKEN';
export const LOG_OUT = 'LOG_OUT';
export const SET_MENSAJE_ERROR = 'SET_MENSAJE_ERROR';

export const logIn = (usuario, contrasena) => async dispatch => {
  try {
    if (usuario && contrasena) {
      const data = {
        login: usuario,
        contrasena: contrasena
      };
      const response = await makeRequest('POST', '/usuarios/login', null, data);
      const responseData = await response.json();
      insertarBitacora(responseData.token, responseData.usuario.login, `Usuario ${responseData.usuario.login} logueado con éxito!`);
      dispatch({ type: GET_TOKEN, payload: responseData.token });
      dispatch({ type: LOG_IN, payload: responseData.usuario });
    }
  } catch (error) {
    console.log('Error: ', error);
    insertarBitacora("", 'Fallo en logueo de usuario!');
    dispatch({ type: SET_MENSAJE_ERROR, payload: true });
  }
};

export const limpiarMensaje = () => async dispatch => {
  dispatch({ type: SET_MENSAJE_ERROR, payload: false });
};

export const logOut = () => async dispatch => {
  dispatch({ type: LOG_OUT });
};
