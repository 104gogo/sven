# tree shaking

## 目的
测试 webpack 和 rollup 对 esm 规范的 tree shaking 功能。

##### 运行
在 sven 的根目录执行如下命令，然后选择 treeShaking，就会对当前项目分别使用 webpack 和 rollup 打包。
```javascript
npm run bootstrap
npm run build
```

## tree shaking 要怎么开启呢？

##### Webpack
想要使用 webpack 打包第三方的 esm 并且启用 tree shaking 功能需要注意下面这些地方。

第三方包
- 提供编译之后的 esm 规范（即 import 和 export）的打包文件。生成方法见 [使用 rollup 生成 esm 模块](https://github.com/104gogo/sven/tree/master/packages/esm2) 和 [使用 babel 生成 esm 模块](https://github.com/104gogo/sven/tree/master/packages/esm3)。
- 在 package.json 文件中，添加 "module: es/index.js"。
- 在 package.json 文件中，添加 "sideEffects": false。

业务项目
- webpack.config.js 必须开启了代码压缩，才会看到 tree shaking 移除多余代码的效果。

##### Rollup
只要依赖包是 esm 规范的，就会默认开启 tree shaking 功能。

## 继续改造 Http 类

##### tree shaking
在前面的 [import](https://github.com/104gogo/sven/tree/master/packages/import) 中，我们使用 import() 功能，通过类型判断，动态引入 pcRequest 或 mobileRequest，还有它们的依赖文件，从而做到减小包体积，又满足两端同样使用体验的需求。这样做的缺点也很明显，由于 import() 的返回值是 promise，导致使用的时候也要按照 promise 规范使用，很多时候这并不是期望的使用方式。

那么我们可能需要改变下思路，在很多第三方库打包的时候，都会提供 esm 模块的打包文件，这就为使用 tree shaking 功能移除多余的代码提供方便。

tree shaking 原理如下：
> 出自：[你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)
> - ES6 的模块引入是静态分析的，故而可以在编译时正确判断到底加载了什么代码
> - 分析程序流，判断哪些变量未被使用、引用，进而删除此代码

##### 验证功能
在 **src1目录** 中，使用《[你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)》文章中最开始的代码，来验证 tree shaking 功能，打包结果如下：

| webpack | rollup |
|     :---      |     :---      |
| ![src1Webpack](https://github.com/104gogo/sven/raw/master/packages/treeShaking/images/src1-webpack.png)     | ![src1Rollup](https://github.com/104gogo/sven/raw/master/packages/treeShaking/images/src1-rollup.png)    |

可以看到，在两种打包工具处理之后，Person Class 都被去掉了。

## 参考
[webpack tree shaking](https://webpack.docschina.org/guides/tree-shaking/)
[Tree-Shaking性能优化实践 - 原理篇](https://zhuanlan.zhihu.com/p/32554436)
[你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)
