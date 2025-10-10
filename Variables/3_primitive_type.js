// 11. string 
let fname = 'Bronco';
let lname = "CPP";
let name = `${fname} ${lname}`;
console.log(typeof fname);


// 2. number 
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi);

// 3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);

// 4. undefined
let index;
console.log(typeof index);

// 5. null
let idx = null;
console.log(typeof idx); // object (bug in js)

// 6. symbol
const secretKey = Symbol();

// ------ Object -------------
let cppCourse = {
    "name": 'CS 2250',
    'hours': 3,
    semester: 2025,
    'school name': "Cal Poly Pomona",
    [userCustomizedChoice]: "User name",
}
console.log(cppCourse.name);
console.log(cppCourse['hours']);
concole.log(cppCourse['school name']);
console.log(cppCourse[userCustomizedChoice]);

// modify the key's value
cppCourse.name = 'Web Development';
cppCourse["school name"] = "CPP";
console.log(cppCourse);

// adding new key-value pair 
cppCpurse['location'] = "Pomona, CA";
cppCourse['Location'] = "CA, USA"; // different key
console.log(cppCourse);

// delete key-value pair 
delete cppCourse['Locaion'];
console.log(cppCourse);


