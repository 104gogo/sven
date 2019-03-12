/**
 * export 后面只能是一个表达式，不能是对象或者变量名
 * export default 后面如果是表达式，那么它和 export 处理方式一致，使用 __webpack_require__.d 方法导出
 * export default 后面如果是一个对象或变量名，那么它使用 __webpack_exports__["default"] 的方式导出
 */
export const a = 1;
const b = 2;
// export b; // Module parse failed: Unexpected token (3:7)

// export default class Http {}

// export default { b: 1 };

// export default function foo() {}

function bar() {}
export default bar;