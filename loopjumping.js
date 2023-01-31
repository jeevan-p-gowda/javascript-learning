//Printing 1.....10
console.log("Print 1 to 10")
let i = 1;
while (i <= 10) {
    console.log(i)
    i++;
}

//Print even numbers
console.log("Print even numbers")
let no = 2;
while (no <= 10) {
    console.log(no)
    no += 2;
}

//Print 10 to 1
let n = 10;
while (n > 0) {
    console.log(n)
    n -= 1;
}

//do while
console.log("do while loop")
let f = 1;
do {
    console.log(f)
    f++;
} while (f <= 10);

//for loop
console.log("For loop")
for (let j = 1; j <= 10; j++) {
    if (j % 2 != 0)
        console.log(j)
}

//Jumping statements - break and continue
console.log("Break")
for (let k = 1; k <= 10; k++) {
    if (k == 5)
        break;
    console.log(k);
}

console.log("continue")
for (let x = 1; x <= 10; x++) {
    if (x == 5)
        continue;
    console.log(x)
}