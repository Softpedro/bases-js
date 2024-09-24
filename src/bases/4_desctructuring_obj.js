const obj = {
  age: 25,
  address: {
    city: "Peru",
    zip: 110111,
  },
};

const { xyz = "Pedro", age } = obj;

// console.log({
//   name2: obj.xyz ? obj.xyz : "Pedro",
//   age2: obj.age,
// });

console.log({
  name2: xyz,
  age,
});
