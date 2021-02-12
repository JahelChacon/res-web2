import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import appReducers from './reducers';

const persistedState = loadState();

const store = createStore(
  appReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
