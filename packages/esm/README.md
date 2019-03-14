# esm

### 目的
测试 es module

### 问题
基于 webpack 的打包工具只编译了项目代码，但是依赖的第三方库 swiper，没有被编译（如：`diffY ** 2`）然后在低端浏览器运行的时候报错。

### 原因
默认情况，webpack 的 mainFields 配置如下：

```javascript
resolve: {
  mainFields: ['module', 'main'],
},
```
它会优先使用 module 下面的包，即：`./node_modules/swiper/dist/js/swiper.esm.bundle.js`
> module 属性应指向一个使用 ES2015 模块语法（而不是其他浏览器或 Node.js 尚不支持的模块语法）的脚本 - [webpack 创建 library](https://webpack.docschina.org/guides/author-libraries/#%E6%9C%80%E7%BB%88%E6%AD%A5%E9%AA%A4)

然后 webpack 在打包项目的时候，并没有编译依赖的文件（即：node_modules 下的文件）。这就是在低版本浏览器中报错的原因。

### 解决方案
这里就有两个解决办法：

去掉 module 这个默认项，使用 main 指向的文件
```javascript
resolve: {
  mainFields: ['main'], 
},
```

include 需要编译的库
```javascript
{
  test: /\.js$/,
  include: [
    path.join(cwd, 'src'),
    path.join(cwd, 'node_modules/swiper')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```


