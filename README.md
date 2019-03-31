# sven
测试 webpack & rollup & babel 各种使用情况

## 启动
在 sven 根目录运行如下命令：
```javascript
npm i && lerna bootstrap
```

## 运行
```javascript
npm run build
```

大部分的 packages 都可以使用上面的命令运行，除了比较复杂的几个 packages 需要在自己内部运行，如：
- sven-lib 

打包之后，会在对应 package 中生成 es、lib 或者 dist 这样的文件夹，具体结果可以执行查看，也可以修改配置或者添加测试代码。
