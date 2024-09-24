const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.push(11);
arr.unshift(0);

const obj = [
  {
    name: "Pedro",
    age: 25,
    address: {
      city: "Peru",
      zip: 110111,
    },
  },
  {
    name: "Juan",
    age: 30,
    address: {
      city: "Mexico",
      zip: 110111,
    },
  },
  {
    name: "Maria",
    age: 35,
    address: {
      city: "Colombia",
      zip: 110111,
    },
  },
];

// const obj4 = obj.map((item, index) => {
//   return { name: "Pedro" };
// })
const obj3 = obj.map((item) => item.name);
const obj2 = obj.filter((item) => item.name !== "Juan");

console.log(obj2);
console.log(obj3);
