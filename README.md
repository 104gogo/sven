# sven
测试 webpack & rollup & babel 各种使用情况，可以直接在 packages 的 es、lib 或者 dist 文件夹中查看打包结果。

如果想要自己测试，修改配置或者添加测试代码，可以按照下面的步骤进行。

## 在 sven 根目录进行安装和打包

##### 安装
```javascript
npm i && lerna bootstrap
```
##### 打包
```javascript
npm run build
```

大部分的 packages 都可以使用上面的命令运行，除了比较复杂的几个 packages 需要在自己内部运行，如：
- sven-lib 它是一个基于 rollup 的命令行工具 

