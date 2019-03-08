# import

[webpack 代码分离](https://webpack.docschina.org/guides/code-splitting/)

### 目的
测试 import 功能

### 场景
这个场景来自真实的需求。我们需要提供统一的 Http 类，给 PC 端和移动端使用，要求各个端在打包的时候，不能将不需要的依赖打包进去。所以实验下用动态加载功能。

### 效果
dynamic import(动态导入) 需要使用 import()，如下：

```javascript
export default class Http {
  constructor(type) {
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
![import](https://github.com/104gogo/sven/raw/master/packages/import/images/import.png)
缺陷：
- 打包结果不太满意，因为 type 是个变量，webpack 不知道该选谁，干脆各打了一个 chunk
- 而且 import() 的返回值是一个 promise，这样就导致获取到的模块数据是异步的，同步运行代码就会报错，并不能完全满足需求，比如：立即发起请求

针对上面两个问题，改进如下：
```javascript
export default class Http {
  constructor(type) {
    this.request = false ?
      require('./pcRequest.js').default :
      require('./mobileRequest.js').default;
  }

  get(url) {
    return this.request(url);
  }
}
```
![require](https://github.com/104gogo/sven/raw/master/packages/import/images/require.png)
- 使用环境变量的方式，提前告诉 webpack 该选择哪个包
- 使用 commonjs 的规范，同步获取依赖包，只有加载完成，才能执行后面的操作

缺陷：es6 和 commonjs 两种模块化混合使用会出现意想不到的问题

有木有 es6 模块化，像上面同步运行的方法呢？







