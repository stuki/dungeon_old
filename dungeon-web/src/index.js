import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
// Provider mahdollistaa käsiksi pääsemisen storeen
import { Provider } from 'react-redux';
import UserReducer from './Reducers/UserReducers';

const allReducers = combineReducers({
    user: UserReducer
});

// Tässä store alustetaan lähtöarvoilla
const store = createStore(
    allReducers, 
    {
        user: null
    },
    // Tässä tarkastetaan, onko selaimella devToolsExtensiota
    // ja mikäli on, niin kutsutaan sitä ja laitetaan se
    // kolmanneksi argumentiksi
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

