import axios from 'axios';
import { BASE_URL } from './url';

const api = axios.create({
    withCredentials: true,
});

export default api;
