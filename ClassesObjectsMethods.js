class Student {

constructor(id,name,grade){
        this.id = id;
        this.name = name;
        this.grade = grade;
}

    /* setDetails(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    } */
    display() {
        console.log(this.id, this.name, this.grade)
    }
}

let stu = new Student(101, "John", "A");
let stu1 = new Student(102, "Smith", "B");
// stu.setDetails(101, "John", "A");
stu.display();
stu1.display();