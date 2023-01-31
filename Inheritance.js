class A {
    a = 100;
    display() {
        console.log(this.a)
    }
}

class B extends A {
    b = 200;
    show() {
        console.log(this.b)
    }
    display() {
        console.log("Method overrided")
        super.display();
    }

}

bobJ = new B();
bobJ.display();
bobJ.show();