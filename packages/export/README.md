# export

### 目的
测试模块 export 变量被修改的情况

### export vs export default

##### export
export 使用了`__webpack_require__.d`方法，将要导出的变量和方法，通过`Object.defineProperty`的方式，添加在了 exports 上面。
```javascript
__webpack_require__.d(__webpack_exports__, "count2", function() { return count2; });
__webpack_require__.d(__webpack_exports__, "add2", function() { return add2; });

let count2 = 3;
function add2() {
  count2 += 1;
}

__webpack_require__.d = function(exports, name, getter) {
  if(!__webpack_require__.o(exports, name)) {
    Object.defineProperty(exports, name, { enumerable: true, get: getter });
  }
};
```
关键点在 getter，它将模块内部的变量闭包住了，所以外部改变的其实是内部的变量，而不像 export default 是两个不同的变量。
##### export default

export default 会将导出的方法或者变量放在 exports 的 default 上，如下：
```javascript
let count1 = 0;
function add1() {
  count1 += 1;
}

const obj = { count2: 10 };
function add2() {
  obj.count2 += 1;
}

__webpack_exports__["default"] = ({
  count1,
  add1,
  obj,
  add2,
});
```
相当于将值拷贝到了一个新的对象上面，然后被导出，如下：
```javascript
const default = {};
default.count1 = count1;
default.add1 = add1;
default.obj = obj;
default.add2 = add2;

__webpack_exports__["default"] = (default);
```
当外部模块运行下面代码的时候，修改的是模块中的变量 count1，和 default.count1 没有任何关系了。
```javascript
__webpack_exports__["default"].add1();
console.log(__webpack_exports__["default"].count1); // count1 没变
```
拷贝的值是引用类型的话，它们的引用地址是相同的，所以可以改变内部的属性。
```javascript
__webpack_exports__["default"].add2();
console.log(__webpack_exports__["default"].obj.count2); // count2 变了
```

### 结论
- export 通过闭包的方式，让外部模块改变内部的变量。
- export default 是值拷贝，外部default和模块内部其实两个同名变量，然后它们的有相同值。但如果它们的值是引用类型，那么就可以修改成功。

