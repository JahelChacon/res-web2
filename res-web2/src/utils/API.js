export const API_URL = "https://backend-web2ulacit.herokuapp.com";

export async function makeRequest(requestType, path, token, rawData, formData) {
  const headersFormData = {
    'Authorization': token && ('Bearer ' + token),
    'Accept': 'application/json',
  };
  const headersJson = {
    'Authorization': token && ('Bearer ' + token),
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const request = fetch(API_URL + path, {
    method: requestType,
    headers: formData ? headersFormData : headersJson,
    body: rawData ? JSON.stringify(rawData) : formData ? formData : null,
  });
  return await request;
}

