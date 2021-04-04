let url = 'http://localhost';
url = 'http://3.35.167.116';
url = 'http://www.dorestory.com';

if (process.env.NODE_ENV === 'production') {
    url = 'http://www.dorestory.com:8000/v1/';
}

export const BASE_URL = url + ':8000/v1/';
// http://3.35.167.116:8000/v1/users/sign-up/
