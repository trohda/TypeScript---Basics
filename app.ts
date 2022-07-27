// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Tomek",
  age: 40,
  hobbies: ["sports", "cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
