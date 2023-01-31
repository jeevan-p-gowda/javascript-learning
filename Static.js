class Test {
    static a = 10;
    b = 20;
    static m1() {
        console.log("This is static method")
    }
    m2() {
        console.log("This is non-static method")
    }
}
console.log(Test.a)
Test.m1()

let test = new Test();
console.log(test.b);
test.m2();