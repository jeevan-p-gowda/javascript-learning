let cars = ["Maruthi", "KIA", "Morris Garrage"];
let myArray = new Array("Kawasaki", 100, "A", true)

console.log(cars);
console.log(myArray);
console.log(cars[2]);

//change the value
cars[0] = "BMW"
console.log(cars)

//we can have objects in array
let Person1 = {
    name: "Mathew",
    age: 30
};
let Person2 = {
    name: "David",
    age: 18
};
let myArray2 = [Person1, Person2]

console.log(myArray2);
console.log(myArray2.length) //2

//looping elements from array
for (let x = 0; x < myArray.length; x++) {
    console.log(myArray[x])
}

//for/of loop
for (ele of myArray) {
    console.log(ele);
}

//Recognize an Array - typeOf
console.log(typeof myArray);

//verify array or not
console.log(Array.isArray(myArray));

// Array methods
//print array and seperate as wish
console.log(myArray.toString())
console.log(myArray.join("*"))

//pop - remove the last element of array
console.log(myArray.pop())
console.log(myArray)

//push - adds element at the end and return length of array
console.log(myArray.push("Kiwi"))
console.log(myArray)

//shift - removes and shifts the remaining to lower index
console.log(myArray.shift())
console.log(myArray)

//unshift - adds at the begining of array 
console.log(myArray.unshift("Testing"))
console.log(myArray)

//Deleting elements from array
delete myArray[1] //only deletes value but emptyspace will be there
console.log(myArray)

//concat - joining/merging 2 or more arrays
console.log(cars.concat(myArray))

//slice - slices the array from the index mentioned
console.log(myArray.slice(1))

//sort - sorts the elements in array
console.log(myArray.sort())

//reverse - reverses the elements
myArray.reverse();
console.log(myArray)