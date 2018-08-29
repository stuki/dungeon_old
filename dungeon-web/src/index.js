import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Provider mahdollistaa käsiksi pääsemisen storeen
import { store, persistor } from './ConfigureStore';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
