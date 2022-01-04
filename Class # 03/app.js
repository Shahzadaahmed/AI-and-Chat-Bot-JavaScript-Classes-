/***** Class # 03 *****/

// Note: How to overwrite variables...!

/*
let num1 = 5;
let num2 = num1;
num2 = 1;

console.log('Num 1: ', num1);
console.log('Num 2: ', num2);
*/


// Note: How does an array takes memory in the system...!

/*
let arr1 = [2, 4, 6, 8, 10];
// let arr2 = arr1; // Note: We are passing refrence or arr1 to arr2...!
// let arr2 = [].concat(arr1); // Note: This variable has its own memory in the system...!

// Note: Updated way to write the code of line 18 using ES6 method...!
let arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

arr1.push(12);

console.log(arr1);
console.log(arr2);
*/



// Note: How does an object takes memory in the system...!

/*
let objA = {
    name: "Shahzada Ahmed",
    title: "Software Engineer",
    age: 25,
    country: 'Pakistan',
    married: false
}

// let objB = objA; // Note: I am passing a refrence of objA object to objB...!

// let objB = Object.assign({}, objA); // Note: This variable has its own memory in the system...!

// Note: Updated way to write the code of line 48 using ES6 method...!
let objB = { ...objA };

console.log(objA);
console.log(objB);

objA.name = "Shahzada Muhammad Ahmed";

console.log(objA);
console.log(objB);
*/




// NOTE: Comparison operators and logical operators...!

// Note: If else example...!
/*
let marks = 60;

if (marks >= 80 && marks < 100) {
    console.log('A+1 Grade!');
}

else if (marks >= 70 && marks <= 79) {
    console.log('A Grade!');
}

else if (marks >= 60 && marks <= 69) {
    console.log('B Grade!');
}
*/



// Note: Ternary operator example...!

/*
let msg1 = "Too young";
let msg2 = "Old enough";

let userInput = Number(prompt("Enter Your Age!"));
let result = (userInput >= 18) ? (msg2) : (msg1);
console.log(result);
*/