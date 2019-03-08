// import pcRequest from './pcRequest.js';
// import mobileRequest from './mobileRequest.js';

export default class Http {
  constructor(type) {
    // const requestPromise = type === 'pc' ?
    //   import(/* webpackChunkName: "pcRequest" */ './pcRequest.js') :
    //   import(/* webpackChunkName: "mobileRequest" */ './mobileRequest.js');

    //   requestPromise.then(request => this.request = request);


    // this.request = type === 'pc' ? pcRequest : mobileRequest;

    this.request = process.env.TYPE === 'pc' ?
      require('./pcRequest.js').default :
      require('./mobileRequest.js').default;
  }

  get(url) {
    return this.request(url);
  }
}