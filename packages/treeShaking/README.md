# treeShaking

### 目的
测试 esm 模块使用 treeShaking 的效果

### 参考
[webpack tree shaking](https://webpack.docschina.org/guides/tree-shaking/)
我们已经知道，想要使用 tree shaking 必须注意以下……

- 使用 ES2015 模块语法（即 import 和 export）。
- 确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset 中 @babel/preset-env 的默认行为 - 更多详细信息请查看 文档）。
- 在项目 package.json 文件中，添加一个 "sideEffects" 属性。
- 通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。

[Tree-Shaking性能优化实践 - 原理篇](https://zhuanlan.zhihu.com/p/32554436)

[你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)