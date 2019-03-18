# 生成 esm 模块

### 目的
测试使用 rollup 生成 esm 模块

### 场景
将此包作为一个第三方的依赖，分别打出 cjs 和 esm 规范的模块，让在后面的包中引入。

### rollup vs webpack
rollup 比较适合 library 打包，可以生成 esm 规范的模块，而且能很方便的一次输出多种格式。
webpack 默认生成 cjs 的模块，不支持 esm。

### 参考
[使用 Rollup 构建你的 Library](https://zhuanlan.zhihu.com/p/34218678)

rollup 已经支持代码分割和动态加载了。

