// Prototype is an object which has been associated with function & object(available only in javascript)
// We can add property at the later stage of program

// function is like class only
function student() {
    this.name = "John";
    this.gender = "Male"
}

// we use prototype to initialize age in all student objects
student.prototype.age = 35;

stu1 = new student();
// stu1.age = 35; //this affects only in stu1 not stu 2
console.log(stu1.name, stu1.gender, stu1.age);

stu2 = new student();
console.log(stu2.name, stu2.gender, stu2.age);

// can add property to class also
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
Employee.prototype.sal = 10000;

// Can create function to the class
Employee.prototype.display = function () {
console.log(this.id,this.name,this.sal)
}

emp1 = new Employee(101, "David")
// console.log(emp1.id, emp1.name, emp1.sal);
emp1.display();

emp2 = new Employee(101, "David")
// console.log(emp2.id, emp2.name, emp2.sal);
emp2.display();