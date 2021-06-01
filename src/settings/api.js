import { create } from 'apisauce';
import { BASE_URL } from './url';

const api = create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const extraApi = create({ baseURL: '' });

api.addResponseTransform((response) => {
    console.log(response);
    if (response.status && response.status >= 500) {
        // eslint-disable-next-line no-throw-literal
        throw 'Server Error';
    } else if (!response.status) {
        // eslint-disable-next-line no-throw-literal
        throw 'API Error';
    }
});

api.addRequestTransform((request) => {
    console.log(request);
});

export default api;
