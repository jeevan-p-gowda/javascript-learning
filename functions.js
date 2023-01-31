//Example 1 
console.log("function by parameter")
function add(a, b) {
    console.log(a + b)
}

add(20, 10)

//Example 2 
console.log("function returns value")
function addReturn(a, b) {
    return (a + b)
}
let ret = addReturn(1, 2)
console.log(ret)

// Example 3
console.log("function without argument")
function withoutArg() {
    console.log("Hi hello how are you")
}
withoutArg()