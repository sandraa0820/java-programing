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
