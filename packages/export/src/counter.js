let count1 = 0;
function add1() {
  count1 += 1;
}

const obj = { count2: 10 };
function add2() {
  obj.count2 += 1;
}

export default {
  count1,
  add1,
  obj,
  add2,
};

export let count3 = 3;
export function add3() {
  count3 += 1;
}

