let count1 = 0;
function add1() {
  count1 += 1;
}

export let count2 = 3;
export function add2() {
  count2 += 1;
}

export default {
  count1,
  add1
};
