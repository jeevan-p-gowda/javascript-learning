// Strings
let s = "welcome"
// let s=new String();

// charAt()
console.log(s.charAt(2));

// concat()
console.log(s.concat("to javascript programming")); //welcome to javascript programming
console.log(s.concat("to javascript", "programming")); //welcome to javascript programming
console.log(s.concat("to javascript").concat("programming")); //welcome to javascript programming

// replace
s = "WELCOME to javascript"
console.log(s.replace("javascript", "java")) //welcome to java

// subString
console.log(s.substring(5))
console.log(s.substring(2,5))

// toLowerCase() & toUpperCase()
console.log(s.toLowerCase())
console.log(s.toUpperCase())

// split()
let arr=s.split(' ');
console.log(arr)

// trim
let x="   welcome    ";
console.log(x.trim())

// Numbers/Integers
// let nu=new Number(100);

let num1=101; //integer
let num2=102.3; //decimal
let num3=10e2; // exponential
console.log(num1,num2,num3)

//verify integer
console.log(Number.isInteger(num1))

//parseInt() - converts text into number
s="12345"
console.log(typeof(s))
console.log(typeof(parseInt(s)))
console.log(parseInt(s))

// toString
let num=12345
console.log(typeof(toString(num)))