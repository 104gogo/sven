# order

### 目的
测试模块的执行顺序

### 问题
用 es6 模块化写的代码，编译为 commonjs 模块化之后，执行顺序是？
![result](https://github.com/104gogo/sven/raw/master/packages/order/result.png)

从上图可以看出，被依赖的模块会先执行，import 不管放在那里，都会先被执行，下面分析下打包出来的代码，看看为什么会这。

