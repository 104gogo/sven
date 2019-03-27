# import

[webpack 代码分离](https://webpack.docschina.org/guides/code-splitting/)

## 目的
测试 import() 动态加载

## 场景
假如需要提供统一的 Http 类，给 PC 端和移动端使用，其内容的请求处理逻辑不一样，所以依赖也不同。要求两个端在打包的时候，不能将对方的依赖打进去。所以实验下用动态加载功能。

Http 类预计的使用方式如下：
```javascript
import Http from './Http.js';

const http = new Http(options);
http.get('https://github.com/104gogo').then(({ data }) => console.log(data));
```

## 方案
从 import 基础的使用方式，到最后测试成功，经历了下面3种方式。

##### 方案1
dynamic import(动态导入) 需要使用 import()，如下：

```javascript
export default class Http {
  constructor({ type }) {
    const requestPromise = type === 'pc' ?
      import(/* webpackChunkName: "pcRequest" */ './pcRequest.js') :
      import(/* webpackChunkName: "mobileRequest" */ './mobileRequest.js');

      requestPromise.then(request => this.request = request);
  }

  get(url) {
    return this.request(url);
  }
}
```
![import1](https://github.com/104gogo/sven/raw/master/packages/import/images/import1.png)
缺陷：
- 打包结果不太满意，因为 type 是个变量，webpack 不知道该选谁，干脆各打了一个 chunk（上图中的 mobileRequest.js 和 pcRequest.js）。
- 而且 import() 的返回值是一个 promise，这样就导致获取到的模块数据是异步的，同步运行代码就会报错（get 方法运行的时候还没有 request 方法）。并不能完全满足需求，比如：立即发起请求。

##### 方案2
针对上面两个问题，改进如下：

```javascript
export default class Http {
  constructor({ type }) {
    this.request = process.env.TYPE === 'pc' ?
      require('./pcRequest.js').default :
      require('./mobileRequest.js').default;
  }

  get(url) {
    return this.request(url);
  }
}
```
![import2](https://github.com/104gogo/sven/raw/master/packages/import/images/import2.png)
- 使用全局变量的方式，提前告诉 webpack 该选择哪个包。从上图可以看出 main.js 中没有 pcRequest.js 的依赖。
- 使用 commonjs 的模块规范，使用 require 方法，同步获取依赖包，只有加载完成，才能执行后面的操作。

缺陷：es6 和 commonjs 两种模块化混合使用会出现意想不到的问题，即：不要混合使用 import 和 require。

##### 方案3
可以发现 get 方法的返回值是 promise，import() 方法的返回值也是 promise，是不是将 get 方法包一次就好了？

```javascript
export default class Http {
  constructor(options) {
    this.requestPromise = process.env.TYPE === 'pc' ?
      import(/* webpackChunkName: "pcRequest" */ './pcRequest.js') :
      import(/* webpackChunkName: "mobileRequest" */ './mobileRequest.js');
  }

  get(url) {
    return this.requestPromise.then(({ default: request }) => {
      return request(url);
    });
  }
}
```
![import3](https://github.com/104gogo/sven/raw/master/packages/import/images/import3.png)

这样就解决了上面的问题。其实 get 方法是用来发起请求的，获取结果肯定是个异步的过程，所以它和 import() 可以很好的通过 promise 的方式相结合。

缺陷：需要添加一个全局变量

## import() 的原理


## 待验证
[tree shaking](https://webpack.docschina.org/guides/tree-shaking)





