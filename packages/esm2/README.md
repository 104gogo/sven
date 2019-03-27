# 生成 esm 模块
目前 rollup 在 library 打包这块，已经越来越流行，如：react、redux、umi 都在使用了。像 umi 他们在 webpack 这块已经有很深厚的积累和开源的打包项目了，为什么还要使用 rollup ？我觉得是因为 esm 规范在未来会成为流行趋势。

### 目的
测试使用 rollup 生成 esm 模块

### 场景
将此包作为一个第三方的依赖，分别打出 cjs 和 esm 规范的模块，让在后面的包中引入。

### rollup vs webpack
rollup 比较适合 library 打包，可以生成 esm 规范的模块，而且能很方便的一次输出多种格式。
webpack 默认生成 cjs 的模块，不支持 esm。

### 参考
[使用 Rollup 构建你的 Library](https://zhuanlan.zhihu.com/p/34218678)
备注：rollup 已经支持代码分割和动态加载了。

[redux rollup.config.js](https://github.com/reduxjs/redux/blob/master/rollup.config.js)

