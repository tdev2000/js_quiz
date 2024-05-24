let people = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

let newArray = [];
for (let index = 0; index < people.length; index++) {
  newArray.push(people[index].name);
}

console.log("This is the new array: " + newArray);
