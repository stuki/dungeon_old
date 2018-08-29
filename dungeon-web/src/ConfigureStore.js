import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import UserReducer from './Reducers/UserReducers';
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';
import { systemAlerts } from '@salocreative/react-redux-alerts';




const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  user: UserReducer,
  alert: systemAlerts
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  {
    user: {},
    alert: {}
  },
  window.devToolsExtension && window.devToolsExtension(),
);

export const persistor = persistStore(store);
