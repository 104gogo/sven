# 生成 esm 模块
目前 rollup 在 library 打包这块，已经越来越流行，如：react、redux、umi 都在使用了。像 umi 他们在 webpack 这块已经有很深厚的积累和开源的打包项目了，为什么还要使用 rollup ？我觉得是因为 esm 规范在未来会成为流行趋势。

## 目的
测试使用 rollup 生成 esm 模块

## 场景
将此包作为一个第三方的依赖，分别打出 cjs 和 esm 规范的模块，让在后面的包中引入。

## 结论
rollup 非常适合 library 打包，可以直接生成 esm 规范的模块，而且能很方便的一次输出多种格式。  

`webpack 天生不支持 esm 规范`。webpack2 的时候默认不会编译`import`和`export defualt`，是通过 babel 的 `@babel/plugin-transform-modules-commonjs` 插件实现的，现在 webpack 默认就会模块中的 import 和 export default 进行编译，即使是不想编译的模块（exclude 的模块），为了避免冲突，一般会在使用`@babel/preset-env`的时候禁用模块转换的插件（如：@babel/plugin-transform-modules-commonjs），通过设置`modules: false`。

## 预告
除了 rollup 还有什么办法可以让我们生成 esm 模块呢？  

就是上面提到的 babel，下面我们在 esm3 中试一试。

## 参考
[使用 Rollup 构建你的 Library](https://zhuanlan.zhihu.com/p/34218678)
备注：rollup 已经支持代码分割和动态加载了。

[redux rollup.config.js](https://github.com/reduxjs/redux/blob/master/rollup.config.js)
