export const API_URL = "https://backend-web2ulacit.herokuapp.com";

export async function makeRequest (requestType, path, data, token) {
  const request = fetch(API_URL + path, {
    method: requestType,
    headers: {
      'Authorization' : token && ('Bearer ' + token),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  });
  return await request;
}
