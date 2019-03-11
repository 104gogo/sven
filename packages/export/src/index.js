import counter, { count2, add2 } from './counter.js';

// export default，值不会变
console.log(counter.count1); // 0
counter.add1();
console.log(counter.count1); // 0

// export 出来可以被外部修改
console.log(count2); // 3
add2();
console.log(count2); // 4