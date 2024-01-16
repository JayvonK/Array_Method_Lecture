//forEach method - this method executes a function for each provided element in the array.

let array = [1, 2, 3, 4, 5];

// array.forEach(element => console.log(element));

//filter method. This method creates a new array wit heach element that passes the test function

const filteredArray = array.filter(element => {
   return element % 2 == 0;
});

// console.log(filteredArray);

//map method - Calls a defined callback function on each element of an array, and returns an array that contains the results.

const mapArray = array.map(element => element * 2);

console.log(mapArray);