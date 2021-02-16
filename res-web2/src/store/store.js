import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store
export const persistor = persistStore(store);
