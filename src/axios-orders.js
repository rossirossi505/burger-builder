import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dkfk-7a6f2.firebaseio.com/'
});

export default instance;