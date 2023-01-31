let Person = {
    firstName: "John",
    lastName: "Kenedy",
    age: 50,
    weight: 60
}

//Accessing Object Properties
console.log(Person["firstName"])//1st way
console.log(Person.firstName)// 2nd way

// Add new property to the existing object
Person["height"] = 5.5;//1st way
Person.color = "dark"//2nd way

console.log(Person["height"])//should print in a way it is created
console.log(Person.color)

//update existing property
Person.weight = 50
console.log(Person.weight)

//Remove the property
delete Person["height"]
console.log(Person["height"])

//read the properties
console.log("Reading Object")

for (let x in Person) {
    // console.log(x) //prints only property name
    // console.log(Person[x]) //prints only property value
    // console.log(Person["x"]) //prints only property value
    console.log(x + ": " + Person[x])
}

console.log("Example 2 - Employee")
let Employee =
{
    name: "Scott",
    id: 1,
    sal: 100,
    bonus: function () {
        return ((this.sal * 10) / 100);
    }
}

console.log(Employee.name)