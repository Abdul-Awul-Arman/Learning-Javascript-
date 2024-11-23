// const array = ["hello", 1, 3, 4, 5, 'bangla', 5, 'world', 7, 8, 9];
// let result = array.some(function (element,index,fullArray){
//     return element === 9;
// })

// console.log(result);

const students = [
    { name: "Alice", age: 20, roll: 101 },
    { name: "Bob", age: 22, roll: 102 },
    { name: "Charlie", age: 21, roll: 103 },
    { name: "Diana", age: 23, roll: 104 },
    { name: "Ethan", age: 19, roll: 105 }
];

// let result = students.some(function (student) {
//     return student.age === 20;
// });

// console.log(result);

let result = students.every(function (student) {
    return student.age;
});

console.log(result);
