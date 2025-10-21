const students = [`Susan`, `Emily`, `Jack`];

// for(let student of students) {
//    console.log("This is my fav student - ")  + student);
// }

students.forEach(student => {
    console.log("This is my fav student - " + student);
});

// map() iterators

const numbers = [2, 5, 6, 8];
const newNumbers = numbers.map(number => number * -1);
console.log(newNumbers); // [-2, -5, -6, -8]




// filter() iterators
const stuff = [`laptop`, "calculator", 21, 3.14, -2, "javascript"];
const onlyNumbers = stuff.filter(item => {
    return typeof item === 'number';
});
console.log(onlyNumbers); // [21, 3.14, -2]