import Http from './Http.js';

const http = new Http('mobile');
http.get('https://github.com/104gogo').then(({ data }) => console.log(data));
