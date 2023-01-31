let x = 10, y = 20;

//Arithmetic operators are + = / % * - **
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x % y);
console.log(x * y);
console.log(x ** 2);

//Assignemnt operators += -= *= /= %= **=
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);

//increment and decrement operators
console.log(x++);
console.log(x--);
console.log(y++);
console.log(y--);
console.log(--y);

//Relational/comparison operators
//always return a boolean value/false
//< > <= => !=
x = 10, y = 20;
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);

//ternary operator - also relational operator
// ?
console.log(x < y ? x : y); //return x value i.e 10
console.log(y > x ? y : x); //return y value i.e 20

//Logical operators
//&& || !
let a = true, b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);