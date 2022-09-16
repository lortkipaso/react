// const numbers = [-1, -4, -6, 20, 9, 7];
// const last = numbers.filter(myfunc);
// function myfunc(num) {
//   if (num >= 0) {
//     return num;
//   }
// }
// console.log(last);
// const lastone = last.reduce(function1);
// function function1(thing, value) {
//   return thing + value;
// }
// console.log(lastone);
let few_numbers = [1, 3, 5, 6];

class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "car isnt moving";
  }
  check_motion() {
    if (this.speed > 0) {
      this.motion = "car is moving";
      return this.motion;
    } else {
      return this.motion;
    }
  }
  accelerate() {
    for (let i = 0; i < 100; i++) {
      this.speed = +i;
      newone.emergency_brake();
    }
    return this.speed;
  }
  emergency_brake() {
    if (this.speed > 100) {
      this.speed = 0;
      return this.speed;
    }
  }
  status() {
    console.log(
      `${this.brand}` +
        " " +
        `${this.model}` +
        " " +
        "speed:" +
        newone.accelerate() +
        " " +
        newone.check_motion()
    );
  }
}
const newone = new car("Mersedes", "Maybach");
console.log(newone.status());
