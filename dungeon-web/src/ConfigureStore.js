import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { reducer as toastrReducer } from 'react-redux-toastr';
import storage from 'redux-persist/lib/storage';
import UserReducer from './Reducers/UserReducers';


const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  user: UserReducer,
  toastr: toastrReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  {
    user: null,
  },
  window.devToolsExtension && window.devToolsExtension(),
);

export const persistor = persistStore(store);
