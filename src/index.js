import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://www.dorestory.com:8000/v1/';
}
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
