# 使用 rollup 生成 esm 模块
目前 rollup 在 library 打包这块，已经越来越流行，如：react、redux、umi 都在使用了。像 umi 他们在 webpack 这块已经有很深厚的积累和开源的打包项目了，为什么还要使用 rollup ？我觉得是因为 esm 规范在未来会成为流行趋势。

## 目的
测试使用 rollup 生成 esm 模块

## 场景
将以下代码分别打出 cjs 和 esm 规范的文件。

```javascript
// ./src/index.js
import plusOne from './plusOne.js';
import timesTwo from './timesTwo.js';

export {
  plusOne,
  timesTwo,
};
```

```javascript
// ./src/plusOne.js
export default x => x + 1;
```

```javascript
// ./src/timesTwo.js
export default x => x * 2;
```

rollup 的配置很好理解，相比 webpack 少了很多概念
```javascript
./rollup.config.js
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'es/index.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
    },
  ]
};
```

## 效果
生成的 index.esm.js
```javascript
var plusOne = x => x + 1;

var timesTwo = x => x * 2;

export { plusOne, timesTwo };
```

生成的 index.cjs.js
```javascript
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var plusOne = x => x + 1;

var timesTwo = x => x * 2;

exports.plusOne = plusOne;
exports.timesTwo = timesTwo;
```

## 结论
rollup 非常适合 library 打包，可以直接生成 esm 规范的模块，而且能很方便的一次输出多种格式。  

`webpack 天生不支持 esm 规范`。webpack2 的时候默认不会编译`import`和`export defualt`，为了让代码能正常运行，还是通过 babel 的 `@babel/plugin-transform-modules-commonjs` 插件将 esm 规范变成的 cjs 规范。现在 webpack 默认就会将 import 和 export default 进行编译，即使是被过滤的模块（exclude 的模块）。如果两种方式都使用了，可能会出现问题，为了避免这样的冲突，一般会在使用`@babel/preset-env`的时候禁用模块转换的插件（如：@babel/plugin-transform-modules-commonjs），通过设置`modules: false`。

## 预告
除了 rollup 还有什么办法可以让我们生成 esm 模块呢？  

那就是通过 babel 直接将代码转移，而不是像 webpack 和 rollup 一样打包。下面我们在[esm3](https://github.com/104gogo/sven/tree/master/packages/esm3)中试试。

## 参考
[使用 Rollup 构建你的 Library](https://zhuanlan.zhihu.com/p/34218678)  
备注：rollup 已经支持代码分割和动态加载了。

[redux rollup.config.js](https://github.com/reduxjs/redux/blob/master/rollup.config.js)
