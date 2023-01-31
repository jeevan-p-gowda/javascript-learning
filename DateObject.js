let d = new Date();

console.log(d) //date time all
console.log(d.getDate()) //1-31
console.log(d.getMonth()+1) //0-11
console.log(d.getFullYear()) //return the current year
console.log(d.getDate()+"-"+d.getMonth()+1+"-"+d.getFullYear());

console.log(d.getHours()) //0-23
console.log(d.getMinutes()) //0-59
console.log(d.getSeconds()) //0-59
console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()) //0-59