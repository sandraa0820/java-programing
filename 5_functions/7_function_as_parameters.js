/** 
function greet(name, func) {
    console.log(`hello, ${name}`);
    callback(); // a callback function is a function that is passed to another func as a parameter
}

function bye(){
    console.log("Bye bye!");
}
*/

// greet("CS 2250", bye());    

// asychronous 
// msetTimeout(()  => {
 //    console.log("This message is shown after 3 seconds");
// }, 3000);
function boilWater(callback) {
    console.log("Boiling water...");

    setTimeout(() => {
        console.log("Water boiled.");
        callback();
    }, 4000);

}

function cookPasta() {
    console.log("Cooking pasta...");

}

boilWater(cookPasta);
console.log("Meanwhile, i am chopping some veggies..");
