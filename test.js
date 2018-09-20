// let a = [1,2,3]
// a.x = "foo";
// let b = "";
// for (i of a) {
//   b += i;
// }
// console.log(b)

//
// let x ={
//   m: 42,
//   f: function() {
//     let a=[1,2,3];
//     let str = "";
//     a.forEach(function() {
//       str += this.m;
//     })
//     return str;
//   },
// };
// console.log(x.f())

let x = {
  m: 42,
  f: function() {
    let a = [1, 2, 3];
    let str = "";
    a.forEach(e => {
      str += this.m;
    });
    return str;
  }
};
console.log(x.f());

