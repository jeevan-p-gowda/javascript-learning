class Shape {
    draw() {
        return "I am generic shape"
    }
}
class Square extends Shape {
    draw() {
        return "I am square"
    }
}
class Circle extends Shape {
    draw() {
        return "I am circle"
    }
}

shape1=new Shape();
console.log(shape1.draw());

shape2=new Square();
console.log(shape2.draw());

shape3=new Circle();
console.log(shape3.draw());