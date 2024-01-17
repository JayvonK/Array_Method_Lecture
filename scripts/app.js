//forEach method - this method executes a function for each provided element in the array.

let array = [1, 2, 3, 4, 5];

// array.forEach(element => console.log(element));

//filter method. This method creates a new array with each element that passes the test function

const filteredArray = array.filter(element => {
   return element % 2 == 0;
});

// console.log(filteredArray);

//map method - Calls a defined callback function on each element of an array, and returns an array that contains the results.

const mapArray = array.map(element => element * 2);

// console.log(mapArray);

//findIndex method -  Returns the index of the first element that meets the condition of the callback

const index = array.findIndex(element => element == 5);

// console.log(index);

//every method = this method tests every element in our array and if all pass our funcdtion condition it returns true

const everyArr = array.every(element => element > 2);

console.log(everyArr);

//Chaining Example 1

const newArr = array.filter(element => element % 2 === 0).map(element => element * 2);

//console.log(newArr);

//Chaining Example 2

//sort array by last name
//I need to iterate through nameArray. Need to sort, use reverse method, use split method, use join method

let nameArray = ["Isaiah Ferguson", "Kenneth Fujimura", "Maddie Gowan", "Jessie Lamzon", "Jacob Dekok"];

const mapNameArray = nameArray.map(name => name.split(" ").reverse().join(" ")).sort();

// (...) is the spread operator

const sortedArray = [...mapNameArray].sort();


//console.log(sortedArray);

//Spread Operator examples

//ex 1 Copy

const copyArray = [...nameArray];

console.log(copyArray);

//ex 3 Concatenate

const concatenate = [...array, ...nameArray];

console.log(concatenate);

// 2 Adding elements 

const addedArray = [...array, 6, 7, 8, 9];

console.log(addedArray);
