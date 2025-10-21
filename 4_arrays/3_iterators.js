const numbers = [1, 1, 2, 2];
const total = numbers.reduce((acc, curVal) => {
    console.log(`acc = ${acc}, curVal = ${curVal}`);
    
    return acc + curVal;
}, 0);

console.log(total); // 6

// let accumulator = 0;
// for(let currentValue of numbers) {
//     accuulator += currentValue;
// }
// console.log(accumulator); // 6

const array = [[100, 2], [3, 4]];

const flatArray = array.reduce((acc, curr) => {
    for (let value of curr) {
        acc.push(value);
        
    }
    return acc;
}, []);

console.log(flatArray); // [100, 2, 3, 4]

const students = [
    {name: 'Alex', age: 21},
    {name: 'Sam', age: 18},
    {name: 'Siri', age: 21}
]
const groupStudentsByAge = students.reduce( (acc, student) => {
    if(acc[student.age]) {
        acc[student.age].push(student);
    } else {
        acc[student.age] = [student];
    }
    return acc;
}, {});

console.log(groupStudentsByAge);
// {
//     18: [ { name: 'Sam', age: 18 } ],
//     21: [ { name: 'Alex', age: 21 }, { name: 'Siri', age: 21 } ]
// }
