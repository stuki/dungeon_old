import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Provider mahdollistaa käsiksi pääsemisen storeen
import { store, persistor } from './ConfigureStore';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
