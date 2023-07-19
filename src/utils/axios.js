import axios from 'axios';

const requestInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 8000,
    headers: {'X-Custom-Header': 'foobar'}
}); 

export default requestInstance;