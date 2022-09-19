function myfunction(...hi) {
  console.log(hi);
}
myfunction(1, 2, 3);
const x = ["hi", "hi-1", "hi-2"];
const s = ["hi-3", "hi-4", "hi-5"];
const last = [...x, ...s];
console.log(last);
const obj = {
  one: 12,
  two: 14,
};
const { one, two } = obj;
console.log(one, two);
for (let i = 0; i < 5; i++) {
  console.log(i);
}
const object1 = {
  fname: "temo",
  lname: "ok",
};
let texting = "";
for (let x in object1) {
  console.log(object1[x]);
  texting += object1[x];
}
