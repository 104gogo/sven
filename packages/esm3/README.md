# 实现一个基于 rollup 的打包工具

### 目的
我帮的公共库还不支持 esm 模块规范，所以决定改用 rollup 对 library 打包。

### 场景
适用于：
- 组件库打包
- 工具库打包

支持的模块规范：
- cjs
- esm

### 使用
先安装依赖包，然后 link 命令
```javascript
npm i
npm link
```
再到 esm2 路径下，运行`sven-lib`  

然后在 dist 目录中可以看到生成出了 esm 和 cjs 模块的文件

### 参考
[umi-library](https://github.com/umijs/umi/blob/master/packages/umi-library/README.md)

