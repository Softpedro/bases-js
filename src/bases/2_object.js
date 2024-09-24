const person = {
  name: "Pedro",
  age: 25,
  address: {
    city: "Peru",
    zip: 110111,
  },
};

// const person2 = person;
// const person2 = { ...person };
const person2 = structuredClone(person);
person2.address.city = "Mexico";
person2.name = "Juan";

console.log(person);
console.log(person2);
