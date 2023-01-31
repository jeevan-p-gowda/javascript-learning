//Example 1
console.log("Example 1");
let person_age = 15;

if (person_age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not Eligible to vote")
}

//Example 2
console.log("Example 2");
let num = 10;
if (num % 2 == 0) {
    console.log("Number is Even")
} else {
    console.log("Number is Odd")
}

//Example 3
console.log("Example 3");
let a = 10, b = 20, c = 30;
if (a > b && a > c) {
    console.log("a is largest");
} else if (b > a && b > c) {
    console.log("b is largest  number")
} else {
    console.log("c is largest");
}

//Example 4
let weekno = 1;
if (weekno == 1) {
    console.log("Sunday");
} else if (weekno == 2) {
    console.log("Monday")
} else if (weekno = 3) {
    console.log("Tuesday")
} else if (weekno = 4) {
    console.log("Wednesday")
} else if (weekno = 5) {
    console.log("Thursday")
} else if (weekno = 6) {
    console.log("Friday")
} else if (weekno == 7) {
    console.log("Saturday")
} else {
    console.log("Not Valid weekno")
}

//Example 5
let day = 10;
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("None found");
}