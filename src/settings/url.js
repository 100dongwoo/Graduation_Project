// let url = 'http://localhost';
// url = 'http://172.20.10.8:8000/';
// url = 'http://www.m-ssi.com:8000/';
let url = 'http://54.180.217.191';
// url = 'http://127.0.0.1';
if (process.env.NODE_ENV === 'production') {
    url = 'http://54.180.217.191';
}

export const BASE_URL = url + ':8000/v1';
