# order

### 目的
测试模块的执行顺序

### 问题
用 es6 模块化写的代码，编译为 commonjs 模块化之后，执行顺序是？
![result](https://github.com/104gogo/sven/raw/master/packages/order/result.png)

从上图可以看出，被依赖的模块会先执行，import 不管放在那里，都会先被执行，下面分析下打包出来的代码 main.js，看看为什么会这样。

截取入口文件`./src/index.js`的打包代码，发现其中的 import 的代码，被提前到了最上面。
```javascript
"./src/index.js":
	(function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		__webpack_require__.r(__webpack_exports__); /* harmony import */
		var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./add.js */ "./src/add.js"); /* harmony import */
		var _square_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./square.js */ "./src/square.js");

		console.log(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__["add"])(1, 1));

		console.log(Object(_square_js__WEBPACK_IMPORTED_MODULE_1__["square"])(3));
	}),
```
这也是'加载了 multiply 模块'比'加载了 square 模块'先输出的原因。
```javascript
{
  "./src/square.js":
	(function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		__webpack_require__.r(__webpack_exports__); /* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "square", function() {
			return square;
		}); /* harmony import */
		var _multiply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./multiply.js */ "./src/multiply.js");
		console.log('加载了 square 模块');

		const square = function(num) {　
			return Object(_multiply_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(num, num);
		};
	})
}
```

### 结论
- import 最好写在模块的最上面。即使写在其他地方，也会被 webpack 给提上来。
- 被 import 的模块会先被执行

