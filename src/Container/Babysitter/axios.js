import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://homeproject-b6d06.firebaseio.com'
});

export default instance