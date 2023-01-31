class Student {
    constructor() {
        let name, marks;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setMarks(marks) {
        this.marks = marks;
    }
    getMarks() {
        return this.marks;
    }
}

let stu=new Student();
stu.setName("Jeevan");
console.log(stu.getName());
stu.setMarks(100);
console.log(stu.getMarks());