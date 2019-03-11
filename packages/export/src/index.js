import counter, { count3, add3 } from './counter.js';

// export default 一个值
console.log(counter.count1); // 0
counter.add1();
console.log(counter.count1); // 0

// export default 一个对象
console.log(counter.obj.count2); // 10
counter.add2();
console.log(counter.obj.count2); // 11


// export 出来可以被外部修改
console.log(count3); // 3
add3();
console.log(count3); // 4
