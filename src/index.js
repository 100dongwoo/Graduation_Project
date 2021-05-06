import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './Redux/store';
import axios from 'axios';

// if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'http://www.dorestory.com:8000/v1/';
//     axios.defaults.headers.post['Content-Type'] =
//         'application/json;charset=utf-8';
//     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// }

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
