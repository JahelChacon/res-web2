import { makeRequest } from '../../utils/API';

export const LOG_IN = 'LOG_IN';
export const GET_TOKEN = 'GET_TOKEN';
export const LOG_OUT = 'LOG_OUT';

export const logIn = (usuario, contrasena) => async dispatch => {
  try {
    if (usuario && contrasena) {
      const data = {
        login: usuario,
        contrasena: contrasena
      };
      const response = await makeRequest('POST', '/usuarios/login', null, data);
      const responseData = await response.json();
      dispatch({ type: GET_TOKEN, payload: responseData.token });
      dispatch({ type: LOG_IN, payload: responseData.usuario });
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const logOut = () => async dispatch => {
  dispatch({ type: LOG_OUT });
};
