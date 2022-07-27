// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Tomek",
    age: 40,
    hobbies: ["sports", "cooking"]
};
var favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
