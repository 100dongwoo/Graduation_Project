let url = 'http://localhost:8000/';
// url = 'http://172.20.10.8:8000/';
// url = 'http://www.m-ssi.com:8000/';
url = 'http://54.180.217.191';
if (process.env.NODE_ENV === 'production') {
    url = 'http://54.180.217.191';
}

export const BASE_URL = url + ':8000/v1';
