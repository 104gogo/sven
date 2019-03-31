# 初识 esm

关键词：esm、module、mainFields

## 缘起
最近业务组的同事遇到了一个 js 兼容性的问题，于是跑来问我，为什么使用 swiper 打包出来的 bundle.js 会有`diffY ** 2`([exponentiation-operator](https://babeljs.io/docs/en/next/babel-plugin-transform-exponentiation-operator.html))这样的语法。

我的第一反应是三方库自己没有完全编译，于是去翻它的 dist 文件夹，发现他们提供的文件是将上面的语法编译成了`Math.pow( diffY, 2 )`，那没有编译的代码是从哪里来的？

再仔细看了下 [dist](https://github.com/nolimits4web/swiper/tree/master/dist/js) 目录，发现里面有后缀名为 esm 的文件。


在 [package.json](https://github.com/nolimits4web/swiper/blob/master/package.json) 里面看到如下配置
```javascript
"main": "dist/js/swiper.js",
"module": "dist/js/swiper.esm.bundle.js",
```
main 字段我们都很熟悉，它定义了包的入口文件，一般是 CommonJs 格式的。

那 `module` 呢？经过查阅相关资料，它的定义如下：  
> module 属性应指向一个使用 ES2015 模块语法（而不是其他浏览器或 Node.js 尚不支持的模块语法）的脚本 - [webpack 创建 library](https://webpack.docschina.org/guides/author-libraries/#%E6%9C%80%E7%BB%88%E6%AD%A5%E9%AA%A4)

webpack 在打包的时候默认使用的是 pkg.module 字段的入口文件，并且我们屏蔽了对 node_modules 的编译，所以打包出来的 bundle.js 会有不兼容低端浏览器的语法。

感觉巨坑。。。

## 解决方案
这里就有两个解决办法：

##### 方案1
去掉 module 这个默认项，使用 main 指向的文件
```javascript
resolve: {
  mainFields: ['main'], // 覆盖默认值
},
```

##### 方案2
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

## 总结
现在是9102年，浏览器兼容性的处理还是比较重要的一块，打包 esm 文件必须要经过编译，我认为至少要将新语法新特性降到 ES5，不能埋个坑给使用者，要不然就应该在文档里面写清楚。  

另外，有很多人给 swiper.js 提出了这个建议，但是作者还是挺固执的，可能他考虑的更长远，或为消灭 IE 浏览器贡献一份力量。

