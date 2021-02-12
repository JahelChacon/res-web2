export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    const decryptedState = atob(serializedState);
    if (decryptedState === null) {
      return undefined;
    }
    return JSON.parse(decryptedState);
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    const encryptedState = btoa(serializedState);
    localStorage.setItem('state', encryptedState);
  } catch (err) {
    return undefined;
  }
}